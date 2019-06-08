public class PatientObjectController {
list<Patient__c> Plist = [select Name,Gender__c,Disease__c,Age__c,Phone__c,Doctor__c,Patient_id__c from Patient__c];
    Patient__C P = new Patient__C(); //create a patient object and stored in memory
    
    string SearchStr; //Search scenario starts
    list<Patient__c> SearchPatients;
    Public String getmystring()//Note:if set is there then get is mandatory and method name should be same
    {
        return(SearchStr);
    }
    Public void setmystring(String inputstring)//inputstring is nothing but the passing string in our VF page
    {
        SearchStr = inputstring;
    }
    public void search()
    {
      
        List<List<sobject>> sobjlist = [find :SearchStr returning Patient__c(Name,Gender__c,Disease__c,Age__c,Phone__c,Doctor__c,Patient_Id__c)];
        SearchPatients = (List<Patient__c>)sobjlist[0];
     
    }
    Public list<patient__c> getmyfilterpatient()//this method will display filtered records once method is enabled
    {
    return(SearchPatients);    
    }                                               //Search scenario ends
    
    Public list<Patient__c> getmypatientTable()
    {
        return(Plist);
    }
    public Pagereference insertpatientpage()
    {
    Pagereference InsertPatientpage = new Pagereference('https://c.ap8.visual.force.com/apex/PatientObjectinsertpage?core.apexpages.request.devconsole=1');
    
        return(InsertPatientpage);
    }
  Public Patient__c GetmypatientObject()//return object to VF page//
      {
          return(P);
      }
    
    Public Pagereference Save()//Once Save button is clicked in newly created Below VF page then it will display all the Patient records//
    {
    

     insert P;
        Pagereference UpdatedPatientrecords = new Pagereference('https://c.ap8.visual.force.com/apex/PatientobjectVF?core.apexpages.request.devconsole=1');
            return(UpdatedPatientrecords);
    }
    
      Public list<Patient__c> getmyFinalpatientTable()
    {
        return(Plist);
    }
    
    
}