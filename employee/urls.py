from django.urls import path
from . import views

urlpatterns = [
    # employee urls
    path("", views.employees, name="employees"),
    path("profile/<str:name>", views.profile, name="profile"),
    path("add-employee/", views.addEmployee, name="addEmployee"),
    path("update-profile/<str:name>", views.updateEmployee, name="updateEmployee"),
    path("delete-employee/<str:name>", views.deleteEmployee, name="deleteEmployee"),
    path("checkEmployeeID/", views.checkEmployeeID, name="checkEmployeeID"),
    # vacations url
    path("vacation-intro/", views.vacationIntro, name="vacationIntro"),
    path("vacations/", views.vacationsPage, name="vacations"),
    path("vacation-form/", views.vacationFormPage, name="vacationForm"),
    path("vacation-form/checkFromDate", views.checkFromDate, name="checkFromDate"),
    path("vacation-form/checkToDate", views.checkToDate, name="checkToDate"),
    path("approve-vacation/<str:pk>", views.vacationApprove, name="vacationApprove"),
    path("reject-vacation/<str:pk>", views.vacationReject, name="vacationReject"),
]
