from rest_framework import routers
from .views import DoctorsViewSet, NursesViewSet, ICTViewSet, HumanResourcesViewSet, TechniciansViewSet, ContractWorkersViewSet


router = routers.DefaultRouter()
router.register('doctors', DoctorsViewSet, 'Doctors'),
router.register('nurses', NursesViewSet, 'Nurses'),
router.register('ict', ICTViewSet, 'ICT'),
router.register('humanresource', HumanResourcesViewSet, 'HumanResource'),
router.register('technicians', TechniciansViewSet, 'Technicians'),
router.register('contractworkers', ContractWorkersViewSet, 'ContractWorkers'),

urlpatterns = router.urls
