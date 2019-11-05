from rest_framework import serializers
from .models import Department, Expense, Staff, Payroll,  Message

# user Serializer


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


# register Serializer
class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"


# Login Serializer
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        models = Expense
        fields = "__all__"


class PayrollSerializer(serializers.ModelSerializer):
    class Meta:
        models = Payroll
        fields = "__all__"

