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
            this.set_titletext("로그관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("searchVO", this);
            obj._setContents("<ColumnInfo><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"frstRegisterNm \" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"frstRegisterNm \"/><Col id=\"bbsTyCodeNm\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("resultList", this);
            obj._setContents("<ColumnInfo><Column id=\"rowNo\" type=\"INT\" size=\"256\"/><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"STRING\" size=\"256\"/><Column id=\"methodNm\" type=\"STRING\" size=\"256\"/><Column id=\"processSeCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"processTime\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"errorCode\" type=\"STRING\" size=\"256\"/><Column id=\"errorCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"errorSe\" type=\"STRING\" size=\"256\"/><Column id=\"insttCode\" type=\"STRING\" size=\"256\"/><Column id=\"insttCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"jobSeCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"processCo\" type=\"STRING\" size=\"256\"/><Column id=\"processSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"rqsterNm\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterIp\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsCode\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"srvcNm\" type=\"STRING\" size=\"256\"/><Column id=\"trgetMenuNm\" type=\"STRING\" size=\"256\"/><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowNo\">0</Col><Col id=\"requstId\"/><Col id=\"occrrncDe\"/><Col id=\"methodNm\"/><Col id=\"processSeCodeNm\"/><Col id=\"processTime\"/><Col id=\"rqesterId\"/><Col id=\"errorCode\"/><Col id=\"errorCodeNm\"/><Col id=\"errorSe\"/><Col id=\"insttCode\"/><Col id=\"insttCodeNm\"/><Col id=\"jobSeCode\"/><Col id=\"jobSeCodeNm\"/><Col id=\"processCo\"/><Col id=\"processSeCode\"/><Col id=\"rqsterNm\"/><Col id=\"rqesterIp\"/><Col id=\"rspnsCode\"/><Col id=\"rspnsCodeNm\"/><Col id=\"srvcNm\"/><Col id=\"trgetMenuNm\"/><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">게시판 수정</Col><Col id=\"en\">board edit</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">게시판명</Col><Col id=\"en\">board name</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">게시판소개내용</Col><Col id=\"en\">introduction</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">게시판 유형</Col><Col id=\"en\">category</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">파일첨부가능여부</Col><Col id=\"en\">file use</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">첨부가능파일숫자</Col><Col id=\"en\">Number of file uses</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">추가선택사항</Col><Col id=\"en\">Additional selection</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">사용여부</Col><Col id=\"en\">Use status</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row><Row><Col id=\"code\">L0054</Col><Col id=\"ko\">게시판 등록</Col><Col id=\"en\">bbs regist</Col></Row><Row><Col id=\"code\">L0055</Col><Col id=\"en\">regist</Col><Col id=\"ko\">등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","90",null,null,"20","150",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("resultList");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("auto");
            obj.set_cursor("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"151\"/><Column size=\"124\"/><Column size=\"190\"/><Column size=\"90\"/><Column size=\"69\"/><Column size=\"76\"/><Column size=\"36\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"rowNo\"/><Cell col=\"1\" text=\"requstId\"/><Cell col=\"2\" text=\"occrrncDe\"/><Cell col=\"3\" text=\"methodNm\"/><Cell col=\"4\" text=\"processSeCodeNm\"/><Cell col=\"5\" text=\"processTime\"/><Cell col=\"6\" text=\"rqesterId\"/><Cell col=\"7\" text=\"detail\"/></Band><Band id=\"body\"><Cell text=\"bind:rowNo\"/><Cell col=\"1\" text=\"bind:requstId\"/><Cell col=\"2\" text=\"bind:occrrncDe\"/><Cell col=\"3\" text=\"bind:methodNm\"/><Cell col=\"4\" text=\"bind:processSeCodeNm\"/><Cell col=\"5\" text=\"bind:processTime\"/><Cell col=\"6\" text=\"bind:rqesterId\"/><Cell col=\"7\" text=\"\" displaytype=\"buttoncontrol\" edittype=\"button\" imagestretch=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPagging","20",null,null,"30","20","115",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divPagging");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","96","461","648","69",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("BoardMasterVO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"searchBgnDe\"/><Cell col=\"1\" text=\"searchCnd\"/><Cell col=\"2\" text=\"searchEndDe\"/><Cell col=\"3\" text=\"searchWrd\"/><Cell col=\"4\" text=\"sortOrdr\"/><Cell col=\"5\" text=\"searchUseYn\"/><Cell col=\"6\" text=\"pageIndex\"/><Cell col=\"7\" text=\"pageUnit\"/><Cell col=\"8\" text=\"pageSize\"/><Cell col=\"9\" text=\"firstIndex\"/><Cell col=\"10\" text=\"lastIndex\"/><Cell col=\"11\" text=\"recordCountPerPage\"/><Cell col=\"12\" text=\"frstRegisterNm \"/><Cell col=\"13\" text=\"bbsTyCodeNm\"/></Band><Band id=\"body\"><Cell text=\"bind:searchBgnDe\"/><Cell col=\"1\" text=\"bind:searchCnd\"/><Cell col=\"2\" text=\"bind:searchEndDe\"/><Cell col=\"3\" text=\"bind:searchWrd\"/><Cell col=\"4\" text=\"bind:sortOrdr\"/><Cell col=\"5\" text=\"bind:searchUseYn\"/><Cell col=\"6\" text=\"bind:pageIndex\"/><Cell col=\"7\" text=\"bind:pageUnit\"/><Cell col=\"8\" text=\"bind:pageSize\"/><Cell col=\"9\" text=\"bind:firstIndex\"/><Cell col=\"10\" text=\"bind:lastIndex\"/><Cell col=\"11\" text=\"bind:recordCountPerPage\"/><Cell col=\"12\" text=\"bind:frstRegisterNm \"/><Cell col=\"13\" text=\"bind:bbsTyCodeNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","18",null,"52","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("2px solid #4688d2, 0px solid #4688d2");
            obj.set_background("#eef3fb");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPagging
            obj = new Layout("default","",0,0,this.divPagging.form,function(p){});
            this.divPagging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",840,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("log_List.xfdl","log::pagging.xjs");
        this.registerScript("log_List.xfdl", function() {

        /**************************************************************************
         * include 영역
         **************************************************************************/
        this.executeIncludeScript("log::pagging.xjs"); /*include "log::pagging.xjs"*/;


        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        //
        // this.set_bbsid="";
        // this.board_View_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 	this.div_board_view.set_url("board::board_List.xfdl");
        // };


        //this.form_search_tit01=

        /************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************/


        this.pagging_onload = function(obj,e)
        {

        	this.div_search.set_url("log::search_item.xfdl");

        	//this.alert(this.parent.parent.form_search_tit);



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




        this.btn_search_action = function(searchBgnDe,searchEndDe,searchWrd){

        	this.searchVO.setColumn(0,"searchWrd"  , searchWrd);
        	this.searchVO.setColumn(0,"searchBgnDe"  ,searchBgnDe );
        	this.searchVO.setColumn(0,"searchEndDe"  ,searchEndDe );
        	this.fnSearchPagging(1);
        }


        /**
        * @class   : 페이지 리스트 조회
        * @param   : nPageNo<- page 번호
        * @return  : resultList, paginationInfo
        */


        this.fnSearchPagging = function(nPageNo)
        {

        	this.searchVO.setColumn(0,"pageIndex"  , nPageNo);
        	this.resultList.clearData();

        	var sId 	= "PAGE";
        	var sUrl 	= "svcUrl::/sym/log/lgm/SelectSysLogList_nexacro.do";
        	var sInDs 	= "searchVO=searchVO";
        	var sOutDs 	= "resultList=resultList paginationInfo=paginationInfo";
        	var sParam 	= "";
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);

        };

        this.fnCallback = function(sId,errCode,errMsg)
        {
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
        		var ax=this.searchVO.getColumn(0,"pageIndex"); //총게시물수
        		var objApp= nexacro.getApplication();
        		objApp.BoardMasterSO.copyData(this.searchVO);
        	}
        }

        //셀클릭시 조회창
        this.Grid00_oncellclick = function(obj,e)
        {


        	if(e.col == "7"){
        	 var getRequstId=this.resultList.getColumn(e.row, "requstId")
        	 this.parent.requstId=getRequstId;
        	 this.parent.set_url("log::log_Detail.xfdl");

        	}

        	//





        // 	// obj.setCellProperty(e.row, e.cell, "color", "black");
        // 	var get_bbsId=this.resultList.getColumn(e.row, "bbsId"); //선택한 셀 ROW의 bbsId
        // 	//자식 노드의 URL 객체에게 파라미터 값을 전달하기 위해서 오브젝트 반환 메소드 생성
        // 	this.parent.set_bbsid=get_bbsId;
        // 	this.parent.set_url("board::board_Detail.xfdl");
        //
        // 	this.Grid00.selectArea(0,0,0,0);
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


        /************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************/



        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pagging_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("log_List.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
