(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("np_Comp_removeChild_destroy");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(550,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","18","20","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("addChild");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","163","21","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("removeChild");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","330","11","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("setEventHandler");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","400","71","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("changesizeDiv");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","420","145","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("moveDiv");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","443","242","95","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button05");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","443","314","95","51",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button06");
            obj.set_border("1px solid #ff0000,0px none,0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",550,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AL_585053_np_Comp_removeChild_destroy.xfdl", function() {
        //생성 시


        this.div_count=0;
        this.a=30;
        this.b=80;

        this.Button00_onclick = function(obj, e)
        {

        	var objDiv = new Div;
        	var dc=this.div_count+1;
        	var new_name="Div00"+dc;
        	 var aa=this.a+5;
        	 var bb=this.b+5;
        	objDiv.init(new_name, aa , bb, 250 , 250 ,null ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(new_name, objDiv);
        	objDiv.set_text("축"+ new_name + " 탄생~★");
        	objDiv.set_color("#00BDAE");
        	objDiv.set_background("ivory");
        	objDiv.show();
        	this.div_count=dc;
        	this.a=aa;
        	this.b=bb;
        }

        this.Button05_onclick = function(obj,e)
        {
        	var objDiv = new Edit;
        	var dc=this.div_count+1;
        	var new_name="Div00"+dc;
        	 var aa=this.a+5;
        	 var bb=this.b+5;
        	objDiv.init(new_name, aa , bb, 50 , 100 ,null ,null); //id, x, y , 가로,세로, null,null/
        	this.addChild(new_name, objDiv);
        	objDiv.set_text("축"+ new_name + " 탄생~★");
        	objDiv.set_color("#00BDAE");
        	objDiv.set_background("#efefef");
        	objDiv.set_border("1px solid #ff0000,0px none,0px none");
        	objDiv.show();
        	this.div_count=dc;
        	this.a=aa;
        	this.b=bb;
        };



        this.Button06_onclick = function(obj,e)
        {




        };





        //삭제 시
        this.Button01_onclick = function(obj, e)
        {

        	var childcomp = this.removeChild("Div00");
        	childcomp.destroy(); //메모리에서 삭제
        	childcomp = null; //ActiveX 모듈 및 컴포넌트등의 경우 메모리 해제 하기 위해 사용
        }
        this.Button02_onclick = function(obj,e)
        {
        	this.Div00.addEventHandler("onclick", this.Div00_onclick, this);
        	this.Div00.addEventHandler("onsize", this.Div00_onsize, this);
        	this.Div00.addEventHandler("onmove", this.Div00_onmove, this);
        };

        this.Div00_onsize = function(obj,e)
        {
        	trace("onsize");
        };

        this.Div00_onmove = function(obj,e)
        {
        	trace("onmove");
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.Div00.set_height("300");
        };

        this.Div00_onclick = function(obj,e)
        {
        	trace("onclick");
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.Div00.set_left("100");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
        };
        this.loadIncludeScript("AL_585053_np_Comp_removeChild_destroy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
