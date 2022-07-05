window.addEventListener('load', ()=>{
  const form = document.getElementById('login');
  const email = document.getElementById('email');
  const pass = document.getElementById('pass');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validaCampos();
  })

  const validaCampos = ()=> {
    const emailValor = email.value.trim();
    const passValor = pass.value.trim();

    if(emailValor === ""){
      validaFalla(email, 'Debe ingresar un correo');
    }
    else if(!validaCorreo(emailValor)){
      validaFalla(email, 'Debe ingresar una dirección de correo válida');
    }
    else{
      validaOk(email);
    }

    if(passValor === ""){
      validaFalla(pass, 'Campo vacío');
    }
    else if(passValor.length < 8){
      validaFalla(pass, 'Debe ingresar una contraseña válida');
    }
    else{
      validaOk(pass);
    }
  }

  const validaFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector('p');
    aviso.innerText = msje;

    formControl.className = 'form-control falla';
  }

  const validaOk = (input, msje) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control ok';
  }

  const validaCorreo = (email) => {
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,3}$/i.test(email);
  }
})