let yoshi = new Audio("https://cdn.glitch.global/f147a427-db96-4f44-b29c-e04e8d78369f/yoshi.mp3?v=1656882672252");
function play() {
    yoshi.play();
    yoshi.loop = true;
}
window.onload=function(){
    const element = document.getElementById("page");
    if(element) {
        element.addEventListener("click", function() {
            var page = document.getElementById('page');
            page.style.display = 'none';
            var page2 = document.getElementById('page2');
            page2.style.display = "block";
            var click2 = document.getElementById('click2');
            click2.style.display = "block";
            document.body.style.backgroundImage = "url('background.gif')";
        });
      }    
}

