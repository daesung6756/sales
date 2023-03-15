const datas = [
    {
        quiz:"The sales manager at cloud Kicks approves time off for their employees.<br>They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. <br>What should administrator use to fulfill the requirement?",
        lists:[
            "A. Delegated approver",
            "B. Two step Approval process",
            "C. Approval history related list",
            "D. Delegated Administrator"
        ]
    },
    {
        quiz:"Cloud Kicks wants to track shoe designs by products. <br> Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages. <br> Which  two  steps  should  the  administrator  configure  to  meet  this requirement? Choose 2 answers",
        lists:[
            "A. Add a  custom  master-detail  field  for  shoe  designs  on  the Product object.",
            "B. Create a custom object for shoe designs.",
            "C. Use the standard object for designs.",
            "D. Configure  a  custom  lookup  field  for  shoe  designs  on  the Product object."
        ]
    },
    {
        quiz:"Ursa  Major  Solar  wants  to  know  which  of its  marketing  efforts  are helping the team win Opportunities.<br>What should an administrator configure to provide these insights?",
        lists:[
            "A. Campaign Hierarchy.",
            "B. Campaign Influence",
            "C. Map Custom Lead Fields",
            "D. List Email Activities"
        ]
    }
]

const dumpsDraw = {
    init : function( dataName , id){
        if(dataName !== undefined) {
            this.events( dataName , id);
        }
    },
    events: function( dataName, id ){
        const ul = document.createElement("ul");
        const parent = document.querySelector("#" + id)

        ul.classList.add("quiz");

        dataName.forEach(function (value, key){
            const li = document.createElement("li");
            const quizWrap = document.createElement("div");
            const listsWrap = document.createElement("div");
            const title = document.createElement("strong");

            title.innerHTML = value.quiz;
            quizWrap.appendChild(title);
            quizWrap.classList.add("title");
            li.appendChild(quizWrap);

            value.lists.forEach(function(item){
                const p = document.createElement("p");
                p.innerHTML = item;
                listsWrap.appendChild(p);
            })

            listsWrap.classList.add("list");
            li.appendChild(listsWrap);
            ul.appendChild(li);

        })
        parent.appendChild(ul)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    dumpsDraw.init(datas, "dumpList");
});