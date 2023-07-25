(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">상단메뉴1</Col></Row><Row><Col id=\"MENU_ID\">0000</Col><Col id=\"MENU_NM\">업무화면1</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000001</Col><Col id=\"MENU_NM\">게시판관리</Col><Col id=\"MENU_PATH\">board::board_View.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ID\">000002</Col><Col id=\"MENU_NM\">로그관리</Col><Col id=\"MENU_PATH\"/></Row><Row><Col id=\"MENU_ID\">000003</Col><Col id=\"MENU_NM\">로그관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">log::log_View.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000004</Col><Col id=\"MENU_NM\">사용로그관리</Col><Col id=\"MENU_PATH\">log::userlog_View.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000005</Col><Col id=\"MENU_NM\">송/수신 로그관리</Col><Col id=\"MENU_PATH\">log::Trsmrcv_View.xfdl</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_ID\">000006</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">log::log_View.xfdl</Col><Col id=\"MENU_NM\">웹로그관리</Col></Row><Row><Col id=\"MENU_ID\">000007</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NM\">접속로그관리</Col><Col id=\"MENU_PATH\">log::Loginlog_View.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000008</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_NM\">개인정보조회로그관리</Col><Col id=\"MENU_PATH\">log::PrivacyLog_View.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_NM\">업무화면2</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">000101</Col><Col id=\"MENU_NM\">샘플 2-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample05.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000102</Col><Col id=\"MENU_NM\">샘플 2-2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000103</Col><Col id=\"MENU_NM\">샘플 2-3</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample07.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000104</Col><Col id=\"MENU_NM\">샘플 2-4</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample08.xfdl</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">상단메뉴2</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_NM\">업무화면3</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010001</Col><Col id=\"MENU_NM\">샘플 3-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample05.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010002</Col><Col id=\"MENU_NM\">샘플 3-2</Col><Col id=\"MENU_PATH\">Sample::sample06.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010003</Col><Col id=\"MENU_NM\">샘플 3-3</Col><Col id=\"MENU_PATH\">Sample::sample07.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010004</Col><Col id=\"MENU_NM\">샘플 3-4</Col><Col id=\"MENU_PATH\">Sample::sample08.xfdl</Col></Row><Row><Col id=\"MENU_NM\">상단메뉴3</Col><Col id=\"MENU_ID\">02</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_NM\">업무화면4</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">020001</Col><Col id=\"MENU_NM\">샘플 4-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample01.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020002</Col><Col id=\"MENU_NM\">샘플 4-2</Col><Col id=\"MENU_PATH\">Sample::sample02.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020003</Col><Col id=\"MENU_NM\">샘플 4-3</Col><Col id=\"MENU_PATH\">Sample::sample03.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020004</Col><Col id=\"MENU_NM\">샘플 4-4</Col><Col id=\"MENU_PATH\">Sample::sample04.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020005</Col><Col id=\"MENU_NM\">샘플 4-5</Col><Col id=\"MENU_PATH\">Sample::sample05.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020006</Col><Col id=\"MENU_NM\">샘플 4-6</Col><Col id=\"MENU_PATH\">Sample::sample06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">03</Col><Col id=\"MENU_NM\">상단메뉴4</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_PATH\"/></Row><Row><Col id=\"MENU_ID\">0300</Col><Col id=\"MENU_NM\">업무화면5</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">030001</Col><Col id=\"MENU_NM\">샘플5-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample07.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">030002</Col><Col id=\"MENU_NM\">샘플5-2</Col><Col id=\"MENU_PATH\">Sample::sample08.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("dsLefts", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("BoardMasterSO", this);
            obj._setContents("<ColumnInfo><Column id=\"searchBgnDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchCnd\" type=\"STRING\" size=\"256\"/><Column id=\"searchEndDe\" type=\"STRING\" size=\"256\"/><Column id=\"searchWrd\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"searchUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"pageIndex\" type=\"INT\" size=\"256\"/><Column id=\"pageUnit\" type=\"INT\" size=\"256\"/><Column id=\"pageSize\" type=\"INT\" size=\"256\"/><Column id=\"firstIndex\" type=\"INT\" size=\"256\"/><Column id=\"lastIndex\" type=\"INT\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"INT\" size=\"256\"/><Column id=\"frstRegisterNm \" type=\"STRING\" size=\"256\"/><Column id=\"bbsTyCodeNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"searchBgnDe\"/><Col id=\"searchCnd\"/><Col id=\"searchEndDe\"/><Col id=\"searchWrd\"/><Col id=\"sortOrdr\"/><Col id=\"searchUseYn\"/><Col id=\"pageIndex\">1</Col><Col id=\"pageUnit\">10</Col><Col id=\"pageSize\">10</Col><Col id=\"firstIndex\">1</Col><Col id=\"lastIndex\">1</Col><Col id=\"recordCountPerPage\">10</Col><Col id=\"frstRegisterNm \"/><Col id=\"bbsTyCodeNm\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("Login_Result", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"ihidNum\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/><Column id=\"passwordHint\" type=\"STRING\" size=\"256\"/><Column id=\"passwordCnsr\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztId\" type=\"STRING\" size=\"256\"/><Column id=\"orgnztNm\" type=\"STRING\" size=\"256\"/><Column id=\"uniqId\" type=\"STRING\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"256\"/><Column id=\"ip\" type=\"STRING\" size=\"256\"/><Column id=\"dn\" type=\"STRING\" size=\"256\"/><Column id=\"onepassUserkey\" type=\"STRING\" size=\"256\"/><Column id=\"onepassIntfToken\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\"/><Col id=\"name\"/><Col id=\"email\"/><Col id=\"ihidNum\"/><Col id=\"password\"/><Col id=\"passwordHint\"/><Col id=\"passwordCnsr\"/><Col id=\"userSe\"/><Col id=\"orgnztId\"/><Col id=\"orgnztNm\"/><Col id=\"uniqId\"/><Col id=\"url\"/><Col id=\"ip\"/><Col id=\"dn\"/><Col id=\"onepassUserkey\"/><Col id=\"onepassIntfToken\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("getMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"msgId\" type=\"STRING\" size=\"256\"/><Column id=\"msgText\" type=\"STRING\" size=\"256\"/><Column id=\"msgTextEN\" type=\"STRING\" size=\"256\"/><Column id=\"msgType\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row><Col id=\"msgId\">msg.server.error</Col><Col id=\"msgText\">서버 오류입니다.\\n관리자에게 문의하세요.</Col><Col id=\"msgTextEN\">Server error. Please contact your administrator.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.server.error.msg</Col><Col id=\"msgText\">서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}</Col><Col id=\"msgTextEN\">The server received the following error message.s\\n{0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.session.timeout</Col><Col id=\"msgText\">세션이 종료되었습니다. 다시 로그인해주세요.</Col><Col id=\"msgTextEN\">Your session has expired, please login again.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.login.url.error</Col><Col id=\"msgText\">정상적인 경로로 접속하시기 바랍니다.</Col><Col id=\"msgTextEN\">invalid access! please, login first at www.tobesoft.com</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.login.error</Col><Col id=\"msgText\">해당하는 사용자 정보가 없습니다.</Col><Col id=\"msgTextEN\">No user found.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.call.nofile</Col><Col id=\"msgText\">해당하는 메뉴에 Program File이 등록되지 않았습니다.</Col><Col id=\"msgTextEN\">the requested menu does not exist!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.nomenu</Col><Col id=\"msgText\">해당 Menu가 존재하지 않습니다.</Col><Col id=\"msgTextEN\">The specified menu doesn&apos;t exist.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">confirm.logout</Col><Col id=\"msgText\">로그아웃 하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to log out?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.movepage</Col><Col id=\"msgText\">변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?</Col><Col id=\"msgTextEN\">There are unsaved data. Would you like to leave now?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.search</Col><Col id=\"msgText\">검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"msgTextEN\">Any unsaved data will be discarded. \\nWould you like to continue?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.moveropos</Col><Col id=\"msgText\">해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?</Col><Col id=\"msgTextEN\">If you move the selected row, your changes will be discarded. \\nWould you like to continue?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.delete</Col><Col id=\"msgText\">선택된 자료를 삭제 하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to delete?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">confirm.before.deletesave</Col><Col id=\"msgText\">선택된 자료를 삭제 후 저장하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to delete and save?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">msg.noselect</Col><Col id=\"msgText\">{0} 을(를) 선택해 주십시요.</Col><Col id=\"msgTextEN\">Please, select {0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.search.nodata</Col><Col id=\"msgText\">지정된 조건에 해당하는 항목을 찾을 수 없습니다.</Col><Col id=\"msgTextEN\">No data found.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.save.nodata</Col><Col id=\"msgText\">저장할 데이터가 없습니다.</Col><Col id=\"msgTextEN\">No data to save.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.save.nochange</Col><Col id=\"msgText\">변경된 내역이 없습니다.</Col><Col id=\"msgTextEN\">No changes found.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">confirm.before.save</Col><Col id=\"msgText\">변경된 내역을 저장 하시겠습니까?</Col><Col id=\"msgTextEN\">Would you like to save your changes?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">msg.save.success</Col><Col id=\"msgText\">저장 되었습니다.</Col><Col id=\"msgTextEN\">Successfully saved!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.update.success</Col><Col id=\"msgText\">수정 되었습니다.</Col><Col id=\"msgTextEN\">Successfully updated!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.delete.success</Col><Col id=\"msgText\">삭제 되었습니다.</Col><Col id=\"msgTextEN\">Successfully deleted!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.action.success</Col><Col id=\"msgText\">처리 되었습니다.</Col><Col id=\"msgTextEN\">Successfully processed!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.action.fail</Col><Col id=\"msgText\">프로세스가 실패하였습니다.</Col><Col id=\"msgTextEN\">Failed process!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.updateafter</Col><Col id=\"msgText\">변경된 내역을 저장 후 작업하세요.</Col><Col id=\"msgTextEN\">Please, save your changes first!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.delete.child</Col><Col id=\"msgText\">하위 자료가 있어 삭제할 수 없습니다.</Col><Col id=\"msgTextEN\">the requested deletion could not be performed because dependent data found!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.grid.noselect</Col><Col id=\"msgText\">선택된 항목이 없습니다.</Col><Col id=\"msgTextEN\">No item has been selected!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.before.delete</Col><Col id=\"msgText\">정말로 삭제 하시겠습니까?</Col><Col id=\"msgTextEN\">Are you sure you want to delete?</Col><Col id=\"msgType\">C</Col></Row><Row><Col id=\"msgId\">msg.err.validator.required</Col><Col id=\"msgText\">{0} 은(는) 필수 입력 항목입니다.</Col><Col id=\"msgTextEN\">{0} Is a required field.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.maxlength</Col><Col id=\"msgText\">{0} 의 입력값은 {1} 이하이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.minlength</Col><Col id=\"msgText\">{0} 의 입력값은 {1} 이상이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.maxlengthB</Col><Col id=\"msgText\">{0} 의 입력값의 길이는 {1} 이하이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be less than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.minlengthB</Col><Col id=\"msgText\">{0} 의 입력값의 길이는 {1} 이상이어야 합니다.</Col><Col id=\"msgTextEN\">The length of {0} must be greater than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.digits</Col><Col id=\"msgText\">{0} 은(는) 숫자만 입력 가능합니다.</Col><Col id=\"msgTextEN\">{0} must be a numeric value.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.min</Col><Col id=\"msgText\">{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.</Col><Col id=\"msgTextEN\">{0} must be a numeric value greater than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.max</Col><Col id=\"msgText\">{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.</Col><Col id=\"msgTextEN\">{0} must be a numeric value less than or equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.date</Col><Col id=\"msgText\">{0} 은(는) 유효하지 않은 날짜 형식입니다.</Col><Col id=\"msgTextEN\">{0} is in invalid date format.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.dateym</Col><Col id=\"msgText\">{0} 은(는) 유효하지 않은 년월 형식입니다.</Col><Col id=\"msgTextEN\">{0} is in invalid year/month format.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.comparemax</Col><Col id=\"msgText\">{0} 이(가) {1} 보다 작습니다.</Col><Col id=\"msgTextEN\">{0} is less than {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.comparemin</Col><Col id=\"msgText\">{0} 이(가) {1} 보다 큽니다.</Col><Col id=\"msgTextEN\">{0} is greater than {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.equalto</Col><Col id=\"msgText\">{0} 이(가) {1} 와(과) 틀립니다.</Col><Col id=\"msgTextEN\">{0} is not equal to {1}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.range</Col><Col id=\"msgText\">{0} 은(는) {1} 와(과) {2} 사이의 값입니다.</Col><Col id=\"msgTextEN\">The value of {0} is between {1} and {2}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.declimit</Col><Col id=\"msgText\">{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.</Col><Col id=\"msgTextEN\">The fractional part of {0} must consiste of {1} digits.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.code</Col><Col id=\"msgText\">{0} 은(는) {1} 의 값이어야 합니다.</Col><Col id=\"msgTextEN\">{0} must be the value of {1}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.email</Col><Col id=\"msgText\">e-mail이 잘못된 형태로 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered email address is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.url</Col><Col id=\"msgText\">웹사이트 주소가 잘못 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered website address is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.phone</Col><Col id=\"msgText\">전화번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered phone number is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.zipcode</Col><Col id=\"msgText\">우편번호가 잘못된 형태로 입력 되었습니다.</Col><Col id=\"msgTextEN\">The entered ZIP code is invalid.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.multicombo.maxcnt</Col><Col id=\"msgText\">{0}개 이상 선택 할 수 없습니다.</Col><Col id=\"msgTextEN\">You can&apos;t select more than {0}</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.maxdate</Col><Col id=\"msgText\">날짜의 입력 가능 범위를 벗어났습니다.</Col><Col id=\"msgTextEN\">Invalid date.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.validator.date.great</Col><Col id=\"msgText\">종료일이 시작일보다 빠릅니다.</Col><Col id=\"msgTextEN\">Invalid date range.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.filesize</Col><Col id=\"msgText\">첨부 파일의 용량은 최고 5MB까지 입니다.</Col><Col id=\"msgTextEN\">Maximum allowed attachment size is 5 MB.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.nofilepath</Col><Col id=\"msgText\">경로가 지정되지 않은 첨부파일은 업/다운로드 할 수 없습니다.</Col><Col id=\"msgTextEN\">A valid file path must be provided.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.exist.code</Col><Col id=\"msgText\">입력하는 Code ({0})값이 이미 등록되어 있습니다.</Col><Col id=\"msgTextEN\">Code already exsits!</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.invalid.filename</Col><Col id=\"msgText\">파일 이름이 정의되지 않았습니다.</Col><Col id=\"msgTextEN\">Please, specify a filename.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.notice.itemcount</Col><Col id=\"msgText\">첨부 파일은 {0}개 이상 등록 할 수 없습니다.</Col><Col id=\"msgTextEN\">Attachments can not be registered in more than {0}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.err.uploadfail</Col><Col id=\"msgText\">{0}로(으로) 파일업로드 실패 입니다.</Col><Col id=\"msgTextEN\">the file upload is failed because {0}.</Col><Col id=\"msgType\">A</Col></Row><Row><Col id=\"msgId\">msg.input.id</Col><Col id=\"msgText\">id를 입력하세요</Col><Col id=\"msgType\">A</Col><Col id=\"msgTextEN\">Please input id</Col></Row><Row><Col id=\"msgId\">msg.err</Col><Col id=\"msgText\"/><Col id=\"msgType\">A</Col><Col id=\"msgTextEN\"/></Row><Row><Col id=\"msgId\">msg.input.pw</Col><Col id=\"msgText\">패스워드를 입력하세요.</Col><Col id=\"msgTextEN\">Please input password</Col><Col id=\"msgType\">A</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLanguage", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"ko\" type=\"STRING\" size=\"256\"/><Column id=\"en\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">L0001</Col><Col id=\"ko\">거래 상세</Col><Col id=\"en\">Transaction details</Col></Row><Row><Col id=\"code\">L0002</Col><Col id=\"ko\">거래일</Col><Col id=\"en\">Trading day</Col></Row><Row><Col id=\"code\">L0003</Col><Col id=\"ko\">거래타입</Col><Col id=\"en\">Transaction type</Col></Row><Row><Col id=\"code\">L0004</Col><Col id=\"ko\">과세유형</Col><Col id=\"en\">Tax type</Col></Row><Row><Col id=\"code\">L0005</Col><Col id=\"ko\">단가액 세액포함</Col><Col id=\"en\">Unit price including tax</Col></Row><Row><Col id=\"code\">L0006</Col><Col id=\"ko\">세금, 계산서 수취</Col><Col id=\"en\">Tax, Bill receipt</Col></Row><Row><Col id=\"code\">L0007</Col><Col id=\"ko\">거래처</Col><Col id=\"en\">account</Col></Row><Row><Col id=\"code\">L0008</Col><Col id=\"ko\">찾기 (Alt+^)</Col><Col id=\"en\">Find (Alt+^)</Col></Row><Row><Col id=\"code\">L0009</Col><Col id=\"ko\">전화번호</Col><Col id=\"en\">Phone number</Col></Row><Row><Col id=\"code\">L0010</Col><Col id=\"ko\">영업사원</Col><Col id=\"en\">Salesperson</Col></Row><Row><Col id=\"code\">L0011</Col><Col id=\"ko\">대표자</Col><Col id=\"en\">representative</Col></Row><Row><Col id=\"code\">L0012</Col><Col id=\"ko\">사업자번호</Col><Col id=\"en\">Business Number</Col></Row><Row><Col id=\"code\">L0013</Col><Col id=\"ko\">업체구분</Col><Col id=\"en\">Company type</Col></Row><Row><Col id=\"code\">L0014</Col><Col id=\"ko\">담당자</Col><Col id=\"en\">manager</Col></Row><Row><Col id=\"code\">L0015</Col><Col id=\"ko\">잔액조회</Col><Col id=\"en\">Balance</Col></Row><Row><Col id=\"code\">L0016</Col><Col id=\"ko\">거래내역인쇄</Col><Col id=\"en\">Transaction history</Col></Row><Row><Col id=\"code\">L0017</Col><Col id=\"ko\">세금계산서/계산서 발행(^+L)</Col><Col id=\"en\">Tax bill(^+L)</Col></Row><Row><Col id=\"code\">L0018</Col><Col id=\"ko\">거래명세서/영수증 발행(^+P)</Col><Col id=\"en\">Trading statement(^+P)</Col></Row><Row><Col id=\"code\">L0019</Col><Col id=\"ko\">품목추가</Col><Col id=\"en\">Add item</Col></Row><Row><Col id=\"code\">L0020</Col><Col id=\"ko\">품목삭제</Col><Col id=\"en\">Delete item</Col></Row><Row><Col id=\"code\">L0021</Col><Col id=\"ko\">저장(F9)</Col><Col id=\"en\">Save(F9)</Col></Row><Row><Col id=\"code\">L0022</Col><Col id=\"ko\">품목명</Col><Col id=\"en\">Item name</Col></Row><Row><Col id=\"code\">L0023</Col><Col id=\"ko\">규격</Col><Col id=\"en\">standard</Col></Row><Row><Col id=\"code\">L0024</Col><Col id=\"ko\">단위</Col><Col id=\"en\">unit</Col></Row><Row><Col id=\"code\">L0025</Col><Col id=\"ko\">수량</Col><Col id=\"en\">Quantity</Col></Row><Row><Col id=\"code\">L0026</Col><Col id=\"ko\">단가</Col><Col id=\"en\">unit price</Col></Row><Row><Col id=\"code\">L0027</Col><Col id=\"ko\">할인</Col><Col id=\"en\">Sale</Col></Row><Row><Col id=\"code\">L0028</Col><Col id=\"ko\">금액</Col><Col id=\"en\">Price</Col></Row><Row><Col id=\"code\">L0029</Col><Col id=\"ko\">세액</Col><Col id=\"en\">Tax amount</Col></Row><Row><Col id=\"code\">L0030</Col><Col id=\"ko\">비고</Col><Col id=\"en\">Remark</Col></Row><Row><Col id=\"code\">L0031</Col><Col id=\"ko\">할인전</Col><Col id=\"en\">Before discount</Col></Row><Row><Col id=\"code\">L0032</Col><Col id=\"ko\">현금지급</Col><Col id=\"en\">Cash payments</Col></Row><Row><Col id=\"code\">L0033</Col><Col id=\"ko\">현금</Col><Col id=\"en\">cash</Col></Row><Row><Col id=\"code\">L0034</Col><Col id=\"ko\">적립금 잔고</Col><Col id=\"en\">Reserve balance</Col></Row><Row><Col id=\"code\">L0035</Col><Col id=\"ko\">할인</Col><Col id=\"en\">Sale</Col></Row><Row><Col id=\"code\">L0036</Col><Col id=\"ko\">계좌이체</Col><Col id=\"en\">Bank Transfer</Col></Row><Row><Col id=\"code\">L0037</Col><Col id=\"ko\">은행</Col><Col id=\"en\">Bank</Col></Row><Row><Col id=\"code\">L0038</Col><Col id=\"ko\">적립금 추가</Col><Col id=\"en\">Add points</Col></Row><Row><Col id=\"code\">L0039</Col><Col id=\"ko\">매입/매출액</Col><Col id=\"en\">Purchase/Sales</Col></Row><Row><Col id=\"code\">L0040</Col><Col id=\"ko\">어음</Col><Col id=\"en\">note</Col></Row><Row><Col id=\"code\">L0041</Col><Col id=\"ko\">어음기록</Col><Col id=\"en\">Bill record</Col></Row><Row><Col id=\"code\">L0042</Col><Col id=\"ko\">적립금 사용</Col><Col id=\"en\">Use of reserves</Col></Row><Row><Col id=\"code\">L0043</Col><Col id=\"ko\">세액</Col><Col id=\"en\">Tax amount</Col></Row><Row><Col id=\"code\">L0044</Col><Col id=\"ko\">카드지급</Col><Col id=\"en\">Card payment</Col></Row><Row><Col id=\"code\">L0045</Col><Col id=\"ko\">카드</Col><Col id=\"en\">Card</Col></Row><Row><Col id=\"code\">L0046</Col><Col id=\"ko\">결제 약속일</Col><Col id=\"en\">Payment date</Col></Row><Row><Col id=\"code\">L0047</Col><Col id=\"ko\">합계</Col><Col id=\"en\">Sum</Col></Row><Row><Col id=\"code\">L0048</Col><Col id=\"ko\">지급액계</Col><Col id=\"en\">Payment amount</Col></Row><Row><Col id=\"code\">L0049</Col><Col id=\"ko\">수량합계</Col><Col id=\"en\">Total quantity</Col></Row><Row><Col id=\"code\">L0050</Col><Col id=\"ko\">외상</Col><Col id=\"en\">credit</Col></Row><Row><Col id=\"code\">L0051</Col><Col id=\"ko\">참고사항</Col><Col id=\"en\">Note</Col></Row><Row><Col id=\"code\">L0052</Col><Col id=\"ko\">한국어</Col><Col id=\"en\">Kor</Col></Row><Row><Col id=\"code\">L0053</Col><Col id=\"ko\">영어</Col><Col id=\"en\">Eng</Col></Row><Row><Col id=\"code\">DEPT_NO</Col><Col id=\"ko\">부서</Col><Col id=\"en\">Dept No.</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("resultCnt","");
            this._addVariable("useComment","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFSet01",null,null,null,null,null,null,this);
            frame0.set_separatesize("0,0,0,*");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"Frame::frmTop.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::frmTop.xfdl");


            var frame2 = new HFrameSet("HFSet01",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("190,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"Frame::frmLeft.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Frame::frmLeft.xfdl");


            var frame4 = new VFrameSet("VFSet02",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("40,*");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"Frame::frmMdi.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("Frame::frmMdi.xfdl");


            var frame6 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame4);
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"Frame::frmBottom.xfdl",frame0);
            frame7.set_showtitlebar("false");
            frame0.addChild(frame7.name, frame7);
            frame7.set_formurl("Frame::frmBottom.xfdl");


            var frame8 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"Frame::frmLogin.xfdl",frame0);
            frame8.set_showtitlebar("false");
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("Frame::frmLogin.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {

        this.Application_onload = function(obj,e)
        {
        		 //공통 FrameSet/Frame에 직접접근을 위한 변수 선언

        	  //메인프레인 안에 첫 번째 VFrameSet
        	  nexacro.VFSet01 = this.mainframe.VFSet01;

        		  //VFSet01 안에 TopFrame
        		  nexacro.TopFrame = this.mainframe.VFSet01.TopFrame;

        		  //VFSet01 안에 HFSet01
        		  nexacro.HFSet01 = this.mainframe.VFSet01.HFSet01;

        				   //HFSet01 안에 LeftFrame
        				  nexacro.LeftFrame = this.mainframe.VFSet01.HFSet01.LeftFrame;

        				  //HFSet01 안에 VFSet02
        				  nexacro.VFSet02 = this.mainframe.VFSet01.HFSet01.VFSet02;


        		 //VFSet02 안에 MdiFrame
        		  nexacro.MdiFrame = this.mainframe.VFSet01.HFSet01.VFSet02.MdiFrame;

        		  //VFSet02 안에 WorkFrame
        		  nexacro.WorkFrame = this.mainframe.VFSet01.HFSet01.VFSet02.WorkFrame;

        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
