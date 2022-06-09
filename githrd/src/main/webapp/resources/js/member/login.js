$(document).ready(function(){
	$('#lbtn').click(function(){
		$('#frm').attr('action', '/www/member/loginProc.blp');
		$('#frm').submit();
		
	});
	
	//	홈버튼 클릭 이벤트
	$('#hbtn').click(function(){
		$(location).attr('href','/www/');
	});
});