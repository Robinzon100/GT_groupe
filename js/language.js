//=== === === === === LANGUAGE CHANGE ++++++
let buttons = document.querySelectorAll(".translate");
let language = document.querySelectorAll(".lang");





const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let arrLang = JSON.parse(this.responseText);
        console.log("arrlang");

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



xmlhttp.open("GET", "http://localhost/js/language.json", true);
xmlhttp.send();
