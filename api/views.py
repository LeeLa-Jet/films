from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import ItemsListSerializer
from item.models import Item

# Create your views here.
@api_view(['GET', ])
def get_index_list(request, format=None):
    items = Item.objects.order_by('-year')
    serializer = ItemsListSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET', ])
def get_item(request, item_id, format=None):
    item = Item.objects.get(pk=item_id)
    serializer = ItemsListSerializer(item)
    return Response(serializer.data)
