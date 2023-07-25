package egovframework.com.utl.wed.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.List;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;


import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;

import egovframework.com.cmm.LoginVO;

import javax.servlet.http.HttpSession;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@ServerEndpoint("/broadsocket")
public class BroadSocket {

	private static List<Object> sessionUsers = Collections.synchronizedList(new ArrayList<>());
	private static Pattern pattern = Pattern.compile("^\\{\\{.*?\\}\\}");
	
	private static HashMap<String, Object> sessionList = new HashMap<>();
	LoginVO login_info =new LoginVO();
	
	
	@OnOpen
	public void handleOpen(Session userSession) {
		//클라이언트가 접속하면 WebSocket세션을 리스트에 저장한다.
		sessionUsers.add(userSession);
		
		log.info(login_info.getName()+"----> client is now connected");
	}
	//WebSocket으로 메시지가 오면 요청되는 함수
	
	@OnMessage
	  public void handleMessage(String message, Session userSession) throws IOException {
	 
		
	
		try {
			JSONParser jsonParser = new JSONParser(); 
			JSONObject jsonObj;
			jsonObj = (JSONObject) jsonParser.parse(message);
			String init_type= (String)jsonObj.get("type");
			if(init_type.equals("connection")) {
				jsonObj.get("name");
				sessionList.put((String)jsonObj.get("id"), userSession); // id key값 세션리스트 
			    log.info("message:"+ sessionList.get((String)jsonObj.get("id")));
			}else {
				
	//	JSONArray memberArray = (JSONArray) jsonObj.get("members");
		
		
		
		
			
				// 메시지 내용을 콘솔에 출력한다.
			    log.info("message:"+ jsonObj.get("message"));
			    // 초기 유저 명
			    String name = (String) jsonObj.get("name");
			    // 메시지로 유저 명을 추출한다.
			    String msg = (String) jsonObj.get("message");
			    
			   // Matcher matcher = pattern.matcher(message);
			    // 메시지 예: {{유저명}}메시지
//			    if (matcher.find()) {
//			      name = matcher.group();
//			    }
			    // 클로져를 위해 변수의 상수화
//			    final String msg = message.replaceAll(pattern.pattern(), "");
//			    final String username = name.replaceFirst("^\\{\\{", "").replaceFirst("\\}\\}$", "");
			   
			    // session관리 리스트에서 Session을 취득한다.
			    sessionUsers.forEach( session -> {
			      // 리스트에 있는 세션과 메시지를 보낸 세션이 같으면 메시지 송신할 필요없다.
			      if (session == userSession) {
			        return;
			      }
			      try {
			        // 리스트에 있는 모든 세션(메시지 보낸 유저 제외)에 메시지를 보낸다. (형식: 유저명 => 메시지)
			        ((Session) session).getBasicRemote().sendText(name + "$ " + msg);
			    
			      } catch (IOException e) {
			        // 에러가 발생하면 콘솔에 표시한다.
			       // e.printStackTrace();
			      }
			    });
		
			}//else
			
		} catch (ParseException e1) {
		// TODO Auto-generated catch block
		//e1.printStackTrace();
		}
		
	  }
	
	  // WebSocket과 브라우저가 접속이 끊기면 요청되는 함수
	  @OnClose
	  public void handleClose(Session userSession) {
	    // session 리스트로 접속 끊은 세션을 제거한다.
	    sessionUsers.remove(userSession);
	    // 콘솔에 접속 끊김 로그를 출력한다.
	    System.out.println("client is now disconnected...");
	  }
}
