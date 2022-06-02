from django.db import models
from django.conf import settings

# Create your models here.


class Employee(models.Model):

    maritalChoices = [
        ("Single", "Single"),
        ("Married", "Married"),
        ("Divorced", "Divorced"),
        ("Widowed", "Widowed"),
        ("Separated", "Separated"),
    ]

    genderChoices = [
        ("M", "Male"),
        ("F", "Female"),
    ]

    name = models.CharField(max_length=20, null=True)
    empID = models.CharField(max_length=5, null=True)
    empEmail = models.EmailField(max_length=30, null=True)
    profilePicture = models.ImageField(
        upload_to="uploads",
        default="profile/pngegg.png",
        blank=True,
        null=True,
    )
    address = models.CharField(max_length=30, null=True)
    phoneNum = models.CharField(max_length=15, null=True)
    gender = models.CharField(max_length=10, null=True)
    maritalStatus = models.CharField(max_length=10, null=True, choices=maritalChoices)
    availableVacation = models.IntegerField(null=True)
    approvedVacation = models.IntegerField(null=True)
    salaryVacation = models.IntegerField(null=True)
    birthDate = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.empID}"


class Vacation(models.Model):

    statusChoices = [
        ("submitted", "submitted"),
        ("approved", "approved"),
        ("rejected", "rejected"),
    ]

    fromDate = models.DateField(blank=True, null=True)
    toDate = models.DateField(blank=True, null=True)
    reason = models.CharField(max_length=250, null=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    status = models.CharField(max_length=15, null=True, default="submitted")

    def __str__(self):
        return f"Vacation Of {self.employee.name}"
