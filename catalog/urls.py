from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('report', views.report, name='report'),
    path('report1', views.report_revised, name='report1'),
    path('report2', views.report_switch_between_items, name='report2')
]



