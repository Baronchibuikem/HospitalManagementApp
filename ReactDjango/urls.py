from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("accounts.urls")),
    path("departments/", include("Departments.urls")),
    path("patients/", include("Patients.urls")),
    path("dashboard/", include("Dashboard.urls"))
]

if settings.DEBUG is True:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path('.*',
                        TemplateView.as_view(template_name="index.html")), ]
