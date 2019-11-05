from rest_framework import routers
from .views import ExpenseViewSet, StaffViewSet, DepartmentViewSet, PayrollViewSet, MessageViewSet


router = routers.DefaultRouter()
router.register('staff', StaffViewSet, 'Staff'),
router.register('department', DepartmentViewSet, 'Department'),
router.register('expense', ExpenseViewSet, 'Expense'),
router.register('payroll', PayrollViewSet, 'Payroll'),
router.register('message', MessageViewSet, 'Message'),

urlpatterns = router.urls
