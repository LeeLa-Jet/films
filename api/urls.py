from django.conf.urls import url
import api.views

urlpatterns = [
    url(r'^get_index_list/$', api.views.get_index_list, name='films'),
]
