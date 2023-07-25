(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RichTextEditorPreviewSample");
            this.set_titletext("Preview");
            this.getSetter("classname").set("RichTextEditorPreviewSample");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web_preview","5","8","790","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","699","571","96","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RichTextEditorPreviewSample.xfdl", function() {

        this.previewUrl = "http://172.10.10.61:8080/server/EcoLibrary_Dev/RichTextEditor/preview.html";

        this.RichTextEditorPreviewSample_onload = function(obj, e)
        {
        	this.web_preview.set_url(this.previewUrl);
        }

        this.web_preview_onloadcompleted = function(obj, e)
        {
        	if ( e.url == this.previewUrl )
        	{
        		var content = this.getOwnerFrame().content;

        		obj.callMethod("setContent", this.getOwnerFrame().content);
        	}
        }

        this.web_preview_onusernotify = function(obj, e)
        {
        	if ( e.userdata == "loadContent" )
        	{
        		var w = obj.getProperty("document").getProperty("body").getProperty("offsetWidth");
        		var h = obj.getProperty("document").getProperty("body").getProperty("offsetHeight");

        		if ( w > this.web_preview.getOffsetWidth() || h > this.web_preview.getOffsetHeight() )
        		{
        			//this.web_preview.resize(w, h);
        			//this.resetScroll();
        		}
        	}
        }

        this.Button00_onclick = function(obj,  e)
        {
        	this.close();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorPreviewSample_onload,this);
            this.web_preview.addEventHandler("onloadcompleted",this.web_preview_onloadcompleted,this);
            this.web_preview.addEventHandler("onusernotify",this.web_preview_onusernotify,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RichTextEditorPreviewSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
