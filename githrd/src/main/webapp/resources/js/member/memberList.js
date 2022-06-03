$(document).ready(function(){
	$('#hbtn').click(function(){
		$(location).attr('href','/www/');
	});
	
	$('.lbtn').click(function(){
		//	클릭된 회원의 회원번호를 알아낸다.
		//	우리는 버튼 태그의 아이디 값으로 넣어뒀으니
		//	아이디 값을 읽어오면 된다.
		var sno = $(this).attr('id');
		
		/*
		//	get 방식
		$(location).attr('href', '/www/member/memberInfo.blp?mno=' + sno);
		*/
		
		//	Post 방식
		//	데이터 채우고
		$('#mno').val(sno);
		//	폼태그 전송
		$('#frm').attr('action','/www/member/memberInfo.blp');
		$('#frm').submit();
	});
});