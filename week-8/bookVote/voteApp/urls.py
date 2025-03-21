from django.urls import path
from .views import voting_view, percentage_view

urlpatterns=[
    path('', voting_view, name='voting'),
    path('percentage/', percentage_view, name='percentage')
]