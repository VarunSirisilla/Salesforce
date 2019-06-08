trigger IncorrectPWD on Transaction__c (before insert,before update) {
    for(Transaction__C T : trigger.new){



}
}