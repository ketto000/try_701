(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_View");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_board_view","0","0","80%","75%",null,null,"880",null,"750",null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid #ff0000");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_board_view.form
            obj = new Layout("default","",0,0,this.div_board_view.form,function(p){});
            this.div_board_view.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("board_View.xfdl","board::langCnt.xjs");
        this.registerScript("board_View.xfdl", function() {
        this.executeIncludeScript("board::langCnt.xjs"); /*include "board::langCnt.xjs"*/;

        /***********************************************************************
        *  MenuPath
        *  FileName    board_view.xfdl
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
        this.set_bbsid="";

        /************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************/

        this.board_View_onload = function(obj,e)
        {
        	this.div_board_view.set_url("board::board_List.xfdl");
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
        * @class   : 등록
        * @param   : N/A
        * @return  : N/A
        */
        this.fnInsert = function () {

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






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_View_onload,this);
        };
        this.loadIncludeScript("board_View.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
