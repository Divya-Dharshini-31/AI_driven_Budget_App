from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BudgetViewSet, ExpenseViewSet  # Ensure views exist

# Register ViewSets with the router
router = DefaultRouter()
router.register(r'budget', BudgetViewSet, basename='budget')
router.register(r'expense', ExpenseViewSet, basename='expense')

urlpatterns = [
    path('', include(router.urls)),  # This registers /api/budget/ and /api/expense/
]
