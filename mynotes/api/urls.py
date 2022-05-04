from unicodedata import name
from django.urls import path 
from . import views

# endpoints configuration
# this file imports the specified rest api calls from the views file
# and assigns them a page, or path, on our local host

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    path('notes/<str:pk>', views.getNote, name="note"),
    path('notes/<str:pk>/update', views.updateNote, name="update-note"),
]