$(document).ready(function(){
	
	$('#jbtn').click(function(){
		$(location).attr('href','/www/member/join.blp');
	});
	
	$('#lbtn').click(function(){
		$(location).attr('href','/www/member/login.blp');
	});
	
	$('#obtn').click(function(){
		$('#frm').attr('action', '/www/member/logout.blp');
		$('#view').val('/www/reBoard/reBoardList.blp');
		$('#bno').prop('disabled', true);
		$('#frm').submit();
	});
	
	$('#hbtn').click(function(){
		$(location).attr('href','/www/');
	});
	
	$('#wbtn').click(function(){
		$('#bno').prop('disabled', true);
		$('#view').prop('disabled', true);
		$('#frm').attr('action', '/www/reBoard/reBoardWrite.blp');
		$('#frm').submit();
	});
	
	/*
	$('.menubtn').click(function(){
		var bid = $(this).attr('id');
		
		var addr = '/www/';
		
		switch(bid) {
			case 'hbtn':
			//	기본 주소를 사용
			break;
			case 'lbtn':
			addr = '/www/member/login.blp';
			break;
			case 'jbtn':
			addr = '/www/member/join.blp';
			break;
			case 'obtn':
			addr = '/www/member/logout.blp';
			break;
			case 'wbtn':
			$('#frm').attr('action','/www/reBoard/reBoardWrite.blp');
			$('#frm').submit();
			return;
		}
		
		$(location).attr('href', addr);
	});
	*/
	
	$('.pbtn').click(function(){
		//	페이지 번호 읽기
		var pno = $(this).attr('id');
		
		//	페이지 번호 세팅
		$('#nowPage').val(pno);
		
		//	폼 태그 전송
		$('#frm').submit();
		
	});
	
	$('#listbtn').click(function(){
		//	form 태그의 액션 속성값 변경
		$('#frm').attr('action','/www/reBoard/reBoardList.blp');
		//	사용하지 않는 태그 비활성화
		$('#mno').prop('disabled', true);
		$('#body').prop('disabled', true);
		$('#frm').submit();
	});
	
	$('#rbtn').click(function(){
		document.frm.reset();
	});
	/*	글쓰기	*/
	$('#wpbtn').click(function(){
		//	입력된 글 유효성 검사
		var txt = $('#body').val();
		
		txt = txt.trim();
		if(!txt || txt.length == 0) {
			$('#body').val('');
			$('#body').focus();
			return;
		}
		
		$('#body').val(txt);
		
		$('#frm').submit();
	});
	
	$('.w3-button.w70').click(function(){
		//	어떤 버튼이 클릭이 되었는지 알아내고
		var btxt = $(this).html();
		/*
		if(btxt.eqauls('댓글')) {
			
		}
		*/
		//	글번호 읽어오기
		var sno = $(this).parent().attr('id');
		
		$('#bno').val(sno);
		
		if(btxt == '댓글') {
			$('#frm').attr('action','/www/reBoard/reBoardComment.blp');
		} else if(btxt == '삭제'){
			$('#frm').attr('action', '/www/reBoard/reBoardDel.blp');
		} else if(btxt == '수정') {
			$('#frm').attr('action', '/www/reBoard/reBoardEdit.blp');
		}
		$('#frm').submit();
		
	});
	
	//	댓글 등록 버튼 클릭 이벤트
	$('#cmtbtn').click(function(){
		var btxt = $('#body').val();
		btxt = btxt.trim();
		
		if(!btxt) {
			$('#body').focus();
			return;
		}
		
		if(btxt.length > 200) {
			btxt = btxt.substring(0,200);
			$('#body').val(btxt);
			alert('코멘트 의 글자수는 200자를 초과할 수 없습니다.');
			return;
		}
		
		$('#frm').submit();
		
	});
	
	$('#editbtn').click(function(){
		var btxt = $('#body').val();
		var otxt = $('#obody').val();
		
		if(btxt == otxt) {
			alert('수정하려는 내용과 원 내용이 동일합니다.');
			return;
		}
		
		if(btxt.length > 200) {
			btxt = btxt.substring(0,200);
			$('#body').val(btxt);
			alert('코멘트 의 글자수는 200자를 초과할 수 없습니다.');
			return;
		}
		
		
		$('#frm').submit();
	});
});