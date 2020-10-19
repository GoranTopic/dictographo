from rest_framework import serializers, fields
from .models import Word, Definition, Example, Synonym_Relation 


class Synonym_RelationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Synonym_Relation
        fields = ('synonym',)

class DefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Definition
        fields = ('syntax', 'definition',)

class ExampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Example
        fields = ('example',)

class WordSerializer(serializers.ModelSerializer):
    examples = ExampleSerializer(read_only=True, many=True) 
    definitions = DefinitionSerializer(read_only=True, many=True) 
    synonyms = Synonym_RelationSerializer(read_only=True, many=True) 
    class Meta:
        model = Word
        fields = ( 'w_id', 'word', 'etymology', 'notes', 'examples', 'definitions', 'synonyms')

