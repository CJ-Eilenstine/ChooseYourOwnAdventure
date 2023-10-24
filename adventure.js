var sleep;


// Start of the Game

function startGame() {
    var user = prompt("Welcome to my road trip adventure game. Please enter your name:");
    if(user == null){
        alert("Have a good day.")
    } else {
        var sleep = confirm("You are having good road trip so far and get a good distance so far, it starts getting dark out. Would you like to stop and sleep at a motel?");
        
        if(sleep) {
            motel();
        } else {
            driving();
        }
    }
}

// First Decision


function driving() {
    var circus = confirm("You keep driving and eventually you hear loud noises and you decide to get out your super high powered flashlight to see what is happening on the road up ahead. You see a circus of zombies. Would you like to get out and check what is going on?")
    
    if (circus){
        circus();
    } else {
        keepDriving();
    }
}

function motel() {
    var motel = confirm("You stop by the motel and fall asleep peacefully to your amazing waterfall white noise and then, BOOM!!! You hear an extremely loud sound and don't know what it is. Do you want to wake up and check it out?");
    if (motel){
        waker()
    } else {
        sleeper()
    }
}


// Second Decision


function keepDriving() {
    var offense = confirm("You drive past them and have offended the zombies by driving past the circus without at least a peak. The zombies are visually mad and chasing you down and your car breaks down. Do you try and fix the car?");
    if (offense) {
        fixit();
    } else {
        onRun();
    }
}

function circus(){
    var popcorn = confirm("You have a fun time at the circus and evetually the leader invites you on stage. Would you like to join him up on stage?");
    if (popcorn){
        bold();
    } else {
        shy();
    }
}

function waker(){
    var wakey = confirm("You decide to wake up and check out what is going on. You find a portal opening with swirlig pink and blue all around. A future version of you comes out of the portal and warns you of an impending doom. Do you try and knock him/her out?");
    if (wakey){
        rockemSockem();
    } else {
        joinem();
    }
}

function sleeper(){
    var sleepy = confirm("You fall back asleep to your beautiful waterfall noise and eventually, your door get's busted open and you see a strange pale man at the door. Do you want to jump out the window?");

    if (sleepy){
        jumper();
    } else {
        hatchet();
    }
}

// Third and Final Decision

function fixit(){
    alert("You successfully fix the vehicle and are now on the run again. You successfully esacpe and are now free from the haunted circus.");
}

function onRun(){
    alert("You get out and run as fast as you can, eventually you get caught and the zombies eat you. You start you new life as a zombie and get to know other nice zombies and live out your days in peace.");
}

function bold(){
    alert("You join the leader up on stage and he does some cool tricks with you and you have a great time at the Carnivale of the Cursed now that you know the name of the circus.");
}

function shy(){
    alert("The leader chooses someone else and you still have fun. You eventually get on the ferris wheel of death and end the night with a nice view.");
}

function rockemSockem(){
    alert("You try and knock your future self out and he/she counter you and send you to the ground. He/she then talks about how he knew you would fight back. He/she leaves with that final counter and you now have to worry about what he said forever.");
}

function joinem(){
    alert("You join your future self and take up preparing for the future impending doom which he/she informs you is Skynet.");
}

function jumper(){
    alert("You jump out of the window and are in a lot of pain; however, the adrenaline is keeping you going and you successfully get to your vehicle and get away.")
}

function hatchet(){
    alert("You find out this dude is stronger than you, he nearly has superhuman strength and he overtakes you. He then bites you on the neck and that is the end of you. You grow cold and dim and eventually pass away.");
}