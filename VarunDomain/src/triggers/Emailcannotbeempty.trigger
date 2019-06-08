trigger Emailcannotbeempty on Bill__c (before insert,before update)
{
for(Bill__c b : trigger.NEW) 
{
if(b.Email_id__c == null) 
{
if(Trigger.isinsert)
b.addError('Email cannot be blank while inserting');
if(Trigger.isupdate)
b.addError('Email cannot be blank while updating');
}
}
}