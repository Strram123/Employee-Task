

const formEl=document.forms.Employeeform;
console.log(formEl);
const empNameEl=formEl.elements.empName;
//
const empIDEl=formEl.elements.empID;

const empDesiginationEl=formEl.elements.empDesigination;
const empDOBEl=formEl.elements.empDOB;
const empSalaryEl=formEl.elements.empSalary;
const submit=(e)=>{
    e.preventDefault();

                const id=empIDEl.value;
                const password=new Date().getTime()+Math.random();
                 var empDetails={
                         empid:id,
                         emppassword:password
                 };
                 var employe=[];
                 var jsons=JSON.stringify(empDetails);
                 var local=localStorage.setItem("emp",employe+=jsons);
                 JSON.parse(localStorage.getItem("emp"));
                 window.open('file:///C:/Users/ELCOT/Desktop/HTMLPROGRAMS/employee1.html','_blank')   
};
function test2(e){
e.preventDefault();
if(empNameEl!=" " && empNameEl!=Number)
{
    if(empIDEl!=" ")
    {
        if(empDesiginationEl!=" ")
        {
            if(empDOBEl!=" ")
            {
                if(empSalaryEl!=" ")
                {

                    console.log("Submitted!!");
                   
                }
                else
                alert("please fill")
            }
            else
                alert("please fill")
        }
        else
                alert("please fill")
    }
    else
                alert("please fill")
}
else
alert("please fill")
}

formEl.addEventListener("submit",submit);
