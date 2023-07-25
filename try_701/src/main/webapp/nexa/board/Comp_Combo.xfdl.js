(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Combo");
            this.set_titletext("Component-Combo");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">01</Col><Col id=\"DEPT_NAME\">Accounting Team</Col></Row><Row><Col id=\"DEPT_CD\">02</Col><Col id=\"DEPT_NAME\">Finances Team</Col></Row><Row><Col id=\"DEPT_CD\">03</Col><Col id=\"DEPT_NAME\">Human Resource Team</Col></Row><Row><Col id=\"DEPT_CD\">04</Col><Col id=\"DEPT_NAME\">Marketing Team</Col></Row><Row><Col id=\"DEPT_CD\">05</Col><Col id=\"DEPT_NAME\">Sales 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">06</Col><Col id=\"DEPT_NAME\">Sales 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">07</Col><Col id=\"DEPT_NAME\">Sales 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">08</Col><Col id=\"DEPT_NAME\">Sales Management Team</Col></Row><Row><Col id=\"DEPT_CD\">09</Col><Col id=\"DEPT_NAME\">Consulting 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">10</Col><Col id=\"DEPT_NAME\">Consulting 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">11</Col><Col id=\"DEPT_NAME\">Consulting 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">12</Col><Col id=\"DEPT_NAME\">Design Team</Col></Row><Row><Col id=\"DEPT_CD\">13</Col><Col id=\"DEPT_NAME\">Mobile Team</Col></Row><Row><Col id=\"DEPT_CD\">14</Col><Col id=\"DEPT_NAME\">Education Team</Col></Row><Row><Col id=\"DEPT_CD\">15</Col><Col id=\"DEPT_NAME\">Technical Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">16</Col><Col id=\"DEPT_NAME\">Technical Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">17</Col><Col id=\"DEPT_NAME\">Technical Support 3 Team</Col></Row><Row><Col id=\"DEPT_CD\">18</Col><Col id=\"DEPT_NAME\">Customer Support 1 Team</Col></Row><Row><Col id=\"DEPT_CD\">19</Col><Col id=\"DEPT_NAME\">Customer Support 2 Team</Col></Row><Row><Col id=\"DEPT_CD\">20</Col><Col id=\"DEPT_NAME\">Customer Support 3 Team</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","10","40","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text(" Basic Usage - innerdataset");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","16","160","460","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_fittocontents("width");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dropdown</Col><Col id=\"datacolumn\">dropdown</Col></Row><Row><Col id=\"codecolumn\">search</Col><Col id=\"datacolumn\">search</Col></Row><Row><Col id=\"codecolumn\">filter</Col><Col id=\"datacolumn\">filter</Col></Row><Row><Col id=\"datacolumn\">filterlike</Col><Col id=\"codecolumn\">filterlike</Col></Row><Row><Col id=\"codecolumn\">readonly</Col><Col id=\"datacolumn\">readonly</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("dropdown");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_type","18","190","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","18","70","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","130","248","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" Combo Type (Prop. type)");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","340","318","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text(" Null Text (Prop. displaynulltext)");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","206","70","178","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_count","100","280","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            obj.set_displayrowcount("5");
            obj.set_text("Accounting Team");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","250","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text(" Display Count (Prop. displayrowcount)");
            obj.set_cssclass("sta_WF_TypeTitle");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_count","18","280","74","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_min("5");
            obj.set_max("20");
            obj.set_value("5");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","18","370","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("Please Select...");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SU</Col><Col id=\"datacolumn\">Sunday</Col></Row><Row><Col id=\"codecolumn\">MO</Col><Col id=\"datacolumn\">Monday</Col></Row><Row><Col id=\"codecolumn\">TU</Col><Col id=\"datacolumn\">Tuesday</Col></Row><Row><Col id=\"codecolumn\">WE</Col><Col id=\"datacolumn\">Wednesday</Col></Row><Row><Col id=\"codecolumn\">TH</Col><Col id=\"datacolumn\">Thursday</Col></Row><Row><Col id=\"codecolumn\">FR</Col><Col id=\"datacolumn\">Friday</Col></Row><Row><Col id=\"codecolumn\">SA</Col><Col id=\"datacolumn\">Saturday</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Button01","text","gds_dept","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Combo.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "readonly"){
        			this.cmb_type.set_readonly(true);
        	}
        	else{
        			this.cmb_type.set_readonly(false);
        			this.cmb_type.set_type(e.postvalue);
        	}

        };

        this.spn_count_onchanged = function(obj,e)
        {
        	this.cmb_count.set_displayrowcount(obj.value);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.spn_count.addEventHandler("onchanged",this.spn_count_onchanged,this);
        };
        this.loadIncludeScript("Comp_Combo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
