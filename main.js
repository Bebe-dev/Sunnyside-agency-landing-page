const sideNav = document.getElementById('sidenav')
const dropIcon = document.getElementById('hmbg')

dropIcon.addEventListener('click', () => {
  sideNav.classList.toggle("show");
})

// document.onclick = function(event) {
//     if(event.target.id !== '#sideNav' && event.target.id !== '#hmbg'){
//         sideNav.classList.remove("show"); 
        
//     }
// }
 