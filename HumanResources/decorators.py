from django.shortcuts import redirect


# check if he is loged in

def isLogedIn(view_func):
  
  def wrap(request,*args, **kwargs):
    if request.user.is_authenticated:
      return view_func(request,*args,**kwargs)
    else:
      return redirect("login")
  
  wrap.__doc__=view_func.__doc__
  wrap.__name__=view_func.__name__
  
  return wrap