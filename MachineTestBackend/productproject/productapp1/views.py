from django.shortcuts import render
import json
from django.db.models import Sum,Count
from django.views.decorators.csrf import csrf_exempt
from .models import login,customer,Category,SubCategory,Product,Wishlist
from django.http import JsonResponse


# Create your views here.



# insert data into login table
@csrf_exempt
def logindetails(request):
    username=request.GET.get('username')
    password=request.GET.get('password')
    print(username)
    print(password)
    
    data1=login.objects.filter(username=username,password=password)
    print(username,password)
    items_list=[]

    for item in data1:
        item_dict={
            "username":item.username,
            "password":item.password,
            "category":item.category,
        }
        if item.category=="customer":
            try:
                customer1=customer.objects.get(username=item.username)
                item_dict["cusid"]=customer1.id
            except customer.DoesNotExist:
                item_dict["cusid"]=None
        items_list.append(item_dict)
        print(items_list)
    return JsonResponse(items_list,safe=False)



# insert data into customer table
@csrf_exempt
def cus_registration(request):
    data = json.loads(request.body)
    ps=data.get('password')
    data1=customer.objects.filter(password=ps).count()
    if data1 >0:
        return JsonResponse({'message':'error'})
    else:

        cus_name=data.get('cus_name')
        cus_phone=data.get('cus_phone')
        cus_email=data.get('cus_email')
        cus_address=data.get('cus_address')
        username=data.get('username')
        password=data.get('password')

        item=customer.objects.create(cus_name=cus_name,
                                 cus_phone=cus_phone,
                                 cus_email=cus_email,
                                 cus_address=cus_address,
                                 username=username,
                                 password=password)
        
        item1=login.objects.create(username=username,
                                 password=password,
                                 category="customer")
    
        return JsonResponse({'message':'item is created'})

# insert data into customer table
@csrf_exempt
def categoryinsert(request):
    data = json.loads(request.body)
    name=data.get('name')

    item=Category.objects.create(name=name)

    return JsonResponse({'message':'item is created'})



# to view data in category table
@csrf_exempt
def categoryview(request):
    data=Category.objects.all()

    item_list=[{"id":item.id,"name":item.name}for item in data]
    
    return JsonResponse(item_list,safe=False)


# insert data into subcategory table
@csrf_exempt
def subcategoryinsert(request):
    data = json.loads(request.body)
    name=data.get('name')
    category_id=data.get('category_id')

    item=SubCategory.objects.create(name=name,
                                    category_id_id=category_id)
    
    return JsonResponse({'message':'item is created'})

# to view data in subcategory table
@csrf_exempt
def subcategoryview(request):
    data=SubCategory.objects.all()

    item_list=[{"id":item.id,"name":item.name,"category_id":item.category_id.name}for item in data ]
    return JsonResponse(item_list,safe=False)


# to view data from subcategory using an id
@csrf_exempt
def subcategoryviewbyid(request,id):
    data1=SubCategory.objects.filter(category_id=id)
    

    item= [{"id":item.id,"name":item.name,"category_id":item.category_id.name }for item in data1]

    return JsonResponse({"subcategory":item})



# product table insertion
@csrf_exempt
def productinsert(request):
    # data = json.loads(request.body)
    name=request.POST.get('name')
    description=request.POST.get('description')
    subcategory_id=int(request.POST.get('subcategory_id'))
    image=request.FILES.get('image')
    ram=request.POST.get('ram')
    price=request.POST.get('price')
    quantity=request.POST.get('quantity')

    item=Product.objects.create(name=name,
                                description=description,
                                subcategory_id_id=subcategory_id,
                                image=image,
                                ram=ram,
                                price=price,
                                quantity=quantity)
    
    return JsonResponse({'message':'item is created'})

# get data from product table
@csrf_exempt
def productview(request):
    data=Product.objects.all()

    item_list=[{"id":item.id,"name":item.name,"description":item.description,"subcategory_id":item.subcategory_id.id,
                "ram":item.ram,"price":item.price,"quantity":item.quantity}for item in data]
    
    return JsonResponse(item_list,safe=False)




# to view data from product using an id
@csrf_exempt
def productviewbyid(request,id):
    data1=Product.objects.filter(subcategory_id=id)

    item= [{"id":item.id,"name":item.name,"description":item.description,"subcategory_id":item.subcategory_id.name,
                "ram":item.ram,"price":item.price,"quantity":item.quantity,"image":item.image.url if item.image else None}for item in data1]
    
    return JsonResponse(item,safe=False)


# product data get with an id
@csrf_exempt
def productviewget(request,id):
    data1=Product.objects.get(id=id)

    return JsonResponse({"id":data1.id,"name":data1.name,"description":data1.description,"subcategory_id":data1.subcategory_id.id,
                "ram":data1.ram,"price":data1.price,"quantity":data1.quantity},safe=False)

# edit/update product table data
@csrf_exempt
def productedit(request,id):
    data2=Product.objects.get(id=id)

    data = json.loads(request.body.decode('utf-8'))

    data2.id=data.get('id',data2.id)
    data2.name=data.get('name',data2.name)
    data2.description=data.get('description',data2.description)
    data2.subcategory_id_id=data.get('subcategory_id',data2.subcategory_id_id)
    data2.ram=data.get('ram',data2.ram)
    data2.price=data.get('price',data2.price)
    data2.quantity=data.get('quantity',data2.quantity)

    data2.save()

    return JsonResponse({"id":data2.id,"name":data2.name,"description":data2.description,"subcategory_id_id":data2.subcategory_id_id,
                "ram":data2.ram,"price":data2.price,"quantity":data2.quantity})





# to search a product with a name
@csrf_exempt
def search(request,name):
    data1=Product.objects.filter(name=name)

    item= [{"id":item.id,"name":item.name,"description":item.description,"subcategory_id":item.subcategory_id.name,
                "ram":item.ram,"price":item.price,"quantity":item.quantity,"image":item.image.url if item.image else None}for item in data1]
    return JsonResponse(item,safe=False)


# to add product id and customer id to whishlist
@csrf_exempt
def wishlist(request,cid,pid):
    data2=Product.objects.get(id=pid)
    data3=customer.objects.get(id=cid)

    # print(type(data3.id),'aaaaaaaaaaaaaaaaaaaaaaaa')
    
    item=Wishlist.objects.create(customer_id=data3.id,
                                 product_id=data2.id)
    

    return JsonResponse({"message":"Order created successfully"})

# get data from whishlist table
@csrf_exempt
def wishlistget(request):
    data=Wishlist.objects.all()

    item=[{"id":item.id,"name":item.product.name,"description":item.product.description,"subcategory_id":item.product.subcategory_id.name,
                "ram":item.product.ram,"price":item.product.price,"quantity":item.product.quantity,"image":item.product.image.url if item.product.image else None}for item in data]
    return JsonResponse(item,safe=False)


