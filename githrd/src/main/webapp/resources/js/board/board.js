$(document).ready(function(){
	/* 페이지 버튼 클릭이벤트 처리 */
	$('.pbtn').click(function(){
		// 페이지번호 읽고
		var spage = $(this).attr('id');
		
		// 페이지 번호 셋팅하고
		$('#nowPage').val(spage);
		$('#bno').prop('disabled', true);
		
		// 폼 태그 전송
		$('#frm').attr('action', '/www/board/boardList.blp');
		$('#frm').submit();
	});
	
	/*
	$('.menubtn').not('#wbtn').click(function(){
		var bid = $(this).attr('id');
		
		var addr = '/www/';
		switch(bid){
		case 'hbtn':
			// 기본 주소를 사용
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
		}
		
		$(location).attr('href', addr);
	});
	*/
	
	$('#hbtn').click(function(){
		$(location).attr('href','/www/');
	});
	
	$('#lbtn').click(function(){
		$('#vw').val('/www/board/boardList.blp'); 
		$('#frm').attr('action','/www/member/login.blp');
		$('#frm').submit();
	});
	
	$('#jbtn').click(function(){
		$(location).attr('href','/www/member/join.blp');
	});	
	
	$('#obtn').click(function(){
		$('#vw').val('/www/board/boardList.blp');
		$('#frm').attr('action', '/www/member/logout.blp');
		$('#frm').submit();
	});
	
	$('#wbtn').click(function(){
		$('#frm').attr('action', '/www/board/boardWrite.blp');
		$('#frm').submit();
	});
	/*
	$('#filebox').on('change', '.upfile', function(e){
		var txt = $(this).val();
		var len = $('.upfile').length;
		if(!txt && len > 1){
			$('#img' + $(this).attr('id').substring(4)).remove();
			$(this).remove();
			if($('.pic').length == 0){
				$('#previewbox').slideUp(100);
			}
		} else {
			$('#filebox').append('<input type="file" class="w3-input w3-border w3-margin-bottom upfile">');
			
			$('#previewbox').stop().slideUp(300, function(){
				
				var box = document.createElement('div');
				$(box).attr('class', 'inblock picbox');
				var img = document.createElement('img');
				$(img).attr('class', 'pic');
				var path = URL.createObjectURL(e.target.files[0]);
				$(img).attr('src', path);
				$(box).append($(img));
				$('#preview').append($(box));
				
				var cnt = $('.picbox').length;
				for(i = 1; i <= cnt ; i++ ){
					$('.picbox').eq(i-1).attr('id', 'img' + i);
				}
				$('#previewbox').stop().slideDown(300);
			});
		}
		len = $('.upfile').length;
		for(i = 1; i < len ; i++ ){
			$('.upfile').eq(i-1).attr('id', 'file' + i);
			$('.upfile').eq(i-1).attr('name', 'file' + i);
		}
	});
	*/
	/*
	$('#wpbtn').click(function(){
		var title = $('#title').val();
		if(!title) {
			$('#title').focus();
			return;
		}
		var body = $('#body').val();
		if(!body){
			$('#body').focus();
			return;
		}
		
		var el = $('input[type="file"]');
		
		for(i = 0 ; i < $(el).length ; i++ ){
			var tmp = $(el).eq(i).val();
			if(!tmp){
				$(el).eq(i).prop('disabled', true);
			}
		}
		
		$('.upfile').last().prop('disabled', true);
		
		$('#frm').submit();
	});
	*/
	$('.brdList').click(function(){
		var sno = $(this).attr('id');
		
		$(document.frm.bno).val(sno);
		
		$('#frm').submit();
	});
	
	$('#rbtn').click(function(){
		document.frm.reset();
	});
	
	$('#listbtn').click(function(){
		$('#frm').attr('action','/www/board/boardList.blp');
		$('#frm').submit();
	});
	
	$('#filebox').on('change', '.upfile', function(evt){
		var str = $(this).val();
		var index = $(this).index();
		var tmp = $('.upfile');
		var max = tmp.length;
		
		if(!str){
			$(this).remove();
			$('.picbox').eq(index).remove();
			return;
		}
		
		var path = URL.createObjectURL(evt.target.files[0]);
		var el = $('.upfile');
		if((index + 1) != el.length){
			$('.infoAvtBox').eq(index).attr('src', path);
		}
		
		if(index == max -1 ){
			$('#filebox').append('<input type="file" name="file" class="w3-input w3-border w3-margin-bottom upfile">');
			$('#preview').append('<div class="inblock pdAll10 picbox w3-card-4"><div class="w3-col w3-border" style="width: 100%; height: 100%; overflow: hidden;"> '+
						'<img src="' + path + '" class="infoAvtBox">'+
					'</div></div>');
		}
		
		
		$('#previewbox').css('display', 'block');
	});
	
	$('#wpbtn').click(function(){
		//	비어있는 input 태그 비활성 시켜놓고
		$('.upfile').last().prop('disabled', true);
		
		//	데이터 유효성 검사
		var title = $('#title').val();
		if(!title){
			$('#title').focus();
		}
		var body = $('#body').val();
		if(!body){
			$('#body').focus();
		}
		
		$('#frm').submit();
	});
	
	//	수정버튼 이벤트 처리
	$('#edit').click(function(){
		$('#frm').attr('action','/www/board/boardEdit.blp');
		$('#frm').submit();
	});
	
	
	//	첨부파일 삭제 이벤트
	$('.evtPic').click(function(){
		//	파일번호 꺼내오고
		var sno = $(this).attr('id');
		var el = $(this);
		
		if(confirm("삭제하시겠습니까?")){
			$.ajax({
				url: '/www/board/fileDel.blp',
				type: 'post',
				dataType: 'json',
				data: {
					fno : sno
				},
				success: function(data) {
					if(data.result == 'OK') {
						$(el).remove();
					}
				},
				error: function() {
					alert('### 통신에러 ###');
				}
			});
			
		}
	});
	
	//	글수정 버튼 이벤트
	$('#editProc').click(function(){
		$('.upfile').last().prop('disabled', true);
		
		//	데이터 수정 여부 검사
		var otitle = $('#otitle').val();
		var obody = $('#obody').val();
		
		var title = $('#title').val();
		var body = $('#body').val();
		
		if(otitle == title){
			$('#title').prop('disabled', true);
		}
		if(obody == body){
			$('#body').prop('disabled', true);
		}
		
		if(otitle == title && obody == body && $('#filebox > input').length == 1) {
			return;
		}
		
		$('#frm').submit();
		
	});
	
	//	글삭제 버튼 이벤트
	$('#dbtn').click(function(){
		$('#frm').attr('action', '/www/board/boardDel.blp');
		$('#frm').submit();
	});
});