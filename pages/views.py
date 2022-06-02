from django.shortcuts import render
from django.contrib.auth.models import User
from employee.models import Employee
from django.http import JsonResponse
from django.core import serializers

# Create your views here.

def intro(request):

    return render(request,"pages/intro.html")


def home(request):
    empOfMonth=Employee.objects.get(name="Beshoy Ashraf")

    return render(request,"pages/index.html")


def homeAjax(request):
    empOfMonth=Employee.objects.get(name="Beshoy Ashraf")

    ser_employee=serializers.serialize("json",[empOfMonth,])

    return JsonResponse({"employee":ser_employee})


def userProfile(request):
    
    return render(request,"pages/userProfile.html")