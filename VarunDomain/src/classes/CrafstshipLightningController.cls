public class CrafstshipLightningController {
 @AuraEnabled

    public static list<Contact> getpatientslist(List<ID> PatientIDs){
        List<Contact> Plist=[select Id,Name from Contact where AccountId in :PatientIDs];
        return Plist;
        
    }
}