$(document).ready(function(){
	let bandera = false;
	$('.fa-bars').click(function(event){
		event.preventDefault();
		if (bandera == false) {
			$('aside').css({

			width:"90%",
			});
			bandera = true;
		}else{
			$('aside').css({

			width:"0%",
		});
			bandera = false;
		}
	})
})