public class Patient {

list<Patient__c> Plist = [select Name,Gender__c,Disease__c,Age__c,Phone__c,Doctor__c from Patient__c];
   Public list<Patient__c> getmypatientTable()
    {
        return(Plist);
    }
	}