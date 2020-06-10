from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db.models import Q

from website.models import IngredientType, CannedFood, Ingredient


def shop(request):
    if request.method == 'POST':
        search = request.POST['canned_search']
        result = CannedFood.objects.filter(
                    Q(ingredients__name__contains=search) | Q(name__contains=search)
                ).distinct().values_list('id', flat=True)
        return JsonResponse(list(result), safe=False)
    else:
        # if item_added := request.session.get('item_added', False):
        #     del request.session['item_added']
        item_added = 'poulet au fraise'
        data = {
            'canned_foods': CannedFood.objects.all(),
            'item_added': item_added
        }
        # del request.session['cart']

        return render(request, 'website/shop.html', data)


def ingredients(request):
    if request.method == 'POST':
        x = request.POST['search']
        data = {'ingredients': Ingredient.objects.filter(Q(type__name=x) | Q(name=x))}
    else:
        data = {'ingredients': Ingredient.objects.all()}
    return render(request, 'website/ingredients.html', data)


def presentation(request):
    """
    To move to another app relativ to the blog part
    """
    data = {}
    return render(request, 'website/presentation.html', data)


def product_detail(request, id):
    data = {'canned_food': CannedFood.objects.get(pk=id)}
    return render(request, 'website/product_detail.html', data)
