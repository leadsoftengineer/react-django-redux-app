#KYIV MEDIA 25.11.2019
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('', include('leads.urls')),
]
