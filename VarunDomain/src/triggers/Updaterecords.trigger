trigger Updaterecords on Transaction__c (After insert,before insert) { 
    List<Customer__c> cus = new List<Customer__c>();
    if(Trigger.isInsert && Trigger.isBefore){
        for (Transaction__c co : Trigger.new){
            Customer__c po = [SELECT Name,Person_Name__c,Initial_Balance__c FROM Customer__c  WHERE id =: co.Name__c];
            
            if(co.Transaction_type__c == 'Credit')  {
                system.debug('Initial_Balance__c'+po.Initial_Balance__c);
                co.Balance_Amount__c = co.Credit_Amount__c + po.Initial_Balance__c;   
                po.Initial_Balance__c = co.Balance_Amount__c; 
                cus.add(po);
            }else if(co.Transaction_type__c == 'Debit'){
                co.Balance_Amount__c = po.Initial_Balance__c-co.Debit_Amount__c;   
                po.Initial_Balance__c = co.Balance_Amount__c; 
                cus.add(po);
            }else if(co.Transaction_type__c == 'Transfer'){
                system.debug('Tranfer');
                Customer__c to = [SELECT Name,Person_Name__c,Initial_Balance__c FROM Customer__c  WHERE id =: co.Tranferto__c];
                system.debug(to.Person_Name__c);
                co.Balance_Amount__c = po.Initial_Balance__c - co.Transfer_Amount__c ;
                po.Initial_Balance__c = co.Balance_Amount__c;
                to.Initial_Balance__c = to.Initial_Balance__c + co.Transfer_Amount__c;
                cus.add(po);
                cus.add(to);
            }
        }
        update cus;
    }
}