public class DoctorObjectController {
    list<Doctor__C> Dlist = [select Name,Department__c from Doctor__c];
    Doctor__c D = new Doctor__c();
    public list<Doctor__c> getmydoctor()
        
    {
        
        return(Dlist);
    }
    Public Pagereference NewDoctorPage()
    {
        Pagereference InsertDoctor = new Pagereference('https://c.ap8.visual.force.com/apex/DoctorObjectInsert?core.apexpages.request.devconsole=1');
    return(InsertDoctor);
    }
    Public Doctor__C getDoctorObject()
        
    {
        Return(D);
    }
    Public Pagereference save()
    {
        insert D;
        Pagereference UpdatedDoctorrecords = new Pagereference('https://c.ap8.visual.force.com/apex/DoctorUpdatedRecords?core.apexpages.request.devconsole=1');
        return(UpdatedDoctorrecords);
    }
  

}