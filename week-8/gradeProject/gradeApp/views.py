from django.shortcuts import render,redirect

# Create your views here.
def calc_view(request):
    if request.method=="POST":
        name=request.POST.get("name","").strip()
        marks=request.POST.get("marks","").strip()

        if not name or not marks.isdigit():
            return render(request, "gradeApp/calc.html", {"error":"please enter valid form values."})
        
        marks=int(marks)
        cgpa=marks//50

        request.session["name"]=name
        request.session["cgpa"]=cgpa

        return redirect("grade")
    
    return render(request,"gradeApp/calc.html")

def grade_view(request):
    name=request.session.get("name","student")
    cgpa=request.session.get("cgpa","n/a")

    return render(request,"gradeApp/grade.html",{"name":name, "cgpa":cgpa})