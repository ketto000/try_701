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
            obj._setContents("<ColumnInfo><Column id=\"rowNo\" type=\"INT\" size=\"256\"/><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"STRING\" size=\"256\"/><Column id=\"methodNm\" type=\"STRING\" size=\"256\"/><Column id=\"processSeCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"processTime\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"errorCode\" type=\"STRING\" size=\"256\"/><Column id=\"errorCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"errorSe\" type=\"STRING\" size=\"256\"/><Column id=\"insttCode\" type=\"STRING\" size=\"256\"/><Column id=\"insttCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"processCo\" type=\"STRING\" size=\"256\"/><Column id=\"processSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"rqsterNm\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterIp\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsCode\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"trgetMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowNo\">0</Col><Col id=\"requstId\"/><Col id=\"occrrncDe\"/><Col id=\"methodNm\"/><Col id=\"processSeCodeNm\"/><Col id=\"processTime\"/><Col id=\"rqesterId\"/><Col id=\"errorCode\"/><Col id=\"errorCodeNm\"/><Col id=\"errorSe\"/><Col id=\"insttCode\"/><Col id=\"insttCodeNm\"/><Col id=\"jobSeCode\"/><Col id=\"jobSeCodeNm\"/><Col id=\"processCo\"/><Col id=\"processSeCode\"/><Col id=\"rqsterNm\"/><Col id=\"rqesterIp\"/><Col id=\"rspnsCode\"/><Col id=\"rspnsCodeNm\"/><Col id=\"srvcNm\"/><Col id=\"trgetMenuNm\"/><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchVO", this);
            obj._setContents("<ColumnInfo><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"frstRegisterNm \" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"frstRegisterNm \"/><Col id=\"bbsTyCodeNm\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("detail_data", this);
            obj._setContents("<ColumnInfo><Column id=\"title_kr\" type=\"STRING\" size=\"256\"/><Column id=\"title_en\" type=\"STRING\" size=\"256\"/><Column id=\"index_column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title_kr\">요청ID</Col><Col id=\"index_column\">requstId</Col></Row><Row><Col id=\"title_kr\">발생일자</Col><Col id=\"index_column\">occrrncDe</Col></Row><Row><Col id=\"title_kr\">서비스명</Col><Col id=\"index_column\">srvcNm</Col></Row><Row><Col id=\"title_kr\">메소드명</Col><Col id=\"index_column\">methodNm</Col></Row><Row><Col id=\"title_kr\">처리구분</Col><Col id=\"index_column\">processSeCodeNm</Col></Row><Row><Col id=\"title_kr\">처리시간</Col><Col id=\"index_column\">processTime</Col></Row><Row><Col id=\"title_kr\">요청자</Col><Col id=\"index_column\">rqsterNm</Col></Row><Row><Col id=\"title_kr\">요청자IP</Col><Col id=\"index_column\">rqesterIp</Col></Row></Rows>");
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

            obj = new Button("btn_close","584","416","73","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목록");
            obj.getSetter("langcode").set("L0014");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","70","470","575","83",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("result_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"rowNo\"/><Cell col=\"1\" text=\"requstId\"/><Cell col=\"2\" text=\"occrrncDe\"/><Cell col=\"3\" text=\"methodNm\"/><Cell col=\"4\" text=\"processSeCodeNm\"/><Cell col=\"5\" text=\"processTime\"/><Cell col=\"6\" text=\"rqesterId\"/><Cell col=\"7\" text=\"errorCode\"/><Cell col=\"8\" text=\"errorCodeNm\"/><Cell col=\"9\" text=\"errorSe\"/><Cell col=\"10\" text=\"insttCode\"/><Cell col=\"11\" text=\"insttCodeNm\"/><Cell col=\"12\" text=\"jobSeCode\"/><Cell col=\"13\" text=\"jobSeCodeNm\"/><Cell col=\"14\" text=\"processCo\"/><Cell col=\"15\" text=\"processSeCode\"/><Cell col=\"16\" text=\"rqsterNm\"/><Cell col=\"17\" text=\"rqesterIp\"/><Cell col=\"18\" text=\"rspnsCode\"/><Cell col=\"19\" text=\"rspnsCodeNm\"/><Cell col=\"20\" text=\"srvcNm\"/><Cell col=\"21\" text=\"trgetMenuNm\"/><Cell col=\"22\" text=\"searchBgnDe\"/><Cell col=\"23\" text=\"searchCnd\"/><Cell col=\"24\" text=\"searchEndDe\"/><Cell col=\"25\" text=\"searchWrd\"/><Cell col=\"26\" text=\"sortOrdr\"/><Cell col=\"27\" text=\"searchUseYn\"/><Cell col=\"28\" text=\"pageIndex\"/><Cell col=\"29\" text=\"pageUnit\"/><Cell col=\"30\" text=\"pageSize\"/><Cell col=\"31\" text=\"firstIndex\"/><Cell col=\"32\" text=\"lastIndex\"/><Cell col=\"33\" text=\"recordCountPerPage\"/></Band><Band id=\"body\"><Cell text=\"bind:rowNo\"/><Cell col=\"1\" text=\"bind:requstId\"/><Cell col=\"2\" text=\"bind:occrrncDe\"/><Cell col=\"3\" text=\"bind:methodNm\"/><Cell col=\"4\" text=\"bind:processSeCodeNm\"/><Cell col=\"5\" text=\"bind:processTime\"/><Cell col=\"6\" text=\"bind:rqesterId\"/><Cell col=\"7\" text=\"bind:errorCode\"/><Cell col=\"8\" text=\"bind:errorCodeNm\"/><Cell col=\"9\" text=\"bind:errorSe\"/><Cell col=\"10\" text=\"bind:insttCode\"/><Cell col=\"11\" text=\"bind:insttCodeNm\"/><Cell col=\"12\" text=\"bind:jobSeCode\"/><Cell col=\"13\" text=\"bind:jobSeCodeNm\"/><Cell col=\"14\" text=\"bind:processCo\"/><Cell col=\"15\" text=\"bind:processSeCode\"/><Cell col=\"16\" text=\"bind:rqsterNm\"/><Cell col=\"17\" text=\"bind:rqesterIp\"/><Cell col=\"18\" text=\"bind:rspnsCode\"/><Cell col=\"19\" text=\"bind:rspnsCodeNm\"/><Cell col=\"20\" text=\"bind:srvcNm\"/><Cell col=\"21\" text=\"bind:trgetMenuNm\"/><Cell col=\"22\" text=\"bind:searchBgnDe\"/><Cell col=\"23\" text=\"bind:searchCnd\"/><Cell col=\"24\" text=\"bind:searchEndDe\"/><Cell col=\"25\" text=\"bind:searchWrd\"/><Cell col=\"26\" text=\"bind:sortOrdr\"/><Cell col=\"27\" text=\"bind:searchUseYn\"/><Cell col=\"28\" text=\"bind:pageIndex\"/><Cell col=\"29\" text=\"bind:pageUnit\"/><Cell col=\"30\" text=\"bind:pageSize\"/><Cell col=\"31\" text=\"bind:firstIndex\"/><Cell col=\"32\" text=\"bind:lastIndex\"/><Cell col=\"33\" text=\"bind:recordCountPerPage\"/></Band></Format></Formats>");
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
        this.addIncludeScript("log_Detail.xfdl","board::langCnt.xjs");
        this.registerScript("log_Detail.xfdl", function() {
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
        	this.fnSearchDetail(strParam1);
        };


        this.fnSearchDetail = function(request_id)
        {


        //alert(request_id);

        //	this.searchVO.setColumn(0,"bbsId"  , request_id);
        	this.result_data.clearData();

        	var sId 	= "Detail";
        	var sUrl 	= "svcUrl::/sym/log/lgm/SelectSysLogDetail_nexacro.do";
        	var sInDs 	= "searchVO=searchVO";
        	var sOutDs 	= "result_data=result_data";
        	var sParam 	= "requstId="+request_id;
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);
        };

        this.fnCallback = function(sId,errCode,errMsg)
        {
        	if(sId == "Detail")
        	{
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
        	this.parent.set_url("log::log_List.xfdl");
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
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("log_Detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
