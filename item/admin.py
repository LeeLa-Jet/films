from django.contrib import admin

from .models import *

class ItemAdmin(admin.ModelAdmin):
    filter_horizontal = ('tags',)

admin.site.register(Item, ItemAdmin)
admin.site.register(Category)
admin.site.register(Tag)
