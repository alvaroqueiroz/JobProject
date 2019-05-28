from rest_framework import serializers
from CardsApp.models import Card

# Serializes data to use as json
class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'
