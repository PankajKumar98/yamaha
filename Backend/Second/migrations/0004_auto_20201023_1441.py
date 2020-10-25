# Generated by Django 3.1.2 on 2020-10-23 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Second', '0003_bikeform'),
    ]

    operations = [
        migrations.AddField(
            model_name='bikeform',
            name='Bike_color',
            field=models.CharField(default='null', max_length=20),
        ),
        migrations.AddField(
            model_name='bikeform',
            name='Bike_model',
            field=models.CharField(default='null', max_length=20),
        ),
        migrations.AddField(
            model_name='bikeform',
            name='cust_address',
            field=models.TextField(default='null', max_length=300),
        ),
        migrations.AddField(
            model_name='bikeform',
            name='cust_mail',
            field=models.EmailField(default='null', max_length=254),
        ),
        migrations.AlterField(
            model_name='bikeform',
            name='Bike_name',
            field=models.CharField(default='null', max_length=40),
        ),
    ]