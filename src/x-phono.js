	 var root = null;
	 var phono;
	 Polymer('x-phono', {

		 ready: function () {
			 root = this.shadowRoot || this.webkitShadowRoot;
			 this.sipnumber = this.getAttribute("sipnumber");
			 this.addEventListener('click', this.phonoClick);

			 phono = $.phono({
				 apiKey: "xxxxx ", //api Key provided by any SIP provider (e.g. PHONO infrastructure, server side)
				 onReady: function () {
					 root.querySelector("#phonoButton").disabled = false;
					 root.querySelector("#status").innerHTML = "Ready to phone call";
					 root.querySelector("#phonoButton").value = "CLICK HERE TO CALL";
				 },
			 });
		 },

		 attributeChanged: function (attrName, oldVal, newVal) {
			 this.sipnumber = newVal;
		 },

		 phonoClick: function (e) {
			 root.querySelector("#phonoButton").disabled = true;
			 root.querySelector("#phonoButton").value = "CALLING";
			 phono.phone.dial(this.sipnumber, {
				 onRing: function () {
					 root.querySelector("#status").innerHTML = "Ringing";
				 },
				 onAnswer: function () {
					 root.querySelector("#status").innerHTML = "Answered";
				 },
				 onHangup: function () {
					 root.querySelector("#phonoButton").disabled = false;
					 root.querySelector("#phonoButton").value = "CALLING";
					 root.querySelector("#status").innerHTML = "Hangup";
				 }
			 });
		 },

	 });