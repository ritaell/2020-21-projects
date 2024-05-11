var ptext="";

function message(){
    alert("Ο Κωδικός προετοιμάζεται...")
    var message = document.getElementById("i1").value;
    //alert(message);
    message=message.replace(/ /g, "");
    //alert(message);
    var length1 = document.getElementById("i2").value;
    length1 = Number(length1);
    var length2 = document.getElementById("i1").value.length;

    for(var i=0; i < length1; i++){
        var number = Math.floor(Math.random()*length2);
        ptext= ptext + message[number];
        //alert(ptext);
    }

    document.getElementById("output").innerHTML="Το password είναι " + ptext;

}