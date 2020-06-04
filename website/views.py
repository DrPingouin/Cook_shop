from django.shortcuts import render
from django.http import HttpResponse
from django.db.models import Q

from website.models import Type, CannedFood, Ingredient

def welcome(request):
    if request.method == 'POST':
        x = request.POST['canned_search']
        data = {'canned_food': CannedFood.objects.filter(Q(ingredients__name__contains=x) | Q(name__contains=x)).distinct()}
    else:
        data = {'canned_food': CannedFood.objects.all()}
    return render(request, 'website/welcome.html', data)

def types(request):
    data = {'types': Type.objects.all()}
    return render(request, 'website/types.html', data)

def ingredients(request):
    if request.method == 'POST':
        x = request.POST['search']
        data = {'ingredients': Ingredient.objects.filter(Q(type__name=x) | Q(name=x))}
    else:
        data = {'ingredients': Ingredient.objects.all()}
    return render(request, 'website/ingredients.html', data)

