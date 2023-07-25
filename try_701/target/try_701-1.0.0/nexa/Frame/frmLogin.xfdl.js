(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("LoginVO", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"ihidNum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"passwordHint\" type=\"STRING\" size=\"256\"/><Column id=\"passwordCnsr\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztId\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztNm\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"dn\" type=\"STRING\" size=\"256\"/><Column id=\"onepassUserkey\" type=\"STRING\" size=\"256\"/><Column id=\"onepassIntfToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/><Col id=\"name\"/><Col id=\"email\"/><Col id=\"ihidNum\"/><Col id=\"password\"/><Col id=\"passwordHint\"/><Col id=\"passwordCnsr\"/><Col id=\"userSe\"/><Col id=\"orgnztId\"/><Col id=\"orgnztNm\"/><Col id=\"uniqId\"/><Col id=\"url\"/><Col id=\"ip\"/><Col id=\"dn\"/><Col id=\"onepassUserkey\"/><Col id=\"onepassIntfToken\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("resultVO", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"ihidNum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"passwordHint\" type=\"STRING\" size=\"256\"/><Column id=\"passwordCnsr\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztId\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztNm\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"dn\" type=\"STRING\" size=\"256\"/><Column id=\"onepassUserkey\" type=\"STRING\" size=\"256\"/><Column id=\"onepassIntfToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/><Col id=\"name\"/><Col id=\"email\"/><Col id=\"ihidNum\"/><Col id=\"password\"/><Col id=\"passwordHint\"/><Col id=\"passwordCnsr\"/><Col id=\"userSe\"/><Col id=\"orgnztId\"/><Col id=\"orgnztNm\"/><Col id=\"uniqId\"/><Col id=\"url\"/><Col id=\"ip\"/><Col id=\"dn\"/><Col id=\"onepassUserkey\"/><Col id=\"onepassIntfToken\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnLogin","552","309","177","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(" 로그인");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","334","270","153","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_layoutorder("0");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">일반</Col><Col id=\"codecolumn\">GNR</Col></Row><Row><Col id=\"datacolumn\">기업</Col><Col id=\"codecolumn\">ENT</Col></Row><Row><Col id=\"datacolumn\">업무</Col><Col id=\"codecolumn\">USR</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","345","319","165","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("ketto1234");
            obj.set_text("ketto1234");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","345","360","165","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("roon1379!!");
            obj.set_text("roon1379!!");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","48","400","202",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("resultVO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"ihidNum\"/><Cell col=\"3\" text=\"email\"/><Cell col=\"4\" text=\"password\"/><Cell col=\"5\" text=\"passwordHint\"/><Cell col=\"6\" text=\"passwordCnsr\"/><Cell col=\"7\" text=\"userSe\"/><Cell col=\"8\" text=\"orgnztId\"/><Cell col=\"9\" text=\"orgnztNm\"/><Cell col=\"10\" text=\"uniqId\"/><Cell col=\"11\" text=\"url\"/><Cell col=\"12\" text=\"ip\"/><Cell col=\"13\" text=\"dn\"/><Cell col=\"14\" text=\"onepassUserkey\"/><Cell col=\"15\" text=\"onepassIntfToken\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:ihidNum\"/><Cell col=\"3\" text=\"bind:email\"/><Cell col=\"4\" text=\"bind:password\"/><Cell col=\"5\" text=\"bind:passwordHint\"/><Cell col=\"6\" text=\"bind:passwordCnsr\"/><Cell col=\"7\" text=\"bind:userSe\"/><Cell col=\"8\" text=\"bind:orgnztId\"/><Cell col=\"9\" text=\"bind:orgnztNm\"/><Cell col=\"10\" text=\"bind:uniqId\"/><Cell col=\"11\" text=\"bind:url\"/><Cell col=\"12\" text=\"bind:ip\"/><Cell col=\"13\" text=\"bind:dn\"/><Cell col=\"14\" text=\"bind:onepassUserkey\"/><Cell col=\"15\" text=\"bind:onepassIntfToken\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {

        this.frmLogin_onload = function(obj,e)
        {
        	this.resultVO.clear();
        	var objApp = nexacro.getApplication();
        		objApp.Login_Result.clear();

        };


        this.btnLogin_onclick = function(obj,e)
        {

        	//Top, HFSet01, Bottom, Login 4개 영역에 대하여
        	//로그인 화면이 보이지 않도록 설정
        	 this.fnUpdateForm();

        };




        this.fnUpdateForm = function()
        {
        	var setid=nexacro.trim(this.Edit00.text);
        	var setPassword=nexacro.trim(this.Edit01.text);
        	var setUserSe=nexacro.trim(this.Combo00.value);



        	//this.alert("---"+setid+setPassword+setUserSe);

        	 // 조회조건 셋팅
        	this.LoginVO.setColumn(0,"id", setid);
        	this.LoginVO.setColumn(0,"password"  , setPassword);
        	this.LoginVO.setColumn(0,"userSe"  , setUserSe);

        	var sId 	= "login_vo";
        	var sUrl 	= "svcUrl::/uat/uia/actionLogin_nexacro.do";
        	var sInDs 	= "LoginVO=LoginVO";
        	var sOutDs 	= "resultVO=resultVO";
        	var sParam 	= "";
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);

        	//local test
        	/*
        	this.divPagging.nTotlaRowCount = 1234;
        	this.fnCallAfter(this.divPagging);
        	*/

        };




        this.fnCallback = function(svcID, errCD, errMSG)
        {

        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	if(svcID == "login_vo"){

        		this.fnLogin_data_ch();
        			//this.alert("로그인성공");


        	}
        	else if(svcID == "svcSave"){

        	}
        	else if(svcID == "svcSelectSub"){
        		this.alert("Select Success");
        	}
        	else if(svcID == "svcSaveSub"){
        		this.alert("Save Success");
        	}
        }



        this.fnLogin_data_ch = function()
        {
        		var ch_id=this.resultVO.getColumn(0,"id");

        		//alert(ch_id);

        		if(ch_id == '' || ch_id == null || ch_id == undefined || ch_id == 0 || ch_id == NaN){
        			alert("로그인실패");


        		}else{

        			var objApp = nexacro.getApplication();
        			objApp.Login_Result.clear();
        			objApp.Login_Result.copyData(this.resultVO);
        			var get_userName=objApp.Login_Result.getColumn(0,"name");



        			nexacro.VFSet01.set_separatesize("65,*,30,0"); //단지 위치만 내려줄뿐

        			nexacro.VFSet01.TopFrame.form.fnLoginVOinit();
        			alert("로그인성공");

        		}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmLogin_onload,this);
            this.btnLogin.addEventHandler("onclick",this.btnLogin_onclick,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
