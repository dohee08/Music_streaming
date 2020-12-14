$(document).ready(function(){
	/**
	 * 회원가입 유효성 체크
	 */
	$("#btnJoin").click(function(){
		if($("#name").val() == ""){
			alert("이름을 입력해주세요.");
			$("#name").focus();
			return false;
		}else if(!ruleCheck($("#id"))){
			return false;
		}else if($("#pass").val() == ""){
			alert("비밀번호를 입력해주세요.");
			$("#pass").focus();
			return false;
		}else if($("#cpass").val() == ""){
			alert("비밀번호 확인란을 입력해주세요.");
			$("#cpass").focus();
			return false;
		}else if($("#email1").val() == ""){
			alert("이메일 주소를 입력해주세요.");
			$("#email1").focus();
			return false;
		}else if($("#email3").val() == "선택"){
			alert("이메일 주소를 선택해주세요.");
			$("#email3").focus();
			return false;
		}else if($("#phone1").val() == "선택"){
			alert("휴대전화 번호를 선택해주세요.");
			$("#phone1").focus();
			return false;
		}else if($("#phone2").val() == ""){
			alert("휴대전화 번호을 입력해주세요.");
			$("#phone2").focus();
			return false;
		}else if($("#phone3").val() == ""){
			alert("휴대전화 번호를 입력해주세요.");
			$("#phone3").focus();
			return false;
		}else {
			/* joinForm.submit(); */
		} 
	});//유효성
	
	
	/**
	 * 비밀번호, 비밀번호 확인 체크
	 */
	$("#cpass").focusout(function(){
		if($("#pass").val() != "" && $("#cpass").val() != ""){
			if($("#pass").val() == $("#cpass").val()){
				$("#msg").text("패스워드가 동일합니다.").css("color","blue");
				$("#email1").focus();
				return true;
			}else {
				$("#msg").text("패스워드가 다릅니다. 다시 입력해주세요.").css("color","red");
				$("#pass").val("");
				$("#cpass").val("");
				$("#pass").focus();
				return false;
			}
		}
	});//비밀번호 확인 체크
	
	
	/**
	 * 이메일 주소 선택
	 */
	$("#email3").change(function(){
		if($(this).val() != "선택"){
			if($(this).val() != "self"){
				$("#email2").val($(this).val());
			}else{
				$("#email2").val("");
				$("#email2").focus();
				return false;
			}			
		}
	});
	
});//ready


/**
	정규식 표현
*/
function ruleCheck(obj){
	var regExp = /^[A-Za-z0-9]{4,12}$/;
	
	if(obj.val() == ""){
		alert("아이디를 입력해주세요.");
		obj.focus();
		return false;
	}else {
		if(regExp.test(obj.val())){
			return true;
		}else {
			alert("영문자/숫자를 포함하여 4~12자리 이내로 작성해주세요.");
			obj.focus();
			return false;
		}
	}
}