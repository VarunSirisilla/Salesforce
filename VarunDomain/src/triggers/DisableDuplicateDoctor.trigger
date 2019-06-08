trigger DisableDuplicateDoctor on Doctor__c (before insert,before update) {
for(Doctor__c D : trigger.new)
{
   list<Doctor__c> DList = [select id,name from Doctor__c where name =: D.Name ];
   //integer count = [select count() from Doctor__c where name =: D.Name ];
        if(DList.size()> 0)
    {
        D.addError('Duplicate record exist ' +D.name);
    }
}
}