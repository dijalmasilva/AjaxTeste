$(document).ready(function (){
	
});

function ajax() {
	$.ajax({
		url: '/',
		sucess: function (res){
			$('.result').text(res);
		}
	});
}