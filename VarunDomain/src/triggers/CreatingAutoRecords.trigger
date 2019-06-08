Trigger CreatingAutoRecords on Account__c(After Insert, After Update)

{

   

  List<Contact1__c> contactRecordsFinalListToInsert = New List<Contact1__c>();

   

  If(Trigger.IsInsert || Trigger.IsUpdate)

  {

      For(Account__c Acc : Trigger.New)

      {

          If(Acc.No_of_contacts__c != null)

          {

              List<Contact1__c> fetchingAlreadyExixtsedRecords = [Select Id FROM Contact1__c WHERE Account__c =:Acc.Id];

               

              If(fetchingAlreadyExixtsedRecords.IsEmpty())

              {

                  // We are only creating a records when there is no Contact1__c records exixts.

                  For(Integer I = 0; I < Acc.No_of_contacts__c; I++)

                  {

                      Contact1__c crd = New Contact1__c();

                       

                      crd.Account__c = Acc.Id;

                      crd.Name      = 'Contact' + I;
                      
                      crd.amount_to_be_paid__c  = Acc.amount_to_be_paid__c;

                      contactRecordsFinalListToInsert.add(crd);

                  }

              }

               

          }

           

          try{

              If(!contactRecordsFinalListToInsert.IsEmpty()){

                  insert contactRecordsFinalListToInsert;

              }

          }

          Catch(Exception e){

              System.debug('The thrown exception for CreatingAutoRecords is:: ' + e.getMessage());

          }

      }

  }

   

   

}