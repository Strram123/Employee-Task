
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
                var value=0;
                var retrievedUser;
       if(empSalaryEl.match(numbers)&&empNameEl.match(letters)&&empDesiginationEl.match(letters)&&empIDEl.match(numbers))
       {
         var EmpDetails={
                id:empIDEl,
                password:empIDEl+1
         } 
         if(value==0){
               employeArr.push(EmpDetails);
               console.log(employeArr);
                localStorage.setItem("Employee",JSON.stringify(employeArr));   
                 alert("javascript")   
                 value++;      
         }
        
       
       else{
        
        localStorage.setItem("Employee",JSON.stringify(employeArr));
        var idP=JSON.parse(localStorage.getItem('Employee'));
        retrievedUser = idP.filter((user)=>{ return user.id == EmpDetails.id})[0];
        
         if(retrievedUser.id == EmpDetails.id)
         {
         alert('invalid');
         }
         else
          employeArr.push(EmpDetails);
        console.log(employeArr);
         window.open("file:///C:/Users/ELCOT/Desktop/HTMLPROGRAMS/EmployeeLogin.html");
        }
 } 

        else{
                //alert("enter Valid Input")
        }
    

formEl.addEventListener("submit",submitfn);

       
       


  



