(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("chat_form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00","300","30","439","210",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("http://localhost:8085/try_701/cop/msg/info_msg/msg_main.do");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01","310","290","426","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("http://localhost:8085/try_701//cop/msg/info_msg/msg_client.do");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("chat_form.xfdl", function() {

        this.WebBrowser00_onusernotify = function(obj,e)
        {

        };
        //    // 「WebSocketEx」는 프로젝트 명
        //       // 「websocket」는 호스트 명
        //       // WebSocket 오브젝트 생성 (자동으로 접속 시작한다. - onopen 함수 호출)
        //       var webSocket = new WebSocket("ws://localhost:8085/try_701/broadsocket");
        //       // 콘솔 텍스트 에리어 오브젝트
        //       var messageTextArea = document.getElementById("messageTextArea");
        //       // WebSocket 서버와 접속이 되면 호출되는 함수
        //       webSocket.onopen = function(message) {
        //         // 콘솔 텍스트에 메시지를 출력한다.
        //         messageTextArea.value += "Server connect...\n";
        //       };
        //       // WebSocket 서버와 접속이 끊기면 호출되는 함수
        //       webSocket.onclose = function(message) {
        //         // 콘솔 텍스트에 메시지를 출력한다.
        //         messageTextArea.value += "Server Disconnect...\n";
        //       };
        //
        //       // WebSocket 서버와 통신 중에 에러가 발생하면 요청되는 함수
        //       webSocket.onerror = function(message) {
        //         // 콘솔 텍스트에 메시지를 출력한다.
        //         messageTextArea.value += "error...\n";
        //       };
        //
        //
        //       // WebSocket 서버로 부터 메시지가 오면 호출되는 함수
        //       webSocket.onmessage = function(message) {
        //         // 콘솔 텍스트에 메시지를 출력한다.
        //         messageTextArea.value += "=> "+message.data+"\n";
        //       };
        //
        //
        //      // Send 버튼을 누르면 호출되는 함수
        //     function sendMessage() {
        //       // 송신 사용자를 작성하는 텍스트 박스 오브젝트를 취득한다.
        //       var user = document.getElementById("user");
        //       // 송신 메시지를 작성하는 텍스트 박스 오브젝트를 취득한다.
        //       var message = document.getElementById("textMessage");
        //       // 콘솔 텍스트에 메시지를 출력한다.
        //       messageTextArea.value += "[me]"+ message.value + "\n";
        //       // WebSocket 서버에 메시지를 송신한다.
        //       webSocket.send("{{" + user.value + "}}" + message.value);
        //       // 송신 메시지를 작성하는 텍스트 박스를 초기화한다.
        //       message.value = "";
        //     }
        //     // Disconnect 버튼을 누르면 호출되는 함수
        //     function disconnect() {
        //       // WebSocket 접속 해제
        //       webSocket.close();
        //     }
        //   </script>
        this.Edit00_onchanged = function(obj,e)
        {

        };

        this.GoogleMap00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("chat_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
