trigger AddingMRorMISSforPatientname on Patient__c (before insert) {
list<Patient__C> Plist = trigger.new;
for(Patient__c P : Plist)
{
if(P.Gender__c == 'Male')
{
P.Name= 'Mr. '+P.Name;
}
if(P.Gender__c == 'Female')
{
P.Name= 'Miss.'+P.Name;
}
}
}