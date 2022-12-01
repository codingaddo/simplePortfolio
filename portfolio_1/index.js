const showMneu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
            // console.log('hello')
        })
    }
}
showMneu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link')
function linkAction(){

    //Active links
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')

    //remove menu
    const newMenu =document.getElementById('nav-menu')
    newMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))


//Autotype Text
const WriteText = document.getElementById('write')
const type = new Typed(WriteText,{
    strings:['Frontend Developer','Web Designer','Mentor'],
    typeSpeed:120,
    backSpeed:110,
    loop:true
})


//Scroll Reveal Animation
/*const sr = scrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})


//scroll home
sr.reveal('.home_title',{})
sr.reveal('.button',{delay:300})
sr.reveal('.home_img',{delay:300})
sr.reveal('.home_social-icons',{interval:200})
            //about
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay:500})
sr.reveal('.about_text',{delay:500})
            //skill
sr.reveal('.skill_subtitle',{})
sr.reveal('.skill_text',{delay:300})
sr.reveal('.skill_img',{delay:300})
sr.reveal('.skill_data',{interval:200})

        ///work
sr.reveal('.work_img',{interval:200})


sr.reveal('.contact_input',{interval:200})*/

