
 var employeArr=[];
const formEl=document.forms.Employeeform;
var empIDEl=formEl.elements.empID.value;
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
                
                var retrievedUser;


        if(empSalaryEl.match(numbers)&&empNameEl.match(letters)&&empDesiginationEl.match(letters)&&empIDEl.match(numbers))
        {
         var EmpDetails={
                id:empIDEl,
                password:empIDEl+1
         } 
        if(localStorage.getItem("Employee")==null){
               employeArr.push(EmpDetails);
                console.log(employeArr);
                let show=localStorage.setItem("Employee",JSON.stringify(employeArr));   
                 alert(EmpDetails.id)
                 alert(EmpDetails.password)   
                 window.open("file:///C:/Users/ELCOT/Desktop/HTMLPROGRAMS/EmployeeLogin.html");      
         }

        else{
        var idP=JSON.parse(localStorage.getItem('Employee'));
        retrievedUser = idP.filter((user)=>{ return user.id == EmpDetails.id})[0];

        if(retrievedUser!=null)
         {
         if(retrievedUser.id == EmpDetails.id)
         {
         alert('Already Existed');
         }}


         else
        {
        employeArr.push(EmpDetails);
        console.log(employeArr);
       let show=localStorage.setItem("Employee",JSON.stringify(employeArr));
        alert(EmpDetails.id);
        alert(EmpDetails.password)
         window.open("file:///C:/Users/ELCOT/Desktop/HTMLPROGRAMS/EmployeeLogin.html");
        }}
      } 

        else{
                alert("enter Valid Input")
        }
} 

formEl.addEventListener("submit",submitfn);

       
       


  



