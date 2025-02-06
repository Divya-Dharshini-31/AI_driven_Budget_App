from django.urls import path
from .views import TransactionListCreate

urlpatterns = [
    path('transactions/', TransactionListCreate.as_view(), name='transaction-list'),
]
