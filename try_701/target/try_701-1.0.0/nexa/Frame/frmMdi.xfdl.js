(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stabg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"Malgun Gothic\"");
            obj.set_cssclass("sta_mdi_bg01");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","0","15",null,"100","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_mdi_menu");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMdi);
            obj.set_text("Tabpage1");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("closeAll",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_mdi_close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMdi.Tabpage1
            obj = new Layout("default","",0,0,this.tabMdi.Tabpage1.form,function(p){});
            this.tabMdi.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {

        this.frmMdi_onload = function(obj,e)
        {
        	//자동으로 생성된 첫 번째 탭페이지 삭제
        	this.tabMdi.removeTabpage(0);

        };


        //탭 변경시 화면 전환
        this.tabMdi_onchanged = function(obj,e)
        {
        	//변경된 tabindex가져오기
        	var nPostIdx = e.postindex;

        	//tabpage의 index로 생성된 메뉴아이디 찾기
        	var sMenuId = this.tabMdi.tabpages[nPostIdx].id;

        	//WorkFram에 생성된 프레임 중 메뉴아이디와 일치하는 프레임의 Form활성화
        	nexacro.WorkFrame[sMenuId].form.setFocus();

        };


        //화면닫기
        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	//선택된 extrabutton(삭제 버튼)의 index == Tabpage index
        	var nExtraIndex = e.index;

        	//extrabutton의 index로 생성된 메뉴아이디 값
        	var sMenuId = this.tabMdi.tabpages[nExtraIndex].id;

        	//extrabutton의 index로 탭페이지 삭제
        	this.tabMdi.removeTabpage(nExtraIndex);

        	//WorkFrame에 생성된 프레임 중 메뉴와 일치하는 프레임의 Form닫기
        	nexacro.WorkFrame[sMenuId].form.close();

        	//열린 화면 정보 삭제 함수 호출
        	nexacro.LeftFrame.form.fnDelOpenMenu(sMenuId);

        };


        //전체화면 닫기
        this.closeAll_onclick = function(obj,e)
        {
        	//Tab컴포넌트에 등록되 TabPage의 개수 변환
        	var nPageCnt = this.tabMdi.getTabpageCount();

        	//Frameset에 등록된 Frame 전체 가져오기
        	var objWorkFrame = nexacro.WorkFrame.all;

        	//application 오브젝트 반환
        	var objApp = nexacro.getApplication();

        	//글로벌 gdsOpenMenu 가져오기:열린화면 정보
        	var objDsOpenMenu =objApp.gdsOpenMenu;

        	//마지막 탭 페이지부터 모두 삭제
        	for(var i = nPageCnt-1; i>=0;i--){
        		//index의 TabPage삭제
        		this.tabMdi.removeTabpage(i);

        		//workFrame에 등록된 form닫기
        		objWorkFrame[i].form.close();

        		//열린화면 메뉴row삭제
        		objDsOpenMenu.deleteRow(i);
        	}
        };
         //탭페이지 주가
         this.fnAddTabPage = function (sMenuId, sMenuNm){
        	//Tab 컴포넌트에서 지정한 위치에 Tabpage삽입
        	//삽입될 위치를 -1 추가하여 마지막에 추가되록 함
        	this.tabMdi.insertTabpage(sMenuId,-1,"",sMenuNm);
         };

         //화면 활성화
        this.fnActiveTabPage = function (sMenuId){
        	//Tab 컴포넌트에 등록된 TabPage의 개수 반황
        	var nPageCnt = this.tabMdi.getTabpageCount();
        	//TabPage의 수만큼 반복
        	for(i=0;i<nPageCnt;i++){

        		//메뉴아이디가 일치하는 아이디를 갖는 TabPage 찾기
        		if(this.tabMdi.tabpages[i].id == sMenuId){

        			//화면에 표시될 TabPage index에 값 설정 후 반복문 종료
        			this.tabMdi.set_tabindex(i);
        			break;
        		}
        	}
        }










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmMdi_onload,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.closeAll.addEventHandler("onclick",this.closeAll_onclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
