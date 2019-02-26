//=== === === === === LANGUAGE CHANGE ++++++
// let buttons = document.querySelectorAll(".translate");
// let language = document.querySelectorAll(".lang");



// const xmlhttp = new XMLHttpRequest();
// let arrLang;
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         arrLang = JSON.parse(this.responseText);
//         changeLang();

//         for (let i = 0; i < buttons.length; i++) {
//             buttons[i].addEventListener("click", () => {

//                 changeLang(buttons[i].getAttribute("id"));
//                 //console.log('jumber 2'+buttons[i].getAttribute("id"))

//             });
//         }
//     }
// };

// xmlhttp.open("GET", "http://localhost/js/language.json", true);
// xmlhttp.send();


// function changeLang(lang = false) {
    
   
//     if (!lang && localStorage.getItem("lang") == false) {
//         localStorage.setItem("lang", "home-eng");
//         lang = "home-eng";
//     } else {
//         localStorage.setItem("lang", lang);
//         lang = localStorage.getItem("lang");

//     }
    

//     language.forEach(element => {
//         element.innerHTML = arrLang[lang][element.getAttribute("key")];
//     });


// }





let buttons = document.querySelectorAll(".translate");
let language = document.querySelectorAll(".lang");



const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let arrLang = JSON.parse(this.responseText);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                let lang = buttons[i].getAttribute('id');
                console.log(lang);

                language.forEach((element) => {
                    element.innerHTML = arrLang[lang][element.getAttribute('key')];
                });
            });
        }
    }
};

xmlhttp.open("GET", "js/language.json", true);
xmlhttp.send();

