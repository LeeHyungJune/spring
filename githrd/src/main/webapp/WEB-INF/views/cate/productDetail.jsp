<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BlackPink 게시판 상세보기</title>
<link rel="icon" type="image/png" sizes="32x32" href="/www/img/favicon/favicon-32x32.png">
<link rel="stylesheet" type="text/css" href="/www/css/w3.css">
<link rel="stylesheet" type="text/css" href="/www/css/user.css">
<script type="text/javascript" src="/www/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/www/js/board/board.js"></script>
<style type="text/css">
	label {
		font-size: 14pt;
		/* font-weight: bold; */
		color: gray;
		padding-right: 20px;
		text-align: right;
	}
	input[type="file"].w3-margin-bottom {
		margin-bottom: 5px!important;
	}
	.mgv0 {
		text-align: center;
	}
</style>
</head>
<body>
	<div class="w3-content mxw700">
		<h1 class="w3-blue w3-padding w3-center w3-card-4">상품 상세보기</h1>
		<div class="w3-col w3-card-4 frmpadding">
			<div class="w3-col pdAll5 w3-center product">
				<img src=" ${DATA.dir}${DATA.sname}" alt="Product" style="width:100%">
			</div>
			<div class="w3-col w3-margin-top w3-margin-bottom">
				<label class="w3-col s2">상품명</label>
				<h4 id="writer" class="w3-col m10 mgv0">${DATA.pname}</h4>
			</div>
			<div class="w3-col w3-margin-top w3-margin-bottom">
				<label class="w3-col s2">상세 스펙</label>
				<h4 id="title" class="w3-col m10 mgv0">${DATA.summary}</h4>
			</div>
			<div class="w3-col w3-margin-top w3-margin-bottom">
				<label class="w3-col s2">가격</label>
				<h4 id="body" class="w3-col m10 mgv0">${DATA.price}</h4>
			</div>
			<div class="w3-col w3-margin-top w3-margin-bottom">
				<label class="w3-col s2">등록일</label>
				<h4 id="wdate" class="w3-col m10 mgv0">${DATA.sdate}</h4>
			</div>
		</div>

		<div class="w3-col w3-margin-top w3-card-4">
			<div class="w3-half w3-button w3-blue" id="hbtn">home</div>
			<div class="w3-half w3-button w3-green" id="listbtn">리스트</div>
		</div>
	</div>
	
</body>
</html>