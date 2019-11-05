from django.db import models

class Patient(models.Model):
    first_name = models.CharField(max_length=100, blank=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    address = models.CharField(max_length=250,  blank=False, null=False)
    email = models.EmailField( blank=True, null=True)
    phone_number = models.PositiveIntegerField( blank=False, null=False)
    next_of_kin = models.CharField(max_length=100,  blank=False, null=False)
    phone_number_next_of_kin = models.PositiveIntegerField( blank=False, null=False)
    message = models.TextField( blank=False, null=False)

    def __str__(self):
        return self.first_name
