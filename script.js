let todos = [
  {
    id: 'asd',
    title: 'Todo One',
    completed: false
  },
  {
    id: '2',
    title: 'Todo Two',
    completed: false
  },
  {
    id: '3',
    title: 'Todo Three',
    completed: false
  }
]








const form = document.querySelector('#regForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const tac = document.querySelector('#tac');

const output = document.querySelector('#users');

//          VALIDATE

const validateText = (input) => {
  if(input.value.trim() === '') { 
    setError(input, 'Name can\'t be empty')
    return false;
  }
  else if(input.value.trim().length < 2) {
    setError(input, 'Name must be atleast 2 chars long')
    return false;
  }
  else {
    setSuccess(input)
    return true;
  }
  }
  const validateEmail = email => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
    if(email.value.trim() === '') {
      setError(email, 'You need to enter a email address');
      return false;
    } 
    else if(!regEx.test(email.value)) {
      setError(email, 'Email address is not valid');
      return false;
    }
    else {
      setSuccess(email)
      return true;
    }
  }
  const validateCheck = checkbox => {
    if(!checkbox.checked) {
      setError(checkbox, 'You must accept the terms')
      return false;
    }
    else {
      setSuccess(checkbox)
      return true;
    }
  }
  //    ERROR & SUCCESS
const setError = (input, textMessage) => {
  const parent = input.parentElement;
  parent.classList.add('is-invalid');
  parent.classList.remove('is-valid');
  parent.querySelector('.invalid-input').innerText = textMessage;
}
const setSuccess = input => {
  const parent = input.parentElement;
  parent.classList.remove('is-invalid');
  parent.classList.add('is-valid');
}
const validate = input => {
  switch(input.type) {
    case 'text': return validateText(input)
    case 'email': return validateEmail(input)
    case 'checkbox': return validateCheck(input)
    default:
      break;
  }
}

//      SUBMIT

const listUsers = () => {
  output.innerHTML = '';
  todos.forEach(user => {
    output.innerHTML += `
      <div id="${user.id}" class="d-flex justify-content-between align-items-center border bg-white p-2 mb-2">
        <p class="m-0 h4">${user.title}</p>
        <button type="button" class="btn btn-danger btn-sm">X</button>
      </div>
    `;

  })

}


form.addEventListener('submit', e => {
e.preventDefault();

  validateText(firstName);
  validateText(lastName);
  validateText(email);
  validateText(tac);



  errors = []

  for(let i = 0; i < form.length; i++) {
    errors[i] = validate(form[i])
  }
  console.log(errors)

  if(!errors.includes(false)) {
    const user = {
      id: Date.now().toString(),
      firstName : firstName.value,
      lastName : lastName.value,
      email : email.value,
    }
    console.log(user);
  }
  
})

  output.addEventListener('click', e => {
    // console.log(e.target.parentNode.id)
    if(e.target.type === 'button') {
      users = users.filter(user => user.id !== e.target.parentNode.id);
      listUsers();
    }
})

