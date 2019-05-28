from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Card(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique = True)
    service = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name = "Cardlist", on_delete= models.CASCADE, null = True)

