FROM php:7.2-apache

RUN apt-get update -y

RUN apt-get install -y libpng-dev libfreetype6-dev libyaml-dev

RUN docker-php-ext-install pdo mysqli pdo_mysql

RUN pecl install yamL

RUN docker-php-ext-configure gd \
    --with-freetype-dir=/usr/include/freetype2 \
    && docker-php-ext-install gd

RUN usermod -u 1000 www-data

RUN a2enmod rewrite