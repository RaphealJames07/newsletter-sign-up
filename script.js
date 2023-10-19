const button = document.querySelectorAll('.submitbtn');
const dismissBtn = document.querySelectorAll('.dismissBtn');
const input = document.querySelector('.input');
const invalidEmail = document.querySelector('.invalidoutput');
const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
let temp = `<span>Invalid email</span>`
const success = document.querySelector('.Success')
const mainBody = document.querySelector('.MainBody')
const submitText = document.querySelector('.submitText')
const submitLoader = document.querySelector('.threebody')
const emailMEssage = document.querySelector('.emailConfirm')





input.addEventListener('input', function() {
  const inputValue = input.value;
  console.log(inputValue);
  if (!regex.test(inputValue)){
    input.classList.add('active')
    invalidEmail.innerHTML = temp
    return
  } else{
    input.classList.remove('active');
    invalidEmail.innerHTML = ""
    return
  }
  // input.classList.remove('active');
  // invalidEmail.innerHTML = ''
  // input.addEventListener('focus', ()=>{
  //   invalidEmail.innerHTML = ''
  //   input.classList.remove('active');
  // }) 
});

const handleSubmit = () => {
  let emailtext = `<p>A confirmation mail has been sent to ${input.value} Please open it and click the button inside to confirm your subscription</p>`
  
  if (input.value.trim() === "") {
    alert('Please enter a value');
  } else if(!regex.test(input.value)){
    
    invalidEmail.innerHTML = temp
    input.classList.add('active');
    console.log("No Incorect format");
  }else{
    submitText.classList.add('active')
    submitLoader.classList.add('active')
    console.log("object");
    setTimeout(
      () => {
        emailMEssage.innerHTML = emailtext
        input.classList.add('active');
        mainBody.classList.add('active')
        success.classList.add('active')
      }, 4000)
  }
};

const handleRemoveSuccess = () =>{
  submitText.classList.remove('active')
    submitLoader.classList.remove('active')
  success.classList.remove('active')
  mainBody.classList.remove('active')
  input.classList.remove('active');
    input.value = ""
}