// Halloo 


//opa


//passShow
showHideIco.addEventListener('click', function(){   
        var getPasword = document.getElementById("lolPswd");
        if (getPasword.type === 'password') {   
            showHideIco.style.background = "url('../imgs/hiddenPasswdIco.png')";
            showHideIco.style.backgroundRepeat = "no-repeat";
        } else{
            showHideIco.style.background = "url('../imgs/shownPasswdIco.png')";
            showHideIco.style.backgroundRepeat = "no-repeat";
        }

    })

//some sound and animation
var q = 5;
var r = 5;
var brook = 1;
var gokuSound = new Audio('../media/goku_01.mp3')
teste.addEventListener('click', function(){
    var quo = document.getElementById('gokuQuote');
    var gokuSound = new Audio('../media/goku_01.mp3')
    gokuSound.play();
    if (r > 4){
        teste.style.animation = "selectorF 0.1s ease-in-out forwards";
        q = 0;
        
    } else{
        teste.style.animation = "selectorF 0.05s ease-in-out forwards";
        test.style.animation = "selectorBackLuffy 0.5s ease-in-out forwards";
        q = 0;
    }
})


test.addEventListener('click', function(){
    if (q > 4){
        test.style.animation = "selector 0.7s ease-in-out forwards";
        if (brook > 4){
            luffySound.play();
            brook = brook + 1;
        }
        else if (brook == 3){
            brookSound.play();
            brook = brook + 1;
        }
        else{
            luffySound.play();
            brook = brook + 1;
        }
        r = 0;
    }
    else{
        test.style.animation = "selector 0.7s ease-in-out forwards";
        teste.style.animation = "selectorFBackGoku 0.5s ease-in-out forwards";
        if (brook > 4){
            luffySound.play();
            brook = brook + 1;
        }
        else if (brook == 3){
            brookSound.play();
            brook = brook + 1;
        }
        else{
            luffySound.play();
            brook = brook + 1;
        }
        r = 0;
    }
})


var luffySound = new Audio('../media/luffy_01.mp3');

var brookSound = new Audio('../media/brook_01.mp3')

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type ==="password"){
                pwField.type = "text";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }else{
                pwField.type = "password";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        }) 
    })
})

    // js code to appear signup and login form
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});



// Hallo

