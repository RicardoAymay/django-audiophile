FROM python:3.13.0b1-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /django-app

COPY requirements.txt /django-app/
RUN apt-get update && apt-get install -y libpq-dev
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

RUN addgroup --system django && adduser --system --ingroup django django
USER django

COPY --chown=django:django . /django-app/

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "audiophile.wsgi:application"]
