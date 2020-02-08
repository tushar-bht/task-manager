
var uty=function(){
    var it=document.getElementById("txt");
     var ola=it.value;
     
    var my=document.getElementById("butn");
    if(it.value=="")
    alert("no task entered");
    else
    {
    
                   var odd=document.createElement("li");
                   
                   var ou=document.getElementById("add");
                   var omi=document.getElementById("ye").value;
                
                   odd.innerHTML=ola.toUpperCase()+" "+" "+" "+ omi.toUpperCase();
                   
                   ou.appendChild(odd);
                   console.log("done");
                   
                   odd.onclick=function()
                   { ou.removeChild(this);
                    

                   }
    
                 

        
}               }

