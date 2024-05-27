const inputEl=document.querySelector("#input-el");

const inputbtn=document.querySelector("#input-btn");

const ulel=document.querySelector("#ul-el"); 

const delbtn=document.querySelector("#del-btn");

let myLeads=[]

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItem="";
    for(let i=0;i<leads.length;i++){
        // listItem += "<li><a target='_blank' href='" +myLeads[i]+"'>"+myLeads[i]+"</a></li>";
        listItem += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`;
    }
    ulel.innerHTML=listItem;
}

delbtn.addEventListener("click",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

// console.log(leadsFromLocalStorage)
 

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value='';
    render(myLeads);
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
})  








