from django.contrib import admin
from .models import Address, Cart, Orders, Products, Users

admin.site.register(Address)
admin.site.register(Users)
admin.site.register(Products)
admin.site.register(Cart)
admin.site.register(Orders)


