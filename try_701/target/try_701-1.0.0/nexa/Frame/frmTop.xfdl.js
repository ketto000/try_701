(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,65);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTop", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("LoginVO", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"ihidNum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"passwordHint\" type=\"STRING\" size=\"256\"/><Column id=\"passwordCnsr\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztId\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztNm\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"dn\" type=\"STRING\" size=\"256\"/><Column id=\"onepassUserkey\" type=\"STRING\" size=\"256\"/><Column id=\"onepassIntfToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/><Col id=\"name\"/><Col id=\"email\"/><Col id=\"ihidNum\"/><Col id=\"password\"/><Col id=\"passwordHint\"/><Col id=\"passwordCnsr\"/><Col id=\"userSe\"/><Col id=\"orgnztId\"/><Col id=\"orgnztNm\"/><Col id=\"uniqId\"/><Col id=\"url\"/><Col id=\"ip\"/><Col id=\"dn\"/><Col id=\"onepassUserkey\"/><Col id=\"onepassIntfToken\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBack01","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_top_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("staBack02","0","staBack01:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_top_bg02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userName","10","0","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_top_textWht");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","24","126","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_top_logo");
            this.addChild(obj.name, obj);

            obj = new Button("logloglgogog",null,"2","81","19","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00",null,"24","300","40","102",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("http://localhost:8085/try_701//cop/msg/info_msg/msg_client.do");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,65,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","sta_userName","text","LoginVO","name");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {

        this.frmTop_onload = function(obj,e)
        {
        	  //메뉴 정보 가져오는 함수 호출
        	this.fnGetTopMenu();
        	  //메뉴 버튼 생성하는 함수 호출
        	this.fnCreateTopMenu();
        //	this.fnMakebtn();
        };

        //
        // this.fnMakebtn = function(){
        //
        // 	var	objButton	= new Button();
        // 	var	objBtnId	= "btn_logout";
        // 	var btnTop=2;
        // 	var btnLeft ="";
        // 	var btnRight =50;
        //
        // 	var btnWidth =81;
        // 	var btnHeight = 19;
        // 		objButton.init(objBtnId,null,btnTop,btnWidth,btnHeight,btnRight,null);
        //
        // 		objButton.set_text("로그아웃");
        // 		objButton.set_cssclass(objConfig.btnNumClass);
        // 		objButton.set_enable(false);
        // 		objButton.addEventHandler("onclick",this.divPaggingNumber_onclick, this); ///--->
        //
        // 		//objCreateDiv.addChild(objBtnId,objButton);
        //
        // 		objButton.show();
        //
        // };






        this.fnGetTopMenu = function(){
        	//글로벌 데이터셋 gdsMenu 가져옴
        	var objApp = nexacro.getApplication();
        	var objDsMenu = objApp.gdsMenu;

        	//MENU_LVL이 0인 값으로 데이터셋 필터링
        	objDsMenu.filter("MENU_LEVEL == 0");

        	//필터처리된 데이터세 복사
        	//CopyData 메서드 매개변수에 "true" 설정하여 필터링 된 데이터만 복사
        	this.dsTop.copyData(objDsMenu, true);

        	objDsMenu.filter("");
        };

        this.fnCreateTopMenu = function ()
        {
        	//메뉴id, 메뉴명
        	var sMenuId;
        	var sMenuNm;

        	//메뉴 버튼들 위치 설정을 위한 기본값

        	var nLeft = 190;
        	var nTop = 24;
        	var nWidth = 190;
        	var nHeight = 40;

        	var nGap = 20;
        	//버튼의 cssclass 선언
        	var sBtnCssClass = "btn_top_menu";
        	var nRowCnt = this.dsTop.rowcount;
        	//복사한 데이터셋의 row갯수 만큼 for문 반복



        	for(i=0; i<nRowCnt; i++){
        		sMenuId = this.dsTop.getColumn(i, "MENU_ID");
        		sMenuNm = this.dsTop.getColumn(i, "MENU_NM");

        		var objButton = new Button();
        		objButton.init("btn_"+sMenuId, nLeft, nTop, nWidth, nHeight, null, null);
        	//버튼 컴포넌트 설정

        	objButton.set_text(sMenuNm);
            objButton.set_cssclass(sBtnCssClass);

        	//내용에 맞는?
        		 objButton.set_fittocontents("width");
        	//생성한 버튼 컴포넌틀를 form 의 자식 컴포너트로 추가
        		this.addChild(objButton.id,objButton);
        	//버튼의 특정 이벤트에 onclick 핸들러 함수를 추가
        		objButton.addEventHandler("onclick",this.btnTopMenu_onclick,this);
        		objButton.show();
        	//두번째 버트 부터는 이전 버튼과 nGap 만큼의 간격을 생성되도록 left 값 설정

        	//PositionBase
        		nLeft = objButton.id+":"+nGap+"px";
        	}

        	this.resetScroll();
        };


        this.btnTopMenu_onclick = function(obj,e)
        {
          //버튼 Id에서 메뉴 id값을 추출
          //ex) btn_000001 -> 000001
          var arrResultId = obj.id.split('_');
          var sResultId = arrResultId [1];

        	//alert(obj.text);


          //왼쪽 메뉴 가져오는 함수 호출 - frmleft 화면
          nexacro.LeftFrame.form.fnGetLeftMenu(sResultId);

        };



        //Top -> LoginVO 설정

        this.fnLoginVOinit = function(obj,e)
        {
        	var objApp= nexacro.getApplication();
        	this.LoginVO.copyData(objApp.Login_Result);
        	this.sta_userName.set_text(this.LoginVO.getColumn(0,"name"));

        };


        //<Button id="logloglgogog" taborder="4" text="로그아웃" top="2" width="81" height="19" right="50"/>



        this.logloglgogog_onclick = function(obj,e)
        {
        	var rtn=this.confirm("로그아웃 하시겠습니까?","로그아웃");
        	if(rtn){
        		var objApp= nexacro.getApplication();
        		this.LoginVO.clear();
        		objApp.Login_Result.clear();
        		nexacro.VFSet01.set_separatesize("0,0,0,*"); //단지 위치만 내려줄뿐
        	}



        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmTop_onload,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.logloglgogog.addEventHandler("onclick",this.logloglgogog_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
