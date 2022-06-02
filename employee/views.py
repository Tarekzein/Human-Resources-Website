from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import *
from .models import *
from HumanResources.decorators import *
from datetime import date
from django.http import JsonResponse
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
import json

# Create your views here.


@login_required(login_url="login")
def employees(request):

    employees = Employee.objects.all()
    context = {"employees": employees}
    return render(request, "employee/employees.html", context)


def checkFromDate(request):
    fromDate = request.GET.get("fromDate")
    currDate = date.today()
    x = str(fromDate).split("/")
    isValid = False
    fromDate = date(int(x[2]), int(x[1]), int(x[0]))

    if fromDate > currDate:
        isValid = True

    return JsonResponse({"isValid": isValid})


def checkToDate(request):
    toDate = request.GET.get("toDate")
    fromDate = request.GET.get("fromDate")
    currDate = date.today()
    x = str(toDate).split("/")
    y = str(fromDate).split("/")

    isValid = False
    toDate = date(int(x[2]), int(x[1]), int(x[0]))
    fromDate = date(int(y[2]), int(y[1]), int(y[0]))

    if toDate > currDate:
        if toDate > fromDate:
            isValid = True

    return JsonResponse({"isValid": isValid})


def checkEmployeeID(request):
    empID = request.GET.get("empID")
    isTaken = Employee.objects.filter(empID__iexact=empID).exists()

    return JsonResponse({"isTaken": isTaken})


@login_required(login_url="login")
def profile(request, name):

    employee = Employee.objects.get(name=name)
    context = {"emp": employee}
    return render(request, "employee/employeeProfile.html", context)


@login_required(login_url="login")
def addEmployee(request):
    form = EmployeeForm()
    context = {"form": form}
    if request.method == "POST":
        form = EmployeeForm(request.POST, request.FILES)
        print(request.POST)
        print(request.FILES)
        print(form.errors)
        if form.is_valid():
            form.save()
            print("Done")
            return redirect("addEmployee")

    return render(request, "employee/addemployee.html", context)


@login_required(login_url="login")
def updateEmployee(request, name):

    employee = Employee.objects.get(name=name)
    form = EmployeeForm(instance=employee)
    context = {
        "form": form,
        "emp": employee,
    }
    if request.method == "POST":
        form = EmployeeForm(request.POST, request.FILES, instance=employee)
        if form.is_valid():
            form.save()
            print("Done")
            return redirect("/human-resources/employee/profile/" + employee.name)
        else:
            print(form.errors)

    return render(request, "employee/UpdateProfile.html", context)


@login_required(login_url="login")
def deleteEmployee(request, name):

    Employee.objects.get(name=name).delete()
    return redirect("employees")


@login_required(login_url="login")
def vacationFormPage(request):
    form = VacationForm()
    employees = Employee.objects.all()
    context = {
        "form": form,
        "employees": employees,
    }

    if request.method == "POST":
        print(request.POST)
        form = VacationForm(request.POST)
        if form.is_valid():
            form.save()
            print("Done")
            return redirect("vacationForm")
        else:
            print(form.errors)

    return render(request, "employee/vacationform.html", context)


@login_required(login_url="login")
def vacationsPage(request):

    vacations = Vacation.objects.filter(status="submitted")
    context = {
        "vacations": vacations,
    }

    return render(request, "employee/VacationTable.html", context)


@login_required(login_url="login")
def vacationIntro(request):
    return render(request, "employee/vacationIntro.html")


@login_required(login_url="login")
def vacationApprove(request, pk):
    vac = Vacation.objects.get(id=pk)
    emp = vac.employee
    fromDate = vac.fromDate
    toDate = vac.toDate
    d1 = date(fromDate.year, fromDate.month, fromDate.day)
    d2 = date(toDate.year, toDate.month, toDate.day)
    days = (d2 - d1).days
    print(d1)
    print(d2)
    print(days)
    if days <= emp.availableVacation:
        emp.availableVacation -= days
        emp.approvedVacation += days
        vac.status = "approved"
        emp.save()
        vac.save()
        print("Approved")
        return redirect("vacations")
    else:
        vac.status = "rejected"
        vac.save()
        print("Rejected")
        return redirect("vacations")


@login_required(login_url="login")
def vacationReject(request, pk):
    vac = Vacation.objects.get(id=pk)
    vac.status = "rejected"
    vac.save()
    print("Rejected")
    return redirect("vacations")
