# Generated by Django 3.1.2 on 2020-10-18 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Second', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=10, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]
