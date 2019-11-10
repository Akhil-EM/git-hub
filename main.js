$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/todos",
        success: function (response) {
          console.log(response.length);
            for(let i=0;i<response.length;i++)
             {   
               if(i==response.length-1)
               {
                 
                 $("#headtext").html("you have things to do -->");
    
               }
                var text=response[i].title;
                var checkORnot=response[i].completed;
                //var uid=response[i].userId;
                if(checkORnot==true)
                  {
                        document.getElementById("divmain").innerHTML+=`<div class="checkdiv">
                        <label class="container">
                        <input type="checkbox" id="checkid" onchange="log(this)" checked disabled>${text}
                        <span class="checkmark"></span>
                        </label>
                        </div>`
        
                  }
                else
                    {
                        document.getElementById("divmain").innerHTML+=`<div class="checkdiv">
                        <label class="container">
                        <input type="checkbox" id="checkid" onchange="log(this)" >${text}
                        <span class="checkmark"></span>
                        </label>
                        </div>`
                    }
             }
             
      }
     
  });
   
  
});
var cnt=0;
function log(getid)
  {
    
    
    if(getid.checked==true)
    {
      
        cnt=cnt+1;
        
        
    }
    else
    {
      
      cnt=cnt-1;
    }
    
    var promise=new Promise(function (resolve,reject){
       if(cnt==5)
       {
         resolve();
       }
    }).
    then(function (resolve,reject){
        alert("congrats, you have successfully completed 5 tasks");
    });
  }


      

