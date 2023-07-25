(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("search_item");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("cnd_st","102","10","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value(" ");
            obj.set_dateformat("yyyyMMdd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cnd_ed","282","10","135","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyyMMdd");
            this.addChild(obj.name, obj);

            obj = new Edit("search_type","510","10","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_type","643","10","51","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","450","133","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","48","7","82","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("발생일자:");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("static_tit_wrd","440","7","82","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","257","7","24","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("bold 18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1060,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("search_item.xfdl", function() {

        /***********************************************************************
        *  MenuPath
        *  FileName    search_i.xfdl
        *  Creator     ex) 홍길동
        *  CreateDate  2023/02/28
        *  Desction	   ex) 코드관리
        *************************************************************************
        *  date                     Modifier                 Description
        *************************************************************************
        *  2023/02/28                ex) 홍길동                  최초 생성
        ************************************************************************/


        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/


        /************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************/

        this.search_item_onload = function(obj,e)
        {


        	var parent_obj=this.parent.parent.parent.parent;
        	this.static_tit_wrd.set_text(parent_obj.form_search_tit+":");

        		if(parent_obj.form_btn_option == 1){
        			this.make_detail_value_box();
        		}else{

        		};
        };


        this.make_detail_value_box = function()
        {
        	var btn00="test_log";
        	var objBtn = new Button;
        	objBtn.init(btn00, 700 , 10 , 100 , 31 ,null ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(btn00, objBtn);
        	objBtn.set_text("송수신테스트");
        	objBtn.set_color("");
        	objBtn.set_background("");
        	objBtn.set_border("");
        	objBtn.addEventHandler("onclick",this.Trsmrcv_insert_form, this); //이벤트 핸들러
        	objBtn.show();
        }

        this.Trsmrcv_insert_form = function(){
        	this.parent.parent.parent.set_url("log::Trsmrcv_insert.xfdl");
        }


        /************************************************************************
         * 공통버튼 CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************/
        /**
        * @class   : 조회
        * @param   : N/A
        * @return  : N/A
        */


        this.btn_search_type_onclick = function(obj,e)
        {
        	var cnd_st=nexacro.trim(this.cnd_st.text);
        	var cnd_ed=nexacro.trim(this.cnd_ed.text);
        	if(cnd_st>cnd_ed){
        		alert("시작날짜가 종료날짜 보다 클수 없습니다");
        		return;
        	}
        	var search_type=nexacro.trim(this.search_type.text);
        	this.parent.parent.btn_search_action(cnd_st,cnd_ed,search_type);

        };

        /************************************************************************
         * Extra 버튼 영역
        ************************************************************************/

        // add row


        // delete row


        /************************************************************************
         * DataSet EVENT 영역
        ************************************************************************/


        /************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************/





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.search_item_onload,this);
            this.cnd_st.addEventHandler("onchanged",this.cnd_st_onchanged,this);
            this.cnd_ed.addEventHandler("onchanged",this.cnd_ed_onchanged,this);
            this.btn_search_type.addEventHandler("onclick",this.btn_search_type_onclick,this);
            this.static_tit_wrd.addEventHandler("onclick",this.Static01_00_onclick,this);
        };
        this.loadIncludeScript("search_item.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
