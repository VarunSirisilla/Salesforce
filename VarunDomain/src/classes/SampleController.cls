public class SampleController {
    //Get Patient Records
    @AuraEnabled
    public static List<Patient__c> getPatients(String pageSize, String pageNumber){
        Integer psize = Integer.valueOf(pageSize);
        Integer pnumber = Integer.valueOf(pageNumber)-1;
        
        List<Patient__c> PList = [SELECT Id,Name, Gender__c, Disease__c,Age__c,Doctor__r.Name,Doctor__c
                                  FROM Patient__c LIMIT :Integer.valueOf(psize) OFFSET :(psize*pnumber)];
        List<sampleWrapper> finalWrapperList = new List<sampleWrapper>();
        for(Patient__c p:PList){
            sampleWrapper sw = new sampleWrapper();
            sw.docName = p.Doctor__r.Name;
            sw.gender = p.Gender__c;
            sw.Name = p.Name;
            sw.disease = p.Disease__c;
            sw.age = p.Age__c;    
            finalWrapperList.add(sw);
        }
        
        return PList;
    }
    
    //Delete Account
    @AuraEnabled
    public static void deleteAccount(Account acc){
        Delete acc;
    } 
    Public class sampleWrapper{
        @AuraEnabled Public String docName;
        @AuraEnabled Public String gender;
        @AuraEnabled Public String Name;
        @AuraEnabled Public String disease;
        @AuraEnabled Public Decimal age;
    }
}