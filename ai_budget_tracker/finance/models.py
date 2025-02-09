from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from decimal import Decimal

class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal('0.00'))
    created_at = models.DateTimeField(default=now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.name} - {self.total_amount}"

class Expense(models.Model):
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE, related_name='expenses')
    name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return f"{self.name} - {self.amount}"
