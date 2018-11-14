function read(){
    var name=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var age=document.getElementById("age").value;
    var op=document.getElementById("district");
    var dist=op.options[op.selectedIndex].value;
   alert(dist);

   alert(name);
   alert(password);
   alert(age);
   
    if(age>80){
        alert("yaha");
        
    }
    else{
        alert("not");
    }


}

function readm(){
  
    var age=document.getElementById("age").value;
    alert(age);
}

function read1(){
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    

    var x=parseInt(op1);
    var y=parseInt(op2);
    var op3=x+y;
    alert(op3)
}

function read2(){
    var op8=document.getElementById("op8").value;
    alert(op8);
    var op9=document.getElementById("op9").value;
    alert(op9);
    var op10=document.getElementById("operation");
    var opr=op10.options[op10.selectedIndex].value;
    alert(opr);

    
    var x=parseInt(op8);
    var y=parseInt(op9);
    var op3;
    if(opr=="add"){
        var op3=x+y;
        alert(op3);
        console.log(op3);
    }
    else if(opr=="sub"){
        var op3=x-y;
        alert(op3);
    }
    else if(opr=="mul"){
        var op3=x*y;
        alert(op3);
    }
    else if(opr=="div")
    {
        var op3=x/y;
        alert(op3);
    }
    
   
}

function read3(){
    var op8=document.getElementById("op8").value;
    alert(op8);
    var op9=document.getElementById("op9").value;
    alert(op9);
    var op11=document.getElementById("op11").value;
    alert(op11);
    
    var x=parseInt(op8);
    var y=parseInt(op9);
    var z=parseInt(op11);
    
    if(x>y){
        if(x>z){
            alert("x is large");
            var res =x;
        }
        else{
            alert("z is large");
            var res=z;
        }
    }
    else if(y>z){
       if(y>x){
        alert("y is large");
        var res=y;
       }
       
    }
    
   document.getElementById("result").innerHTML="<table class='table' borde=2><tr><td>result is</td></tr><tr><td>"+res+"</td></tr></table>";
    
   
}

function read4(){
    var op8=document.getElementById("op8").value;
    alert(op8);
    var op9=document.getElementById("op9").value;
    alert(op9);
    var op11=document.getElementById("op11").value;
    alert(op11);
    
    var x=parseInt(op8);
    var y=parseInt(op9);
    var z=parseInt(op11);
    
    if(x<y){
        if(x<z){
            alert("x is small");
            var res =x;
        }
        else{
            alert("z is small");
            var res =z;
        }
    }
    else if(y<z){
       if(y<x){
        alert("y is small");
        var res =y;
       }
       
    }
    
    document.getElementById("result1").innerHTML=res;
    
   
}