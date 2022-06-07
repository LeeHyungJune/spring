$(document).ready(function(){
	// reset 버튼 클릭이벤트
	$('#rbtn').click(function(){
		document.frm.reset();
	});
	// 홈버튼 클릭이벤트
	$('#hbtn').click(function(){
		$(location).attr('href', '/www/main.blp');
	});
	
	/*
	// 수정버튼 클릭이벤트
	$('#ebtn').click(function(){
		// 할일
		// 수정된 데이터를 알아낸다.
		// 받은 데이터를 꺼내온다.
		var tmail = $('#tmail').val();
		var ttel = $('#ttel').val();
		var tano = $('#tano').val();
		
		// 입력한 데이터 꺼내오고
		var pw = $('#pw').val();
		var mail = $('#mail').val();
		var tel = $('#tel').val();
		var ano = $('[name="ano"]:checked').val();
		
		if(!pw){
			$('#pw').prop('disabled', true);
		}
		
		if(tmail == mail){
			// 메일이 수정 안된경우
			$('#mail').prop('disabled', true);
		}
		
		if(ttel == tel){
			$('#tel').prop('disabled', true);
		}
		
		if(tano == ano){
			$('[name="ano"]').prop('disabled', true);
		}
		
		if(!pw && (tmail == mail) && (ttel == tel) && (tano == ano)){
			// 수정을 한개도 하지 않는 경우..
			alert('아무것도 수정안함...');
			return;
		}
		
		// 보낼 주소 설정하고
		$('#frm').attr('action', '/www/member/infoEditProc');
		$('#frm').submit();
	});
	*/
	
	
	$('#ebtn').click(function(){
		//	할일
		//	데이터 유효성 검사
		var spw = $('#pw').val();
		var spw2 = $('#repw').val();
		
		var pwBool = false;
		var mailBool = false;
		var telBool = false;
		var anoBool = false;
		
		
		if(spw != spw2){
			$('#repw').val('');
			$('#repw').focus();
		}
		
		if(!spw){
			//	비밀번호를 수정하지 않는 경우이므로 비밀번호는 전송하지 않는다.
			$('#pw').prop('disabled', true);
		} else if (spw && spw != spw2) {
			pwBool = true;
		}
		
		var smail = $('#mail').val();
		if(smail == $('#tmail').val()){
			$('#mail').prop('disabled',true);
		} else {
			mailBool = true;
		}
		
		var stel = $('#tel').val();
		if(stel == $('#ttel').val()){
			$('#tel').prop('disabled',true);
		} else {
			telBool = true;
		}
		
		var sano = $('[name="ano"]:checked').val();
		if(sano == $('#tano').val() ){
			$('[name="ano"]').prop('disabled', true);
		} else {
			anoBool = true;
		}
		
		if(!(pwBool || mailBool || telBool || anoBool)) {
			//	수정데이터가 없는 경우이므로 뷰로 돌려보낸다.
			return;
		}
		$('#frm').attr('action', '/www/member/infoEditProc.blp');
		$('#frm').submit();
	});
	
});