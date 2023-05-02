function checkData() {
	var enterEmail = document.getElementById('email').value;
	var enterPwd = document.getElementById('pwd').value;

    var getEmail = localStorage.getItem('userEmail');
	var getPwd = localStorage.getItem('userPwd');

	if(enterEmail == getEmail && enterPwd == getPwd){
		window.location.href="index.html";
		alert("Log in!");
		}
		else
		{
			alert("Invalid details");
			return;
		}
	}


