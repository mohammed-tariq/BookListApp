const addbtn = document.querySelector("#btn");
const input1= document.querySelector("#bname");
const input2= document.querySelector("#author");
const input3= document.querySelector("#bid");
const table=document.querySelector("table");
const clrbtn=document.querySelector("#clrbtn")
const main=document.querySelector(".main")
addbtn.addEventListener("click", addbook);

function addbook(e){
    e.preventDefault();
    if(input1.value=="" || input2.value=="" || input3.value=="")
    {
        alert("Please enter all the value");
    }
    else
    {
    createRow();
    showmsg("green");
    input1.value="";
    input2.value="";
    input3.value="";
    }
}

const singlclr = document.querySelector("table");

singlclr.addEventListener("click", clearsingle);

function clearsingle(e){
    e.preventDefault();
    // console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        e.target.parentElement.parentElement.remove();
        showmsg("red");

        
    }
}

clrbtn.addEventListener("click", clearAll);

function clearAll(e)
{
    const tr=document.querySelectorAll("tr");
    if(tr.length>1)
    {
        for(let i=1;i<tr.length;i++)
        {
          tr[i].remove();
         }
         showmsg("red");
    }
    else{
        alert("There is nothing to clear");
    }

}

function createRow()
{
    const tr= document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const link = document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML= '<i class="fa fa-remove"></i>';
    td1.appendChild(document.createTextNode(input1.value));
    td2.appendChild(document.createTextNode(input2.value));
    td3.appendChild(document.createTextNode(input3.value));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(link);
    table.appendChild(tr);
}

function showmsg(msg)
{
    const message= document.createElement("div");
    main.insertBefore(message,main.firstChild);
    if(msg=="green"){
    message.textContent="Successfully added the book";
    }
    else{
        message.textContent="successfully Cleared"
    }
    message.style.textAlign="center";
    message.style.background=msg;
    //----to remove
    setTimeout(()=>{
        message.remove();
    },3000)
}
