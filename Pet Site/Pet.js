var pet = {
    name: "Trixx",
    full: 100,
    hap: 100,
    health: 100,
}

document.getElementById("name").innerHTML = pet['name'];

var a = setInterval(hungry, 300);
function hungry() {
    pet['full'] = pet['full'] - 1;
    document.getElementById("hungry").innerHTML = pet['full'] + '%';
    document.getElementById('bar1').style.width = pet['full'] * 3 + 'px';
    if (pet['full'] == 50) {
        alert('πρέπει να φάει');
        document.body.style.backgroundImage = 'url(yellow.png)';
    }

    if (pet['full'] <= 30) {
        pet['health'] = pet['health'] - 2;
        document.getElementById("health").innerHTML = pet['health'] + '%';
        document.getElementById('bar3').style.width = pet['health'] * 3 + "px";

        pet['hap'] = pet['hap'] - 1;
        document.getElementById("happy").innerHTML = pet['hap'] + '%';
        document.getElementById('bar2').style.width = pet['hap'] * 3 + "px";
    }

    if (pet['full'] == 0) {
        pet['hap'] = 0;
        pet['health'] = 0;
        clearInterval(a);
        document.getElementById("i").innerHTML = src = "Ghost.png";
        document.getElementById("feed").disabled = true;
        document.getElementById("walk").disabled = true;
        document.getElementById("play").disabled = true;
    }
}

function feed() {
    if (pet['full'] > 100) {
        alert("Δεν Θέλω άλλο");
        pet['health'] = pet['health'] - 10;
        document.getElementById("health").innerHTML = pet['health'] + '%';
        document.getElementById('bar3').style.width = pet['health'] * 3 + 'px';
    }

    else {
        pet['full'] = pet['full'] + 10;
        document.getElementById("hungry").innerHTML = pet['full'] + '%';
        document.getElementById('bar1').style.width = pet['full'] * 3 + 'px';
    }

}






var b = setInterval(happy, 250);
function happy() {
    pet['hap'] = pet['hap'] - 1;
    document.getElementById("happy").innerHTML = pet['hap'] + '%';
    document.getElementById('bar2').style.width = pet['hap'] * 3 + 'px';
    if (pet['hap'] == 50) {
        alert('πρέπει να περάσει καλά');
        document.body.style.backgroundImage = 'url(yellow.png)';
    }

    if (pet['hap'] <= 30) {
        pet['health'] = pet['health'] - 1;
        document.getElementById("health").innerHTML = pet['health'] + '%';
        document.getElementById('bar3').style.width = pet['health'] * 3 + "px";
    }

    if (pet['hap'] == 0) {
        pet['full'] = 0;
        pet['health'] = 0;
        clearInterval(b);
        document.getElementById("i").innerHTML = src = "Ghost.png";
        document.getElementById("feed").disabled = true;
        document.getElementById("walk").disabled = true;
        document.getElementById("play").disabled = true;
    }
}

function play() {
    pet['hap'] = pet['hap'] + 10;
    if (pet['hap'] >= 100) {
        pet['hap'] = 100;
    }
    document.getElementById("happy").innerHTML = pet['hap'] + '%';
    document.getElementById('bar2').style.width = pet['hap'] * 3 + "px";
}





var c = setInterval(health, 150);
function health() {
    pet['health'] = pet['health'] - 1;
    document.getElementById("health").innerHTML = pet['health'] + '%';
    document.getElementById('bar3').style.width = pet['health'] * 3 + 'px';
    if (pet['health'] == 50) {
        alert('Δεν νιωθει καλά');
        document.body.style.backgroundImage = 'url(yellow.png)';
    }


    if (pet['health'] == 0) {
        pet['full'] = 0;
        pet['hap'] = 0;
        clearInterval(c);
        document.getElementById("i").innerHTML = src = "Ghost.png";
        document.getElementById("feed").disabled = true;
        document.getElementById("walk").disabled = true;
        document.getElementById("play").disabled = true;
    }
}

function walk() {
    pet['health'] = pet['health'] + 20;
    pet['hap'] = pet['hap'] + 5;
    if (pet['hap'] >= 100) {
        pet['hap'] = 100;
    }
    document.getElementById("happy").innerHTML = pet['hap'] + '%';
    document.getElementById('bar2').style.width = pet['hap'] * 3 + "px";
    if (pet['health'] >= 100) {
        pet['health'] = 100;
    }
    document.getElementById("health").innerHTML = pet['health'] + '%';
    document.getElementById('bar3').style.width = pet['health'] * 3 + "px";
}