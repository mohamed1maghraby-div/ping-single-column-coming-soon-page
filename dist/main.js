function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

document.querySelector('input[type=submit]').onclick = function(){
  const email = document.querySelector('input[type=text]').value;
  
    if (validateEmail(email)) {
      
    } else {
        document.querySelector('input[type=text]').style.borderColor = 'hsl(354, 100%, 66%)';
        document.querySelector('form span').style.display = 'block';
    }
    return false;
}
/* this project created by Mohamed Maghraby */