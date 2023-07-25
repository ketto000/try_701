(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_List");
            this.set_titletext("pagging sample");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("BoardMasterVO", this);
            obj._setContents("<ColumnInfo><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"frstRegisterNm \" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"frstRegisterNm \"/><Col id=\"bbsTyCodeNm\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("resultList", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrcn\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"atchPosblFileNumber\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowNo\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\"/><Col id=\"bbsTyCode\"/><Col id=\"bbsNm\"/><Col id=\"bbsIntrcn\"/><Col id=\"replyPosblAt\"/><Col id=\"useAt\"/><Col id=\"fileAtchPosblAt\"/><Col id=\"atchPosblFileNumber\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\"/><Col id=\"pageUnit\"/><Col id=\"pageSize\"/><Col id=\"lastIndex\"/><Col id=\"recordCountPerPage\"/><Col id=\"bbsTyCodeNm\"/><Col id=\"firstIndex\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("paginationInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"currentPageNo\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"totalRecordCount\" type=\"INT\" size=\"256\"/><Column id=\"totalPageCount\" type=\"INT\" size=\"256\"/><Column id=\"firstPageNoOnPageList\" type=\"INT\" size=\"256\"/><Column id=\"lastPageNoOnPageList\" type=\"INT\" size=\"256\"/><Column id=\"firstRecordIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastRecordIndex\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("set_type", this);
            obj._setContents("<ColumnInfo><Column id=\"type_cd\" type=\"STRING\" size=\"256\"/><Column id=\"type_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"type_cd\">0</Col><Col id=\"type_nm\">게시판</Col></Row><Row><Col id=\"type_cd\">1</Col><Col id=\"type_nm\">게시판소개내용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">게시판 수정</Col><Col id=\"en\">board edit</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">게시판명</Col><Col id=\"en\">board name</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">게시판소개내용</Col><Col id=\"en\">introduction</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">게시판 유형</Col><Col id=\"en\">category</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">파일첨부가능여부</Col><Col id=\"en\">file use</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">첨부가능파일숫자</Col><Col id=\"en\">Number of file uses</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">추가선택사항</Col><Col id=\"en\">Additional selection</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">사용여부</Col><Col id=\"en\">Use status</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row><Row><Col id=\"code\">L0054</Col><Col id=\"ko\">게시판 등록</Col><Col id=\"en\">bbs regist</Col></Row><Row><Col id=\"code\">L0055</Col><Col id=\"en\">regist</Col><Col id=\"ko\">등록</Col></Row><Row><Col id=\"code\">L0056</Col><Col id=\"ko\">번호</Col><Col id=\"en\">NO</Col></Row><Row><Col id=\"code\">L0057</Col><Col id=\"ko\">조회</Col><Col id=\"en\">search</Col></Row><Row><Col id=\"code\">L0058</Col><Col id=\"ko\">등록자</Col><Col id=\"en\">Register</Col></Row><Row><Col id=\"code\">L0059</Col><Col id=\"ko\">등록일자</Col><Col id=\"en\">Regist date</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","70",null,"360","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("resultList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("auto");
            obj.set_font("14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"196\"/><Column size=\"137\"/><Column size=\"78\"/><Column size=\"154\"/><Column size=\"171\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\" langcode=\"L0056\" subsumtext=\"L0056\"/><Cell col=\"1\" text=\"게시판명\" langcode=\"L0002\" subsumtext=\"L0002\"/><Cell col=\"2\" text=\"등록자\" langcode=\"L0058\" subsumtext=\"L0058\"/><Cell col=\"3\" text=\"등록일자\" langcode=\"L0059\" subsumtext=\"L0059\"/><Cell col=\"4\" text=\"사용여부\" langcode=\"L0008\" subsumtext=\"L0008\"/><Cell col=\"5\" text=\"bbsId\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:rowNo\"/><Cell col=\"1\" text=\"bind:bbsNm\" autosizerow=\"limitmax\"/><Cell col=\"2\" text=\"bind:frstRegisterNm\"/><Cell col=\"3\" text=\"bind:frstRegisterPnttm \"/><Cell col=\"4\" text=\"bind:useAt\"/><Cell col=\"5\" text=\"bind:bbsId\" expandimage=\"url(&apos;..\\..\\..\\Users\\USER\\OneDrive\\바탕 화면\\latsko.jpg&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","518","20","102","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.getSetter("langcode").set("L0057");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_keword","370","23","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Combo("sel_type","200","26","136","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("set_type");
            obj.set_codecolumn("type_cd");
            obj.set_datacolumn("type_nm");
            obj.set_displayrowcount("5");
            obj.set_scrollindicatorsize("");
            obj.set_border("1");
            obj.set_cursor("auto");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert_bbs","40","24","88","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.getSetter("langcode").set("L0055");
            this.addChild(obj.name, obj);

            obj = new Button("btnKor",null,"23","76","28","101",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("한국어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0052");
            this.addChild(obj.name, obj);

            obj = new Button("btnEng",null,"23","76","28","21",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("영어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0053");
            this.addChild(obj.name, obj);

            obj = new Div("divPagging","30","450",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("divPagging");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPagging
            obj = new Layout("default","",0,0,this.divPagging.form,function(p){});
            this.divPagging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",840,460,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("board_List.xfdl","board::pagging.xjs");
        this.addIncludeScript("board_List.xfdl","board::langCnt.xjs");
        this.registerScript("board_List.xfdl", function() {

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("board::pagging.xjs"); /*include "board::pagging.xjs"*/;
        this.executeIncludeScript("board::langCnt.xjs"); /*include "board::langCnt.xjs"*/;

        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        //
        // this.set_bbsid="";
        // this.board_View_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 	this.div_board_view.set_url("board::board_List.xfdl");
        // };



        /************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************/


        this.pagging_onload = function(obj,e)
        {

         //this.alert(this.parent.Edit00.value);
        	/*
        	 페이징 처리 값 세팅 함수 호출
        	 1. 페이지 처리 갯수
        	 2. 한번에 출력될 row 갯수
        	 3. 총계및 페이징 이동 활성화 여부
        	 4. transaction 함수
        	*/

        	var obj_nexa= nexacro.getApplication();
        	var objDivPagging	= this.divPagging;

        	var objConfig = {
        						nPageCount : 10,
        						nPageRowCount : 10,
        						bPageViewActive : true,
        						objPageSearchFunction : this.fnSearchPagging,
        						objSearchButton	: this.btnSearch
        					}
        	this.fnSearchPagging(1);
        	this.fnInitPageSet(objDivPagging, objConfig);
        };




        /************************************************************************
         * 공통버튼 CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************/
        /**
        * @class   : 조회
        * @param   : N/A
        * @return  : N/A
        */

        this.btn_search_onclick = function(obj,e)
        {
        	var searchWrd=nexacro.trim(this.edt_keword.text);
        	var searchCnd=nexacro.trim(this.sel_type.value);

        //	alert(searchCnd+searchWrd);
        	this.BoardMasterVO.setColumn(0,"searchWrd"  , searchWrd);
        	this.BoardMasterVO.setColumn(0,"searchCnd"  , searchCnd);
        	this.fnSearchPagging(1);
        };



        this.fnSearchPagging = function(nPageNo)
        {
        	this.BoardMasterVO.setColumn(0,"pageIndex"  , nPageNo);
        	this.resultList.clearData();

        	var sId 	= "PAGE";
        	var sUrl 	= "svcUrl::/cop/bbs/selectBBSMasterInfs_nexacro.do";
        	var sInDs 	= "BoardMasterVO=BoardMasterVO";
        	var sOutDs 	= "resultList=resultList paginationInfo=paginationInfo";
        	var sParam 	= "";
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);


        };

        this.fnCallback = function(sId,errCode,errMsg)
        {	//return val - this.totRowCount
        /*
        	if(errCode<0)
        	{
        		this.btnSearch.set_enable(true);
        	}
        */
        	if(sId == "PAGE")
        	{

        		var totalRecordCount = this.paginationInfo.getColumn(0,"totalRecordCount"); //총게시물수
        		this.divPagging.nTotalRowCount = totalRecordCount;
        		this.fnCallAfter(this.divPagging);
        		var ax=this.BoardMasterVO.getColumn(0,"pageIndex"); //총게시물수
        		var objApp= nexacro.getApplication();
        		objApp.BoardMasterSO.copyData(this.BoardMasterVO);
        	}
        }

        //셀클릭시 조회창
        this.Grid00_oncellclick = function(obj,e)
        {
        	// obj.setCellProperty(e.row, e.cell, "color", "black");
        	var get_bbsId=this.resultList.getColumn(e.row, "bbsId"); //선택한 셀 ROW의 bbsId
        	//자식 노드의 URL 객체에게 파라미터 값을 전달하기 위해서 오브젝트 반환 메소드 생성
        	this.parent.set_bbsid=get_bbsId;
        	this.parent.set_url("board::board_Detail.xfdl");

        	this.Grid00.selectArea(0,0,0,0);
        }

        //board::board_Detail.xfdl
        //board::board_Update.xfdl




        /**
        * @class   : 등록
        * @param   : N/A
        * @return  : N/A
        */
        this.btn_insert_bbs_onclick = function(obj,e)
        {
        	this.parent.set_url("board::board_insert.xfdl");
        };


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









        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */






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
            this.addEventHandler("onload",this.pagging_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sel_type.addEventHandler("onitemchanged",this.sel_type_onitemchanged,this);
            this.btn_insert_bbs.addEventHandler("onclick",this.btn_insert_bbs_onclick,this);
            this.btnKor.addEventHandler("onclick",this.btnKor_onclick,this);
            this.btnEng.addEventHandler("onclick",this.btnEng_onclick,this);
        };
        this.loadIncludeScript("board_List.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
