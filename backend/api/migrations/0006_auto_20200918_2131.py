# Generated by Django 3.1.1 on 2020-09-18 21:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20200918_1949'),
    ]

    operations = [
        migrations.RenameField(
            model_name='synonym_relation',
            old_name='word_to',
            new_name='synonym',
        ),
    ]
