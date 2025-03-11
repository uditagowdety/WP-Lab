from django.shortcuts import render

def register_view(request):
    if request.method == "POST":
        username = request.POST.get("username", "").strip()
        password = request.POST.get("password", "").strip()
        email = request.POST.get("email", "").strip()
        contact = request.POST.get("contact", "").strip()

        if not username:
            return render(request, "register_app/register.html", {"error": "Username is required!"})

        # Pass data to success page
        context = {"username": username, "email": email, "contact": contact}
        return render(request, "register_app/success.html", context)

    return render(request, "register_app/register.html")
    
def success_view(request):
    return render(request, "register_app/success.html")
