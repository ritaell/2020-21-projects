function newElement(){
    var input = document.getElementById("myInput").value;
    if(input==""){
        alert("Πρέπει να γράψεις κάτι")
    }
    else{
        var e=document.createElement('li')
        var t=document.createTextNode(input)
        e.appendChild(t);
        document.getElementById('myUL').appendChild(e)
    }
    document.getElementById('myInput').value="";
    
}