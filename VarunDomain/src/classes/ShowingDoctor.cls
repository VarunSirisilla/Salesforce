public class ShowingDoctor {

    Doctor__c d = new Doctor__c(Name ='Varun',Department__c = 'General');
    Patient__c p = new Patient__c(Name = 'Vinay Pattewar',Gender__c = 'Male');
    Lab__c L = new Lab__c(Name = 'Blood test',LabBill__c = 200);
 public Doctor__c getmydoctorname()
 {
     return(d);
 }
    Public Patient__c getmypatientdetails()
    {
        return(p);
    }
    Public Lab__C getmylabdetails()
    {
        return(L);
    }
}