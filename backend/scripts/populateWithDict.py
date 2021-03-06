#!/usr/bin/env python3.8
"""
==============
Populate Django SQL data base with a dictionary json file
==============

"""
import json 
import sys
import html
from api.models import Word, Example, Definition, Synonym_Relation

dict_location = "/home/telix/dictographo/scrapers/dictionary_scraper/dictionary.json"

try:
    dict_file = open(dict_location, "r")
except:
    print("Could not open dict file")
    exit()

print("found dict file")

# load dic file from json format
dictionary = json.load(dict_file)


print("Loaded: reading file")

word_objs = []
defs_objs = []
exam_objs = []
syno_objs = []

for entry in dictionary:
    print(f"getting word: {entry['word']}")
    # make the word objec
    word_obj = Word(w_id=entry['link_id'].lower(), word=entry['word'].lower(), url=entry['url'], etymology=entry['etymology'], notes=entry['notes'])
    # make the definition objects
    definitions = entry['definitions']
    if isinstance(definitions, list): 
        for definition in definitions:
            defs_objs.append(Definition(word=word_obj, definition=definition, syntax=None))
    else:
        for key in definitions.keys(): 
            for definition in definitions[key]:
                defs_objs.append(Definition(word=word_obj, definition=definition, syntax=key))
    # make examples objects
    for example in entry["examples"]:
        exam_objs.append(Example(word=word_obj, example=example))
    # put word into objs list
    word_objs.append(word_obj)
    

Word.objects.bulk_create(word_objs)
print("Creating Words, done!")
Definition.objects.bulk_create(defs_objs)
print("Creating Definitions, done!")
Example.objects.bulk_create(exam_objs)
print("Creating Examples, done!")
print("Getting the synonim realtions")
# it was nesseary to finish first the the Words so that for each relation it can given a word

def run():
    err_file = open("erroed_words", 'a')
    syno_objs = []
    for entry in dictionary:
        # get word
        word_obj = Word.objects.get(w_id=entry['link_id'].lower())
        synonyms = entry['synonyms']
        for synonym in synonyms:
            print(f"getting word: {entry['word']} synonym: {synonym}")
            try:
                syno_obj = Word.objects.get(w_id=synonym.lower())
                syno_objs.append(Synonym_Relation(word_from=word_obj, synonym=syno_obj))
            except:
                print(f"could not get synonym: {synonym}!")
                err_file.write(synonym)
                err_file.write('\n')
                


    Synonym_Relation.objects.bulk_create(syno_objs)
    print("Creating Synonym_Relations, done!")
    err_file.close()

