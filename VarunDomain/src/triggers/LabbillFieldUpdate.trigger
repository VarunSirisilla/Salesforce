trigger LabbillFieldUpdate on Lab__c (before insert,before update) 
{
if(trigger.isinsert)
{
for(Lab__c Labrec : trigger.new)
{

if(Labrec.LabBill__c == NULL)
{
Labrec.LabBill__c = 300;
}
}
}
if(trigger.isupdate)
{
for(Lab__c Labrec : trigger.new)
{

if(Labrec.LabBill__c == NULL)
{
Labrec.addError('Please enter Lab bill');
}
}
}
}