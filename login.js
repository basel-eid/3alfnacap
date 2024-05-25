var users = [{U_name:"user1",U_pass:"pass1"},{U_name:"user2",U_pass:"pass2"},{U_name:"Basel",U_pass:"Datdat11@"}];
function login(){
    var usrname = document.getElementById('loginname').value;
    var password = document.getElementById('loginpass').value;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].U_name == usrname && users[i].U_pass==password)
        {
            alert('login successfuly')
           
            window.location='home.html'
            return true;
        }
    }
    alert("not user found plz try again")
}
function isvalid(passsword)
{
  let upper=false;let lower=false;let digit=false;let sp=false;
  for(var i=0; i<passsword.length;i++)
  {
    if(passsword[i]>='A'&&passsword[i]<='Z')
    {
      upper=true;
    }
   else if(passsword[i]>='a'&&passsword[i]<='z')
   {
      lower = true;
    }
    else if(passsword[i]>='0'&&passsword[i]<='9')
    {
      digit = true;
    }
    else{
      sp=true;
    }
  }
  var valid=upper&&lower&&digit&&sp;
  return valid;
}
function signup()
{
    var a_name = document.getElementById('namesignup').value;
    var a_pass = document.getElementById('passsignup').value;
    var a_age = document.getElementById('age').value;
    var a_gender = document.getElementById('gender').value;
    var a_phone = document.getElementById('phonenum').value;
      if (isvalid(a_pass)) {
          alert('password is valid');
      }
       else 
       {
          alert('error in password plz try again');
       }
    for(var i = 0 ; i < users.length ; i++)
    {
      if(a_phone.length!=11)
      {
        alert("the phone must 11 numbers")
        return false;
      }
      if(a_age<=16 || a_age>=60)
      {
       alert("the gender must be betwwen 16 to 60")
       return false;
      }
      if(a_name<=5 || a_name>=10)
      {
       alert("Check username size")
       return false;
      }
      if(a_pass.length<=8)
      {
        alert("check the password length")
        return false;
      }
      else
      {
        alert('Signup succ');
        var user = {Username:a_name , Password:a_pass}
        users.push(user);
        console.log(user);
        return;
      }
    }
  }
  function updatepassword()
  {
    var namee = document.getElementById('fname').value;
    var newpass = document.getElementById('fpass').value;
    for(var i=0;i<users.length;i++)
    {
        if(users[i].U_name == namee)
        {
            users[i].U_pass = newpass;
            alert("password is changes")
            console.log(users);
            return true;
        }
    }
      alert("plz try again")
  }