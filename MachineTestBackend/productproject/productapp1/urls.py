from django.urls import path
from . import views


urlpatterns=[
    path("login1/",views.logindetails,name='customer-list'),
    path("registration/",views.cus_registration,name="pro-list"),  
    path("category/",views.categoryinsert,name="pro-list"),
    path("categoryview/",views.categoryview,name="pro-list"),
    path("subcategory/",views.subcategoryinsert,name="pro-list"),
    path("subcateview/",views.subcategoryview,name="pro-list"),
    path("subcateviewbyid/<int:id>/",views.subcategoryviewbyid,name="pro-list"),


    path("productinsert/",views.productinsert,name="pro-list"),
    path("productview/",views.productview,name="pro-list"),
    path("productviewbyid/<int:id>/",views.productviewbyid,name="pro-list"),

    path("productviewget/<int:id>/",views.productviewget,name="pro-list"),
    path("productedit/<int:id>/",views.productedit,name="pro-list"),

    path("search/<str:name>/",views.search,name="pro-list"),

    path("wishlist/<int:cid>/<int:pid>/",views.wishlist,name="pro-list"),
    path("wishlistget/",views.wishlistget,name="pro-list"),


    
]