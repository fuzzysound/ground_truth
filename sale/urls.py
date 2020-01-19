from django.urls import path
from sale import views


urlpatterns = [
    path('', views.Mainpage.as_view(), name='mainpage'),
    path('/sale', views.Sale.as_view(), name='sale'),
]