const bars = document.querySelector(".myth");
bars.addEventListener('mouseover', ()=>{
    const dropdown = document.querySelector('.nav-linked');
    dropdown.style.display = 'block'
});
bars.addEventListener('mouseout', ()=>{
    const dropdown = document.querySelector('.nav-linked');
    dropdown.style.display = 'none'
});