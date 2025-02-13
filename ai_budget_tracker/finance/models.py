from django.db import models
from django.conf import settings  # Use this for custom user models
from decimal import Decimal
from django.contrib.auth.models import User
class Budget(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)  # Added name field
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default="0.00")  # Fixed default
    created_at = models.DateTimeField(auto_now_add=True)  # Ensures auto timestamp
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.total_amount}"

class Expense(models.Model):
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE, related_name='expenses')
    name = models.CharField(max_length=255)  # Added name field
    amount = models.DecimalField(max_digits=10, decimal_places=2, default="0.00")  # Fixed default
    category = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return f"{self.name} - {self.amount}"

class Income(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    source = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.source} - {self.amount}"