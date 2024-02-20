let email = document.querySelector('#email');
let submitBtn = document.querySelector('#submitBtn');
let error = document.querySelector('#error');
let newsForm = document.querySelector("#newsForm");
let successArea = document.querySelector("#successArea");
let emailMatch =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


submitBtn.addEventListener('click',function(e){
    e.preventDefault();

    if (emailMatch.test(email.value) == false) 
        {
            // alert('Invalid Email Address');
            error.style.display="block";
            error.style.display="red";
            email.classList.add('active');
            return false;
        } 
         newsForm.style.display="none"; 
         successArea.style.display="block";
         email.classList.remove('active');

        return true;
  
});