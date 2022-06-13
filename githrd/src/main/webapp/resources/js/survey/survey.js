$(document).ready(function(){
	$('.yet').click(function() {
		var sno = $(this).attr('id');
		var txt = $(this).html();
		
		alert(txt);
		
		txt = txt.substring(txt.indexOf('.') + 2);
		
		
		$('#title').val(txt);
		$('#sino').val(sno);
		
		$('#frm').submit();
	});
});