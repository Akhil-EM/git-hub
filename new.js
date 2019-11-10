$(document).ready(function () {
         
   $.ajax({
       type: "GET",
       url: "https://jsonplaceholder.typicode.com/todos",
       success: function (response,status,xhr) {
           ////var mydata=[];
           for(let i=0;i<response.length;i++)
           {
               /////console.log(response[i]);
               var text=response[i].title;
               var checkORnot=response[i].completed;
               var uid=response[i].userId
                    console.log(text+" "+checkORnot+" "+uid);
               /////console.log(text+" "+checkORnot);
               if(checkORnot==true)
               {
                document.getElementById("divmain").innerHTML+=`<div class="checkdiv">
                <label class="container">
                <input type="checkbox" checked>${text}
                <span class="checkmark"></span>
                </label>
                </div>`
               }
               else
               {
                document.getElementById("divmain").innerHTML+=`<div class="checkdiv">
                <label class="container">
                <input type="checkbox">${text}
                <span class="checkmark"></span>
                </label>
                </div>`
               }
            // //    `<div class=
            ////    "checkdiv"><input type="checkbox"><h3>${tittle}<h3></div>`;
                      
           }
       }
   });
//// $("#divmain").html("Hello <b>world</b>!");
   
});