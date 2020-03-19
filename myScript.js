function Validate()
{ 
	 
	 if( document.getElementById("Nameinput").value =="" )
  {
	  alert("Please provide your Name!");
	  document.getElementById("Nameinput").focus();
	  return false;

  }
  if( document.getElementById("Email").value =="" )
  {
	  alert("Please provide your email!");
	   document.getElementById("Email").focus();
	  return false;
	
	
  }
  else
  {  
	var emailID = document.getElementById("Email").value;
	
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");

         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            return false;
         }
        
	  
  }
 
   if( document.getElementById("Phone1").value =="" )
  {
	  alert("Please provide your Phone!");
	  	   document.getElementById("Phone1").focus();
	  return false;
	
	
  }
  if( document.getElementById("message").value =="" )
  {
	  alert("Please type in your message!");
	   document.getElementById("message").focus();
	  return false;
	
	
  }
}	
function sendMail() {
    var link = "mailto:soma.j18@gmail.com"
             + "?cc=myCCaddress@example.com"
			+ "&phone=" + escape(document.getElementById('Nameinput').value)
             + "&phone=" + escape(document.getElementById('Phone1').value)
             + "&body=" + escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  /*if( document.myForm.Name.value == "" ) {
  alert( "Please provide your name!" );
  document.myForm.Name.focus() ;
  return false;
  }
  if( document.myForm.Email.value == "" ) {
  alert( "Please provide your Email!" );
  document.myForm.Email.focus() ;
  return false;
  if( document.myForm.Phone.value == "" ) {
  alert( "Please provide your Email!" );
  document.myForm.Phone.focus() ;
  return false;
  if (validateEmail()==false) {
    return false;
  }
  if( document.myForm.message.value == "" ) {
  alert( "Please type in your message!" );
  document.myForm.message.focus() ;
  return false;
}
function validateEmail() {
  alert( "Please type in your message!" );
         var emailID = document.myForm.EMail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");

         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            return false;
         }
         return( true );
      }*/
