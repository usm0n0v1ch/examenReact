from django.db import models

# Create your models here.



class Pizza(models.Model):
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()
    quantity = models.IntegerField(default=1)
