# Generated by Django 3.2.7 on 2021-11-30 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lista', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lista',
            name='url',
            field=models.TextField(default=''),
        ),
    ]