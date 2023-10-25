document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Experience | Portfolio Nirmal Panchal";
    }
    else {
        document.title = "Come Back To Portfolio";
        //$("#favicon").attr("href","/assets/images/favhand.png");
    }
});

function opentab(event,tabName){
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(const tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}

function openmenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

function closemenu(){
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

function submittogoogle(e){
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwNKgvJ6yatNEHHr9r8Qj_UIhXsQ3ca-4REUKmdFE8nVG5jcUSRLdcyapbKOTbhy9ziFw/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    console.log(form);
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message is sent Successfully!!!!"
          setTimeout(function(){
              msg.innerHTML = ""
          },5000);
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))

}