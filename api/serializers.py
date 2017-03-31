from rest_framework import serializers

from item.models import Item, Tag


class TagSerializer(serializers.ModelSerializer):
   class Meta:
       model = Tag
       fields = '__all__'

class ItemsListSerializer(serializers.ModelSerializer):
   tags = TagSerializer(many=True)
   class Meta:
       model = Item
       fields = '__all__'
