from django.core.management.base import BaseCommand
from django.urls import get_resolver

class Command(BaseCommand):
    help = "Lists all registered URL patterns in the project"

    def handle(self, *args, **kwargs):
        urls = get_resolver().url_patterns
        for url in urls:
            self.stdout.write(str(url))
