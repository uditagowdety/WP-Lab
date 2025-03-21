from django.shortcuts import render,redirect
import random

votes={"good":0,"satisfactory":0,"bad":0}

# Create your views here.
def voting_view(request):
    if request.method=="POST":
        choice = request.POST.get("vote_option")
        if choice in votes:
            votes[choice]+=1
        return redirect('percentage')

    return render(request, "voteApp/voting.html")

def percentage_view(request):
    total_votes=sum(votes.values()) or 1
    percentages={option: (count/total_votes)*100 for option, count in votes.items()}

    return render(request, "voteApp/percentage.html",{"percentages":percentages, "votes":votes})
