const openNav=document.querySelector('.open-nav') ;
const closeNav= document.getElementsByClassName('close-nav')[0];
const addActive = document.getElementsByClassName('navbar')[0];

openNav.addEventListener("click",function(){
    // console.log("clicked");
    addActive.classList.add("active");
    if(openNav.classList.contains("active")){
       closeNav.style.display='block';
       

    //    openNav.style.display='none';
    }
    closeNav.addEventListener("click",function(){
         addActive.classList.remove('active');
    })
});



  var typed = new Typed('.typed', {
    strings: ['Web Developer', 'Freelancer', 'UI/UX Designer'],
    stringsElement: '#typed-strings',
    typeSpeed: 120,
    backSpeed: 120,
    smartBackspace: true, // this is a default
    loop: true
  });



//   function sendEmail(){
//     Email.send({
//     Host : "smtp.gmail.com",
//     Username : "samadhanshelke2145@gmail.com",
//     Password : "Sam@shelke750",
//     To : 'samadhanshelke2145@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "new contact me enquiry",
//     Body : "name: " + document.getElementById("name").value
//            +"<br> email: "+  document.getElementById("email").value
//            +"<br> phone number: "+  document.getElementById("phone").value
//            +"<br> message: "+  document.getElementById("message").value


// }).then(
//   message => alert("message sent successfully" )
// );
// }