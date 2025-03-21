from django.urls import path
from .views import calc_view, grade_view

urlpatterns=[
    path('',calc_view,name='calc'),
    path('grade/',grade_view,name='grade'),
]