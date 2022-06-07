<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BlackPink 방명록</title>
<link rel="stylesheet" type="text/css" href="/www/css/w3.css">
<link rel="stylesheet" type="text/css" href="/www/css/user.css">
<script type="text/javascript" src="/www/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/www/js/gBoard/gboard.js?ver=4"></script>
<style type="text/css">
	.w3-button{
		padding: 1px 16px;
	}
	.box120 {
		width: 135px;
	}
</style>
<script type="text/javascript">
$(document).ready(function(){
	if('${CNT}' == 0) {
		alert('보여주세요');
	$.ajax ({
		url: '/whistle/guestBoard/gBoardWrite.blp',
		type: 'post',
		dataType: 'json',
		success: function(obj) {
			var mno = obj.mno;
			var avt = obj.avatar;
			var id = obj.id;
			
			$('#brd').append(
				'<div class="w3-content mxw650 w3-margin-top">' +
				'<form method="post" action="/whistle/guestBoard/gBoardWriteProc.blp" name="frm" id="frm"' + 
				'class="w3-col w3-round-large w3-card-4 w3-margin-bottom w3-padding mgb20">' +
						'<input type="hidden" name="mno" value="'+ mno +'">' +
						'<div class="w3-col box120 pdAll10 w3-border-right w3-border-deep-orange">' +
						'	<img src="/whistle/resources/img/avatar/'+ avt +'" class="inblock avtBox100 w3-border w3-border-grey">' +
						'</div>' +
						'<div class="w3-rest w3-padding">' +
							'<div class="w3-col w3-border-bottom ">' +
								'<span class="mgb10 ft10 "><b>'+ id +'</b></span>' +
								'<!-- <span class="w3-button w3-right w3-red w3-hover-orange mgb10 ft10">등록</span> -->' +
							'</div>' +
							'<div class="w3-col w3-margin-top">' +
								'<textarea name="body" id="body"' +
									'class="w3-col w3-padding ft12 w3-border-orange" style="resize: none; height: 100%"></textarea>' +
							'</div>' +
						'</div>' +
					'<input type="hidden" id="nowPage" name="nowPage" value="${param.nowPage}">' +
				'</form>' +
				'<div class="w3-col w3-card-4">' +
					'<div class="w3-third w3-button w3-green w3-hover-lime" id="lbtn">list</div>' +
					'<div class="w3-third w3-button w3-amber w3-hover-yellow" id="rbtn">reset</div>' +
					'<div class="w3-third w3-button w3-deep-orange w3-hover-aqua" id="wbtn">글등록</div>' +
				'</div>' +
				'</div>'
			);
			$('#brd').slideToggle();
			alert('보여주세요2');
		},
		error: function(){
			alert('연결 실패');
		}
	});
	
	};
});
</script>
</head>
<body>

	<div class="w3-content mxw650 w3-margin-top">
		<header class="w3-col w3-card-4 mgb20">
			<h1 class="w3-pink w3-center w3-padding mg0">BlackPink 방명록</h1>
			<nav class="w3-bar w3-yellow">
				<div class="w3-col w3-button w150 w3-small w3-green" id="hbtn">home</div> 
<c:if test="${empty SID}">
				<div class="w3-col w3-button w150 w3-small w3-deep-orange w3-right" id="lbtn">login</div> 
				<div class="w3-col w3-button w150 w3-small w3-orange w3-right" id="jbtn">join</div>  
</c:if>
<c:if test="${not empty SID}">
				<div class="w3-col w3-button w150 w3-small w3-red w3-right" id="obtn">LogOut</div>  
	<c:if test="${CNT eq 0}">
				<div class="w3-col w3-button w150 w3-small w3-deep-orange w3-right" id="wbtn">글작성</div> 
	</c:if>
</c:if>
			</nav>
		</header>
		
<c:forEach var="data" items="${LIST }">	
		<!-- 페이지 본문 -->
		<div class="w3-col w3-round-large w3-card-4 w3-margin-bottom w3-padding">
			<div class="w3-col box120 pdAll10 w3-border-right">
				<img src="/www/img/avatar/${data.avatar}" class="inblock avtBox100 w3-border w3-border-grey">
			</div>
			<div class="w3-rest w3-padding">
				<div class="w3-col w3-border-bottom ">
					<span class="mgb10 ft10 "><b>${data.id }</b></span>
					<span class="w3-right mgb10 ft10"><small>${data.sdate}</small></span>
				</div>
				<div class="w3-col w3-margin-top">
					<span class="w3-col w3-padding ft12">${data.body}</span>
				</div>
			</div>
		</div>
</c:forEach>		

		<!-- 페이지 처리 -->
		<div class="w3-center">
			<div class="w3-bar w3-border w3-margin-top w3-margin-bottom">
			<c:if test="${PAGE.startPage eq 1}">
				<div class="w3-bar-item w3-light-grey">&laquo;</div>
			</c:if>
			<c:if test="${PAGE.startPage ne 1}">
				<div class="w3-bar-item w3-button w3-hover-blue pbtn" id="${PAGE.startPage -1}">&laquo;</div>
			</c:if>
	<c:forEach var="page" begin="${PAGE.startPage}" end="${PAGE.endPage}">
			<c:if test="${page eq PAGE.nowPage}">
				<div class="w3-bar-item w3-orange">${page}</div>
			</c:if>
			<c:if test="${page ne PAGE.nowPage}">
				<div class="w3-bar-item w3-button w3-hover-blue pbtn" id="${page}">${page}</div>
			</c:if>
	</c:forEach>
			<c:if test="${PAGE.endPage eq PAGE.totalPage}">
				<div class="w3-bar-item w3-light-grey">&raquo;</div>
			</c:if>
			<c:if test="${PAGE.endPage ne PAGE.totalPage}">
				<div class="w3-bar-item w3-button w3-hover-blue pbtn" id="${PAGE.endPage + 1}">&raquo;</div>
			</c:if>
			</div>
		<!-- 페이지 처리 태그 끝 -->
		</div>
		<!-- 데이터 전송용 form 태그 -->
		<form method="post" action="/www/gBoard/gBoardList.blp"	id="frm" name="frm">
			<input type="hidden" id="nowPage" name="nowPage" value="${PAGE.nowPage}">
			<div id="brd" name="brd" class="hidden">
			</div>	
		</form>
	</div>
	
</body>
</html>