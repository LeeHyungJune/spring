$(document).ready(function(){
	$('#lbtn').click(function(){
		$(location).attr('href','/www/member/memberList.blp');
	});
	
	
	$('#dbtn').click(function(){
		//	보낼 데이터 읽기
		var sno = $('#mno').html();
		var sid = $('#id').html();
		//	보낼 데이터 세팅
		$('#smno').val(sno);
		$('#sid').val(sid);
		//	보낼주소 수정하고
		$('#frm').attr('action','/www/member/delMember.blp');
		
		if(confirm('정말 탈퇴하시겠습니까?')){
			//	form 태그 완성이 됐으니 전송한다.
			$('#frm').submit();
		}
	});
	
	$('#ebtn').click(function(){
		$('#frm').attr('action','/www/member/myInfoEdit.blp');
		$('#frm').submit();
	});
});