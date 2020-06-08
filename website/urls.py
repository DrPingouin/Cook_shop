from django.urls import path
from . import views

urlpatterns = [
    path('', views.shop, name='shop'),
    path('types', views.types, name='types'),
    path('ingredients', views.ingredients, name='ingredients'),
    path('detail/<int:id>', views.product_detail, name='detail'),
]
