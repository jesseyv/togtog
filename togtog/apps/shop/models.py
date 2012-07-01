# -*- coding: utf-8 -*-
from django.db import models

#from sorl.thumbnail import ImageField

from shop.models.defaults.product import Product


class TogProduct(Product):
    photo = models.ImageField(u'Фото товара', upload_to='photos')

    class Meta:
        verbose_name = u'Продукт'
        verbose_name_plural = u'Продукты'