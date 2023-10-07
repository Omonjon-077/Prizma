let form = document.querySelector("#contact-form");
let contactName = document.querySelector("#contact-name");
let contactPhone = document.querySelector("#contact-phone");
let modal = document.getElementById("modal-info");
let modalBtn =document.getElementById("modal-btn");

let bot = {
    TOKEN: "5894687462:AAFNdK9xm8LFIsSxiq9BL951WwznTfxVVX0",
    chatID: "-1001588367236",
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
            modal.classList.remove("d-none");
            modal.classList.add("d-block");
            setTimeout(() => {
                modal.classList.remove("d-block");
                modal.classList.add("d-none");
            }, 5000)
            contactName.value = "";
            contactPhone.value = "";
            modalBtn.addEventListener("click", () => {
                modal.classList.add("d-none");
            })
        }, error => {
            alert("Message not send!");
            contactName.value = "";
            contactPhone.value = "";
        })
})

