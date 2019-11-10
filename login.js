$(document).ready(function () {
    $("#loginbtn").click(function () { 
       let uname=$("#username").val();
       let pass=$("#password").val();
         validate(uname,pass,function (f){
                if(f==true)
                {
                    window.location.href="main.html"
                }
                else
                {
                    alert("login failed");
                }
          });
     
     function validate(uname,pass,call)
     {
           var flag=false;
           if(uname=="admin"&&pass==1234)
           {
               //alert("validate if");      
               flag=true;
               
           }
           else
           {
            
               flag=false;
               
           }
           call(flag);
       }       

      
   });
});