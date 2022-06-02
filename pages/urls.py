from django.urls import  path
from . import views

urlpatterns = [

    path('', views.intro,name="intro"),
    path('human-resources/', views.home,name="home"),
    path('human-resources/Ajax/', views.homeAjax,name="homeAjax"),
    path('human-resources/profile/', views.userProfile,name="userProfile"),

]   
