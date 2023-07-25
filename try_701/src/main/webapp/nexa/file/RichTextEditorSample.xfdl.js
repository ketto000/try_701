(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RichTextEditorSample");
            this.set_titletext("New Form");
            this.getSetter("classname").set("RichTextEditorSample");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,764);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_images", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"selected\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"selected\">Y</Col><Col id=\"filename\">birthday.jpg</Col><Col id=\"savefilename\">birthday.jpg</Col><Col id=\"filesize\">14168</Col></Row><Row><Col id=\"filename\">ChristmasTree.jpg</Col><Col id=\"savefilename\">ChristmasTree.jpg</Col><Col id=\"filesize\">12215</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_reversesubsum("false");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upload", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delFiles", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_editor","42","38","710","532",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div01");
            obj.getSetter("scrollbars").set("autovert");
            obj.set_url("Example::RichTextEditor.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","552","7","96","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Save Data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load","448","7","96","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Load Data");
            this.addChild(obj.name, obj);

            obj = new Div("div_files","42","573","710","151",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectFiles","601","4","103","30",null,null,null,null,null,null,this.div_files.form);
            obj.set_taborder("0");
            obj.set_text("Add Files");
            this.div_files.addChild(obj.name, obj);

            obj = new Grid("grd_files","4","38","700","107",null,null,null,null,null,null,this.div_files.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_files");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"596\"/><Column size=\"35\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\" style=\"selectbackground:#ffffffff;selectfont:antialias 9 Verdana;selectcolor:#46586eff;cellline: ;cellfont:antialias 9 Verdana;cellpadding:3 5 3 5;cellbackground:#ffffffff;cellbackground2:#ffffffff;cellcolor2:#46586eff;\"><Cell displaytype=\"image\" style=\"cursor: ;\" text=\"bind:fileimg\"/><Cell col=\"1\" displaytype=\"expr:prog &gt; 0 &amp;&amp; prog &lt; 100 ? &quot;bar&quot; : &quot;normal&quot;\" style=\"align:left middle;cursor:EXPR(dataset.getRowType(currow)== Dataset.ROWTYPE_INSERT ? &quot;default&quot; : &quot;hand&quot;);\" expr=\"expr:prog &gt; 0 &amp;&amp; prog &lt; 100 ? prog + &apos;%&apos; : comp.parent.parent.getFileNameWithSize(dataset, currow)\" tooltiptext=\"expr:comp.parent.parent.getFileNameWithSize(dataset, currow)\"/><Cell col=\"2\" displaytype=\"image\" style=\"cursor:hand;selectfont:antialias 9 Verdana;\" text=\"bind:rmimg\"/></Band></Format></Formats>");
            this.div_files.addChild(obj.name, obj);

            obj = new Static("st_helpMessage","5","38","698","106",null,null,null,null,null,null,this.div_files.form);
            obj.set_taborder("2");
            obj.set_text("Drag and drop your files here !!");
            this.div_files.addChild(obj.name, obj);

            obj = new Static("st_fileMessage","10","9","552","20",null,null,null,null,null,null,this.div_files.form);
            obj.set_taborder("3");
            this.div_files.addChild(obj.name, obj);

            obj = new Button("btn_preview","656","7","96","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Preview");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_editor.form
            obj = new Layout("default","",0,0,this.div_editor.form,function(p){});
            this.div_editor.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_files.form
            obj = new Layout("default","",0,0,this.div_files.form,function(p){});
            this.div_files.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Example::RichTextEditor.xfdl");
        };
        
        // User Script
        this.registerScript("RichTextEditorSample.xfdl", function() {

        this.RichTextEditorSample_onload = function(obj, e)
        {
        	var userConfig = {
        		editor : {
        			loadCallback : this.onloadEditor,
        			resizeCallback : this.onresizeEditor
        		},
        		image : {
        			loadCallback : this.onloadImage,
        			removeCallback : this.onremoveImage
        		}
        	};
        	this.div_editor.initialize(userConfig, obj);

        	this.initFile();
        }

        // editor loading 이 완료되었을 때
        this.onloadEditor = function(obj)
        {
            // obj 는 this.div_editor 임.
        }

        // editor resize 가 발생할 때
        this.onresizeEditor = function(obj, e)
        {
        	// obj 는 this.div_editor 이고 e 는 nexacro.SizeEventInfo 임.
        	this.div_files.set_top(obj.getOffsetBottom() + 5);
        	this.resetScroll();
        }

        // editor image (up/down) loading 이 완료되었을 때
        this.onloadImage = function(type, errorcode, errormsg, dataset)
        {
        	// - upload 는 본문에 이미지가 추가될 때 마다 실시간으로 서버에 저장된 후 호출됨.
        	// - dataset 은 실제 업로드된 파일 정보를 담은 Dataset reference
        	if ( type == "upload" )
        	{
        		var row = -1;
        		var cnt = dataset.rowcount;
        		this.ds_images.set_enableevent(false);
        		for (var i=0; i<cnt; i++)
        		{
        			row = this.ds_images.addRow();
        			this.ds_images.setColumn(row, "filename", dataset.getColumn(i, "filename"));
        			this.ds_images.setColumn(row, "savefilename", dataset.getColumn(i, "savefilename"));
        			this.ds_images.setColumn(row, "filesize", dataset.getColumn(i, "filesize"));
        		}
        		this.ds_images.set_enableevent(true);
        	}
        }

        // editor image 삭제가 완료되었을 때
        this.onremoveImage = function(errorcode, errormsg, dataset)
        {
        	// - 실제 서버에서 삭제된 후 호출됨.
        	// - dataset 은 삭제한 파일 정보를 담은 Dataset reference
        	var row = -1;
        	var cnt = dataset.rowcount;
        	this.ds_images.set_enableevent(false);
        	for (var i=0; i<cnt; i++)
        	{
        		row = this.ds_images.findRow("savefilename", dataset.getColumn(i, "savefilename"));
        		if ( row > -1 )
        		{
        			this.ds_images.deleteRow(row);
        		}
        	}
        	this.ds_images.set_enableevent(true);
        }

        // 데이터 로드
        this.btn_load_onclick = function(obj,  e)
        {
        	// 컨텐츠에 포함된 테스트 이미지 경로 지정
        	var image1 = "http://172.10.10.61:8080/server/repository/birthday.jpg";
        	var image2 = "http://172.10.10.61:8080/server/repository/ChristmasTree.jpg";

        	var contents = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div><div><div>Let's create a schedule !!</div><div><font size=\"6\">12 </font><font size=\"2\"><span style=\"line-height: 19.5px;\">2014 DECEMBER</span></font></div><div><table style=\"border: currentColor; font-family: Verdana, malgun gothic; font-size: 10pt; border-collapse: collapse;\" border=\"0\" cellSpacing=\"0\" cellPadding=\"0\" width=\"690\"><tbody><tr><td style=\"border-width: 1px; border-style: solid none solid solid; border-color: rgb(147, 165, 186) rgb(36, 98, 175) rgb(147, 165, 186) rgb(147, 165, 186); padding: 3px 4px 2px; width: 98px; height: 24px; background-color: rgb(232, 236, 240);\"><p><font color=\"#ff0000\"><b>sun</b></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>mon</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>tue</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>wed</b></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>thu</b></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(36, 98, 175); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: none; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>fri</b></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); border-top-color: rgb(147, 165, 186); border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; background-color: rgb(232, 236, 240);\"><p><b>sat</b></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: middle; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p style=\"text-align: left;\"><font face=\"Arial Black\">1</font><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">2</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">3</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">4</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">5</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 64px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">6</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">7</font></p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p><p><font color=\"#ff0000\" face=\"Arial Black\"></font>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">8</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">9</font></p><p style='font-family: \"Arial Black\";'><p><img style=\"width: 70px; height: 47px;\" id=\"Div_7eeeb85f-a392-3307-b3f6-38942616bef9\" src=\""+image2+"\" width=\"200\" height=\"133\"></p><p id=\"Div_7eeeb85f-a392-3307-b3f6-38942616bef9_focus\"><font face=\"Verdana\">birthday !!</font></p></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">10</font></p><p><font face=\"Arial Black\"><br></font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">11</font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">12</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 77px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">13</font></p><p><font face=\"Verdana\">CSR</font></p><p><font face=\"Verdana\">(AM 9:00 ~)</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">14</font></p><font color=\"#ff0000\" face=\"Arial Black\"><p><br>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p></font></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">15</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">16</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">17</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">18</font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">19</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 55px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">20</font></p><p><font face=\"Verdana\">Year end party</font></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">21</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">22</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">23</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">24</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 24px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font color=\"#ff0000\" face=\"Arial Black\">25</font></p><p><font color=\"#ff0000\" face=\"Arial Black\"><p><img style=\"width: 50px; height: 50px;\" id=\"Div_552854ed-48c5-1648-b795-38926acb0bed\" src=\""+image1+"\" width=\"280\" height=\"280\"></p><p id=\"Div_552854ed-48c5-1648-b795-38926acb0bed_focus\"><font color=\"#000000\" face=\"Verdana\">X-mas party</font></p></font></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">26</font></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 24px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\"><p><font face=\"Arial Black\">27</font></p><p>Hiking</p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 96px; height: 78px; vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-left-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><font color=\"#ff0000\" face=\"Arial Black\">28</font></p><p><font face=\"Verdana\">HJ's Wedding ceremony</font></p><p>&nbsp;</p><p>&nbsp;</p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">29</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">30</font></p><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 53px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\"><p><font face=\"Arial Black\">31</font></p></td><td style=\"padding: 3px 4px 2px; width: 96px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 100px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td><td style=\"padding: 3px 4px 2px; width: 98px; height: 78px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 255);\" rowSpan=\"2\" colSpan=\"1\"><p><br></p></td></tr><tr><td style=\"padding: 3px 4px 2px; width: 297px; height: 1px; color: rgb(70, 88, 110); vertical-align: top; border-right-color: rgb(147, 165, 186); border-bottom-color: rgb(147, 165, 186); border-right-width: 1px; border-bottom-width: 1px; border-right-style: solid; border-bottom-style: solid; background-color: rgb(255, 255, 128);\" rowSpan=\"1\" colSpan=\"3\"><p><span style=\"font-family: Verdana;\"><a href=\"https://www.google.co.kr/maps/@39.3789984,21.2065119,7z\" target=\"_blank\"></a><a href=\"https://www.google.co.kr/maps/place/%EC%A0%9C%EC%A3%BC%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84/@33.3613101,126.5504608,11z/data=!4m2!3m1!1s0x350ce3544cc84045:0x66bc36d2981ebf31\" target=\"_blank\">vacation</a></span></p></td></tr></tbody></table><p><br></p><br></div></div>";

        	// 컨텐츠 지정
        	this.div_editor.setContent(contents);

        	/*
        		기 등록된 본문이미지 정보를 지정한다.
        		- fileName : 원본 파일명
        		- saveFileName : 저정된 파일명
        		- fileSize : 파일 사이즈
        		- selected : 대표 이미지 여부 (true/false)
        	*/
        	var attachInfo = [];

        	for (var i=0, len=this.ds_images.rowcount; i<len; i++)
        	{
        		var info = {
        			"fileName": this.ds_images.getColumn(i, "filename"),
        			"saveFileName": this.ds_images.getColumn(i, "savefilename"),
        			"fileSize": this.ds_images.getColumn(i, "filesize")
        		};

        		if ( this.ds_images.getColumn(i, "selected") == "Y" )
        		{
        			info.selected = true;
        		}

        		attachInfo.push(info);
        	}

        	this.div_editor.setAttachImages(attachInfo);
        }

        // 데이터 저장
        this.btn_save_onclick = function(obj,  e)
        {
        	// 저장(추가/삭제)할 첨부파일이 존재하면 파일을 먼저 업로드 한 후 내용 저장
        	if ( this.saveFile() )
        	{
        	}
        	else
        	{
        		this.saveData();
        	}
        }

        this.saveData = function()
        {
        	// 에디터 컨텐츠
        	var content = this.div_editor.getContent();
        	trace("================= content =================\n");
        	trace(content);
        	trace("===========================================\n");

        	// 첨부파일 삭제
        	if ( this.ds_files.getDeletedRowCount() )
        	{
        		this.deleteFile();
        	}
        }

        // 서버에서 실제 파일을 삭제한다.
        this.deleteFile = function()
        {
        	this.ds_delFiles.clearData();

        	for (var i=0; i<this.ds_files.getDeletedRowCount(); i++)
        	{
        		this.ds_delFiles.addRow();
        		this.ds_delFiles.setColumn(i, "savefilename", this.ds_files.getDeletedColumn(i, "savefilename"));
        	}

        	var url = this.fileConfig.host + this.fileConfig.deleteUrl;

        	this.transaction("deleteFile", url, "input=ds_delFiles", "", "", "deleteFileCallback");
        }

        // 파일 삭제 transaction callback
        this.deleteFileCallback = function(id, errorcode, errormsg)
        {
        	if (errorcode == 0)
        	{
        		this.ds_files.applyChange();

        		this.updateFileMessage();
        	}
        	else
        	{
        		alert("파일을 삭제하는 동안 에러가 발생하였습니다.\n[" + errorcode + "] " + errormsg );
        	}
        }

        // preview
        this.btn_preview_onclick = function(obj,  e)
        {
        	var content = this.div_editor.getContent();

        	if ( Eco.isEmpty(content) )
        	{
        		alert("미리보기 내용이 없습니다.");
        		return;
        	}

        	var child = new ChildFrame();
        	child.init("preview", "absolute", 0, 0, 800, 630);
        	child.set_formurl("Example::RichTextEditorPreviewSample.xfdl");
        	child.set_openalign("center middle");

        	var arg = {
        		'content': content
        	}
        	child.showModal(this.getOwnerFrame(), arg);
        }


        /**********************************************************************
        	파일첨부 예제
        **********************************************************************/

        this.fileConfig = {
        		host : "http://172.10.10.61:8080/server/",
        		uploadUrl : "EcoLibrary_Dev/Jsp/ExtFileUpDownload/saveFile.jsp?path=repository",
        		downloadUrl : "EcoLibrary_Dev/Jsp/ExtFileUpDownload/downloadFile.jsp?path=repository",
        		deleteUrl : "EcoLibrary_Dev/Jsp/ExtFileUpDownload/deleteFile.jsp?path=repository",
        		downImage : "Images::fileUpDownload/img_file.png",
        		delImage : "Images::fileUpDownload/btn_del.png",
        		allowTypes : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        		maxCount : 5,
        		maxSize : "20MB",
        		maxTotalSize : "100MB",
        	};

        //아이콘별 확장자 목록.
        this.iconInfo = {
        		file_icon_ZIP: ["zip","rar","7z"],
        		file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        		file_icon_TXT: ["txt", "xml"],
        		file_icon_DOC: ["doc", "docx"],
        		file_icon_XLS: ["xls", "xlsx"],
        		file_icon_PPT: ["ppt", "pptx"],
        		file_icon_PDF: ["pdf"],
        		file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        	};

        //XHR2 진행처리용
        this.tranFiles = {
        	added : [],				// 업로드 파일 정보
        	downloaded : [],		// 다운로드 파일 정보
        	transferFileSize : 0,	// 현재까지 전송된 파일 크기
        	transferFileIndex : 0,	// 현재 전송중인 파일 인덱스
        	preFileSizeSum : 0		// 현재까지 전송된 파일크기 합계
        };


        //확장자별 아이콘 정보
        this.extToIcon = {};

        this.initFile = function()
        {
        	//확장자별 파일아이콘 설정.
        	this.initExtToIcon();

        	//==============================================
        	//	파일 업로드 컴포넌트 생성 및 설정
        	//==============================================
        	var name = Eco.getUniqueId("extUpload_");
        	var extUp = new nexacro.ExtFileUpload(name, this);
        	this.addChild(extUp.name, extUp);
        	this.extUp = extUp;

        	extUp.set_multiselect(true);
        	extUp.setResponseZone(this, this.div_files.st_helpMessage, this.div_files.grd_files);

        	// == Event 설정 ==
        	//	파일 다이얼로그를 통해 파일을 선택했을 때 발생하는 이벤트입니다
        	extUp.addEventHandler("onchange", this.extUpload_onchange, this);

        	//통신 성공시에 발생하는 이벤트입니다
        	extUp.addEventHandler("onsuccess", this.extUpload_onsuccess, this);

            //통신 오류 시 발생하는 이벤트입니다.
        	extUp.addEventHandler("onerror", this.extUpload_onerror, this);

        	//HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	extUp.addEventHandler("onprogress", this.extUpload_onprogress, this);

        	//HTML5 Only : XMLHttpRequest 통신시 readystate 속성 변경 event
        	extUp.addEventHandler("onreadystatechange", this.extUpload_onreadystatechange, this);

        	extUp.show();


        	//==============================================
        	//	파일 다운로드 컴포넌트 생성 및 설정
        	//==============================================
        	var name = Eco.getUniqueId("extDownload_");
        	var extDown = new nexacro.ExtFileDownload(name, this);
        	this.addChild(extDown.name, extDown);
        	this.extDown = extDown;


        	// == Event 설정 ==
            //통신 성공시에 발생하는 이벤트입니다
            extDown.addEventHandler("onsuccess", this.extDownload_onsuccess, this);

            //통신 오류 시 발생하는 이벤트입니다.
        	extDown.addEventHandler("onerror", this.extDownload_onerror, this);

        	//HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	extDown.addEventHandler("onprogress", this.extDownload_onprogress, this);

        	extDown.show();


        	//==============================================
        	//	브라우저별 기능 표시
        	//==============================================
        	//Drag and Drop 미지원 브라우저 확인.
        	if( ! this.extUp.support.FileAPI )
        	{
        		this.div_files.st_helpMessage.set_visible(false);
        	}

        	this.updateFileMessage();
        }

        // AddFiles 버튼 클릭
        this.btn_selectFiles_onclick = function(obj,  e)
        {
        	this.extUp.addFiles();

        	if(this.div_files.st_helpMessage.visible)
        	{
        		this.div_files.st_helpMessage.set_visible(false);
        	}
        }

        // Grid cell click
        this.grd_files_oncellclick = function(obj, e)
        {
        	if ( e.cell == 1 )
        	{
        		// 파일 다운로드
        		this.downloadFile(e.row);
        	}
        	else if ( e.cell == 2 )
        	{
        		// 파일 제거
        		this.removeFile(e.row);
        	}
        }

        this.updateFileMessage = function()
        {
        	var cnt = this.ds_files.rowcount;
        	var sum = this.ds_files.getSum("filesize");
        	var maxSize = this.fileConfig.maxSize;

        	var stText = "Files : ";

        	stText += cnt + "/" + this.fileConfig.maxCount + " (" + this.bytesToSize(sum) + "/" + this.fileConfig.maxTotalSize + ") ";
        	if ( !Eco.isEmpty(maxSize) )
        	{
        		stText += " Each file size can not exceed " + maxSize;
        	}

        	this.div_files.st_fileMessage.set_text(stText);
        }

        // 파일 저장
        this.saveFile = function()
        {
        	if ( this.isUpdateDataset(this.ds_files) )
        	{
        		this.uploadFiles();
        		return true;
        	}

        	return false;
        }

        /**
         * 파일 다이얼로그를 통해 파일을 선택했을 때 발생하는 이벤트입니다.
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {nexacro.ExtFileUploadChangeEventInfo} e ExtFileUploadChangeEventInfo
         */
        this.extUpload_onchange = function(obj, e)
        {
        	var ds = this.ds_files;
        	var index = e.index;
         	var fileList = e.files;
         	var fileCount = fileList.length;
         	var fileSupport = ( this.extUp.support.XHR2 && this.extUp.support.FileAPI);

        	for(var i=0; i<fileCount; i++)
        	{
        		var file = fileList[i];
        		var fileId   = file.id;
        		var fileName = file.name;
                var fileSize = file.size;
                var fileType = file.type;

        		if( ds.findRow("filename", fileName) > -1 )
        		{
        			alert("중복된 파일명이 존재합니다.  " + fileName);
        			this.extUp.removeFile(fileId);
        			return;
        		}

        		var dsCount = ds.getRowCount();
        		var cond;
        		if (fileSupport)
        		{
        			var totalSize = ds.getSum("filesize") + fileSize;
        			cond = {"name" : fileName, "length" : dsCount, "size" : fileSize, "totalSize" : totalSize};
        		}
        		else
        		{
        			cond = {"name" : fileName, "length" : dsCount};
        		}

        		var valid = this.validateFile(cond);

        		// 0 : 파일 유형 에러
        		// -1 : 최대 파일첨부가능 건수 또는 size 에러
        		if (valid <= 0)
        		{
        			this.extUp.removeFile(fileId);
        			return;
        		}

        		// 업로드 파일 정보 데이타 구성
        		var addidx = ds.addRow();
        		var downImage = this.getFileIcon(fileName);
        		ds.setColumn(addidx, "fileimg", downImage);
        		ds.setColumn(addidx, "fileid", fileId);
        		ds.setColumn(addidx, "filename", fileName);

        		if(fileSize > 0)
        		{
        			ds.setColumn(addidx, "filesize", fileSize);
        		}

        		ds.setColumn(addidx, "filetype", fileType);
        		ds.setColumn(addidx, "prog", 0);
        		ds.setColumn(addidx, "rmimg", this.fileConfig.delImage);
        	}

        	this.updateFileMessage();
        }

        /**
         * [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
         */
        this.extUpload_onprogress = function(obj,e)
        {
        	var addedFile = obj.getAddedFile(),
        		addedFileLength = addedFile.length || 0;

        	if (e.lengthComputable && (addedFileLength > 0))
        	{
        		//개별파일 전송시. "each"
        		var fileId = e.fileId;
        		if(fileId){
        			var currentFileSize = e.loaded; // 현재까지 전송된 전체 사이즈
        			var totalFileSize = e.total;   // 전체 사이즈

        			var ds = this.ds_files;
        			var row = ds.findRow("filename", fileId);
        			var transferFileRate = Math.floor((currentFileSize / totalFileSize) * 100);

        			ds.setColumn(row, "prog", transferFileRate);
        			ds.setColumn(row, "filesize", totalFileSize);
        			ds.setColumn(row, "tranfilesize", currentFileSize);

        			return;
        		}

        		var transferFileSize,			// 파일 전송 사이즈
        			transferFileRate,			// 파일 전송 진행율
        			transferFile,				// 파일
        			currentFileId,				// 파일 ID
        			currentFileSize,			// 파일 크기
        			currentFileName,			// 파일명
        			ds_files = this.ds_files,
        			dsRow = -1;

        		ds_files.set_enableevent(false);

        		var tranFiles = this.tranFiles;

        		// 현재까지 전송된 전체 사이즈
        		tranFiles.transferFileSize = e.loaded;

        		// 현재까지 전송된 크기가 이전파일 크기 합계보다 크면 진행바 상태 표시를 반복 수행
        		while ((tranFiles.transferFileSize > tranFiles.preFileSizeSum) && (tranFiles.transferFileIndex < addedFileLength))
        		{
        			currentFileId = addedFile[tranFiles.transferFileIndex].id;
        			dsRow = ds_files.findRow("fileid", currentFileId);

        			transferFile = addedFile[tranFiles.transferFileIndex].file;
        			currentFileSize = transferFile.size;
        			currentFileName = transferFile.name;

        			ds_files.setColumn(dsRow, "filesize", currentFileSize);

        			transferFileSize = tranFiles.transferFileSize - tranFiles.preFileSizeSum;
        			transferFileRate = Math.floor((transferFileSize / currentFileSize) * 100);

        			// 현재 파일 전송이 완료되지 않은 경우는 다음 onStatus 이벤트 호출 대기
        			if (transferFileRate < 100)
        			{
        				ds_files.setColumn(dsRow, "prog", transferFileRate);
        				ds_files.setColumn(dsRow, "tranfilesize", transferFileSize);

        				break;
        			}

        			// 현재 파일 전송 완료 또는 초과하는 경우는 현재 전송파일 완료 진행 처리후 while 반복문 로직 수행
        			if (transferFileRate >= 100)
        			{
        				transferFileSize = currentFileSize;	// 현재 파일 전송 사이즈
        				transferFileRate = 100;	// 현재 파일 전송 진행율

        				ds_files.setColumn(dsRow, "prog", transferFileRate);
        				ds_files.setColumn(dsRow, "filesize", currentFileSize);
        				ds_files.setColumn(dsRow, "tranfilesize", transferFileSize);

        				// 다음 전송 파일 정보 설정
        				tranFiles.preFileSizeSum += currentFileSize;	// 이전 파일 사이즈 합계
        				tranFiles.transferFileIndex++;

        				if (tranFiles.transferFileIndex >= addedFileLength)
        				{
        					break;
        				}
        			}
        		}
        		ds_files.set_enableevent(true);
        	}
        }

        /**
         * [HTML5 Only] XMLHttpRequest 통신시 readystate 속성 변경 event
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileReadystateChangEventInfo} e ExtFileReadystateChangEventInfo
         */
        this.extUpload_onreadystatechange = function(obj, e)
        {
        	if( e.readyState == 4 )
        	{
        		if( e.status != 200 )
        		{
        			//TODO
        			//에러 발생에 따른 UI 처리

        			var ds = this.ds_files;
        			var count = ds.rowcount;
        			for(var i=0; i<count; i++)
        			{
        				ds.setColumn(i, "prog", -1);
        			}

        		} else if(e.status == 200) {
        			//trace("Success request.");
        		}
        	}
        }

        /*
         *   통신 성공시에 발생하는 이벤트입니다
         */
        this.extUpload_onsuccess = function(obj, e)
        {
        	var errorcode = e.errorcode;
        	var errormsg = e.errormsg;

        	if ( errorcode < 0 )
        	{
        		alert("업로드 처리중에 에러가 발생했습니다.\n[" + errorcode + "," + errormsg + "]");
        		return;
        	}
        	else if ( errorcode == 1 )
        	{
        		if ( errormsg == "FileSizeLimitExceededException" )
        		{
        			alert("파일 크기가 " + this.fileConfig.maxSize + " 이상인 파일은 업로드가 허용되지 않습니다.");
        		}
        		else if ( errormsg == "SizeLimitExceeded" )
        		{
        			alert("전체 파일 크기가 " + this.fileConfig.maxTotalSize + " 를 초과할 수 없습니다.");
        		}
        		return;
        	}

        	var ds = null;

        	// Only Runtime
        	if( e.datasets )
        	{
        		ds = e.datasets[0];
        	}
        	else
        	{
        		ds = this.ds_upload;
        	}

        	if ( ds )
        	{
        		var fileName, saveFileName, fileSize, row;
        		for (var i=0,cnt=ds.rowcount; i<cnt; i++)
        		{
        			fileName = ds.getColumn(i, "filename");
        			saveFileName = ds.getColumn(i, "savefilename");
        			fileSize = ds.getColumn(i, "filesize");

        			row = this.ds_files.findRow("filename", fileName);
        			if ( row > -1 )
        			{
        				this.ds_files.setColumn(row, "filesize", fileSize);
        				this.ds_files.setColumn(row, "savefilename", saveFileName);
        			}
        		}
        	}

        	this.ds_files.applyChange();

        	this.updateFileMessage();

        	this.saveData();
        }

        /**
         *   통신 오류 시 발생하는 이벤트입니다
         */
        this.extUpload_onerror = function(obj, e)
        {
        	//런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.
        	alert("에러발생 \extUpload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);
        }

        /**
         *   다운로드 성공시에 발생하는 이벤트입니다
         */
        this.extDownload_onsuccess = function(obj, e)
        {
        	this.tranFiles.downloaded = [];

        	if( !Eco.isEmpty(e.url) )
        	{
        		//alert("Successfully downloaded.");
        	}
        	else
        	{
        		//alert("다운로드 실패");
        	}
        }

        /**
         * [HTML5 Only] XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
         * file upload & download 진행시 progress bar 처리용
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileProgress} e ExtFileProgress
         */
        this.extDownload_onprogress = function(obj,e)
        {
        	if ( e.lengthComputable )
        	{
        		var status,									 // 파일 전송 진행율
        			currentFileSize,						 // 파일 크기
        			transferCurrentFileSize,				 // 파일 전송 사이즈
        			downFiles = this.tranFiles.downloaded,	 // 다운로드 대상 파일 목록
        			currentRow = -1;

        		status = Math.floor((e.loaded / e.total) * 100);

        		currentFileSize = downFiles[0].size;
        		currentRow = downFiles[0].row;

        		transferCurrentFileSize = Math.floor(currentFileSize * (status / 100));

        		this.ds_files.setColumn(currentRow, "prog", status);
        		this.ds_files.setColumn(currentRow, "filesize", currentFileSize);
        		this.ds_files.setColumn(currentRow, "tranfilesize", transferCurrentFileSize);
        	}
        }

        /**
         *   통신 오류 시 발생하는 이벤트입니다
         */
        this.extDownload_onerror = function(obj, e)
        {
        	// 런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.
        	alert("에러발생 \extDownload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);

        	this.tranFiles.downloaded = [];
        }

        /**
         * 업로드 할 대상 파일을 추출하고, 업로드 처리한다.
         */
        this.uploadFiles = function()
        {
        	var i, len, rowtype,
        		type, fileid, addFileLen;

        	var extUp = this.extUp;
        	addFileLen = extUp.getAddedFileLength() || 0;

        	if (addFileLen > 0)
        	{
        		this.initProgressbar("upload");

        		var expr = "this.getRowType(rowidx)==Dataset.ROWTYPE_NORMAL || this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE";
        		var curTotalFileSize = this.ds_files.getCaseSum(expr, "filesize");

        		var url = this.fileConfig.host + this.fileConfig.uploadUrl;
        		url += "&maxSize=" + this.sizeToByte(this.fileConfig.maxSize);
        		url += "&maxTotalSize=" + (this.sizeToByte(this.fileConfig.maxTotalSize) - curTotalFileSize);

        		/*
        		런타임에서는 url parameter 설정만 가능!

        		HTML5는 아래 내용 참고
        			//  upload files
        			//  @param {=string} path upload url 정보. default는 상단의 extUp.set_uploadurl()에서 설정한 정보.
        			//  @param {string} inDatasetsParam input dataset 정보
        			//  @param {string} outDatasetsParam output dataset 정보
        			//  @param {string} transferType 전송유형.(all: 대상파일을 한번에 전송(defalut), each: 개별 전송)
        			//  @param {number} datatype data 전송방식. 0:XML, 1:Binary(Runtime only), 2:SSV

        			Runtime에서는 extUpload_onsuccess 이벤트의 e.datasets에서 업로드된 파일 정보를 수신하고
        			HTML5는 outDatasetsParam parameter 로 정보를 수신함.
        		*/

        		extUp.upload(url, "", "ds_upload=ds_output", "all", 0);
        	}
        }

        /**
         * 파일 다운로드 함수
         * @param {number} row 다운로드 대상 row
         */
        this.downloadFile = function(row)
        {
        	if ( this.ds_files.getRowType(row) == Dataset.ROWTYPE_INSERT ) return;

        	if (Eco.isEmpty(row) || row < 0)
        	{
        		return;
        	}

        	var	fileId,
        		fileName,
        		fileSize = 0,
        		fileInfo,
        		downloadUrl;

        	var tranFiles = this.tranFiles;
        	tranFiles.downloaded = [];

        	//progressbar 초기화
        	this.ds_files.setColumn(row, "prog", 0);

        	fileId = this.ds_files.getColumn(row, "fileid");
        	fileName = this.ds_files.getColumn(row, "filename");
        	fileSize = this.ds_files.getColumn(row, "filesize");
        	saveFileName = this.ds_files.getColumn(row, "savefilename");
        	fileInfo = {"id": fileId, "name": fileName, "size": fileSize, "row": row};

        	tranFiles.downloaded.push(fileInfo);

        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	downloadUrl += "&fileName=" + encodeURIComponent(fileName) + "&saveFileName=" + encodeURIComponent(saveFileName);

        	//download file
        	//@param {=string} url 다운로드 fullPath url
        	//@param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	//@return {boolean} 다운로드 성공여부
        	this.extDown.download(downloadUrl, fileName);
        }

        /**
         * 파일 제거
         * @param {number} row 제거 대상 row
         */
        this.removeFile = function(row)
        {
        	if (Eco.isEmpty(row) || row < 0)
        	{
        		return;
        	}

        	var dsFiles = this.ds_files;

        	//업로드가 성공한 후에는 ExtFileUpload에 존재하는 파일 정보가 사라진 상태.
        	if( dsFiles.getRowType(row) == Dataset.ROWTYPE_INSERT )
        	{
        		var fileId = dsFiles.getColumn(row, "fileid");

        		//ExtFileUpDownload에서 내부적으로 가지고 있는 file정보 삭제.
        		this.extUp.removeFile(fileId);
        	}
        	else
        	{
        		// 업로드된 파일은 서버에서 삭제하기 위한 별도처리 필요.
        	}

        	dsFiles.deleteRow(row);
        	this.div_files.grd_files.redraw(); //그리드 갱신이 안되는 버그로 인해 redraw 처리. 2014.09.03 버전

        	this.updateFileMessage();
        }

        /**
         * 진행바 초기화
         * @param {string} type 초기화 type
         */
        this.initProgressbar = function(type)
        {
        	if (type == "upload")
        	{
        		this.tranFiles.preFileSizeSum = 0;
        		this.tranFiles.transferFileIndex = 0;
        	}
        }

        // 파일 추가시 유효성 체크
        this.validateFile = function(cond)
        {
        	var rtn = 1;
        	Eco.object.Each(cond, function(prop, val, object) {
        		var result = "";
        		if (prop == "name")
        		{
        			var fileExt = val.slice(val.lastIndexOf(".")+1).toLowerCase();
        			if(!Eco.array.contains(this.fileConfig.allowTypes, fileExt))
        			{
        				alert("'" + fileExt + "' 유형의 파일은 업로드가 불가능합니다. [" + val + "]");
        				rtn = 0;
        				return false;
        			}
        			/* fileAPI file.type, mime type  - http://www.iana.org/assignments/media-types
        			console.log("file.type:" + file.type);
        			if(!file.type.match("image.*"))
        			{
        				return 0;
        			}
        			*/
        		}
        		else if (prop == "length")
        		{
        			if (val >= this.fileConfig.maxCount)
        			{
        				alert(this.fileConfig.maxCount + "건 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "size")
        		{
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxSize)))
        			{
        				alert("파일 크기가 " + this.fileConfig.maxSize + " 이상인 파일은 업로드가 허용되지 않습니다.");
        				rtn = 0;
        				return false;
        			}
        		}
        		else if (prop == "totalSize")
        		{
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxTotalSize)))
        			{
        				alert("전체 파일 크기가 " + this.fileConfig.maxTotalSize + " 를 초과할 수 없습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        	}, this);

        	return rtn;
        }

        /**
         * 파일 확장자에 이미지 정보를 구성한다.
        */
        this.initExtToIcon = function()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;

        	for (var name in iconInfo) {
        		var len = iconInfo[name].length;
        		for (var i=0; i<len; i++)
        		{
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}
        }

        /**
         * 파일 확장자에 해당하는 이미지경로 반환.
         * @param {string} fileName file name
         * @return {string} image full path
        */
        this.getFileIcon = function(fileName)
        {
        	if(Eco.isEmpty(fileName)) return;

        	fileName = fileName.toLowerCase();
        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];

        	if(icon == undefined) ext = "etc";

        	return "Images::fileUpDownload/" + this.extToIcon[ext] + ".png";
        }

        /**
         * byte를 size로 변환처리한다.
         * @param {number} filesize file size
         * @param {string} type 표시형태
         * @return {string} file size
         */
        this.bytesToSize = function(filesize, type)
        {
        	if (Eco.isEmpty(filesize)) return;

            var size = filesize  + " bytes",
                multiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                idx = 0,
                approx = 0;

            for (idx = 0, approx = filesize / 1024; approx > 1; approx /= 1024, idx++)
            {
                if (type == 1)
                {
                    size = approx.toFixed(2) + multiples[idx] + " (" + filesize + " bytes)";
                }
                else if (type == 2)
                {
                    size = approx.toFixed(2);
                }
                else
                {
                    size = approx.toFixed(2) + multiples[idx];
                }
            }

            return size;
        }

        /**
         * size를 byte로 변환처리한다.
         * @param {number} fileSize file size
         * @return {number} file size
         */
        this.sizeToByte = function(fileSize)
        {
        	var unit = fileSize.match(/[^\d]+/g),
        		size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;

        	if (unit == "mb")
        	{
        		return size * 1024 * 1024;
        	}
        	else if (unit == "gb")
        	{
        		return size * 1024 * 1024 * 1024;
        	}
        	else if (unit == "tb")
        	{
        		return size * 1024 * 1024 * 1024 * 1024;
        	}
        	else if (unit == "")
        	{
        		return size;
        	}
        	else
        	{
        		return fileSize;
        	}
        }

        /**
         * 데이터셋 변경유무 확인
         * @param {dataset} ds Dataset
         * @return {boolean} Dataset update 여부
        */
        this.isUpdateDataset = function(ds)
        {
        	if(Eco.isEmpty(ds))
        	{
        		return false;
        	}

        	if(ds.getRowCount() < 1) return false;

        	// 삭제건은 체크하지 않음.
        	/*
        	if (ds.getDeletedRowCount() > 0)
        	{
        		return true;
        	}
        	*/

        	if (ds.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1)
        	{
        		return true;
        	}

        	return false;
        }

        /**
         * file명과 size를 반환한다.
         * @param {number} rowIndex Dataset current row
         * @return {string} file + size
        */
        this.getFileNameWithSize = function(ds, rowIndex)
        {
        	var fileName = ds.getColumn(rowIndex, "filename");
        	if(Eco.isEmpty(fileName)) return "";

        	var fileSize = ds.getColumn(rowIndex, "filesize");

        	if ( Eco.isEmpty(fileSize) || isNaN(fileSize) )
        	{
        		return fileName;
        	}

        	var displayFileSize = this.bytesToSize(fileSize);

        	return fileName + " (" + displayFileSize + ")";
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorSample_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.div_files.form.btn_selectFiles.addEventHandler("onclick",this.btn_selectFiles_onclick,this);
            this.div_files.form.grd_files.addEventHandler("oncellclick",this.grd_files_oncellclick,this);
            this.btn_preview.addEventHandler("onclick",this.btn_preview_onclick,this);
        };
        this.loadIncludeScript("RichTextEditorSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
