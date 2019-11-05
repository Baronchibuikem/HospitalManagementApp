from django.contrib import admin
from .models import Expense, Department, Staff, Payroll, Message


class StaffAdmin(admin.ModelAdmin):
    list_display = ['First_name', 'Last_name', 'Phone_number', 'Position',
                    'Salary', 'Department', 'Number_of_queries']
    list_filter = ['First_name', 'Last_name', 'Phone_number', 'Position']
    search_fields = ['First_name', 'Last_name', 'Phone_number']
    list_per_page = 50


admin.site.register(Staff, StaffAdmin)


class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['Name', 'Staff_strength', 'Head_of_department', 'Income_generated',
                    'Expenses', 'Duration']
    list_filter = ['Name']
    search_fields = ['Name', 'Function']
    list_per_page = 50


admin.site.register(Department, DepartmentAdmin)


class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['Department', 'Request_by', 'Position', 'Amount', 'Approved',
                    'Approved_by', 'Date', "Reason"]
    list_filter = ['Department', 'Approved', 'Approved_by']
    search_fields = ['Department', 'Reason']
    list_per_page = 50


admin.site.register(Expense, ExpenseAdmin)


class PayrollAdmin(admin.ModelAdmin):
    list_display = ['Name', 'Department', 'Salary', 'Position']
    list_filter = ['Name', 'Department', 'Position']
    search_fields = ['Name', 'Department']


admin.site.register(Payroll, PayrollAdmin)




class MessageAdmin(admin.ModelAdmin):
    list_display = ['Name', 'Email', 'Phone_number', 'Address']
    search_fields = ['Name', 'Message',]
admin.site.register(Message, MessageAdmin)