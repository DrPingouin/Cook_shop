from django.shortcuts import render
from django.http import HttpResponse

from website.models import Type, CannedFood, Ingredient


def home(request):
    data = {'canned_food': CannedFood.objects.all()}
    return render(request, 'website/home.html', data)


def welcome(request):
    data = {}
    return render(request, 'website/welcome.html', data)


def types(request):
    data = {'types': Type.objects.all()}
    return render(request, 'website/types.html', data)


def ingredients(request):
    data = {'ingredients': Ingredient.objects.all()}
    return render(request, 'website/ingredients.html', data)
