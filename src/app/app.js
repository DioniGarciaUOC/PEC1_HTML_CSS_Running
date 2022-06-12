
// Form controls
const submitBtn = document.getElementById("submit-btn");

const input_email = document.getElementById("user-name");
const input_msg = document.getElementById("msg-txt");

// div messaging

const msgContainer = document.getElementById("msg-cnt");


submitBtn.addEventListener("click", (ev) => {

    if (input_email.value === "" || input_msg.value === "") {
        return;
    }

    stopAnimation()
    ev.preventDefault()

    msgContainer.textContent = input_email.value + ": '" + input_msg.value + "'";

    //Only postposing the animation will work the class remove-addition strategy
    setTimeout(startAnimation, 500);

    borrarForm();

});

function stopAnimation() {
    msgContainer.classList.remove("appear-msg")
}

function startAnimation() {
    msgContainer.classList.add("appear-msg")
}

function borrarForm() {
    input_email.value = ""
    input_msg.value = ""
}