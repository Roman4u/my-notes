from unicodedata import name
from django.urls import path 
from . import views

# endpoints configuration

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="routes"),
]