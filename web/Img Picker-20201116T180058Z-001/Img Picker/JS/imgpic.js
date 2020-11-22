// JavaScript Document
function pilih(){
 var pil=document.getElementById("form1").pic.value;
  if (pil=="1")
    {
        document.getElementById("img").innerHTML="<img src ='image/harimau.jpg'>";
		window.alert("Ini Adalah Gambar Dari harimau.jpg");
    }
	else if (pil=="2")
    {
        document.getElementById("img").innerHTML="<img src='image/mantan.jpg'>";
		window.alert("Ini Adalah Gambar Dari guguk.jpg");
    }
	else if (pil=="3")
    {
        document.getElementById("img").innerHTML="<img src='image/pinguin.jpg'>";
		window.alert("Ini Adalah Gambar Dari pinguin.jpg");
    }
	else if (pil=="4")
    {
        document.getElementById("img").innerHTML="<img src='image/kucing.jpg'>";
		window.alert("Ini Adalah Gambar dari kucing.jpg");
    }
	else if (pil=="5")
    {
        document.getElementById("img").innerHTML="<img src='image/sapi.jpg'>";
		window.alert("Ini Adalah Gambar Dari sapi.jpg");
    }
	else if (pil=="6")
    {
        document.getElementById("img").innerHTML="<img src='image/dinasourus.jpg'>";
		window.alert("Ini Adalah Gambar Dari dinosaurus.jpg");
    }
	else if (pil=="7")
    {
        document.getElementById("img").innerHTML="<img src='Image/buaya.jpg'>";
		window.alert("Ini Adalah Gambar Dari buaya.jpg");
    }
	else if (pil=="8")
    {
        document.getElementById("img").innerHTML="<img src='image/mantan 2.jpg'>";
		window.alert("Ini Adalah Gambar Dari monyet.jpg");
    }else{
		document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
	}
	
}
