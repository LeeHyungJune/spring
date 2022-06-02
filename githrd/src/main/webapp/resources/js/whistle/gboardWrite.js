//	gBoardWrite.js
$(document).ready(function(){
	$('#hbtn').click(function(){
		$(location).attr('href','/whistle/');
	});
	
	$('#obtn').click(function(){
		$(location).attr('href','/whistle/member/logout.blp');
	});	
	
	$('#lbtn').click(function(){
		//	본문태그 비활성
		$('#body').prop('disabled', true);
		$('#frm').attr('action','/whistle/guestBoard/gBoardList.blp?nowPage=' + $('#nowPage').val());
		$('frm').submit();
	});
	
	$('#rbtn').click(function(){
		document.frm.reset();
	})
	
	$('#wbtn').click(function(){
		//	할일
		//	입력데이터 유효성 확인
		
		var body = $('#body').val();
		body = body.trim();
		
		if(!body || body.length == 0) {
			$('#body').val('');
			$('#body').focus();
			return;
		}
		//	폼 전송
		$('#frm').submit();
		
	});
	
});