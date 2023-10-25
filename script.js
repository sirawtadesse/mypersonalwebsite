                                   $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")

        }else{
            $('.navbar').removeClass("sticky");
        }
    });
//toggle menu nav bar script
$('.menu-b').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-b i').toggleClass("active");
})
});
// for images
function myFunction(smallImg){
  var fullImg=document.getElementById("imageBox");
  fullImg.src=smallImg.src;
}

// for videos
let listVideo=document.querySelectorAll('.video-list .vid');
let mainVideo=document.querySelector('.main-video video');
let title=document.querySelector('.main-video .title');
listVideo.forEach(video =>{
    video.onclick=() =>{
listVideo.forEach(vid => vid.classList.remove('active'));
video.classList.add('active');
if(video.classList.contains('active')){
    let src=video.children[0].getAttribute('src');
    mainVideo.src=src;
    let text=video.children[1].innerHTML;
    title.innerHTML=text;
}
    };
});


function validation()
{
    
    
    var form=document.getElementById("fn")
    var email =document.getElementById("l").value;
    var text=document.getElementById("f");
    //var pass =document.getElementById("e");
    //var sub=document.getElementById("m");
     
    var pattern=/^[^]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML ="your email address in valid"
    }
    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
    } 

}
function send()
  { 
  if(document.getElementById('f').value.length!=" " && document.getElementById('l').value.length!=" ")
  {
       if(document.getElementById('e').value.length!=" " && document.getElementById('m').value.length!=" ")
      {
     alert(" succesfully sent....");
      }
    else
      {
     alert(" please fill the form correctly!!");
       }
  }
  else
       {
  alert(" please fill the form correctly!!");
       }
  }
  
  