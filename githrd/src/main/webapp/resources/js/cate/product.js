$(document).ready(function(){
	$('.w3-select').not('#xlcate').css('display','none');
	
	// $('#lcate, #mcate, #scate').css('display', 'none');
	
	$('.w3-select').not('#scate').change(function(){
		var sno = $(this).val();
		/*
		$('#lcate').css('display', 'none');
		$('#lcate').html('<option disabled selected>분류 선택</option>');
		*/
		
		var tarr = {
			'lcate' : '대분류 선택',
			'mcate' : '중분류 선택',
			'scate' : '소분류 선택'
		}
		
		var narr = {
			'lcate' : 'mcate',
			'mcate' : 'scate'
		}
		
		var el = $(this).parent().next().find('.w3-select');
		
		$(el).css('display', 'none');
		var tname = $(el).attr('id');
		
		if(tname == 'xlcate'){
			$('#lcate, #mcate, #scate').css('display','none');
		} else if (tname == 'lcate'){
			$('#mcate, #scate').css('display','none');
		} else if (tname == 'mcate'){
			$('#scate').css('display','none');
		}
		
		
		$(el).html('<option disabled selected>'+ tarr[tname] +'</option>');
		
		
		
		
		$.ajax({
			url: '/www/cate/cateList.blp',
			type: 'post',
			dataType: 'json',
			data: {
				cno : sno
			},
			success: function(arr){
				if(arr.length != 0) {
					for(var i = 0; i < arr.length ; i++){
							$(el).append('<option value="'+ arr[i].cno +'">'+arr[i].cname+'</option>');	
						}
						$(el).css('display','block');
				}
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
});