(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("grid_dynamic_grid");
            this.set_titletext("New Form");
            this.getSetter("classname").set("grid_dynamic_grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1176,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList_Cal1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_NAME\">full day on</Col></Row><Row><Col id=\"REQ_NAME\">Nexaweb_Support</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList_Cal28", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_NAME\">full day on Nexacro Studio/E-prepare requirement document</Col></Row><Row><Col id=\"REQ_NAME\">Nexaweb_Support</Col></Row><Row><Col id=\"REQ_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList_Cal27", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_NAME\">2 hrs on</Col></Row><Row><Col id=\"REQ_NAME\">full day on Nexacro_DemoApp</Col></Row><Row><Col id=\"REQ_NAME\">work with Xiang to set up DB and server</Col></Row><Row><Col id=\"REQ_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList_Cal15", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"REQ_NAME\">2 hrs on</Col></Row><Row><Col id=\"REQ_NAME\">full day on Nexacro_DemoApp</Col></Row><Row><Col id=\"REQ_NAME\">work with Xiang to set up DB and server</Col></Row><Row><Col id=\"REQ_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0%","0","1021","596",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSample","1024","80","144","101",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"117\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" style=\"align:left;\" text=\"bind:REQ_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",1021,596,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1176,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AL_585579_nexa_schedule_new.xfdl", function() {
        var isLoaded			= false;
        var strSelectedDataset	= "";
        var isFirst = true;

        this.fnPrintCalandar = function(date)
        {

        	var day		= 0;
        	var objDate = new Date(date);
        	var orgDate = new Date(date);

        	var date = (date == null?objDate.toDateString("%Y%m%d"):date);
        	//trace("date == " + date);

        	objDate.addMonth(1);
        	objDate.addDate(-1);

        	var lastday	= objDate.getDate();
        //trace("lastday == " + lastday);
        	isFirst = true;

        	for (var i = 0; i < 6; i++) {

        		for (var j = 0; j < 7; j++) {
        			if(day == lastday) {
        				break;
        			}
        			//trace("day == " + day + "    date == " + date);
        			day = this.fnAddGrid(orgDate.getDay(), i, j, day);
        			//trace(day);
        		}
        	}
        	//fnDestoryCreatedComp(day+1);

        	//setWaitCursor(false);
        	//alert(parent.parent.parent.parent.id);
        	//G_ACTIVEWIN.fn_divResize();
        }

        this.fnAddGrid = function(date, i, j, day)
        {
        	if (day == 0) {
        		if (date != j) {
        			return 0;
        		} else {
        			day++;
        		}
        	} else {
        		day++;
        	}

        	var id		= "grdList" + day;
        	var rtn = this.Div00.form.components[id];
        	//trace("id === " + rtn);
        	if (!rtn)
        	{
        		var grid = new Grid();
        		grid.init("grdList");
        		this.Div00.addChild(id, grid);
        		grid.show();

        		var objDs = new Dataset();
        		objDs.name = "dsList_Cal" + day;
        	}

        	grid.set_top(i * 99);
        	grid.set_left(j * 143);
        	grid.set_width(144);
        	grid.set_height(101);
        	grid.set_useselcolor(false);
         	grid.set_formats(this.grdSample.formats);
        	grid.set_binddataset("dsList_Cal" + day);

        	grid.setEventHandler("oncellclick",this.grdSample_oncellclick, this);

        //TextArea0.Text += "\ndsList_Cal" + day;

        //	grid.ToolTipText    = "일정추가시 날짜(Head) 부분을 더블클릭하여 등록하세요.";

        	grid.setCellProperty("Head", 0, "text", 	day);
        	grid.setCellProperty("Head", 0, "color",	(j=='0'?'red':(j=='6'?'blue':'')));

        	if ( isFirst && i == 5 )
        	{
        		//trace(this.parent.parent.id + "==" + this.parent.parent.height);
        //		trace(parent.divCalendar.height);

        		this.parent.form.Div00.set_height(this.parent.form.Div00.height+105);
        		//trace(this.parent.form.Div00);
        		//parent.divCalendar.height += 110;
        		isFirst = false;
        	}

        	return day;
        }

        this.fnDestoryCreatedComp = function(dIndex)
        {
        	if (dIndex==undefined) dIndex = 1;

        	for (var i = dIndex; i < 32; i++) {

        		var strObj		= "grdList" + i;

        		if (this.all[strObj] != undefined) {
        			var rtnObj = this.removeChild(strObj);
        			rtnObj.destroy();
        		}

        		var strObj	= "dsList_Cal" + i;
        		if (this.all[strObj] != undefined) {
        			var rtnObj = this.removeChild(strObj);
        			rtnObj.destroy();
        		}
        	}
        }

        this.grid_dynamic_grid_onload = function(obj, e)
        {
        	this.fnPrintCalandar("2018-12-01");
        }

        this.grdSample_oncellclick = function(obj, e)
        {
        	this.alert("what?? " + obj.getCellText(e.row, e.cell));
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.grid_dynamic_grid_ontimer,this);
            this.addEventHandler("onload",this.grid_dynamic_grid_onload,this);
        };
        this.loadIncludeScript("AL_585579_nexa_schedule_new.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
