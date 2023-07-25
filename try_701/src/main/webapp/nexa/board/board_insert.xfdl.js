(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("board_insert");
            this.set_titletext("board_insert");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,551);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">게시판 수정</Col><Col id=\"en\">board edit</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">게시판명</Col><Col id=\"en\">board name</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">게시판소개내용</Col><Col id=\"en\">introduction</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">게시판 유형</Col><Col id=\"en\">category</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">파일첨부가능여부</Col><Col id=\"en\">file use</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">첨부가능파일숫자</Col><Col id=\"en\">Number of file uses</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">추가선택사항</Col><Col id=\"en\">Additional selection</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">사용여부</Col><Col id=\"en\">Use status</Col></Row><Row><Col id=\"code\">L0009</Col><Col id=\"ko\">답장가능여부</Col><Col id=\"en\">reply available</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row><Row><Col id=\"code\">L0054</Col><Col id=\"ko\">게시판 등록</Col><Col id=\"en\">bbs regist</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("result_data", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrcn\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"option\" type=\"STRING\" size=\"256\"/><Column id=\"atchPosblFileNumber\" type=\"INT\" size=\"256\"/><Column id=\"atchPosblFileSize\" type=\"INT\" size=\"256\"/><Column id=\"tmplatId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterPnttm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterNm \" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"tmplatNm\" type=\"STRING\" size=\"256\"/><Column id=\"lastUpdusrNm\" type=\"STRING\" size=\"256\"/><Column id=\"authFlag\" type=\"STRING\" size=\"256\"/><Column id=\"tmplatCours\" type=\"STRING\" size=\"256\"/><Column id=\"cmmntyId\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"256\"/><Column id=\"lastUpdusrId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\"/><Col id=\"bbsTyCode\"/><Col id=\"bbsNm\"/><Col id=\"bbsIntrcn\"/><Col id=\"replyPosblAt\"/><Col id=\"fileAtchPosblAt\"/><Col id=\"option\"/><Col id=\"atchPosblFileNumber\"/><Col id=\"atchPosblFileSize\"/><Col id=\"tmplatId\"/><Col id=\"frstRegisterId\"/><Col id=\"frstRegisterNm\"/><Col id=\"frstRegisterPnttm\"/><Col id=\"frstRegisterNm \"/><Col id=\"bbsTyCodeNm\"/><Col id=\"tmplatNm\"/><Col id=\"lastUpdusrNm\"/><Col id=\"authFlag\"/><Col id=\"tmplatCours\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("BoardMaste1", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrcn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"atchPosblFileNumber\" type=\"INT\" size=\"256\"/><Column id=\"atchPosblFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"tmplatId\" type=\"STRING\" size=\"256\"/><Column id=\"lastUpdusrId\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("bbsTyCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeId\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeNm\" type=\"STRING\" size=\"256\"/><Column id=\"codeDc\" type=\"STRING\" size=\"256\"/><Column id=\"tableNm\" type=\"STRING\" size=\"256\"/><Column id=\"haveDetailCondition\" type=\"STRING\" size=\"256\"/><Column id=\"detailCondition\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeId\"/><Col id=\"code\"/><Col id=\"codeNm\"/><Col id=\"codeDc\"/><Col id=\"tableNm\"/><Col id=\"haveDetailCondition\"/><Col id=\"detailCondition\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("cb_option_kr", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">미선택</Col><Col id=\"code\"/></Row><Row><Col id=\"code\">comment</Col><Col id=\"value\">댓글</Col></Row><Row><Col id=\"code\">stsfdg</Col><Col id=\"value\">만족도조사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("cb_option_en", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">No Option</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"code\">comment</Col><Col id=\"value\">Comments</Col></Row><Row><Col id=\"code\">stsfdg</Col><Col id=\"value\">Satisfactions</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("BoardMasterVO", this);
            obj._setContents("<ColumnInfo><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"frstRegisterNm \" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"frstRegisterNm \"/><Col id=\"bbsTyCodeNm\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("LoginVO", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"ihidNum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"passwordHint\" type=\"STRING\" size=\"256\"/><Column id=\"passwordCnsr\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztId\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztNm\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"dn\" type=\"STRING\" size=\"256\"/><Column id=\"onepassUserkey\" type=\"STRING\" size=\"256\"/><Column id=\"onepassIntfToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/><Col id=\"name\"/><Col id=\"email\"/><Col id=\"ihidNum\"/><Col id=\"password\"/><Col id=\"passwordHint\"/><Col id=\"passwordCnsr\"/><Col id=\"userSe\"/><Col id=\"orgnztId\"/><Col id=\"orgnztNm\"/><Col id=\"uniqId\"/><Col id=\"url\"/><Col id=\"ip\"/><Col id=\"dn\"/><Col id=\"onepassUserkey\"/><Col id=\"onepassIntfToken\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("BoardMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsIntrcn\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"fileAtchPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterPnttm\" type=\"STRING\" size=\"256\"/><Column id=\"lastUpdusrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastUpdusrPnttm\" type=\"STRING\" size=\"256\"/><Column id=\"atchPosblFileNumber\" type=\"INT\" size=\"256\"/><Column id=\"atchPosblFileSize\" type=\"STRING\" size=\"256\"/><Column id=\"replyPosblAt\" type=\"STRING\" size=\"256\"/><Column id=\"tmplatId\" type=\"STRING\" size=\"256\"/><Column id=\"useAt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsUseFlag\" type=\"STRING\" size=\"256\"/><Column id=\"trgetId\" type=\"STRING\" size=\"256\"/><Column id=\"registSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"tmplatNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmmntyId\" type=\"STRING\" size=\"256\"/><Column id=\"blogId\" type=\"STRING\" size=\"256\"/><Column id=\"blogAt\" type=\"STRING\" size=\"256\"/><Column id=\"option\" type=\"STRING\" size=\"256\"/><Column id=\"commentAt\" type=\"STRING\" size=\"256\"/><Column id=\"stsfdgAt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\"/><Col id=\"bbsIntrcn\"/><Col id=\"bbsNm\"/><Col id=\"bbsTyCode\"/><Col id=\"fileAtchPosblAt\"/><Col id=\"frstRegisterId\"/><Col id=\"frstRegisterPnttm\"/><Col id=\"lastUpdusrId\"/><Col id=\"lastUpdusrPnttm\"/><Col id=\"atchPosblFileSize\"/><Col id=\"replyPosblAt\"/><Col id=\"tmplatId\"/><Col id=\"useAt\"/><Col id=\"bbsUseFlag\"/><Col id=\"trgetId\"/><Col id=\"registSeCode\"/><Col id=\"uniqId\"/><Col id=\"tmplatNm\"/><Col id=\"cmmntyId\"/><Col id=\"blogId\"/><Col id=\"blogAt\"/><Col id=\"atchPosblFileNumber\"/><Col id=\"option\"/><Col id=\"commentAt\"/><Col id=\"stsfdgAt\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("useComment", this);
            obj._setContents("<ColumnInfo><Column id=\"useComment\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("useSatisfaction", this);
            obj._setContents("<ColumnInfo><Column id=\"useSatisfaction\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","20","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("게시판 등록");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            obj.getSetter("langcode").set("L0054");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","22","50","680","410",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("2px solid blue, 0px none, 0px none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","680","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","180","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("#efefef");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("게시판명");
            obj.getSetter("langcode").set("L0002");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","45","680","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","45","180","69",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("#efefef");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","17","15","121","34",null,null,null,null,null,null,this.Div00.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("게시판소개내용");
            obj.getSetter("langcode").set("L0003");
            this.Div00.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","0","115","680","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_01","0","115","180","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_background("#efefef");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_text("개시판 유형");
            obj.getSetter("langcode").set("L0004");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div00_02","0","198","680","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_02","0","201","180","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_background("#efefef");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div01_02.form);
            obj.set_taborder("0");
            obj.set_text("파일첨부가능여부");
            obj.getSetter("langcode").set("L0005");
            this.Div00.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div00_02_01","0","246","680","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_semantictag("aside");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_03","0","0","180","43",null,null,null,null,null,null,this.Div00.form.Div00_02_01.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_01.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div00_02_01.form.Div01_03.form);
            obj.set_taborder("0");
            obj.set_text("첨부가능파일숫자");
            obj.getSetter("langcode").set("L0006");
            obj.set_enableevent("false");
            this.Div00.form.Div00_02_01.form.Div01_03.addChild(obj.name, obj);

            obj = new Div("Div00_02_01_00","0","290","680","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_03","0","0","180","43",null,null,null,null,null,null,this.Div00.form.Div00_02_01_00.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_01_00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","33",null,null,null,null,null,null,this.Div00.form.Div00_02_01_00.form.Div01_03.form);
            obj.set_taborder("0");
            obj.set_text("추가선택사항");
            obj.getSetter("langcode").set("L0007");
            this.Div00.form.Div00_02_01_00.form.Div01_03.addChild(obj.name, obj);

            obj = new Div("Div00_02_01_00_00","0","334","680","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_03","0","0","180","43",null,null,null,null,null,null,this.Div00.form.Div00_02_01_00_00.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","33",null,null,null,null,null,null,this.Div00.form.Div00_02_01_00_00.form.Div01_03.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.getSetter("langcode").set("L0008");
            this.Div00.form.Div00_02_01_00_00.form.Div01_03.addChild(obj.name, obj);

            obj = new Div("Div00_02_00","0","161","680","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_02_00","0","-1","180","44",null,null,null,null,null,null,this.Div00.form.Div00_02_00.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div00_02_00.form.Div01_02_00.form);
            obj.set_taborder("0");
            obj.set_text("답장가능여부");
            obj.getSetter("langcode").set("L0009");
            this.Div00.form.Div00_02_00.form.Div01_02_00.addChild(obj.name, obj);

            obj = new Button("btnKor",null,"13","76","28","111",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("한국어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0052");
            this.addChild(obj.name, obj);

            obj = new Button("btnEng",null,"13","76","28","31",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("영어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0053");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","-285","121","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가선택사항");
            obj.getSetter("langcode").set("L0007");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_option","216","348","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_innerdataset("cb_option_kr");
            obj.set_datacolumn("value");
            obj.set_codecolumn("code");
            obj.set_text("미선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_use","216","395","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var combo_use_innerdataset = new nexacro.NormalDataset("combo_use_innerdataset", obj);
            combo_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">--선택하세요--</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(combo_use_innerdataset);
            obj.set_text("--선택하세요--");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_bbsIntrcn","216","111","389","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_bbsNm","216","60","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_bbsTy","216","176","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("bbsTyCode");
            obj.set_datacolumn("codeNm");
            obj.set_codecolumn("code");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_fileAtchPosblAt","216","263","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var combo_fileAtchPosblAt_innerdataset = new nexacro.NormalDataset("combo_fileAtchPosblAt_innerdataset", obj);
            combo_fileAtchPosblAt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">YES</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">NO</Col></Row></Rows>");
            obj.set_innerdataset(combo_fileAtchPosblAt_innerdataset);
            obj.set_text("YES");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_atchPosblFileNumber","216","304","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabstop("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var combo_atchPosblFileNumber_innerdataset = new nexacro.NormalDataset("combo_atchPosblFileNumber_innerdataset", obj);
            combo_atchPosblFileNumber_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(combo_atchPosblFileNumber_innerdataset);
            obj.set_text("0");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","625","466","73","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("목록");
            obj.getSetter("langcode").set("L0014");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","545","466","73","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("등록");
            obj.getSetter("langcode").set("L0013");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_replyPosblAt","216","221","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var combo_replyPosblAt_innerdataset = new nexacro.NormalDataset("combo_replyPosblAt_innerdataset", obj);
            combo_replyPosblAt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">--선택하세요--</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(combo_replyPosblAt_innerdataset);
            obj.set_text("--선택하세요--");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00.form,function(p){});
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_00.form,function(p){});
            this.Div00.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01.form,function(p){});
            this.Div00.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_01.form,function(p){});
            this.Div00.form.Div01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form,function(p){});
            this.Div00.form.Div00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01_02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01_02.form,function(p){});
            this.Div00.form.Div01_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_01.form.Div01_03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_01.form.Div01_03.form,function(p){});
            this.Div00.form.Div00_02_01.form.Div01_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_01.form,function(p){});
            this.Div00.form.Div00_02_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_01_00.form.Div01_03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_01_00.form.Div01_03.form,function(p){});
            this.Div00.form.Div00_02_01_00.form.Div01_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_01_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_01_00.form,function(p){});
            this.Div00.form.Div00_02_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_01_00_00.form.Div01_03.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_01_00_00.form.Div01_03.form,function(p){});
            this.Div00.form.Div00_02_01_00_00.form.Div01_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_01_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_01_00_00.form,function(p){});
            this.Div00.form.Div00_02_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_00.form.Div01_02_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_00.form.Div01_02_00.form,function(p){});
            this.Div00.form.Div00_02_00.form.Div01_02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02_00.form,function(p){});
            this.Div00.form.Div00_02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,551,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("board_insert.xfdl", function() {

        /***********************************************************************
        *  MenuPath
        *  FileName    board_insert.xfdl
        *  Creator     ex) 홍길동
        *  CreateDate  2023/02/28
        *  Desction	   ex) 코드관리
        *************************************************************************
        *  date                     Modifier                 Description
        *************************************************************************
        *  2023/02/28                ex) 홍길동                  최초 생성
        ************************************************************************/

        /************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************/
        this.board_insert_onload = function(obj,e)
        {
        	this.fnUpdateForm();
        	var objApp = nexacro.getApplication();
        	this.BoardMasterVO.copyData(objApp.BoardMasterSO);
        	this.LoginVO.copyData(objApp.Login_Result);
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
        * @param   : BoardMaster, BoardMasterVO
        * @return  : N/A
        */


        //등록전 컨펌
        this.btn_insert_onclick = function(obj,e)
        {

        	 if(this.edit_bbsNm.text == ""){
        		alert("게시판명을 입력하세요");
        		return;
        	 }
        	if(this.txt_bbsIntrcn.text == ""){
        		alert("내용을 입력하세요");
        		return;
        	 }
        	if(this.combo_replyPosblAt.value == 0){
        		alert("답장여부를 선택해주세요");
        		return;
        	 }
        	if(this.combo_use.value == 0 ){
        		alert("사용여부를 선택해주세요");
        		return;
        	 }


        	this.dataset_mapping();
        	var rtn=this.confirm("등록하시겠습니까?","등록하기");
        	if(rtn){
        		this.fnInsertBBS();
        	}
        };


        this.fnInsertBBS = function()
        {

        	var sId 	= "InsertBBS";
        	var sUrl 	= "svcUrl::/cop/bbs/insertBBSMaster_nexacro.do";
        	var sInDs 	= "BoardMasterVO=BoardMasterVO BoardMaster=BoardMaster";
        	var sOutDs 	= "result_data=result bbsTyCode=bbsTyCode";
        	var sParam 	= "";
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);
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

        	///form init
        this.fnUpdateForm = function()
        {
        	//this.BoardMaster.setColumn(0,"bbsId"  , get_bbsId);
        	this.result_data.clearData();
        	this.bbsTyCode.clearData();
        	var sId 	= "insert_view";
        	var sUrl 	= "svcUrl::/cop/bbs/insertBBSMasterView_nexacro.do";
        	var sInDs 	= "BoardMaster=BoardMaster";
        	var sOutDs 	= "result_data=result_data bbsTyCode=bbsTyCode";
        	var sParam 	= "";
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);
        };

        this.fnCallback = function(sId,errCode,errMsg)
        {
        	if(sId == "insert_view")
        	{
        		this.gfn_init_form();

        	}
        	if(sId == "InsertBBS")
        	{
        	//	var nPageNo= this.BoardMasterVO.getColumn(0,"pageIndex");
        	//	this.opener.fnSearchPagging(1);//부모의 보모의 함수 접근
        		this.parent.set_url("board::board_List.xfdl");
        	}
        }

        //데이터 init
        this.gfn_init_form = function(){
        	this.combo_bbsTy.set_index(0);
        	this.combo_use.set_index(0);
        	this.combo_atchPosblFileNumber.set_index(0);
        	this.combo_option.set_index(0);
        }

        /************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************/

        this.btnKor_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	this.combo_option.set_innerdataset("cb_option_kr");
        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("ko", this);
        };

        this.btnEng_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	this.combo_option.set_innerdataset("cb_option_en");
        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("en", this);
        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.parent.set_url("board::board_List.xfdl");
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.board_insert_onload,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.Div00.form.Div01.form.Static00.addEventHandler("onclick",this.Div00_Div01_Static00_onclick,this);
            this.Div00.form.Div01_01.form.Static00.addEventHandler("onclick",this.Div00_Div01_01_Static00_onclick,this);
            this.Div00.form.Div00_02_01.form.Div01_03.form.Static00.addEventHandler("onclick",this.Div00_Div01_03_Static00_onclick,this);
            this.Div00.form.Div00_02_01_00.form.Div01_03.form.Static00.addEventHandler("onclick",this.Div00_Div00_02_01_00_Div01_03_Static00_onclick,this);
            this.Div00.form.Div00_02_01_00_00.form.Div01_03.form.Static00.addEventHandler("onclick",this.Div00_Div00_02_01_00_00_Div01_03_Static00_onclick,this);
            this.btnKor.addEventHandler("onclick",this.btnKor_onclick,this);
            this.btnEng.addEventHandler("onclick",this.btnEng_onclick,this);
            this.combo_use.addEventHandler("onitemchanged",this.combo_use_onitemchanged,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_insert_onclick,this);
        };
        this.loadIncludeScript("board_insert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
