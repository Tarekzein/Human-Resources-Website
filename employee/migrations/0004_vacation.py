# Generated by Django 4.0.4 on 2022-05-21 10:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0003_alter_employee_birthdate_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vacation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fromDate', models.DateField(blank=True, null=True)),
                ('toDate', models.DateField(blank=True, null=True)),
                ('reason', models.CharField(max_length=250, null=True)),
                ('employee', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='employee.employee')),
            ],
        ),
    ]
