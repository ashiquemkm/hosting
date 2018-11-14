from flask import Flask,render_template,request
from data import Employee

app=Flask(__name__)

getemployee=Employee()

@app.route('/')
def index():
    return render_template('home.html')
@app.route('/home')
def home():
    return 'WELCOME TO HOME PAGE'

@app.route('/stud')
def stud():
    return render_template('employeest.html',myemployeest=getemployee)

@app.route('/about')
def about():
    return 'You might have a main applicat'
@app.route('/user')
def user():    
     return 'welcome to user'
@app.route('/page')
def paged():    
    return render_template('bind.html')
@app.route('/a1')
def a1():    
    return render_template('about.html')

@app.route('/a2')
def a2():    
    return render_template('contactus.html')
@app.route('/send',methods=['GET','POST'])
def send():
    if(request.method=='POST'):
        getname=request.form["name"]
        return render_template('result.html',newname=getname)
        
        
     
        
if(__name__=='__main__'):
    app.run(debug=True)