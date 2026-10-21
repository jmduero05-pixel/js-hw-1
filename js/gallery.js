/*Name this external file gallery.js*/
x= document.getElementById("image")

function upDate(previewPic){ 
  x.innerHTML = previewPic.alt
  x.style.backgroundImage= "url('"+previewPic.src+"')"
                            
	}

	function unDo(){
    x.style.backgroundImage= "url('')"
    x.innerHTML="Hover over an image below to display here."
  }