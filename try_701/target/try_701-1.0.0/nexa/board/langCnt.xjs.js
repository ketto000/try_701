//XJS=langCnt.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

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
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
