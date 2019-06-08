public class BillObjectcontroller {
  List<Bill__c> Blist = [select Patient__c,Email_ID__c,Lab_Bill__c,DoctorBill__c,Bill_Paid__c from Bill__c];
   Bill__c B = new Bill__c(); 
Public List<Bill__c> getmybillrecords()
{
    return(Blist);
}
    Public Bill__c getmyBillobject()
    {
        return(B);
    }
    Public Pagereference NewBillInsert()
    {
        Pagereference NewBill = new pagereference('https://c.ap8.visual.force.com/apex/NewBillInsertPage?core.apexpages.request.devconsole=1');
        return(NewBill);
    }
    public void save()
    {
        insert B;
        list<Bill__C> Blist = [select Patient__c,Email_ID__c,Lab_Bill__c,DoctorBill__c,Bill_Paid__c from Bill__c];
    }
    public list<Bill__C> GetUpdatedRecords()
    {
        return(Blist);
    }
}