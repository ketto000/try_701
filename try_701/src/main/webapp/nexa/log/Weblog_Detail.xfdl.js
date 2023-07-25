(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_Detail");
            this.set_titletext("board_Detail");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,621);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">게시판 상세</Col><Col id=\"en\">board detail</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">게시판명</Col><Col id=\"en\">board name</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">게시판소개내용</Col><Col id=\"en\">introduction</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">게시판 유형</Col><Col id=\"en\">category</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">파일첨부가능여부</Col><Col id=\"en\">file use</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">첨부가능파일숫자</Col><Col id=\"en\">Number of file uses</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">추가선택사항</Col><Col id=\"en\">Additional selection</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">사용여부</Col><Col id=\"en\">Use status</Col></Row><Row><Col id=\"code\">L0009</Col><Col id=\"ko\">등록자</Col><Col id=\"en\">registrant</Col></Row><Row><Col id=\"code\">L0010</Col><Col id=\"ko\">등록일</Col><Col id=\"en\">registration date</Col></Row><Row><Col id=\"code\">L0011</Col><Col id=\"ko\">답장가능여부</Col><Col id=\"en\">reply available</Col></Row><Row><Col id=\"code\">L0012</Col><Col id=\"ko\">게시판 주소</Col><Col id=\"en\">board address</Col></Row><Row><Col id=\"code\">L0013</Col><Col id=\"ko\">수정</Col><Col id=\"en\">update</Col></Row><Row><Col id=\"en\">list</Col><Col id=\"ko\">목록</Col><Col id=\"code\">L0014</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("result_data", this);
            obj._setContents("<ColumnInfo><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"rqsterNm\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterIp\" type=\"STRING\" size=\"256\"/><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"rowNo \" type=\"INT\" size=\"256\"/><Column id=\"searchBgnDeView\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDeView\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"loginNm\"/><Col id=\"loginIp\"/><Col id=\"loginMthd\"/><Col id=\"errOccrrAt\"/><Col id=\"errorCode\"/><Col id=\"creatDt\"/><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"rowNo \">0</Col><Col id=\"searchBgnDeView\"/><Col id=\"searchEndDeView\"/><Col id=\"loginId\"/><Col id=\"requstId\"/><Col id=\"occrrncDe\"/><Col id=\"url\"/><Col id=\"rqesterId\"/><Col id=\"rqsterNm\"/><Col id=\"rqesterIp\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchVO", this);
            obj._setContents("<ColumnInfo><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"rqsterNm\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterIp\" type=\"STRING\" size=\"256\"/><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"rowNo \" type=\"INT\" size=\"256\"/><Column id=\"searchBgnDeView\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDeView\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"loginNm\"/><Col id=\"loginIp\"/><Col id=\"loginMthd\"/><Col id=\"errOccrrAt\"/><Col id=\"errorCode\"/><Col id=\"creatDt\"/><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"rowNo \">0</Col><Col id=\"searchBgnDeView\"/><Col id=\"searchEndDeView\"/><Col id=\"loginId\"/><Col id=\"requstId\"/><Col id=\"occrrncDe\"/><Col id=\"url\"/><Col id=\"rqesterId\"/><Col id=\"rqsterNm\"/><Col id=\"rqesterIp\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("detail_data", this);
            obj._setContents("<ColumnInfo><Column id=\"title_kr\" type=\"STRING\" size=\"256\"/><Column id=\"title_en\" type=\"STRING\" size=\"256\"/><Column id=\"index_column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title_kr\">요청ID</Col><Col id=\"index_column\">requstId</Col><Col id=\"title_en\">requstId</Col></Row><Row><Col id=\"title_kr\">발생일자</Col><Col id=\"index_column\">occrrncDe</Col><Col id=\"title_en\">요청ID</Col></Row><Row><Col id=\"title_kr\">URL</Col><Col id=\"index_column\">url</Col></Row><Row><Col id=\"title_kr\">요청자</Col><Col id=\"index_column\">rqsterNm</Col></Row><Row><Col id=\"title_kr\">요청자IP</Col><Col id=\"index_column\">rqesterIp</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_form_title","20","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시판 상세");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","22","50","680","290",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("2px solid blue, 0px none, 0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnKor",null,"13","76","28","111",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("한국어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0052");
            this.addChild(obj.name, obj);

            obj = new Button("btnEng",null,"13","76","28","31",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("영어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0053");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","-285","121","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가선택사항");
            obj.getSetter("langcode").set("L0007");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,621,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Weblog_Detail.xfdl","board::langCnt.xjs");
        this.registerScript("Weblog_Detail.xfdl", function() {
        this.executeIncludeScript("board::langCnt.xjs"); /*include "board::langCnt.xjs"*/;

        /***********************************************************************
        *  MenuPath
        *  FileName    board_Detail.xfdl
        *  Creator     ex) 홍길동
        *  CreateDate  2023/02/28
        *  Desction	   ex) 코드관리
        *************************************************************************
        *  date                     Modifier                 Description
        *************************************************************************
        *  2023/02/28                ex) 홍길동                  최초 생성
        ************************************************************************/
        //detail_data 데이터세을 이용하여 필드를 조정할수 있다.

        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        this.div_count=0;
        this.set_top=52;//높이

        this.div_count2=0;
        this.set_top2=52;//높이

        /************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************/
        this.board_Detail_onload = function(obj,e)
        {
        	this.sta_form_title.set_text(this.parent.parent.form_title_name);
        	var strParam1=this.parent.requstId; //DIV할당된 변수
        	alert(strParam1);

        	this.fnSearchDetail(strParam1);
        };

        this.fnSearchDetail = function(strParam1)
        {
        	this.result_data.clearData();
        	this.result_data.addRow();
        	var sId 	= "Detail";
        	var sUrl 	= "svcUrl::/sym/log/wlg/SelectWebLogDetail_nexacro.do";
        	var sInDs 	= "searchVO=searchVO";
        	var sOutDs 	= "result_data=result";
        	var sParam 	= "requstId="+strParam1;
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);
        };

        this.fnCallback = function(sId,errCode,errMsg)
        {
        	if(sId == "Detail")
        	{
        	//	alert("ok");
        		this.gfnsetbind_form();
        	}
        }

        //파라미터 바인드
        this.gfnsetbind_form = function(){

        	var row_cnt=this.detail_data.getRowCount();



        	this.detail_data.set_enableevent(false);
        	//detail_data row 개수 만큼 반복한다
        	for(var st_num=0; st_num < row_cnt; st_num++){
        		var detail_title=this.detail_data.getColumn(st_num,"title_kr");
        		this.make_detail_title(detail_title); //항목생성
        		var detail_index=this.detail_data.getColumn(st_num,"index_column");
        		var detail_value=this.result_data.getColumn(0, detail_index);
        		this.make_detail_value_box(detail_value);
        	}
        	this.detail_data.set_enableevent(true);


        		this.make_go_list_btn();

        }
        this.make_detail_value_box = function(detail_value)
        {
        	var dc=this.div_count+1;
        	var Div00="Div00"+dc;
        	var objDiv = new Div;
        	var s_top=this.set_top;
        	objDiv.init(Div00, 23 , s_top , 680 , 45 ,null ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(Div00, objDiv);
        	objDiv.set_text();
        	objDiv.set_color("");
        	objDiv.set_background("");
        	objDiv.set_border("0px none, 0px none, 1px solid darkgray");
        	objDiv.show();
        	this.make_detail_value(dc,detail_value,s_top); //value값

        	this.div_count=dc;
        	this.set_top=this.set_top+45;

        }

        this.make_go_list_btn = function(){ //목록보기 버튼 생성

        	var s_top=this.set_top;
        	var btn00="list_view";
        	var objBtn = new Button;
        	objBtn.init(btn00, null , s_top+10 , 100 , 31 ,180 ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(btn00, objBtn);
        	objBtn.set_text("목록");
        	objBtn.set_color("");
        	objBtn.set_background("");
        	objBtn.set_border("");
        	objBtn.addEventHandler("onclick",this.btn_close_onclick, this);
        	objBtn.show();

        }


        this.make_detail_value = function(dc,detail_value,s_top)
        {

        	var sta00="sta00"+dc;
        	var objSta = new Static;
        	objSta.init(sta00, 180 , s_top , 300 , 45 ,null ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(sta00, objSta);
        	objSta.set_text(detail_value);
        	objSta.set_color("");
        	objSta.show();
        }

        this.make_detail_title = function(detail_title)
        {
        	var dc=this.div_count2+1;
        	var Div01="Div01"+dc;
        	var objDiv = new Div;
        	var s_top=this.set_top2;
        	objDiv.init(Div01, 23 , s_top , 140 , 43 ,null ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(Div01, objDiv);
        	objDiv.set_text(detail_title);
        	objDiv.set_color("");
        	objDiv.set_background("#efefef");
        	objDiv.set_border("");
        	objDiv.show();
        	this.div_count2=dc;
        	this.set_top2=this.set_top2+45;

        };






        /************************************************************************
         * 공통버튼 CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************/
        /**
        * @class   : 조회
        * @param   : N/A
        * @return  : N/A
        */
        this.fnSearch = function () {

        };

        /**
        * @class   : 수정
        * @param   : N/A
        * @return  : N/A
        */




        /**
        * @class   : 삭제
        * @param   : N/A
        * @return  : N/A
        */
        this.fnDelete = function () {

        };

        /**
        * @class   : 출력
        * @param   : N/A
        * @return  : N/A
        */
        this.fnPrint = function () {

        	//this.gfn_setGridPopup(null);
        	//this.gfnTest(null);
        };

        /************************************************************************
         * Extra 버튼 영역
        ************************************************************************/

        // add row


        // delete row


        /************************************************************************
         * DataSet EVENT 영역
        ************************************************************************/
        this.ds_Gender_cancolumnchange = function(obj,e)
        {

        };


        /************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************/



        this.btn_close_onclick = function(obj,e)
        {
        	this.parent.set_url("log::Weblog_List.xfdl");
        };




        this.btnKor_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	//this.rdoAccuntType.set_innerdataset("dsType");
        	//this.cboDealType.set_innerdataset("dsDealType");

        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("ko", this);
        };

        this.btnEng_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	//this.rdoAccuntType.set_innerdataset("dsType_en");
        	//this.cboDealType.set_innerdataset("dsDealType_en");

        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("en", this);
        };







        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_Detail_onload,this);
            this.sta_form_title.addEventHandler("onclick",this.Static06_onclick,this);
            this.btnKor.addEventHandler("onclick",this.btnKor_onclick,this);
            this.btnEng.addEventHandler("onclick",this.btnEng_onclick,this);
        };
        this.loadIncludeScript("Weblog_Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
