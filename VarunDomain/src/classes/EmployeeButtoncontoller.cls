public class EmployeeButtoncontoller {
  List <Employee__c> lstAllEmployees;
  List <Employee__c> lstAPEmployees; 
    
    public void showAll()
    {
        if(lstAllEmployees==null)
        {
            
            lstAllEmployees= [select Emp_name__c,Country__c,Project__c from Employee__c	];
        }
        else 
        {
            lstAllEmployees =null;
 
    } 
   }      
    public void showAP()
    {
        if(lstAPEmployees==null)
        {
       lstAPEmployees= [select Emp_name__c,Country__c,Project__c from Employee__c where Emp_name__c = 'Varun'];
        }
        else
        {
            lstAPEmployees=null;
    }
  }      
    public pageReference goodbye()
    {
        pageReference p=new pageReference('https://c.ap8.visual.force.com/apex/goodbyepage?core.apexpages.request.devconsole=1');
        return(p);
    }
    public List <Employee__c> getAllEmployees()
    {
        return(lstAllEmployees); 
     }
    public list <Employee__c>  getAPEmployees()
    {
        return(lstAPEmployees);
    }
}