$(document).ready(function(){
	$('#hbtn').click(function(){
		$(location).attr('href','/www/');
	});
	
	$('#lbtn').click(function(){
		$(location).attr('href','/www/member/login.blp');
	});
	
	$('#jbtn').click(function(){
		$(location).attr('href','/www/member/join.blp');
	});	
	
	$('#obtn').click(function(){
		$(location).attr('href','/www/member/logout.blp');
	});	
	
	$('.pbtn').click(function(){
		//	데이터 읽어오고
		var sno = $(this).attr('id');
		
		//	데이터 세팅하고
		$('#nowPage').val(sno);
		$('#frm').submit();
	});
	
	$('#wbtn').click(function(){
		/*
			get 방식으로 요청
			$('#frm').attr('href','/www/gBoard/gBoardWrite.blp?nowPage=' + $('#nowPage').val());
			왜 wbtn 으로 나올까?
		*/
		
		//	post 방식으로 요청
		$('#frm').attr('action','/www/gBoard/gBoardWrite.blp');
		$('#frm').submit();
	});
	
	$('#addbtn').click(function(){
		var str = $('#body').val();
		if(!str) {
			$('#body').focus();
			return;
		}
		$('#frm').submit();
	});
});
