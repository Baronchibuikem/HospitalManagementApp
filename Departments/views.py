from .models import Doctors, Nurses, ICT, HumanResource,Technicians,ContractWorkers
from .serializers import (DoctorSerializer, NurseSerializer, HumanResourceSerializer, ContractWorkerSerializer, ICTSerializer,
TechnicianSerializer)
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated

# Views for listing all Doctors
class DoctorsViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in doctors model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = Doctors.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = DoctorSerializer

# Views for listing all Nurses
class NursesViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in Nurses model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = Nurses.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = NurseSerializer


# Views for listing all ICT personnel
class ICTViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in ICT model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = ICT.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = ICTSerializer


# Views for listing all Technicians
class TechniciansViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in Technicians model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = Technicians.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = TechnicianSerializer


# Views for listing all ContractWorkers 
class ContractWorkersViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in ContractWorkers model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = ContractWorkers.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = ContractWorkerSerializer


# Views for listing all ICT personnel
class HumanResourcesViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in HumanResource model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = HumanResource.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = HumanResourceSerializer