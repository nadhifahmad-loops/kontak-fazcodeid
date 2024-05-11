const contactForm = document.getElementById("form");
contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method:"POST",
        body: formData,
        mode: "no-cors",
    }).then(() => {
        //url ty
        window.location.href="/thanks.html";
    })
    .catch((e) => alert("Error occured"));
});

const btn = document.getElementById("btn");
const headerUl = document.querySelector("header ul");

// Menambahkan event listener untuk menunjukkan/menyembunyikan <ul> ketika tombol diklik
btn.addEventListener("click", () => {
    headerUl.classList.toggle("show");
});

// Menangani klik di luar <header> dan <ul>
document.addEventListener("click", (event) => {
    // Periksa apakah elemen yang diklik bukan bagian dari header atau ul
    if (!event.target.closest("header") && !event.target.closest("ul")) {
        // Jika bukan bagian dari header atau ul, sembunyikan ul
        headerUl.classList.remove("show");
    }
});