(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("changelanguage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">매출거래</Col><Col id=\"code\">01</Col></Row><Row><Col id=\"value\">매입거래</Col><Col id=\"code\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">거래 상세</Col><Col id=\"en\">Transaction details</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">거래일</Col><Col id=\"en\">Trading day</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">거래타입</Col><Col id=\"en\">Transaction type</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">과세유형</Col><Col id=\"en\">Tax type</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">단가액 세액포함</Col><Col id=\"en\">Unit price including tax</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">세금, 계산서 수취</Col><Col id=\"en\">Tax, Bill receipt</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">거래처</Col><Col id=\"en\">account</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">찾기 (Alt+^)</Col><Col id=\"en\">Find (Alt+^)</Col></Row><Row><Col id=\"code\">L0009</Col><Col id=\"ko\">전화번호</Col><Col id=\"en\">Phone number</Col></Row><Row><Col id=\"code\">L0010</Col><Col id=\"ko\">영업사원</Col><Col id=\"en\">Salesperson</Col></Row><Row><Col id=\"code\">L0011</Col><Col id=\"ko\">대표자</Col><Col id=\"en\">representative</Col></Row><Row><Col id=\"code\">L0012</Col><Col id=\"ko\">사업자번호</Col><Col id=\"en\">Business Number</Col></Row><Row><Col id=\"code\">L0013</Col><Col id=\"ko\">업체구분</Col><Col id=\"en\">Company type</Col></Row><Row><Col id=\"code\">L0014</Col><Col id=\"ko\">담당자</Col><Col id=\"en\">manager</Col></Row><Row><Col id=\"code\">L0015</Col><Col id=\"ko\">잔액조회</Col><Col id=\"en\">Balance</Col></Row><Row><Col id=\"code\">L0016</Col><Col id=\"ko\">거래내역인쇄</Col><Col id=\"en\">Transaction history</Col></Row><Row><Col id=\"code\">L0017</Col><Col id=\"ko\">세금계산서/계산서 발행(^+L)</Col><Col id=\"en\">Tax bill(^+L)</Col></Row><Row><Col id=\"code\">L0018</Col><Col id=\"ko\">거래명세서/영수증 발행(^+P)</Col><Col id=\"en\">Trading statement(^+P)</Col></Row><Row><Col id=\"code\">L0019</Col><Col id=\"ko\">품목추가</Col><Col id=\"en\">Add item</Col></Row><Row><Col id=\"code\">L0020</Col><Col id=\"ko\">품목삭제</Col><Col id=\"en\">Delete item</Col></Row><Row><Col id=\"code\">L0021</Col><Col id=\"ko\">저장(F9)</Col><Col id=\"en\">Save(F9)</Col></Row><Row><Col id=\"code\">L0022</Col><Col id=\"ko\">품목명</Col><Col id=\"en\">Item name</Col></Row><Row><Col id=\"code\">L0023</Col><Col id=\"ko\">규격</Col><Col id=\"en\">standard</Col></Row><Row><Col id=\"code\">L0024</Col><Col id=\"ko\">단위</Col><Col id=\"en\">unit</Col></Row><Row><Col id=\"code\">L0025</Col><Col id=\"ko\">수량</Col><Col id=\"en\">Quantity</Col></Row><Row><Col id=\"code\">L0026</Col><Col id=\"ko\">단가</Col><Col id=\"en\">unit price</Col></Row><Row><Col id=\"code\">L0027</Col><Col id=\"ko\">할인</Col><Col id=\"en\">Sale</Col></Row><Row><Col id=\"code\">L0028</Col><Col id=\"ko\">금액</Col><Col id=\"en\">Price</Col></Row><Row><Col id=\"code\">L0029</Col><Col id=\"ko\">세액</Col><Col id=\"en\">Tax amount</Col></Row><Row><Col id=\"code\">L0030</Col><Col id=\"ko\">비고</Col><Col id=\"en\">Remark</Col></Row><Row><Col id=\"code\">L0031</Col><Col id=\"ko\">할인전</Col><Col id=\"en\">Before discount</Col></Row><Row><Col id=\"code\">L0032</Col><Col id=\"ko\">현금지급</Col><Col id=\"en\">Cash payments</Col></Row><Row><Col id=\"code\">L0033</Col><Col id=\"ko\">현금</Col><Col id=\"en\">cash</Col></Row><Row><Col id=\"code\">L0034</Col><Col id=\"ko\">적립금 잔고</Col><Col id=\"en\">Reserve balance</Col></Row><Row><Col id=\"code\">L0035</Col><Col id=\"ko\">할인</Col><Col id=\"en\">Sale</Col></Row><Row><Col id=\"code\">L0036</Col><Col id=\"ko\">계좌이체</Col><Col id=\"en\">Bank Transfer</Col></Row><Row><Col id=\"code\">L0037</Col><Col id=\"ko\">은행</Col><Col id=\"en\">Bank</Col></Row><Row><Col id=\"code\">L0038</Col><Col id=\"ko\">적립금 추가</Col><Col id=\"en\">Add points</Col></Row><Row><Col id=\"code\">L0039</Col><Col id=\"ko\">매입/매출액</Col><Col id=\"en\">Purchase/Sales</Col></Row><Row><Col id=\"code\">L0040</Col><Col id=\"ko\">어음</Col><Col id=\"en\">note</Col></Row><Row><Col id=\"code\">L0041</Col><Col id=\"ko\">어음기록</Col><Col id=\"en\">Bill record</Col></Row><Row><Col id=\"code\">L0042</Col><Col id=\"ko\">적립금 사용</Col><Col id=\"en\">Use of reserves</Col></Row><Row><Col id=\"code\">L0043</Col><Col id=\"ko\">세액</Col><Col id=\"en\">Tax amount</Col></Row><Row><Col id=\"code\">L0044</Col><Col id=\"ko\">카드지급</Col><Col id=\"en\">Card payment</Col></Row><Row><Col id=\"code\">L0045</Col><Col id=\"ko\">카드</Col><Col id=\"en\">Card</Col></Row><Row><Col id=\"code\">L0046</Col><Col id=\"ko\">결제 약속일</Col><Col id=\"en\">Payment date</Col></Row><Row><Col id=\"code\">L0047</Col><Col id=\"ko\">합계</Col><Col id=\"en\">Sum</Col></Row><Row><Col id=\"code\">L0048</Col><Col id=\"ko\">지급액계</Col><Col id=\"en\">Payment amount</Col></Row><Row><Col id=\"code\">L0049</Col><Col id=\"ko\">수량합계</Col><Col id=\"en\">Total quantity</Col></Row><Row><Col id=\"code\">L0050</Col><Col id=\"ko\">외상</Col><Col id=\"en\">credit</Col></Row><Row><Col id=\"code\">L0051</Col><Col id=\"ko\">참고사항</Col><Col id=\"en\">Note</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDealType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">과세거래</Col><Col id=\"code\">01</Col></Row><Row><Col id=\"value\">영세거래</Col><Col id=\"code\">02</Col></Row><Row><Col id=\"value\">면세거래</Col><Col id=\"code\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsType_en", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">Sales</Col><Col id=\"code\">01</Col></Row><Row><Col id=\"value\">Purchase</Col><Col id=\"code\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDealType_en", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">Taxable</Col><Col id=\"code\">01</Col></Row><Row><Col id=\"value\">Small</Col><Col id=\"code\">02</Col></Row><Row><Col id=\"value\">Duty-free</Col><Col id=\"code\">03</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static08","129","421",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","129","460",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","129","538",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","129","577",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00","129","616",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","228",null,"174","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDealDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"품목명\" subsumtext=\"L0022\"/><Cell col=\"1\" text=\"규격\" subsumtext=\"L0023\"/><Cell col=\"2\" text=\"단위\" subsumtext=\"L0024\"/><Cell col=\"3\" text=\"수량\" subsumtext=\"L0025\"/><Cell col=\"4\" text=\"단가\" subsumtext=\"L0026\"/><Cell col=\"5\" text=\"할인\" subsumtext=\"L0027\"/><Cell col=\"6\" text=\"금액\" subsumtext=\"L0028\"/><Cell col=\"7\" text=\"세액\" subsumtext=\"L0029\"/><Cell col=\"8\" text=\"비고\" subsumtext=\"L0030\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:STANDARD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:UNIT\" combodataset=\"dsUnit\" combodatacol=\"value\" combocodecol=\"code\" displaytype=\"combotext\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:AMOUNT\" edittype=\"normal\" editautoselect=\"true\" displaytype=\"number\"/><Cell col=\"4\" progressbarblocksize=\"50\" text=\"bind:LAST_PRICE\" editautoselect=\"true\" displaytype=\"currency\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:DISCOUNT_PRICE\" displaytype=\"currency\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:TOTAL_PRICE\" displaytype=\"currency\"/><Cell col=\"7\" displaytype=\"currency\" text=\"bind:TAX_PRICE\"/><Cell col=\"8\" text=\"bind:ETC\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","129","55",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","129","499",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("stacalSalesDate","20","55","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("거래일");
            obj.set_cssclass("sta_WF_titleStar");
            obj.getSetter("langcode").set("L0002");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSalesDate","139","61","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stacboDealType","559","55","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("과세유형");
            obj.set_cssclass("sta_WF_titleStar");
            obj.getSetter("langcode").set("L0004");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDealType","679","61","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsDealType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAddin","829","55","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("단가액 세액포함");
            obj.set_value("true");
            obj.getSetter("langcode").set("L0005");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAccount","969","55","180","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("세금, 계산서 수취");
            obj.getSetter("langcode").set("L0006");
            this.addChild(obj.name, obj);

            obj = new Static("stardoAccuntType","269","55","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("거래타입");
            obj.set_cssclass("sta_WF_titleStar");
            obj.getSetter("langcode").set("L0003");
            this.addChild(obj.name, obj);

            obj = new Static("staedtCustomerName","20","94","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_titleStar");
            obj.getSetter("langcode").set("L0007");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_01_00","129","94",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","20","133","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("대표자");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0011");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","129","133",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRepesentName","139","139","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_text("REPRESENTATIVE_NAME");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_04_00","269","133","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0012");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","829","94","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("영업사원");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0010");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_04","829","133","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0014");
            this.addChild(obj.name, obj);

            obj = new Edit("edtStaffName","949","139","137","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_autoselect("true");
            obj.set_text("217-81-46957");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","559","94","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0009");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","559","133","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("업체구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0013");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSalesman","949","100","137","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoAccuntType","409","61","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_rowcount("-1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_innerdataset("dsType");
            obj.set_columncount("-1");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staMiddlebar","20","20",null,"28","750",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("거래 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.getSetter("langcode").set("L0001");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustomerName","139","100","315","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_text("217-81-46957");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchCustomer","460","100","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("찾기 (Alt+^)");
            obj.set_cssclass("btn_cm_basic01");
            obj.set_enable("false");
            obj.getSetter("langcode").set("L0008");
            this.addChild(obj.name, obj);

            obj = new Button("btnCash","676","427","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("현금");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0033");
            this.addChild(obj.name, obj);

            obj = new Button("btnBank","676","466","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("은행");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0037");
            this.addChild(obj.name, obj);

            obj = new Button("btnBill","676","505","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("어음기록");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0041");
            this.addChild(obj.name, obj);

            obj = new Button("btnCard","676","544","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("카드");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0045");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00","760","577","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("수량합계");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0049");
            this.addChild(obj.name, obj);

            obj = new Static("staCash","350","421","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("현금지급");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0032");
            this.addChild(obj.name, obj);

            obj = new Static("staBank","350","460","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("계좌이체");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0036");
            this.addChild(obj.name, obj);

            obj = new Static("staBill","350","499","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("어음");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0040");
            this.addChild(obj.name, obj);

            obj = new Static("staCard","350","538","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("카드지급");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0044");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","350","577","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("지급액계");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0048");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_00","350","616","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("참고사항");
            obj.getSetter("langcode").set("L0051");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","421","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("할인전");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0031");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","460","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("할인");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0035");
            this.addChild(obj.name, obj);

            obj = new Static("staDealPrice","20","499","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("매입/매출액");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0039");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","538","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("세액");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0043");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","20","577","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("합계");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0047");
            this.addChild(obj.name, obj);

            obj = new Static("staCredit","20","616","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("외상");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0050");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07_00_00","490","622","590","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"193","76","28","30",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("저장(F9)");
            obj.set_cssclass("btn_WF_add01");
            obj.getSetter("langcode").set("L0021");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"193","76","28","113",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("품목삭제");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0020");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"193","76","28","195",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("품목추가");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0019");
            this.addChild(obj.name, obj);

            obj = new Button("btnTaxBillPublish","278","193","200","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("세금계산서/계산서 발행(^+L)");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0017");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint","122","193","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("거래내역인쇄");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0016");
            this.addChild(obj.name, obj);

            obj = new Button("btnPriceReset","20","193","96","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("잔액조회");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0015");
            this.addChild(obj.name, obj);

            obj = new Static("staFundTotal","760","421","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("적립금 잔고");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0034");
            this.addChild(obj.name, obj);

            obj = new Static("staFundAdd","760","460","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("적립금 추가");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0038");
            this.addChild(obj.name, obj);

            obj = new Static("staFundUse","760","499","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("적립금 사용");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("langcode").set("L0042");
            this.addChild(obj.name, obj);

            obj = new Button("btnBillPublish","484","193","190","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("거래명세서/영수증 발행(^+P)");
            obj.set_cssclass("btn_cm_basic01");
            obj.getSetter("langcode").set("L0018");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCoporType","679","139","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_innerdataset("dsCoporType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtLast","160","427","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtDiscount","160","466","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtSales","160","505","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtTax","160","544","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtAll","160","583","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtCredit","160","622","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtCash","490","427","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_format("###,###,###");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtBank","490","466","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_format("###,###,###");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtBill","490","505","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_format("###,###,###");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtPayment","490","583","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtCard","490","544","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_format("###,###,###");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtFundAdd","900","466","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtFundUse","900","505","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtAmount","900","583","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtFundTotal","900","427","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_format("###,###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtTelNum","679","100","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_enable("false");
            obj.set_format("@@@-@@@@-@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medtBusinessCode","409","139","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_enable("false");
            obj.set_format("@@-@@@-{@@@@@}");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("stacalPaymentDate","760","538","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("결제 약속일");
            obj.set_cssclass("sta_WF_titleStar");
            obj.getSetter("langcode").set("L0046");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPaymentDate","900","544","180","28",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnKor",null,"13","76","28","111",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("한국어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0052");
            this.addChild(obj.name, obj);

            obj = new Button("btnEng",null,"13","76","28","31",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("영어");
            obj.set_cssclass("btn_WF_delete01");
            obj.getSetter("langcode").set("L0053");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1120,890,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calSalesDate","value","dsDeal","DEAL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboDealType","value","dsDeal","TAX_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","chkAddin","value","dsDeal","ADD_IN_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","chkAccount","value","dsDeal","ACCOUNT_BILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtRepesentName","value","dsDealCustomer","REPRESENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtStaffName","value","dsDeal","STAFF_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboSalesman","value","dsDeal","SALESMAN_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdoAccuntType","value","dsDeal","DEAL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtCustomerName","value","dsDealCustomer","CUSTOMER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboCoporType","value","dsDealCustomer","CORPORATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","medtLast","value","dsDeal","BEFORE_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","medtDiscount","value","dsDeal","DISCOUNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","medtSales","value","dsDeal","LAST_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","medtTax","value","dsDeal","TAX_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","medtAll","value","dsDeal","TOTAL_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","medtCredit","value","dsDeal","CREDIT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","medtCash","value","dsDeal","CASH_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","medtBank","value","dsDeal","ACCOUNT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","medtBill","value","dsDeal","BILL_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","medtPayment","value","dsDeal","PAYMENT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","medtCard","value","dsDeal","CARD_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","medtFundAdd","value","dsDeal","ADD_RESERVE_FUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","medtFundUse","value","dsDeal","USE_RESERVE_FUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","medtAmount","value","dsDeal","TOTAL_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","medtFundTotal","value","dsDeal","ACCOUMULATE_FUND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","medtTelNum","value","dsDealCustomer","STAFF_TELNUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","medtBusinessCode","value","dsDealCustomer","BUSINESS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","calPaymentDate","value","dsDealCustomer","PAYMENT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("changelanguage.xfdl", function() {

        this.btnKor_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	this.rdoAccuntType.set_innerdataset("dsType");
        	this.cboDealType.set_innerdataset("dsDealType");

        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("ko", this);
        };

        this.btnEng_onclick = function(obj,e)
        {
        	//선택된 언어에 맞춰 Radio, Combo 데이터셋 변경
        	this.rdoAccuntType.set_innerdataset("dsType_en");
        	this.cboDealType.set_innerdataset("dsDealType_en");

        	//레이블 변경 함수 호출
        	this.gfnChangeLanguage("en", this);
        };

        //레이블 변경 함수
        this.gfnChangeLanguage = function(sLocale, objForm)
        {
        	//컴포넌트 리스트 가져오기
        	var objComps = objForm.components;
        	var objComp;

        	//컴포넌트 갯수 가져오기
        	var nCount = objComps.length;

        	var nFRow;
        	var sLangCode;
        	var sValue;

        	this.dsLang.set_enableevent(false);
        	for(var i=0;i<nCount;i++)
        	{
        		//컴포넌트 가져오기
        		objComp = objComps[i];

        		//컴포넌트가 Div일 경우
        		if(objComp instanceof nexacro.Div)
        		{
        			//레이블 변경 함수 재귀 호출
        			this.gfnChangeLanguage(sLocale, objComp.form);
        		}
        		//컴포넌트가 PopupDiv일 경우
        		else if(objComp instanceof nexacro.PopupDiv)
        		{
        			//레이블 변경 함수 재귀 호출
        			this.gfnChangeLanguage(sLocale, objComp.form);
        		}
        		//컴포넌트가 Tab일 경우
        		else if(objComp instanceof nexacro.Tab)
        		{
        			//Tab 페이지 갯수 가져오기
        			var nTabCount = objComp.tabpages.length;
        			for(var j=0;j<nTabCount;j++)
        			{
        				//Tab 페이지 가져오기
        				var objTabPage = objComp.tabpages[j];

        				//레이블 변경 함수 재귀 호출
        				this.gfnChangeLanguage(sLocale, objTabPage.form)
        			}
        		}
        		//컴포넌트가 Grid일 경우
        		else if(objComp instanceof nexacro.Grid)
        		{
        			//레이블 변경함수(그리드) 호출
        			this.gfnChangeLanguageGrid(sLocale, objComp);
        		}
        		//일반 컴포넌트일 경우
        		else
        		{
        			//컴포넌트에 설정한 언어코드 정보 가져오기
        			sLangCode = objComp.langcode;

        			//언어코드가 있을 경우
        			if(sLangCode)
        			{
        				//언어코드에 해당하는 Row 찾기
        				nFRow = this.dsLang.findRow("code", sLangCode);

        				//해당 코드 Row가 존재할 경우
        				if(nFRow!=-1)
        				{
        					//변경할 언어 레이블 정보 가져오기
        					sValue = this.dsLang.getColumn(nFRow, sLocale);

        					//Static, Button, CheckBox일 경우
        					if(objComp instanceof nexacro.Static || objComp instanceof nexacro.Button || objComp instanceof nexacro.CheckBox)
        					{
        						//text 속성 값 변경
        						objComp.set_text(sValue);
        					}
        					//나머지 컴포넌트일 경우
        					else
        					{
        						//value 속성 값 변경
        						objComp.set_value(sValue);
        					}
        				}
        			}
        		}
        	}

        	this.dsLang.set_enableevent(true);
        }

        //레이블 변경함수(그리드)
        this.gfnChangeLanguageGrid = function(sLocale, objGrid)
        {
        	//Head Cell 갯수 구하기
        	var nHeadCount = objGrid.getCellCount("head");

        	//Summ Cell 갯수 구하기
        	var nSummCount = objGrid.getCellCount("summ");

        	var nFRow;
        	var sLangCode;
        	var sValue;

        	for(var i=0;i<nHeadCount;i++)
        	{
        		//Cell에 설정한 언어코드 정보 가져오기
        		sLangCode = objGrid.getCellProperty("head", i, "subsumtext");

        		//언어코드가 있을 경우
        		if(sLangCode)
        		{
        			//언어코드에 해당하는 Row 찾기
        			nFRow = this.dsLang.findRow("code", sLangCode);

        			//해당 코드 Row가 존재할 경우
        			if(nFRow!=-1)
        			{
        				//변경할 언어 레이블 정보 가져오기
        				sValue = this.dsLang.getColumn(nFRow, sLocale);

        				//text 속성 값 변경
        				objGrid.setCellProperty("head", i, "text", sValue);
        			}
        		}
        	}

        	for(var i=0;i<nSummCount;i++)
        	{
        		//Cell에 설정한 언어코드 정보 가져오기
        		sLangCode = objGrid.getCellProperty("summ", i, "subsumtext");

        		//언어코드가 있을 경우
        		if(sLangCode)
        		{
        			//언어코드에 해당하는 Row 찾기
        			nFRow = this.dsLang.findRow("code", sLangCode);

        			//해당 코드 Row가 존재할 경우
        			if(nFRow!=-1)
        			{
        				//변경할 언어 레이블 정보 가져오기
        				sValue = this.dsLang.getColumn(nFRow, sLocale);

        				//text 속성 값 변경
        				objGrid.setCellProperty("summ", i, "text", sValue);
        			}
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdList.addEventHandler("onexpanddown",this.grdList_onexpanddown,this);
            this.Static08_01_00.addEventHandler("onclick",this.Static08_01_00_onclick,this);
            this.staMiddlebar.addEventHandler("onclick",this.divManufactCo_staMiddlebar_onclick,this);
            this.btnSearchCustomer.addEventHandler("onclick",this.btnSearchCustomer_onclick,this);
            this.btnCash.addEventHandler("onclick",this.PaymentButton_onclick,this);
            this.btnBank.addEventHandler("onclick",this.PaymentButton_onclick,this);
            this.btnBill.addEventHandler("onclick",this.PaymentButton_onclick,this);
            this.btnCard.addEventHandler("onclick",this.PaymentButton_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.medtTelNum.addEventHandler("onchanged",this.MaskEdit_onchanged,this);
            this.btnKor.addEventHandler("onclick",this.btnKor_onclick,this);
            this.btnEng.addEventHandler("onclick",this.btnEng_onclick,this);
        };
        this.loadIncludeScript("changelanguage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
