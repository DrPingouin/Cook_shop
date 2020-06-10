from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse

from website.models import CannedFood, Stock


def add_to_cart(request, id):
    if request.method != 'GET':
        return HttpResponseRedirect('/boutique')
    product_to_add = CannedFood.objects.get(pk=id)
    request.session['cart'] = request.session.get('cart', []) + [product_to_add.id]
    # request.session['item_added'] = product_to_add.name
    item_name = product_to_add.name

    return JsonResponse({'name': item_name})


def detail(request):
    data = {}
    if (product_ids := request.session.get('cart', [])):
        products = [c for c in CannedFood.objects.filter(id__in=product_ids)]
        data['products_in_cart'] = products

    return render(request, 'cart/details.html', data)
