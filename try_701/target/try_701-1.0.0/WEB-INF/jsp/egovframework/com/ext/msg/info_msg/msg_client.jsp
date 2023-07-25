<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="pageTitle"><spring:message code="comExtMsg.webSocket.Title"/></c:set>

<!DOCTYPE html>
<html>
  <head><title>Web Socket Example</title>
  
  <meta http-equiv="X-UA-Compatible" content="IE=11" /> 
  <script src="move_text.js"></script>
  <style>
  #messageTextArea{
  border:1px solid #ff0000;
  width:100%;
  heigth:20px;
  margin:0 auto;
  padding:0;
  }
  
  </style>
  
  </head>
  
  
  <body>
  
  <!--   <input type="text" id="messageTextArea" rows="2" cols="50"  ></textarea>
   -->  <MARQUEE id="messageTextArea" scrollamount="2"></MARQUEE>
    
    <script type="text/javascript">
    
      // 「WebSocketEx」는 프로젝트 명
      // 「websocket」는 호스트 명
      // WebSocket 오브젝트 생성 (자동으로 접속 시작한다. - onopen 함수 호출)
      var webSocket = new WebSocket("ws://localhost:8085/try_701/broadsocket");
      // 콘솔 텍스트 에리어 오브젝트
      var messageTextArea = document.getElementById("messageTextArea");
      // WebSocket 서버와 접속이 되면 호출되는 함수
      webSocket.onopen = function(message) {
        // 콘솔 텍스트에 메시지를 출력한다.
        messageTextArea.innerHTML += "안전하고 깨끗한 원자력에너지로 풍요로운 미래를 만들어 갑니다.\n";
        Init_send("${loginVO.name}","${loginVO.id}");
      
      };
      // WebSocket 서버와 접속이 끊기면 호출되는 함수
      webSocket.onclose = function(message) {
        // 콘솔 텍스트에 메시지를 출력한다.
        messageTextArea.innerHTML = "Server Disconnect...\n";
      };
    
      // WebSocket 서버와 통신 중에 에러가 발생하면 요청되는 함수
      webSocket.onerror = function(message) {
        // 콘솔 텍스트에 메시지를 출력한다.
        messageTextArea.innerHTML == "error...\n";
      };
      
      
      // WebSocket 서버로 부터 메시지가 오면 호출되는 함수
      webSocket.onmessage = function(message) {
        // 콘솔 텍스트에 메시지를 출력한다.
        var get_data=message.data;
        messageTextArea.innerHTML = get_data.replace("$","")+"\n";
      };
      
      
     // Send 버튼을 누르면 호출되는 함수
	function Init_send(userName,userID){
		webSocket.send(JSON.stringify({ "type" : "connection", "name" : userName ,"id" : userID }));
	}
	      
     
     function sendMessage() {
    	// var user = document.getElementById("user").value;
        var message = document.getElementById("textMessage").value; 
        var userName ="${loginVO.name}";
        var userID ="${loginVO.id}";
        messageTextArea.value += "[me]"+ message + "\n";
      	webSocket.send(JSON.stringify({ "type" : "message","name" :userName,"id": userID, "message" : message}));
      // 송신 사용자를 작성하는 텍스트 박스 오브젝트를 취득한다.
     
      // 콘솔 텍스트에 메시지를 출력한다.
     
      // WebSocket 서버에 메시지를 송신한다.
    //  webSocket.send("{{" + user.value + "}}" + message.value);
      // 송신 메시지를 작성하는 텍스트 박스를 초기화한다.
      message.value = "";
    }
    // Disconnect 버튼을 누르면 호출되는 함수
    function disconnect() {
      // WebSocket 접속 해제
      webSocket.close();
    }
  </script>
  

</body>
</html>