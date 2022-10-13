const element = document.getElementById('circle')
const elementContainer = document.getElementById('toggle')

elementContainer.addEventListener('click',()=>{ 
    elementContainer.classList.toggle('active')
    element.classList.toggle('active')
    
    element.classList.contains('active') ? 
        document.body.style.backgroundColor ='#252525'
    : 
        
        document.body.style.backgroundColor ='#fff';
})