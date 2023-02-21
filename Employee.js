
 var employeArr=[];
const formEl=document.forms.Employeeform;
console.log(formEl);

deletefn=()=>{
var empNameEl=formEl.elements.empName.value=" ";
var empIDEl=formEl.elements.empID.value=" ";
var empDesiginationEl=formEl.elements.empDesigination.value=" ";
var empDOBEl=formEl.elements.empDOB.value=" ";
var empSalaryEl=formEl.elements.empSalary.value=" ";
}

 submitfn=(event)=>{
        event.preventDefault();
                var empNameEl=formEl.elements.empName.value;
                var empIDEl=formEl.elements.empID.value;
                var empDesiginationEl=formEl.elements.empDesigination.value;
                var empDOBEl=formEl.elements.empDOB.value;
                var empSalaryEl=formEl.elements.empSalary.value;
                var numbers = /^[0-9]+$/;
                var letters = /^[A-Za-z]+$/;
        if(empSalaryEl.match(numbers)&&empNameEl.match(letters)&&empDesiginationEl.match(letters)&&empIDEl.match(numbers))
        {
    
         var EmpDetails={
                id:empIDEl,
                password:empIDEl+1
         } 
         var Jemploye=JSON.stringify(EmpDetails);
         console.log(Jemploye);
         employeArr.push(Jemploye);
         localStorage.setItem("Employee",Jemploye); 
         alert(Jemploye);
         window.open("file:///C:/Users/ELCOT/Desktop/HTMLPROGRAMS/EmployeeLogin.html");

        } 
        else{
                alert("enter Valid Input")
        }
         
};
formEl.addEventListener("submit",submitfn);
  



