from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BudgetViewSet, ExpenseViewSet  

router = DefaultRouter()
router.register(r'budget', BudgetViewSet, basename='budget')
router.register(r'expense', ExpenseViewSet, basename='expense')

urlpatterns = [
    path('', include(router.urls)),  
]
