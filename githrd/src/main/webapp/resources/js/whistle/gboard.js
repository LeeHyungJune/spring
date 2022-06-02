$(document).ready(function(){
	$('#hbtn').click(function(){
		$(location).attr('href','/whistle/');
	});
	
	$('#lbtn').click(function(){
		$(location).attr('href','/whistle/member/login.blp');
	});
	
	$('#jbtn').click(function(){
		$(location).attr('href','/whistle/member/join.blp');
	});	
	
	$('#obtn').click(function(){
		$(location).attr('href','/whistle/member/logout.blp');
	});	
	
	$('.pbtn').click(function(){
		//	데이터 읽어오고
		var page = $(this).attr('id');
		
		//	데이터 세팅하고
		$('#nowPage').val(page);
		$('#frm').submit();
	});
	
	$('#wbtn').click(function(){
		/*
			get 방식으로 요청
			$('#frm').attr('href','/whistle/guestBoard/gBoardWrite.blp?nowPage=' + $('#nowPage').val());
			왜 wbtn 으로 나올까?
		*/
		
		//	post 방식으로 요청
		$('#frm').attr('action','/whistle/guestBoard/gBoardWrite.blp');
		$('#frm').submit();
	});
});
