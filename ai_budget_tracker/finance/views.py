from rest_framework import viewsets
from .models import Budget, Expense
from .serializers import BudgetSerializer, ExpenseSerializer
from rest_framework.permissions import AllowAny

class BudgetViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
class ExpenseViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['POST'])
def login_view(request):
    return JsonResponse({"message": "Login successful", "token": "dummy_token"})
