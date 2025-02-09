from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("finance.urls")),  # Ensure the finance URLs are included
]
