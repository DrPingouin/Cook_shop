from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db.models import Q

from website.models import Type, CannedFood, Ingredient


def shop(request):
    if request.method == 'POST':
        search = request.POST['canned_search']
        result = CannedFood.objects.filter(
                    Q(ingredients__name__contains=search) | Q(name__contains=search)
                ).distinct().values_list('id', flat=True)
        return JsonResponse(list(result), safe=False)
    else:
        data = {'canned_food': CannedFood.objects.all()}
        return render(request, 'website/shop.html', data)


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


def presentation(request):
    data = {}
    return render(request, 'website/presentation.html', data)
