from django.shortcuts import render,redirect
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User
from django.http import JsonResponse
from .forms import *

# Create your views here.
def loginPage(request):
    
    if request.user.is_authenticated==False:
        
        if request.method == "POST":
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("home")
            
        return render(request,"authentication/login.html")
    
    else:
        return redirect("home")


def registerPage(request):
    if request.user.is_authenticated==False:

        form=CreateNewUser()
        context={"form":form}
        if request.method=="POST":
            form=CreateNewUser(request.POST)
            print(form.errors)
            if form.is_valid():
                form.save()
                return redirect("login")
            else:
                print("error")
        
        return render(request,"authentication/register.html",context)
    else:
        return redirect("home")


def logoutPage(request):
    logout(request)
    return redirect("login")


def checkLoginUsername(request):
    username=request.GET.get("username")

    exist=User.objects.filter(username__iexact=username).exists()

    return JsonResponse({"exists":exist})


def checkRegisterUsername(request):
    name=request.GET.get("name")

    taken=User.objects.filter(username__iexact=name).exists()

    return JsonResponse({"exists":taken})
