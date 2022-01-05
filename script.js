const regForm = document.querySelector('#regForm');

const validateFirstName = () => {
    const firstName = document.querySelector('#firstName');
    const firstNameError = document.querySelector('#firstName-error');
  
    if(firstName.value === '') {
      firstNameError.innerText = 'Du måste ange ett förnamn';
    } 
    else if(firstName.value.length < 2) {
      firstNameError.innerText = 'Du måste ange minst 2 tecken';
    } 
    else {
      firstNameError.innerText = ''
    }
  }
  const validateLastName = () => {
    const lastName = document.querySelector('#lastName');
    const lastNameError = document.querySelector('#lastName-error');
  
    if(lastName.value === '') {
      lastNameError.innerText = 'Du måste ange ett efternamn';
    } 
    else if(lastName.value.length < 2) {
      lastNameError.innerText = 'Du måste ange minst 2 tecken';
    } 
    else {
      lastNameError.innerText = ''
    }
  }

  
  
  
  const validate = (id) => {

    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error');
  
    if(input.value === '') {
      error.innerText = 'Du måste ange ett namn';
    }
    else if(input.value.length < 2) {
      error.innerText = 'Du måste ange minst 2 tecken';
    }
    else {
      error.innerText = '';
    }
  
  }
regForm.addEventListener('submit', function(e) {
  e.preventDefault();
  validate('#firstName');
  validate('#lastName');

  let user = {
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    address: e.currentTarget.address.value,
  }

  console.log(user);

})