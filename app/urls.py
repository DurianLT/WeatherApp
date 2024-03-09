from django.urls import path

urlpatterns = [

]

from django.urls import path
from .views import get_weather, get_coordinates_by_city

urlpatterns += [
    path('api/get_weather/', get_weather, name='get_weather'),
    path('api/get_coordinates_by_city/', get_coordinates_by_city, name='get_coordinates_by_city'),
]