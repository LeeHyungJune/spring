
$(document).ready(function(){
	//	회원가입 버튼 클릭이벤트
	$('#jbtn').click(function(){
		$(location).attr('href','/www/member/join.blp');
	});
	
	$('#lbtn').click(function(){
		$(location).attr('href','/www/member/login.blp');
	});
	
	$('#obtn').click(function(){
		$(location).attr('href','/www/member/logout.blp');
	});
	
	$('#mlbtn').click(function(){
		$(location).attr('href','/www/member/memberList.blp');
	});
	
	$('#ibtn').click(function(){
		$('#frm').attr('action', '/www/member/myInfo.blp');
		$('#frm').submit();
	});
	
	$('#gbtn').click(function(){
		$(location).attr('href','/www/guestBoard/gBoardList.blp');
	});
	
	$('#rbtn').click(function(){
		$(location).attr('href','/www/reboard/reboardList.blp');
	});
	
	$('#fbtn').click(function(){
		$(location).attr('href','/www/board/boardList.blp');
	});
});