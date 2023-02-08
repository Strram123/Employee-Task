//import{localStorage}from localStorage;

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
    console.log("Submitted!!");
    const id=empIDEl.value;
   const password=new Date().getTime()+Math.random();

    var empDetails={
            empid:id,
            emppassword:password
    };
    var employe=[];
    var jsons=JSON.stringify(empDetails);
    var local=localStorage.setItem("emp",employe+=jsons+"");
    JSON.parse(localStorage.getItem("emp"));
   


   // const jsonArray=JSON.parse(empDetails);
    //const array=JSON.stringify(empDetails)
    
   // localStorage.setItem("employee",array);



   // localStorage.setItem("Employee ",JSON.stringify(empD));
   // localStorage.setItem("password",empDetails);
};

formEl.addEventListener("submit",submit);
