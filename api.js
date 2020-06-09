function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var reslist = response;
            var output="<table>";
            for (var i=0;i<reslist.length;i++){

                output += "<tr> <td>" + reslist[i].userId + "</td><td>" +
                    reslist[i].id + "</td><td>" +
                    reslist[i].title + "</td><td>" +
                    reslist[i].completed + "</td><td> <input type = 'checkbox' class ='checkBox' onchange='check()'></td></tr>";
            }

            output += "</table>";
            document.getElementById("demo").innerHTML = output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function check(){
var promise = new Promise(function(resolve,reject){
        var count=0;
        var checkBox = document.getElementsByClassName("checkBox");
        console.log(checkBox.length);
        for(let i=0;i<checkBox.length;i++){

            if (checkBox[i].checked){
                console.log(checkBox[i]);
                count+=1;
            }
        }
        console.log(count);
        if(count==5){
            resolve("Congrats on Successful Completion of 5 Tasks");
        }
        else{
        reject("Not Completed");
        }
    });

    
    promise
    .then(function(s){
        alert(s);
    })
    .catch(function(k){
        console.log(k);
    })
}