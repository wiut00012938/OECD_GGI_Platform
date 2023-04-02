section_1 = document.getElementById('section-1')
section_2 = document.getElementById('section-2')
section_3 = document.getElementById('section-3')

section_1.addEventListener('click',function(){
    this.classList.toggle("section-active")
    section_2.classList.remove("section-active")
    section_3.classList.remove("section-active")
    document.querySelector("div#first").classList.add("active")
    document.querySelector("div#second").classList.remove("active")
    document.querySelector("div#third").classList.remove("active")
})

section_2.addEventListener('click',function(){
    this.classList.add("section-active")
    section_1.classList.remove("section-active")
    section_3.classList.remove("section-active")
    document.querySelector("div#second").classList.add("active")
    document.querySelector("div#first").classList.remove("active")
    document.querySelector("div#third").classList.remove("active")
})

section_3.addEventListener('click',function(){
    this.classList.add("section-active")
    section_2.classList.remove("section-active")
    section_1.classList.remove("section-active")
    document.querySelector("div#third").classList.add("active")
    document.querySelector("div#second").classList.remove("active")
    document.querySelector("div#first").classList.remove("active")
})