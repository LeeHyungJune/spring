$(document).ready(function(){
	$('#selList, #eList, #infoBox, #selName').css('display', 'none');
	
	$('#sel').change(function(){
		$('#infoBox').stop().slideUp(500);
		var txt = $(this).val();
		
		$.ajax({
			url: '/www/emp/selList.blp',
			type: 'post',
			dataType: 'json',
			data:{
				sel: txt
			},
			success: function(arr){
				$('#selList, #eList').css('display', 'none').html('<option disabled selected>### 분류선택 ###</option>');
				if(txt == 'dept'){
					
					for(var i = 0 ; i < arr.length; i++) {
						var str = '<option value=' + arr[i].dno + '>' + arr[i].dname + '</option>';
 						$('#selList').append(str);
 					}
				} else {
					for(var i = 0 ; i < arr.length; i++) {
						var str = '<option value=' + arr[i].job + '>' + arr[i].job + '</option>';
 						$('#selList').append(str);
 					}
				}
				//	selList 태그 보이게..
				$('#selList').css('display', 'block');
			},
			error: function(){
				alert("### 통신 오류 ###");
			}
		});
	});
	
	$('#selList').change(function(){
		$('#infoBox').stop().slideUp(500);
		//	할일
		//	1.	선택한 내용 알아내고 
		var txt = $(this).val();
		var prevSel = $(this).prev().val();
		
		var sendData = {};
		
		if(prevSel == 'job') {
			sendData = {
				job: txt
			};
		} else {
			sendData = {
				dno: txt
			};
		}
		
		$.ajax({
			url: '/www/emp/partList.blp',
			type: 'post',
			dataType: 'json',
			data: sendData,
			success: function(arr) {
				$('#eList').html('<option disabled selected># 조회분류선택 #</option>');
				for(var i = 0; i <arr.length; i++){
					$('#eList').append('<option value=' + arr[i].eno + '>' + arr[i].name + '</option>');
//					$('#eList').append('<option value=' + arr[i].eno + '><b>' + arr[i].name + '</b></option>');
				}
				$('#eList').css('display', 'block');
			},
			error: function(){
				alert('### 통신오류 ###');
			}
		});
	});
	
	// 사원 선택 이벤트 처리
	$('#eList, #selName').change(function(){
		//	할일
		//	1.	선택된 사원의 사원번호를 꺼내고
		var sno = $(this).val();
		
		/*
		var tmp = $('#eList > option:selected').text();
		
		alert(tmp);
		*/
		$('#infoBox').stop().slideUp(500, function(){
			$('.edata').html('');
		
			
			//	2.	사원번호 보내서 정보 꺼내오고
			$.ajax({
				url: '/www/emp/empInfo.blp',
				type: 'post',
				dataType: 'json',
				data: {
					eno : sno
				},
				success: function(data){
					//	3.	꺼내온 정보로 데이터 채우고
					$('.ename').html(data.name);
					$('#eno').html(data.eno);
					$('#job').html(data.job);
					$('#sal').html(data.sal);
					$('#comm').html(data.comm);
					$('#grade').html(data.grade);
					$('#dname').html(data.dname);
					$('#loc').html(data.loc);
					$('#mgr').html(data.sangsa);
					$('#hdate').html(data.sdate);
					//	4.	출력창 보여주고
					$('#infoBox').stop().slideDown(500);
				},
				error: function(){
					alert('### 통신 오류 ###');
				}
			});
		});
	});
	
	$('#selInitial').change(function(){
		$('#selName').html('<option class="w3-center" disalbed selected>### 이름 선택 ###</option>');
		$('#infoBox').stop().slideUp(500);
		//	할일
		//	선택된 이니셜 알아내고
		var ini = $(this).val();
		//	이니셜로 이름 리스트 조회
		$.ajax({
				url: '/www/emp/enameList.blp',
				type: 'post',
				dataType: 'json',
				data: {
					name : ini
				},
				success: function(arr){
					for(var i = 0; i < arr.length ; i++){
						var data = arr[i];
						var eno = data.eno;
						var name = data.name;
						
						$('#selName').append('<option class="w3-center" value='+ eno +'>'+ name +'</option>');
					}
					$('#selName').css('display', 'block');
				},
				error: function(){
					alert('### 통신 오류 ###');
				}
			});	
	});
	
	
	
	$('#closeWin').click(function() {
		$('#infoBox').stop().slideUp(500);
	});
	
	$('#hbtn').click(function(){
		$(location).attr('href','/www');
	});
	
});