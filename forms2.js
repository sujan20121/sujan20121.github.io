console.log('forms2 connected')



function f1() {
  var form_obj = document.myform;
  var Username = form_obj.name.value;
  var email = form_obj.email.value;
  var age = form_obj.age.value;
  var pswd = form_obj.pswd.value;
  var c_pswd = form_obj.c_pswd.value;
        Validate(Username);

        ValidateEmail(email);
            if(isNaN(age))
            {
              alert('Please input whole number');
            }

            if (pswd == "" || c_pswd == "") {
            alert('Password field is required');
            }

            if(pswd != c_pswd){
              alert('The password feilds mismatch');
            }

            alert('You entered:\n Username:' + Username + '\nEmail:  ' +email+'\nAge:  ' + age );
}

function Validate(Username)
{
  if (Username == null || Username == "") {
    alert("Username can't be empty");

  }
}

function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat))
    {
      return true;
    }
  else
    {
      alert("You have entered an invalid email address!");
      return false;
    }
}

function f2() {
  var form_obj = document.myform;
  form_obj.name.value = "";
  form_obj.email.value = "";
  form_obj.age.value = "";
  form_obj.pswd.value = "";
  form_obj.c_pswd.value = "";
}
