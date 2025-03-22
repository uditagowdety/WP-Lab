from django.http import HttpResponse, Http404
from django.template import loader
from django.shortcuts import render, get_list_or_404

def index(request):
    # latest_question_list = Question.objects.order_by("-pub_date")[:5]
    # context = {"latest_question_list": latest_question_list}
    # return render(request, "polls/index.html", context)
    return HttpResponse("hello world!")

def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "polls/detail.html", {"question": question})

def results(request,question_id):
    response="you are looking at the results of question number %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    response="you are voting for question number %s."
    return HttpResponse(response % question_id)