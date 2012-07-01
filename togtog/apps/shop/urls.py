# -*- coding: utf-8 -*-
from django.conf.urls import patterns, include, url

from togtog.apps.shop.views import IndexView

urlpatterns = patterns('',
    url(r'^$', IndexView.as_view(), name='index'),
)

