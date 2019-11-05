from django.contrib import admin
from .models import Doctors, Nurses, ICT, HumanResource,Technicians,ContractWorkers
from django.contrib.admin import AdminSite
from django.utils.translation import gettext as _, gettext_lazy



class DoctorsAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'position', 'joined', 'email',
                    'phone_number', 'specialty']
    list_filter = ['first_name', 'last_name', 'phone_number']
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_per_page = 50

admin.site.register(Doctors, DoctorsAdmin)

class NursesAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'position', 'joined', 'email',
                    'phone_number']
    list_filter = ['first_name', 'last_name', 'phone_number']
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_per_page = 50
admin.site.register(Nurses, NursesAdmin)

class ICTAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'position', 'joined', 'email',
                    'phone_number']
    list_filter = ['first_name', 'last_name', 'phone_number']
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_per_page = 50
admin.site.register(ICT, ICTAdmin)

class HumanResourceAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'position', 'joined', 'email',
                    'phone_number']
    list_filter = ['first_name', 'last_name', 'phone_number']
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_per_page = 50
admin.site.register(HumanResource, HumanResourceAdmin)


class TechniciansAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'position', 'joined', 'email',
                    'phone_number', ]
    list_filter = ['first_name', 'last_name', 'phone_number']
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_per_page = 50
admin.site.register(Technicians, TechniciansAdmin)


class ContractWorkersAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'position', 'joined', 'email',
                    'phone_number']
    list_filter = ['first_name', 'last_name', 'phone_number']
    search_fields = ['first_name', 'last_name', 'phone_number']
    list_per_page = 50
admin.site.register(ContractWorkers, ContractWorkersAdmin)



# Disable the 'delete_selected' action
admin.site.disable_action('delete_selected')

AdminSite.site_title = gettext_lazy('Purity hospital')

# Text to put in each page's <h1>.
AdminSite.site_header = gettext_lazy('Purity hospital Administration')

# Text to put at the top of the admin index page.
AdminSite.index_title = gettext_lazy('Putity hospital Administration')