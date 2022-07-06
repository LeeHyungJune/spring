
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
		$(location).attr('href','/www/gBoard/gBoardList.blp');
	});
	
	$('#rbtn').click(function(){
		$(location).attr('href','/www/reBoard/reBoardList.blp');
	});
	
	$('#fbtn').click(function(){
		$(location).attr('href','/www/board/boardList.blp');
	});
	
	$('#sbtn').click(function(){
		$('#frm').attr('action', '/www/survey/surveyInfo.blp');
		$('#frm').submit();
	});
	
	$('#emp').click(function(){
		$(location).attr('href','/www/emp/empPage.blp');
	});
	
	$('#singer').click(function(){
		$(location).attr('href','/www/singer/singer.blp');
	});
	
	$('#cate').click(function(){
		$(location).attr('href','/www/cate/product.blp');
	});
	
	$('#msgClose').click(function(){
		$('#msgWin').css('display','none');
		
		$.ajax({
			url: '/www/mainMsgCheck.blp',
			type: 'post',
			dataType: 'json',
			success: function(data){
				if(data.result == 'OK'){
					//	처리 성공
					$('#msgWin').remove();
				}
			},
			error: function(){
				alert('### 통신에러 ###');
			}
		});
	});
});