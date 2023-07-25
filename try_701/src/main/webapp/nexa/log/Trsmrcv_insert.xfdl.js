(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Trsmrcv_insert_form");
            this.set_titletext("Trsmrcv_insert");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,551);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">게시판 수정</Col><Col id=\"en\">board edit</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">게시판명</Col><Col id=\"en\">board name</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">게시판소개내용</Col><Col id=\"en\">introduction</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">게시판 유형</Col><Col id=\"en\">category</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">파일첨부가능여부</Col><Col id=\"en\">file use</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">첨부가능파일숫자</Col><Col id=\"en\">Number of file uses</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">추가선택사항</Col><Col id=\"en\">Additional selection</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">사용여부</Col><Col id=\"en\">Use status</Col></Row><Row><Col id=\"code\">L0009</Col><Col id=\"ko\">답장가능여부</Col><Col id=\"en\">reply available</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row><Row><Col id=\"code\">L0054</Col><Col id=\"ko\">송수신테스트</Col><Col id=\"en\">Send and receive test</Col></Row><Row><Col id=\"code\">L0055</Col><Col id=\"ko\">연계ID</Col><Col id=\"en\">Linked ID</Col></Row><Row><Col id=\"code\">L0056</Col><Col id=\"ko\">제공기관ID</Col><Col id=\"en\">Provider ID</Col></Row><Row><Col id=\"code\">L0057</Col><Col id=\"ko\">제공시스템ID</Col><Col id=\"en\">ProviderSystemID</Col></Row><Row><Col id=\"code\">L0058</Col><Col id=\"ko\">제공서비스ID</Col><Col id=\"en\">ProviderServiceID</Col></Row><Row><Col id=\"code\">L0059</Col><Col id=\"ko\">요청기관ID</Col><Col id=\"en\">Request institution ID</Col></Row><Row><Col id=\"code\">L0060</Col><Col id=\"ko\">요청시스템ID</Col><Col id=\"en\">Request System ID</Col></Row><Row><Col id=\"code\">L0061</Col><Col id=\"ko\">전송요청</Col><Col id=\"en\">Transfer request</Col></Row><Row><Col id=\"code\">L0062</Col><Col id=\"ko\">전송완료</Col><Col id=\"en\">Transmission complete</Col></Row><Row><Col id=\"code\">L0063</Col><Col id=\"ko\">전송실패</Col><Col id=\"en\">Transfer failed</Col></Row><Row><Col id=\"code\">L0064</Col><Col id=\"ko\">수신요청</Col><Col id=\"en\">Receive request</Col></Row><Row><Col id=\"code\">L0065</Col><Col id=\"ko\">수신완료</Col><Col id=\"en\">Received</Col></Row><Row><Col id=\"code\">L0066</Col><Col id=\"ko\">수신실패</Col><Col id=\"en\">Failed to receive</Col></Row><Row><Col id=\"code\">L0067</Col><Col id=\"ko\">목록</Col><Col id=\"en\">List</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("result_data", this);
            obj._setContents("<ColumnInfo><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"STRING\" size=\"256\"/><Column id=\"trsmrcvSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"trsmrcvSeCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cntcId\" type=\"STRING\" size=\"256\"/><Column id=\"provdInsttId\" type=\"STRING\" size=\"256\"/><Column id=\"provdSysId\" type=\"STRING\" size=\"256\"/><Column id=\"provdSvcId\" type=\"STRING\" size=\"256\"/><Column id=\"requstInsttId\" type=\"STRING\" size=\"256\"/><Column id=\"requstSysId\" type=\"STRING\" size=\"256\"/><Column id=\"requstTrnsmitTm\" type=\"STRING\" size=\"256\"/><Column id=\"requstRecptnTm\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsTrnsmitTm\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsRecptnTm\" type=\"STRING\" size=\"256\"/><Column id=\"resultCode\" type=\"STRING\" size=\"256\"/><Column id=\"resultMessage\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterPnttm\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"rqsterNm\" type=\"STRING\" size=\"256\"/><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"INT\" size=\"256\"/><Column id=\"searchEndDe\" type=\"INT\" size=\"256\"/><Column id=\"searchWrd\" type=\"INT\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"searchUseYn\" type=\"INT\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"rowNo\" type=\"STRING\" size=\"256\"/><Column id=\"linkId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"occrrncDe\"/><Col id=\"trsmrcvSeCode\"/><Col id=\"trsmrcvSeCodeNm\"/><Col id=\"cntcId\"/><Col id=\"provdInsttId\"/><Col id=\"provdSysId\"/><Col id=\"provdSvcId\"/><Col id=\"requstInsttId\"/><Col id=\"requstSysId\"/><Col id=\"requstTrnsmitTm\"/><Col id=\"requstRecptnTm\"/><Col id=\"rspnsTrnsmitTm\"/><Col id=\"rspnsRecptnTm\"/><Col id=\"resultCode\"/><Col id=\"resultMessage\"/><Col id=\"frstRegisterPnttm\"/><Col id=\"rqesterId\"/><Col id=\"rqsterNm\"/><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"rowNo\">0</Col><Col id=\"requstId\"/></Row></Rows>");
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


            obj = new Dataset("TrsmrcvLogVO", this);
            obj._setContents("<ColumnInfo><Column id=\"requstId\" type=\"STRING\" size=\"256\"/><Column id=\"occrrncDe\" type=\"STRING\" size=\"256\"/><Column id=\"trsmrcvSeCode\" type=\"STRING\" size=\"256\"/><Column id=\"trsmrcvSeCodeNm\" type=\"STRING\" size=\"256\"/><Column id=\"cntcId\" type=\"STRING\" size=\"256\"/><Column id=\"provdInsttId\" type=\"STRING\" size=\"256\"/><Column id=\"provdSysId\" type=\"STRING\" size=\"256\"/><Column id=\"provdSvcId\" type=\"STRING\" size=\"256\"/><Column id=\"requstInsttId\" type=\"STRING\" size=\"256\"/><Column id=\"requstSysId\" type=\"STRING\" size=\"256\"/><Column id=\"requstTrnsmitTm\" type=\"STRING\" size=\"256\"/><Column id=\"requstRecptnTm\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsTrnsmitTm\" type=\"STRING\" size=\"256\"/><Column id=\"rspnsRecptnTm\" type=\"STRING\" size=\"256\"/><Column id=\"resultCode\" type=\"STRING\" size=\"256\"/><Column id=\"resultMessage\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegisterPnttm\" type=\"STRING\" size=\"256\"/><Column id=\"rqesterId\" type=\"STRING\" size=\"256\"/><Column id=\"rqsterNm\" type=\"STRING\" size=\"256\"/><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"INT\" size=\"256\"/><Column id=\"searchEndDe\" type=\"INT\" size=\"256\"/><Column id=\"searchWrd\" type=\"INT\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"searchUseYn\" type=\"INT\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"rowNo\" type=\"STRING\" size=\"256\"/><Column id=\"linkId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"occrrncDe\"/><Col id=\"trsmrcvSeCode\"/><Col id=\"trsmrcvSeCodeNm\"/><Col id=\"cntcId\"/><Col id=\"provdInsttId\"/><Col id=\"provdSysId\"/><Col id=\"provdSvcId\"/><Col id=\"requstInsttId\"/><Col id=\"requstSysId\"/><Col id=\"requstTrnsmitTm\"/><Col id=\"requstRecptnTm\"/><Col id=\"rspnsTrnsmitTm\"/><Col id=\"rspnsRecptnTm\"/><Col id=\"resultCode\"/><Col id=\"resultMessage\"/><Col id=\"frstRegisterPnttm\"/><Col id=\"rqesterId\"/><Col id=\"rqsterNm\"/><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"rowNo\">0</Col></Row></Rows>");
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
            obj.set_taborder("1");
            obj.set_text("송수신테스트");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_positionstep("-1");
            obj.getSetter("langcode").set("L0054");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","22","50","680","410",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_text("연계ID");
            obj.getSetter("langcode").set("L0055");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div00_01","0","45","680","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_01","0","45","180","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("#efefef");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div01_01.form);
            obj.set_taborder("0");
            obj.set_text("제공기관ID");
            obj.getSetter("langcode").set("L0056");
            this.Div00.form.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div00_02","0","128","680","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_02","0","131","180","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_background("#efefef");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div01_02.form);
            obj.set_taborder("0");
            obj.set_text("제공서비스ID");
            obj.getSetter("langcode").set("L0058");
            this.Div00.form.Div01_02.addChild(obj.name, obj);

            obj = new Div("Div00_02_01","0","176","680","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_semantictag("aside");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_03","0","0","180","43",null,null,null,null,null,null,this.Div00.form.Div00_02_01.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_01.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div00_02_01.form.Div01_03.form);
            obj.set_taborder("0");
            obj.set_text("요청기관ID");
            obj.getSetter("langcode").set("L0059");
            obj.set_enableevent("false");
            this.Div00.form.Div00_02_01.form.Div01_03.addChild(obj.name, obj);

            obj = new Div("Div00_02_01_00","0","220","680","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_03","0","0","180","43",null,null,null,null,null,null,this.Div00.form.Div00_02_01_00.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_01_00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","33",null,null,null,null,null,null,this.Div00.form.Div00_02_01_00.form.Div01_03.form);
            obj.set_taborder("0");
            obj.set_text("요청시스템ID");
            obj.getSetter("langcode").set("L0060");
            this.Div00.form.Div00_02_01_00.form.Div01_03.addChild(obj.name, obj);

            obj = new Div("Div00_02_00","0","91","680","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_border("0px none, 0px none, 1px solid darkgray");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_02_00","0","-1","180","44",null,null,null,null,null,null,this.Div00.form.Div00_02_00.form);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            this.Div00.form.Div00_02_00.addChild(obj.name, obj);

            obj = new Static("Static00","17","5","121","34",null,null,null,null,null,null,this.Div00.form.Div00_02_00.form.Div01_02_00.form);
            obj.set_taborder("0");
            obj.getSetter("langcode").set("L0057");
            obj.set_text("제공시스템ID");
            this.Div00.form.Div00_02_00.form.Div01_02_00.addChild(obj.name, obj);

            obj = new Button("btn_T_request","5","284","90","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("전송요청");
            obj.getSetter("langcode").set("L0061");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Received","383","284","90","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("수신완료");
            obj.getSetter("langcode").set("L0065");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_R_request","289","284","90","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("수신요청");
            obj.getSetter("langcode").set("L0064");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_T_failed","195","284","90","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("전송실패");
            obj.getSetter("langcode").set("L0063");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_T_complete","100","284","90","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("전송완료");
            obj.getSetter("langcode").set("L0062");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_R_Failed","477","284","90","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("수신실패");
            obj.getSetter("langcode").set("L0066");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","599","284","80","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("목록");
            obj.getSetter("langcode").set("L0067");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnKor",null,"13","76","28","111",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("한국어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0052");
            this.addChild(obj.name, obj);

            obj = new Button("btnEng",null,"13","76","28","31",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("영어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0053");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","-285","121","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가선택사항");
            obj.getSetter("langcode").set("L0007");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_cntcId","216","60","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("CNTC0001");
            obj.set_text("CNTC0001");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_provdInsttId","216","106","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("INS00001");
            obj.set_text("INS00001");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_provdSysId","216","151","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("SYS00001");
            obj.set_text("SYS00001");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_provdSvcId","216","194","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("SVC00001");
            obj.set_text("SVC00001");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_requstInsttId","217","237","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("INS00011");
            obj.set_text("INS00011");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_requstSysId","216","281","389","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("SYS00031");
            obj.set_text("SYS00031");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","52","416","641","101",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("TrsmrcvLogVO");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"requstId\"/><Cell col=\"1\" text=\"occrrncDe\"/><Cell col=\"2\" text=\"trsmrcvSeCode\"/><Cell col=\"3\" text=\"trsmrcvSeCodeNm\"/><Cell col=\"4\" text=\"cntcId\"/><Cell col=\"5\" text=\"provdInsttId\"/><Cell col=\"6\" text=\"provdSysId\"/><Cell col=\"7\" text=\"provdSvcId\"/><Cell col=\"8\" text=\"requstInsttId\"/><Cell col=\"9\" text=\"requstSysId\"/><Cell col=\"10\" text=\"requstTrnsmitTm\"/><Cell col=\"11\" text=\"requstRecptnTm\"/><Cell col=\"12\" text=\"rspnsTrnsmitTm\"/><Cell col=\"13\" text=\"rspnsRecptnTm\"/><Cell col=\"14\" text=\"resultCode\"/><Cell col=\"15\" text=\"resultMessage\"/><Cell col=\"16\" text=\"frstRegisterPnttm\"/><Cell col=\"17\" text=\"rqesterId\"/><Cell col=\"18\" text=\"rqsterNm\"/><Cell col=\"19\" text=\"searchBgnDe\"/><Cell col=\"20\" text=\"searchCnd\"/><Cell col=\"21\" text=\"searchEndDe\"/><Cell col=\"22\" text=\"searchWrd\"/><Cell col=\"23\" text=\"sortOrdr\"/><Cell col=\"24\" text=\"searchUseYn\"/><Cell col=\"25\" text=\"pageIndex\"/><Cell col=\"26\" text=\"pageUnit\"/><Cell col=\"27\" text=\"pageSize\"/><Cell col=\"28\" text=\"firstIndex\"/><Cell col=\"29\" text=\"lastIndex\"/><Cell col=\"30\" text=\"recordCountPerPage\"/><Cell col=\"31\" text=\"rowNo\"/><Cell col=\"32\" text=\"linkId\"/></Band><Band id=\"body\"><Cell text=\"bind:requstId\"/><Cell col=\"1\" text=\"bind:occrrncDe\"/><Cell col=\"2\" text=\"bind:trsmrcvSeCode\"/><Cell col=\"3\" text=\"bind:trsmrcvSeCodeNm\"/><Cell col=\"4\" text=\"bind:cntcId\"/><Cell col=\"5\" text=\"bind:provdInsttId\"/><Cell col=\"6\" text=\"bind:provdSysId\"/><Cell col=\"7\" text=\"bind:provdSvcId\"/><Cell col=\"8\" text=\"bind:requstInsttId\"/><Cell col=\"9\" text=\"bind:requstSysId\"/><Cell col=\"10\" text=\"bind:requstTrnsmitTm\"/><Cell col=\"11\" text=\"bind:requstRecptnTm\"/><Cell col=\"12\" text=\"bind:rspnsTrnsmitTm\"/><Cell col=\"13\" text=\"bind:rspnsRecptnTm\"/><Cell col=\"14\" text=\"bind:resultCode\"/><Cell col=\"15\" text=\"bind:resultMessage\"/><Cell col=\"16\" text=\"bind:frstRegisterPnttm\"/><Cell col=\"17\" text=\"bind:rqesterId\"/><Cell col=\"18\" text=\"bind:rqsterNm\"/><Cell col=\"19\" text=\"bind:searchBgnDe\"/><Cell col=\"20\" text=\"bind:searchCnd\"/><Cell col=\"21\" text=\"bind:searchEndDe\"/><Cell col=\"22\" text=\"bind:searchWrd\"/><Cell col=\"23\" text=\"bind:sortOrdr\"/><Cell col=\"24\" text=\"bind:searchUseYn\"/><Cell col=\"25\" text=\"bind:pageIndex\"/><Cell col=\"26\" text=\"bind:pageUnit\"/><Cell col=\"27\" text=\"bind:pageSize\"/><Cell col=\"28\" text=\"bind:firstIndex\"/><Cell col=\"29\" text=\"bind:lastIndex\"/><Cell col=\"30\" text=\"bind:recordCountPerPage\"/><Cell col=\"31\" text=\"bind:rowNo\"/><Cell col=\"32\" text=\"bind:linkId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("Trsmrcv_insert.xfdl","log::langCnt.xjs");
        this.registerScript("Trsmrcv_insert.xfdl", function() {

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
        this.executeIncludeScript("log::langCnt.xjs"); /*include "log::langCnt.xjs"*/;
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
        * @param   : TrsmrcvLogVO, result_data
        * @return  : N/A
        */
        //전송요청
        this.btn_T_request_onclick = function(obj,e)
        {
        	var rtn=this.confirm("전송요청 하시겠습니까?","등록하기");
        	if(rtn){
        		this.insert_dataset_mapping("S01");
        	}
        }
        //전송완료
        this.btn_T_complete_onclick = function(obj,e)
        {
        	var rtn=this.confirm("전송완료 하시겠습니까?","등록하기");
        	if(rtn){
        		this.insert_dataset_mapping("S02");
        	}
        }
        ////전송실패
        this.btn_T_failed_onclick = function(obj,e)
        {
        	var rtn=this.confirm("전송실패 하시겠습니까?","등록하기");
        	if(rtn){
        		this.insert_dataset_mapping("S03");
        	}
        }
        //수신요청
        this.btn_R_request_onclick = function(obj,e)
        {
        	var rtn=this.confirm("수신요청 하시겠습니까?","등록하기");
        	if(rtn){
        		this.insert_dataset_mapping("S04");
        	}
        }
        //수신완료
        this.btn_R_complete_onclick = function(obj,e)
        {
        	var rtn=this.confirm("수신완료 등록하시겠습니까?","등록하기");
        	if(rtn){
        		this.insert_dataset_mapping("S05");
        	}
        }
        //수신실패
        this.btn_R_failed_onclick = function(obj,e)
        {
        	var rtn=this.confirm("수신실패 등록하시겠습니까?","등록하기");
        	if(rtn){
        		this.insert_dataset_mapping("S06");
        	}
        }

        //등록전 컨펌
        this.insert_dataset_mapping = function(trsmrcvSeCode)
        {
        	var tsc=trsmrcvSeCode;
        //	this.TrsmrcvLogVO.clearData();
        //	this.TrsmrcvLogVO.addRow();
        	this.TrsmrcvLogVO.setColumn(0,"cntcId", this.edit_cntcId.text);
        	this.TrsmrcvLogVO.setColumn(0,"provdInsttId", this.edit_provdInsttId.text);
        	this.TrsmrcvLogVO.setColumn(0,"provdSysId", this.edit_provdSysId.value);
        	this.TrsmrcvLogVO.setColumn(0,"provdSvcId", this.edit_provdSvcId.value);
        	this.TrsmrcvLogVO.setColumn(0,"requstInsttId", this.edit_requstInsttId.value);
        	this.TrsmrcvLogVO.setColumn(0,"requstSysId", this.edit_requstSysId.value);
         	this.TrsmrcvLogVO.setColumn(0,"trsmrcvSeCode", tsc);

        	//alert(this.TrsmrcvLogVO.getColumn(0,"trsmrcvSeCode"));

        	this.fnInsertLog();
        };


        this.fnInsertLog = function()
        {
        	var sId 	= "InsertLog";
        	var sUrl 	= "svcUrl::/sym/log/tlg/InsertTrsmrcvLog_nexacro.do";
        	var sInDs 	= "searchVO=TrsmrcvLogVO";
        	var sOutDs 	= "";
        	var sParam 	= "";
        	var sCallback 	= "fnCallback";
        	var isAsync     = true;
        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback,isAsync);
        };



        this.fnCallback = function(svcID, errCD, errMSG)
        {

        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	else if(svcID == "InsertLog"){
        		this.alert("요청완료");
        			this.parent.set_url("log::Trsmrcv_List.xfdl");
        	}
        }





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
        this.fnUpdate_set_Form = function()
        {



        }
        /************************************************************************
         * 사용자 FUNCTION 영역
        ************************************************************************/

        this.btnKor_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	//this.combo_option.set_innerdataset("cb_option_kr");
        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("ko", this);
        };

        this.btnEng_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	//this.combo_option.set_innerdataset("cb_option_en");
        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("en", this);
        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.parent.set_url("log::Trsmrcv_List.xfdl");
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
            this.Div00.form.Div00_02_00.form.Div01_02_00.form.Static00.addEventHandler("onclick",this.Div00_Div00_02_00_Div01_02_00_Static00_onclick,this);
            this.Div00.form.btn_T_request.addEventHandler("onclick",this.btn_T_request_onclick,this);
            this.Div00.form.btn_Received.addEventHandler("onclick",this.btn_R_complete_onclick,this);
            this.Div00.form.btn_R_request.addEventHandler("onclick",this.btn_R_request_onclick,this);
            this.Div00.form.btn_T_failed.addEventHandler("onclick",this.btn_T_failed_onclick,this);
            this.Div00.form.btn_T_complete.addEventHandler("onclick",this.btn_T_complete_onclick,this);
            this.Div00.form.btn_R_Failed.addEventHandler("onclick",this.btn_R_failed_onclick,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btnKor.addEventHandler("onclick",this.btnKor_onclick,this);
            this.btnEng.addEventHandler("onclick",this.btnEng_onclick,this);
            this.edit_cntcId.addEventHandler("onchanged",this.edit_bbsNm_onchanged,this);
            this.edit_requstSysId.addEventHandler("onchanged",this.Div00_Div00_02_01_00_edit_requstSysId_onchanged,this);
        };
        this.loadIncludeScript("Trsmrcv_insert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
