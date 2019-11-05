from django.db import models


# Abstract models
# An abstract model is a base class in which you define fields you want to include in all child models. Django doesn't create any database table for abstract models. A
# database table is created for each child model, including the fields inherited from the abstract class and the ones defined in the child model.
# To mark a model as abstract, you need to include abstract=True in its Meta class. Django will recognize that it is an abstract model and will not create a database
# table for it. To create child models, you just need to subclass the abstract model.


# This is our base class
class BaseContent(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = models.PositiveIntegerField()
    emergency_contact = models.PositiveIntegerField()
    position = models.CharField(max_length=100)
    joined = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract = True

# All other cases since the have similar fields inherits from BaseContent class
class Doctors(BaseContent):
    specialty = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name
    

class Nurses(BaseContent):

    def __str__(self):
        return self.first_name

        
class HumanResource(BaseContent):

    def __str__(self):
        return self.first_name



class Technicians(BaseContent):

    def __str__(self):
        return self.first_name



class ICT(BaseContent):

    def __str__(self):
        return self.first_name



class ContractWorkers(BaseContent):

    def __str__(self):
        return self.first_name