from django.urls import path 
from . import views

# endpoints configuration

urlpatterns = [
    path('', views.getRoutes, name="routes")
]