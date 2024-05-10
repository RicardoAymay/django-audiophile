version: '3.10.12'

service:

    django:
        container_name: audiophile-django
        build:
            context: .django_audiophile
        command: python manage.py runserver 0.0.0.0:8000
        volumes:
            - 
        environment:
            DJANGO_SECRET_KEY: your_secret_key_here
            DJANGO_DEBUG: "False"