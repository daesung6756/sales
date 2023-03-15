'use strict';
const datas = {
    cols:[
        {key:"type", name:"위치", width:"10%", align:"center"},
        {key:"name", name:"명칭", width:"30%", align:"center"},
        {key:"desc", name:"내용", width:"*", align:"left"}
    ],
    rows:[
        {
            type:"개인 설정",
            name:"<span class='fc-grey'>프로필 > 설정 > </span><strong class='fc-blue'> 고급 사용자 세부 정보</strong>",
            desc:"프로필 세부 설정"
        },
        {
            type:"개인 설정",
            name:"<span class='fc-grey'>프로필 > 설정 > </span><strong class='fc-blue'> 언어 및 표준 시간대</strong>",
            desc:"개인 언어 변경 가능."
        },

        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>보안 > </span><strong class='fc-blue'> 공유 설정</strong>",
            desc:"조직의 공유 설정을 표시하고 개체 기본 셋팅 값과 새로운 규칙등을 편집 및 생성 할 수 있다. (레코드에 대한 권한 설정)"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>회사 설정 > 회사 정보 > </span><strong class='fc-blue'> 휴일</strong>",
            desc:"회사의 휴일 규칙을 생성하고 내부 편집을 통해 설정 된 업무 조건에 배치 가능 (종일이 아닐경우 빠지는 시간을 동록)"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>회사 설정 > 회사 정보 > </span><strong class='fc-blue'> 업무 시간</strong>",
            desc:"각각의 회사 업무 시간 설정 가능"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>회사 설정 > 회사 정보 > 편집 ></span><strong class='fc-blue'> 통화 수정</strong>",
            desc:"세일즈포스 통화 버그 (수정)"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>회사 설정 ></span><strong class='fc-blue'> 회사 정보</strong>",
            desc:"회사 사용중인 라이센스 정보 확인 가능."
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 ></span><strong class='fc-blue'> 역할</strong>",
            desc:"전체 조직을 설정. (대표 -> xx본부 등)"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 ></span><strong class='fc-blue'> 사용자</strong>",
            desc:"조직에 할당하는 다른 사용자를 작성."
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 > </span><strong class='fc-blue'> 프로필</strong>",
            desc:"프로필은 라이선스를 기반으로 만들 수 있으며, 사용자를 등록 할 때 라이센스 및 프로필을 지정 한다.(권한 설정 정책의 집합체)"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 > </span><strong class='fc-blue'> 프로필 사용자 정의</strong>",
            desc:"프로필은 새로 만들기 버튼이 없습니다. 기존의 프로필을 복제하여 추가 하는 방식을 사용 해야 한다."
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 > </span><strong class='fc-blue'> 프로필 비밀번호 정책 수정</strong>",
            desc:"프로필 편집 내부 최 하단에 암호 정책 수정"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 > </span><strong class='fc-blue'> 권한 집합</strong>",
            desc:"이미 생성 된 프로필에 추가 적인 권한을 특정인에게 부여 할때 사용"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 > </span><strong class='fc-blue'> 사용자 암호 재설정</strong>",
            desc:""
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>사용자 인터페이스 > </span><strong class='fc-blue'> 테마 및 브랜딩</strong>",
            desc:"사용자 정의 테마를 생성 및 적용 하는 기능"
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>기능설정 > 마케팅 > </span><strong class='fc-blue'>web-to-laed</strong>",
            desc:"lead(잠재 고객)를 로컬 컴퓨터에서 쉽게 작성 할 수 있도록 입력폼 HTML 생성 용도."
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class='fc-grey'>기능설정 > 서비스 > </span><strong class='fc-blue'>web-to-case</strong>",
            desc:"Case(사례)를 로컬 컴퓨터에서 쉽게 작성 할 수 있도록 입력폼 HTML 생성 용도."
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class=fc-grey>기능설정 > 서비스 > </span><strong class=fc-blue>email-to-case</strong>",
            desc:"지정한 이메일을 통해 사례를 받도록 하고 이메일이 전송 되면 클라우드 내부 사례 탭에 자동 등록."
        },
        {
            type:"<span class='icon icon-setting' title='글로벌 설정'></span>",
            name:"<span class=fc-grey>보안 > </span><strong class=fc-blue>로그인 엑세스 정책</strong>",
            desc:"다른 사용자에 계정에 임의로 접속 가능하게 하는 기능을 설정 할 수 있다."
        },
    ]
}
function drawTable ( array, element ){
    const cols = array.cols;
    const rows = array.rows;

    const table = document.querySelector(element);
    const colgroup = document.createElement("colgroup");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const htr = document.createElement("tr");

    cols.forEach(function (value, colKey){
        const col = document.createElement("col");
        const th = document.createElement("th");
        th.innerHTML = value.name;
        col.setAttribute("style","width:" + cols[colKey].width + "") ;
        th.setAttribute("scope","col");
        htr.appendChild(th);
        colgroup.appendChild(col);
    })

    rows.forEach(function(row, rowKey){
        const dtr = document.createElement("tr");

        cols.forEach(function (item, colKey){
            const td = document.createElement("td");
            if(colKey !== 0){
                td.classList.add("tal");
            }
            td.innerHTML = row[cols[colKey].key];
            dtr.appendChild(td);
        });
        tbody.appendChild(dtr);
    })


    thead.appendChild(htr);

    table.appendChild(colgroup);
    table.appendChild(thead);
    table.appendChild(tbody);
}

document.addEventListener("DOMContentLoaded", function (){
    drawTable(datas, "[data-drawTable='salesCloud']");
})