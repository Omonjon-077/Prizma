let form = document.querySelector("#contact-form");
let contactName = document.querySelector("#contact-name");
let modal = document.getElementById("modal-info");
let modalBtn =document.getElementById("modal-btn");

// FOR INPUT MASK
const contactPhone = document.getElementById('contact-phone');
const maskOptions = {
    mask: '+{998}(00)000-00-00'
};
const mask = IMask(contactPhone, maskOptions);

// FOR SEND BOT
let bot = {
    TOKEN: "5894687462:AAFNdK9xm8LFIsSxiq9BL951WwznTfxVVX0",
    chatID: "-4016506469",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("contact-name").value;
    let phone = document.getElementById("contact-phone").value;

    let sendMessage = `Mijoz %0A Ismi: ${name} %0A Telefon raqami: ${phone}`

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendMessage}`, {
        method: "GET"
    })
        .then(success => {
            modal.classList.add("show-modal");
            setTimeout(() => {
                modal.classList.remove("show-modal");
            }, 5000)
            contactName.value = "";
            contactPhone.value = "";
            modalBtn.addEventListener("click", () => {
                modal.classList.remove("show-modal");
            })
        }, error => {
            alert("Message not send!");
            contactName.value = "";
            contactPhone.value = "";
        })
})

