from django.contrib import admin
from .models import Patient


class PatientAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email',
                    'phone_number', 'next_of_kin', 'address',)


admin.site.register(Patient, PatientAdmin)
