from django.db import models

# Create your models here.

class Post(models.Model):
    rut = models.CharField(max_length=15)
    nombre = models.CharField(max_length=50)
    apellidop = models.CharField(max_length=50)
    apellidom =  models.CharField(max_length=50)
    direccion = models.CharField(max_length=50)
    comuna = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
