from django import forms
from django.conf import settings

from .models import *


class EmployeeForm(forms.ModelForm):
    birthDate = forms.DateField(input_formats= settings.DATE_INPUT_FORMATS)

    class Meta:
        model = Employee
        fields = "__all__"



class VacationForm(forms.ModelForm):

    class Meta:
        model = Vacation
        fields = "__all__"