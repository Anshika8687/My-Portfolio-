// typing effect
const text = ["Android Developer", "Java Developer", "App Builder 🚀"];
let i=0,j=0,isDeleting=false;

function type(){
  let current=text[i];

  if(!isDeleting){
    document.getElementById("typing").innerHTML=current.substring(0,j++);
    if(j>current.length){
      isDeleting=true;
      setTimeout(type,1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML=current.substring(0,j--);
    if(j==0){
      isDeleting=false;
      i=(i+1)%text.length;
    }
  }

  setTimeout(type,isDeleting?50:100);
}
type();


// skill animation
const fills=document.querySelectorAll(".fill");

window.addEventListener("load",()=>{
  fills.forEach(fill=>{
    let width=fill.getAttribute("data-width");
    fill.style.width=width+"%";
  });
});
function sendSMS(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let phoneNumber = "919860836722"; // 👉 YOUR NUMBER

  let sms = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.location.href = `sms:${phoneNumber}?body=${sms}`;
}