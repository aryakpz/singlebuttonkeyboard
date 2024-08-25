
const letters = document.querySelectorAll('.letter');
const textarea = document.getElementById('content');

const sent = document.getElementById('send');
const clickel = document.querySelector('.click');
const keyel = document.querySelector('.keys');

const infoel = document.querySelector('.info');
const subel = document.querySelector('.sub');
const crinfoel = document.querySelector('.info.sec');
const crsubel = document.querySelector('.sub.sec');

let index = 0;
let movetime, longpress;
let f = 0;
let currentControl = 0;


const controls = [
    document.querySelector('.to input'),
    document.querySelector('.subject input'),
    textarea,
    document.getElementById('send')
];

function display() {

    const current = letters[index].textContent;

    if (current === "Backspace ") {
        controls[currentControl].value = controls[currentControl].value.slice(0, -1);

    }
    else if (current === "space") {
        controls[currentControl].value += ' ';
    }
    else if (current === "Tab") {
        controls[currentControl].value += '\t';
    }
    else if (current === "Enter") {

        controls[currentControl].value += '\n';
    }

    else if (current === "CapsLk") {

        if (f == 0) {
            f = 1
        }
        else {
            f = 0
        }
    }

    else if (["Fn", "Ctrl", "alt", "Shift", "AltGr"].includes(current)) {

    }

    else if (current === "~") {
        moveControl();

    }


    else if(current === 'Sent')
        {
            clearContents()
        }

        else if (current === "@") {
            
            if (currentControl === 0)
                 { 
                controls[currentControl].value += "@gmail.com";
            } 
            // else 
            // {
            //     controls[currentControl].value += "@";
            // }
        }
    else {

        if (f == 1) {
            controls[currentControl].value += letters[index].textContent.toUpperCase()
        }
        else {
            controls[currentControl].value += letters[index].textContent.toLowerCase()
        }
    }

}

function move() {
   
    letters.forEach(letter => {
        letter.style.backgroundColor = ''; 
    });

    index = index + 1 
    if (index == letters.length)
        {
            index=0
        }

    letters[index].style.backgroundColor = 'skyblue';
}
function moveControl() 
{

    controls[currentControl].focus();

    console.log(currentControl,controls.length)

    console.log(controls[currentControl])
    
    currentControl = (currentControl + 1)
  

    if (currentControl == controls.length) {
        currentControl = 0
    }
}



clickel.addEventListener('mouseover', () => {

    movetime = setInterval(move, 1000);

});

clickel.addEventListener('click', () => {

    display();

}, 1500);


function clearContents() {
 controls[0].value=' '
 controls[1].value=' '
 controls[2].value=' '


  alert("Mail sent successfully")
}

clickel.addEventListener('mouseleave', () => {

    clearInterval(movetime);
    clearTimeout(longpress);

});
sent.addEventListener('click',()=>{
    clearContents();
})

// send.addEventListener('click', () => {
//     // console.log('ghf')
//     clearContents();
// });

infoel.addEventListener('click', () => {
    subel.style.display = subel.style.display === 'block' ? 'none' : 'block';
});

crinfoel.addEventListener('click',()=>{
    crsubel.style.display = crsubel.style.display === 'block' ? 'none' : 'block';cr
})
