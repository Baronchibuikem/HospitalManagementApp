from rest_framework import serializers
from .models import Doctors, Nurses, ICT, HumanResource, Technicians, ContractWorkers


class DoctorSerializer(serializers.ModelSerializer):
    # Formating our date field to return only the Year field
    joined = serializers.DateTimeField(format="%Y", read_only=True)

    class Meta:
        model = Doctors
        fields = "__all__"


class NurseSerializer(serializers.ModelSerializer):
    # Formating our date field to return only the Year field
    joined = serializers.DateTimeField(format="%Y", read_only=True)
    class Meta:
        model = Nurses
        fields = "__all__"


class HumanResourceSerializer(serializers.ModelSerializer):
    # Formating our date field to return only the Year field
    joined = serializers.DateTimeField(format="%Y", read_only=True)
    class Meta:
        model = HumanResource
        fields = "__all__"


class ICTSerializer(serializers.ModelSerializer):
    # Formating our date field to return only the Year field
    joined = serializers.DateTimeField(format="%Y", read_only=True)
    class Meta:
        model = ICT
        fields = "__all__"


class TechnicianSerializer(serializers.ModelSerializer):
    # Formating our date field to return only the Year field
    joined = serializers.DateTimeField(format="%Y", read_only=True)
    class Meta:
        model = Technicians
        fields = "__all__"


class ContractWorkerSerializer(serializers.ModelSerializer):
    # Formating our date field to return only the Year field
    joined = serializers.DateTimeField(format="%Y", read_only=True)
    class Meta:
        model = ContractWorkers
        fields = "__all__"
