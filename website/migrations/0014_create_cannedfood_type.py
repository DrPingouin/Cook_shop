# Generated by Django 3.0.6 on 2020-06-11 14:32
from django.db import migrations

from website.models import CannedFoodType


def create_cannedfood_type(apps, schema_editor):
    names = ['terrine', 'confit', 'confiture', 'crème', 'sauce']
    for n in names:
        CannedFoodType.objects.create(name=n)


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0013_superuser'),
    ]

    operations = [
        migrations.RunPython(create_cannedfood_type)
    ]