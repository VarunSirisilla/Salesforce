public class DisplayallDoctorDetails {

    list <Doctor__c> Dlist = [select Name,Patient_count__c from Doctor__c];
    list <Patient__C> Plist = [select Name,Gender__c,Disease__c,Age__c,Phone__c,Doctor__c from Patient__c];
    public list<Doctor__c> getDoctorlist()
    {
        return(Dlist);
    }
    public list<Patient__c> getPatientlist()
    {
        return(Plist);
    }
}