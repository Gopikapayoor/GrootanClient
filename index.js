function test(){
	var input = document.getElementById("fileToUpload");
	var fd = new FormData();    
fd.append( 'file', input.files[0] );

$.ajax({
  url: "http://localhost:1234/postData",
  data: fd,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function(data){
  	//data = username.csv
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	var theUrl = "http://localhost:1234/uploadFile";
	console.log(data);
	var datas = {};
	datas["name"] = data;
	xmlhttp.open("POST", theUrl);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringify(datas));
	xmlhttp.onreadystatechange = () => {
		
	}

  }
});
}