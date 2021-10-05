document.getElementById("name").addEventListener("blur",function(e){
	
	 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your name");
	e.target.style.background="red";
	}
	
	else{
		  var regex= /^[a-zA-Z\ .]{3,7}$/;
		  if(!regex.test(e.target.value))
		  {alert("your name no valide");
	       e.target.style.background="red";
		  }
	   
	   
	    }

			
});
document.getElementById("usernmae").addEventListener('blur',function(e){
	 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your name");
	e.target.style.background="red";
	}
	
	else{
		  var regex= /^[a-zA-Z\ .]{3,7}$/;
		  if(!regex.test(e.target.value))
		  
		  {alert("your usernmae no valide");
	       e.target.style.background="red";
		  }
	   
	   
	    }

			
});
document.getElementById("email").addEventListener("blur",function(e){
	 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your email");
	 e.target.style.background="red";
	}
	else{
		var regex=/.+@.+/;
		if(!regex.test(e.target.value))
		{alert("your email not valide");
		e.target.style.background="red";
		}
	}
});
document.getElementById("tel").addEventListener("blur",function(e){
 e.target.style.background="white";
	if(e.target.value==="")
	{alert("Please make sure you entered your telephone number");
	 e.target.style.background="red";
	}
	else{
		var regex=/^[0-9]{8}$/;
		if(!regex.test(e.target.value))
		{alert("your telephone number not valide");
		e.target.style.background="red";
		}
	}
});

var form=document.querySelector("form");
form.addEventListener("submit",function(e){
	
	var name=form.elements.name.value;
	var email=form.elements.email.value;
	var username=form.elements.username.value;
	var tel=form.elements.tel.value;
	if(name!==""&&email!==""&&username!==""&&tel!=="")
	{
	document.getElementById("messages").textContent="You join :) ";
	var mes=document.getElementById("messages");
	mes.style.backgroundImage="linear-gradient(#fff,black,#fff)";
	mes.style.height="25px";
	mes.style.paddingTop="10px";
	mes.style.width="100px";
	mes.style.textAlign="center";
	}
	e.preventDefault();
});
