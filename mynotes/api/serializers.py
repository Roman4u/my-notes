from rest_framework.serializers import ModelSerializer
from .models import Note

#this 'serializes' all of the properites/attributes on our db Note model
#rather, it allow us to 'serialize' the data objects we want returned from the db
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
