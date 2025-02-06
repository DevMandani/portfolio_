
    setTimeout(() => {
        let reload = document.getElementById("reloade");

        reload.style.display="none";
    }, 3000);



    setTimeout(()=>{
        let audio =document.getElementById(audio);

        audio.style.display="none";
    },3000);


    function darkMode() {
        let element = document.body;
        let content = document.getElementById("lightModetext");
        element.className = "dark-mode";
        content.innerText = "Dark Mode is ON";
    }
    function lightMode() {
        let element = document.body;
        let content = document.getElementById("darkModetext");
        element.className = "light-mode";
        content.innerText = "Dark Mode is OFF";
    }



