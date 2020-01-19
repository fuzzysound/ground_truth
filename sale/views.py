from django.shortcuts import render
from django.views.generic import TemplateView


class Mainpage(TemplateView):
    template_name = "mainpage.html"


class Sale(TemplateView):
    template_name = "sale.html"