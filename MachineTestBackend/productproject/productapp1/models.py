from django.db import models

# Create your models here.


class login(models.Model):
    id=models.AutoField(primary_key=True)
    username=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    category=models.CharField(max_length=100,default='unknown')


class customer(models.Model):
    id=models.AutoField(primary_key=True)
    cus_name=models.CharField(max_length=100)
    cus_phone=models.CharField(max_length=15)
    cus_email=models.CharField(max_length=50)
    cus_address=models.CharField(max_length=100)
    username=models.CharField(max_length=100)
    password=models.CharField(max_length=100)



class Category(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)


class SubCategory(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)


class Product(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    subcategory_id = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    ram = models.CharField(max_length=50,default='unknown')
    price = models.IntegerField(null=True,blank=True)
    quantity = models.IntegerField(null=True,blank=True)


class Wishlist(models.Model):
    id=models.AutoField(primary_key=True)
    customer = models.ForeignKey(customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)







    