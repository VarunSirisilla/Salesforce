({
	doinit : function(component, event, helper) {
		 component.find("Doctorrecordcreator").getNewRecord(
         "Doctor__c",
             null,
             false,
             $A.getCallback(function(){
                 var record=component.get('v.record');
                 var error=component.get('v.recordError');
                 if(error || (record === null)){
                     console.log('Error while creating the template ', error);
                     
                 }else{
                     console.log('Succesfully created');
                     alert(record);
                     alert('template initiated');
                 }
             })    
         );
	}
})