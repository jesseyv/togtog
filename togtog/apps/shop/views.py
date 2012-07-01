# -*- coding: utf-8 -*-
from django.views.generic.list import ListView

from models import TogProduct

class IndexView(ListView):
    template_name = 'index.html'
    model = TogProduct