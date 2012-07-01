from django.contrib import admin

from models import TogProduct


class TogProductAdmin(admin.ModelAdmin):
    pass

admin.site.register(TogProduct, TogProductAdmin)