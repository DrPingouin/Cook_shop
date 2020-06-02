FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /ines_shop
WORKDIR /ines_shop
ADD requirements.txt /ines_shop/
RUN pip install -r requirements.txt
ADD . /ines_shop/
