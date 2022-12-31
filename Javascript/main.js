window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  
    

  function namecheck(){
    var name=document.getElementById("name").value
    var trimmedname=name.trim()
    var alphabets=/^[A-Za-z ]+$/;
    if(trimmedname.match(alphabets)){
      document.getElementById("errorname").innerHTML ="";
      return true;
    }
    else if(trimmedname== null || trimmedname==""){
      document.getElementById("errorname").innerHTML ="This field is required";
      return false;
    }
    else{
      document.getElementById("errorname").innerHTML ="Enter alphabets only";
      return false;
    }
  }

  function emailcheck(){
    var Email=document.getElementById("Email").value
    var trimmedemail=Email.trim()
    var emailpattern=/\S+@\S*(\.\w{2,3})+$/g;
    if(trimmedemail.match(emailpattern)){
      document.getElementById("erroremail").innerHTML ="";
      return true;
    }
    else if(trimmedemail== null || trimmedemail==""){
      document.getElementById("erroremail").innerHTML ="This field is required";
      return false;
    }
    else{
      document.getElementById("erroremail").innerHTML ="Enter valid  E-mail";
      return false;
    }
  }
  
  function msgcheck(){
    var Message=document.getElementById("Message").value
    var trimmedmsg=Message.trim()
    
    if(trimmedmsg== null || trimmedmsg==""){
      document.getElementById("errormsg").innerHTML ="This field is required";
      return false;
    }
    else{
      document.getElementById("errormsg").innerHTML ="";
      return true;
    }
  }
  



  // function phonecheck(){
  //   var Phone=document.getElementById("Phone").value
  //   var trimmedphone=Phone.trim()
  //   var phonepattern=/[0-9]/;
  //   var count=Phone.length;
  //   if(trimmedphone.match(phonepattern) && count==10){
  //     document.getElementById("errorphone").innerHTML ="";
  //     return true;
  //   }
  //   else if(trimmedphone== null || trimmedphone==""){
  //     document.getElementById("errorphone").innerHTML ="This field is required";
  //     return false;
  //   }
  //   else{
  //     document.getElementById("errorphone").innerHTML ="Enter a valid Phone number";
  //     return false;
  //   }
  // }


  
     
     