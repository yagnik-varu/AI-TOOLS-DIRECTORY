
from django.contrib import admin
from django.urls import path
from api import views as views_api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/",views_api.authentication),
    path("migrate/",views_api.migrations),
    path("data/",views_api.data),
    path("favourite/",views_api.favourite)
]
