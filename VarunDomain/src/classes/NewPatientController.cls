public class NewPatientController {
    list <Patient__C> Plist;
   Patient__C P = new Patient__C();
    Public Patient__C GetMyPatient()
    {
        return(P);
        
    }
    Public void Save()
    {
        insert P;	
       Plist = [select Name,Gender__C,Disease__c,Phone__c,Doctor__c,Age__c from Patient__c];
    }
    public List<Patient__C> GetmypatientDetails()
    {
        return(Plist);
    }
}