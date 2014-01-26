
			function init() 
			{
				document.querySelector("#getsipnumber").onkeydown = function(event) {
					//alert(event.target.value);
					setTimeout(function tempo() {
						var textWritten = document.querySelector("#getsipnumber").value;
						console.log("init::	getsipnumber	=>	textWritten == " + textWritten);					
						document.querySelector("x-phono").setAttribute("sipnumber", textWritten);
					}, 0);

				}
				document.querySelector("#getsipnumber").addEventListener("paste",  function(event) {
					//alert(event.target.value);
					//console.log("init::	getsipnumber	=>	event.target.value == " + event.target.value);
					setTimeout(function tempo() {
						var textPasted = document.querySelector("#getsipnumber").value;
						console.log("init::	getsipnumber	=>	textPasted == " + textPasted);
						document.querySelector("x-phono").setAttribute("sipnumber", textPasted);						
					}, 0);


					//alert();
				})		
				document.querySelector("#getsipnumber").addEventListener("blur",  function(event) {
					setTimeout(function tempo() {
						var textWritten = document.querySelector("#getsipnumber").value;
						console.log("init::	getsipnumber	=>	textWritten == " + textWritten);					
						document.querySelector("x-phono").setAttribute("sipnumber", textWritten);
					}, 0);				

				})	
				;
			}
