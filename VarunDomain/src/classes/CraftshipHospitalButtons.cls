public class CraftshipHospitalButtons {
list<Patient__C> Plist;
list<Doctor__c> Dlist;
list<Lab__c> Llist;
list<Bill__c> Blist =[select Patient__c,Email_ID__c,Lab_Bill__c,DoctorBill__c from Bill__c];
    
    
    public void showpatient()//Event controller methods//
    {
        if(Plist==NULL)
        {
      Plist = [select Name,Gender__c,Disease__c,Age__c,Phone__c,Doctor__c from Patient__c];
        }
        else
        {
            Plist = NULL;
                }
    }
    public void showDoctor()//Event controller methods//
    {
        if(Dlist==Null)
        {
      Dlist =[select Name,Department__c,Patient_count__c from Doctor__c];
        }
        else
        {
            Dlist=Null;
        }
    }
    public void Showlabs()//Event controller methods//
    {
        
       if(Llist == null)
       {
           Llist = [select Name,Patient__C,Doctor__c from Lab__c];
       }
        else
        {
            Llist = null;
        }
    }
     public Pagereference Billpage()//Event controller methods//
    {
        
       Pagereference p = new pagereference('https://c.ap8.visual.force.com/apex/BillPageforCraftshipHospitals?core.apexpages.request.devconsole=1');
        return(p);
    }
   public Pagereference NewPatient()//Event controller methods//
    {
        
       Pagereference p1 = new pagereference('https://c.ap8.visual.force.com/apex/NewPatient?core.apexpages.request.devconsole=1');
        return(p1);
    }    
    public list<Patient__C> getAllPatients()//Table page block Methods//
    {
        return(Plist);
       
    }
    public list<Bill__C> getAllBills()//Table page block Methods refered to other Bill page//
    {
        return(Blist);
    }
    Public list<Doctor__c> getAllDoctors()//Table page block Methods//
    {
        return(Dlist);
    }
    public list<Lab__C> getallLabs()//Table page block Methods//
    {
        return(Llist);
    }
   
}