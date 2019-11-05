from .models import Patient
from .serializers import PatientSerializer
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated

# Views for listing all Patients


class PatientGetViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in patients model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = Patient.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PatientSerializer


class PostViewSet(viewsets.ModelViewSet):
    """
    Querying all the fields in patients model and ensuring that only those
    that are authenticated can make changes to this view 
    """
    queryset = Patient.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PatientSerializer
