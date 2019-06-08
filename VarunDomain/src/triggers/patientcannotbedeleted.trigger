trigger patientcannotbedeleted on Patient__c (before delete) {
for(Patient__c P : trigger.old)
{
P.addError('Patient cannot be deleted');
}
}