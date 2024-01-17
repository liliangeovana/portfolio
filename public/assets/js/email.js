const form = document.querySelector("form");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userMessage = document.getElementById("userMessage");

function sendEmail(){

    // Verifica se os campos obrigatórios estão preenchidos
    if (!userName.value || !userEmail.value) {
        // Exibe uma mensagem de erro
        Swal.fire({
            title: "Campos obrigatórios",
            text: "Por favor, preencha todos os campos.",
            icon: "error"
        });
        return; // Impede o envio do email se os campos obrigatórios não estiverem preenchidos
    }

    const bodyMessage = `Nome: ${userName.value} <br> Email: ${userEmail.value} <br> ${userMessage.value} `

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lili.ggsb@gmail.com",
        Password : "EE20FF5C1D1E63C0F9793CA8C368768417B0",
        To : 'lili.ggsb@gmail.com',
        From : "lili.ggsb@gmail.com",
        Subject : "Olá, vim do seu portfólio",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Obrigada!",
                text: "Mensagem enviada com sucesso!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();

    userName.value = "";
    userEmail.value = "";
    userMessage.value = "";
})