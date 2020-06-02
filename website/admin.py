from django.contrib import admin
from website.models import CannedFood, Ingredient, Type

admin.site.register(CannedFood)
admin.site.register(Ingredient)
admin.site.register(Type)
