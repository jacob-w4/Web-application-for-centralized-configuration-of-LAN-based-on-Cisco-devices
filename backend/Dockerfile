FROM python:3.9-slim

WORKDIR /backend

COPY . /backend

RUN pip install -r requirements.txt

ENV PORT=5000

EXPOSE 5000

CMD ["python", "run.py"]