public with sharing class PatientListPraciseController {
    
    @AuraEnabled
    public static List<Patient__c> getpatientlist(){
        list<Patient__c> Plist = new List<Patient__c>([select Id,Name,Age__c,LastModifiedById,Disease__c,Doctor__c,Gender__c,Phone__c from Patient__c where Phone__c != Null]);
        return Plist;
    }
    
    @AuraEnabled
    public static List<Patient__c> createPatient(Patient__c Pat){
        
        system.debug('Patient:: '+pat.Name );
        insert pat;
        list<Patient__c> Plist1 = new List<Patient__c>([select Id,Name from Patient__c where Name =: Pat.Name]);
        return Plist1;  
   
  
        
    } @AuraEnabled
    public static List<Doctor__c> getDoctorlist(){
        list<Doctor__c> Dlist = new List<Doctor__c>([select Id,Name,Department__c,Patient_count__c from Doctor__c where Name != Null]);
        return Dlist;
    }@AuraEnabled
    public static String CheckLogin(String UserName,String Password){
        String S = 'Login Successfull';
        String E = 'Incorrect User or Password';
        list<Customer__c> Clist = new List<Customer__c>([select Name from Customer__c where Name =: UserName  AND   Pwd__c =: Password]);
        if(Clist.size() > 0){
            return S;
        }else{
            return E;
        }
    }
@AuraEnabled
    public static List<Customer__c> getCustomer(String Name){
        list<Customer__c> C2list = new List<Customer__c>([select Id,Name,Gender__c,Initial_Balance__c,Person_Name__c,Phone__c,Email__c,PIN_NO__c from Customer__c where Name =: Name]);
        return C2list;
    } 
    @AuraEnabled
    public static Customer__c getSingleCustomer(String Name){
        Customer__c C2list =  [select Id,Name,Gender__c,Initial_Balance__c,Person_Name__c,Phone__c,Email__c,PIN_NO__c from Customer__c where Name =: Name LIMIT 1];
        return C2list;
    } 
     @AuraEnabled
    public static Transaction__c createTransaction(Transaction__c T){
         Customer__c T2 =  [select Id,Name from Customer__c where Name =: T.Name__c ];
        system.debug(T2.Id);
        Transaction__c NewT= new Transaction__c();
        NewT.Name__c = T2.Id;
        NewT.Credit_Amount__c = T.Credit_Amount__c;
        NewT.Transaction_type__c = T.Transaction_type__c;
        NewT.PIN_NO__c = T.PIN_NO__c;
        system.debug(NewT);
      insert NewT;     
      return NewT;

    } @AuraEnabled
    public static Transaction__c createDebitTransaction(Transaction__c T){
         Customer__c T2 =  [select Id,Name from Customer__c where Name =: T.Name__c ];
        system.debug(T2.Id);
        Transaction__c NewT= new Transaction__c();
        NewT.Name__c = T2.Id;
        NewT.Debit_Amount__c = T.Debit_Amount__c;
        NewT.Transaction_type__c = T.Transaction_type__c;
        NewT.PIN_NO__c = T.PIN_NO__c;
        NewT.Debit_Amount__c = T.Debit_Amount__c;
        system.debug(NewT);
      insert NewT;     
      return NewT;
    } @AuraEnabled
    public static Transaction__c TransferAmount(Transaction__c T8){
        system.debug(T8);
        system.debug(T8.Tranferto__c);
         Customer__c T2 =  [select Id,Name from Customer__c where Name =: T8.Name__c ];
        Customer__c T3 = [select Id,Name from Customer__c where Name =: T8.Tranferto__c ];
         
        Transaction__c NewT= new Transaction__c();
        NewT.Name__c = T2.Id;
        NewT.Tranferto__c = T3.Id;
        NewT.Transfer_Amount__c = T8.Transfer_Amount__c;
        NewT.Transaction_type__c = T8.Transaction_type__c;
        NewT.PIN_NO__c = T8.PIN_NO__c;
        system.debug(NewT);
      insert NewT;     
      return NewT;
    } @AuraEnabled
    public static List<Transaction__c> getTransaction(String Name){
        System.debug(Name);
        list<Transaction__c> C2list = new List<Transaction__c>([select Id,Person_Name__c,createddate,Name__c,Transaction_type__c,Debit_Amount__c,Credit_Amount__c,Balance_Amount__c,Transfer_Amount__c from Transaction__c where Name__c =: Name ORDER BY createddate DESC LIMIT 10]);
        System.debug(C2list);
        return C2list;
    
}@AuraEnabled
    public static String UpdatePin(String Name,String PIN){
        system.debug(PIN);
        system.debug(Name);
         Customer__C c = [select Id,PIN_NO__c,Name from Customer__C where Name =: Name];
         c.PIN_NO__c = PIN;
        update c;
         system.debug(c.PIN_NO__c);
        return c.PIN_NO__c;
    }
}