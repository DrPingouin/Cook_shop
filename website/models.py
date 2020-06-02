from django.db import models

class Type(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class CannedFood(models.Model):
    name = models.CharField(max_length=20)
    price = models.IntegerField(default=1)
    note = models.TextField(max_length=1000)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    """
    We do not want to delete the Type object when an ingredient disappears
    However, we might want to delete the CannedFood associated with it
    """
    name = models.CharField(max_length=20)
    type = models.ForeignKey(Type, blank=True, null=True, on_delete=models.PROTECT)
    canned_food = models.ForeignKey(CannedFood, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
