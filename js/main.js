//initializam elementele din galerie sa fie clickabilepe site
new SimpleLightbox({elements: ".galerie-container a"});

new SimpleLightbox({elements: ".orar-imagini a"});

AOS.init({ once: true });

emailjs.init("_nT9RggAjcBhg3K0m");

function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_uifvc9w", "template_65qelax", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la trimitere. Contactați programatorul.")
        })

}