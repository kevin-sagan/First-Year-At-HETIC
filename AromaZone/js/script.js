document.addEventListener('DOMContentLoaded', () => {


var container = document.getElementById('.ricinPic');
let openMenuLink = document.querySelectorAll('.details h2');
let openMenuContent = document.querySelectorAll('.details');


function change_img(image) {
    document.getElementById('ricinPic').src = image.src;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  
const toggleAccordeon = () => {
    for( let link of openMenuLink ){
        link.addEventListener('click', () => {
            for( let content of openMenuLink ){
                content.parentNode.classList.remove('open')
            }
            link.parentNode.classList.add('open')
        })
    }
}

const showModeFunction = () => {
    showMoreLinks.forEach( link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            link.parentNode.classList.add('hide')
            link.parentNode.parentNode.lastElementChild.classList.add('open')

            console.log(link.parentNode.parentNode.lastChild)
        })
    } )
}
//

let openMenuHeight = document.getElementById('properties-content-height');

openMenuLink.forEach((link, index)=>{
    link.addEventListener('click', ()=>{
        if (openMenuContent[index].classList.contains('open')){
            openMenuContent[index].classList.remove('open')
        } else {
            openMenuContent[index].classList.add('open')
        }
    })
})

    toggleAccordeon()
})

