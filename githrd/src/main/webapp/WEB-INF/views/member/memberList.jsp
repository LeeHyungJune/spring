<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Member List</title>
<link rel="stylesheet" type="text/css" href="/www/css/w3.css">
<link rel="stylesheet" type="text/css" href="/www/css/base.css">
<script type="text/javascript" src="/www/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/www/js/member/memberList.js"></script>
<style type="text/css">
</style>
<script type="text/javascript">

</script>
</head>
<body>
	<form method="post" action="/whistle/member/memberInfo.blp" name="frm" id="frm">
	<!-- 
		이 폼태그는 데이터 전송용 태그이다.
		따라서 화면에 보여지면 곤란하고 
		이 폼 태그가 전송될 때 데이터는 
		이 태그가 감싸고 있는 input 태그만 전송이 된다.
	 -->
		<input type="hidden" name="mno" id="mno">
		<input type="hidden" name="id" id="id">
	</form>
	<div class="w3-content mx650 w3-center">
		<!-- 타이틀 태그 -->
		<h1 class="w3-pink w3-padding w3-margin w3-card-4">Githrd Member List</h1>
		<div class="w3-col">
<c:forEach var="data" items="${LIST }">
<!-- 
	아래 클래스에 입력한 lbtn 은 
	버튼 태그에 이벤트 등록용 클래스로 사용할 예정이다.
	
 -->
			<div class="w3-button box w150 w3-blue ml10 mb5 lbtn" id="${data.mno}">${data.name}</div>
</c:forEach>			
		
		</div>
			<div class="w3-col w3-margin-up">
				<div class="w3-button w3-col w3-orange w3-card-4 w3-hover-amber" id="hbtn">Home</div>
			</div>
	</div>
</body>
</html>