$(document).ready(function(){
	$('#pPanel').css('display','none');
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
	
	$('#scate').change(function(){
	
		$('#pPanel').css('display','none');
		$('#pPanel').html('');
		var sno = $(this).val();
		
		$.ajax({
			url: '/www/cate/productList.blp',
			type: 'post',
			dataType: 'json',
			data: {
				cno : sno
			},
			success: function(arr){
				if(arr.length > 0) {
					for(var i = 0 ; i < arr.length ; i++) {
						var stag = '<div class="w3-third pdAll5 w3-center product"  id="'+ arr[i].pno +'">'+
									'<div class="w3-col w3-card-4 pdAll5">'+
								     '<img src="' + (arr[i].dir + arr[i].sname) + '" alt="Product" style="width:100%">'+
								     '<div class="w3-col" style="height: 92px;"><h3>'+ arr[i].pname +'</h3></div>'+
								     '<p>가 격 : '+ arr[i].price +'</p>'+
								     '<p>제조사 : '+ arr[i].manuf_co +'</p>'+
								    '</div>'+
									'</div>';
								 
						$('#pPanel').append(stag);
					}
						$('#pPanel').css('display','block');
				}
			},
			error: function(){
				alert('### 통신 에러 ###');
			}
		});
	});
	
	$('#pPanel').on('click', '.product', function(){
		//	할일
		//	pno 꺼내오기
		var sno = $(this).attr('id');
		
		/*
		//	get 넘기기
		$(location).attr('href', '/www/cate/productDetail.blp')
		*/
		
		//	post 넘기기
		$(document.frm.pno).val(sno);
		$('#frm').submit();
	})
	
});