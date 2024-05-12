FROM python:3.10.12-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /django-app

COPY requirements.txt /django-app/
RUN pip install --no-cache-dir -r requirements.txt

RUN addgroup --system django && adduser --system --ingroup django django
USER django

COPY --chown=django:django . /django-app/

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "audiophile.wsgi:application"]



