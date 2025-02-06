from django.db import models
from django.contrib.auth.models import User

# Transaction Model
class Transaction(models.Model):
    CATEGORY_CHOICES = [
        ('income', 'Income'),
        ('expense', 'Expense'),
        ('investment', 'Investment'),
        ('savings', 'Savings'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    category = models.CharField(max_length=15, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.category} - ${self.amount}"

# Budget Model (User Budget Goals)
class Budget(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=15, choices=Transaction.CATEGORY_CHOICES)
    limit_amount = models.DecimalField(max_digits=12, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"{self.user.username} - {self.category} Budget"

# AI Insights Model (Stores AI Recommendations)
class AIInsight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    prediction = models.TextField()  # AI-generated expense prediction
    anomaly_detected = models.BooleanField(default=False)  # Flag for unusual spending
    suggestion = models.TextField()  # AI recommendation
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"AI Insight for {self.user.username}"
