({
	doInit : function(component, event, helper) {
     
          
        console.log(component.get("v.AccountNumber"));
        /*Step1*/
        var action = component.get('c.getSingleCustomer');
        action.setParams({"Name": component.get("v.AccountNumber")
                         });
        action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set("v.TList",responsevalue);
            component.set("v.CreditAmount.Name__c",component.get("v.AccountNumber"));
        },'SUCCESS');  
        console.log(component.get('v.TList'));
        $A.enqueueAction(action);//Sends request to the server//
		
	} ,
    MakeTransaction: function(component, event, helper) {
       
    
        if(component.get("v.CreditAmount").PIN_NO__c === component.get("v.TList").PIN_NO__c)
        {
        
    var action = component.get('c.createDebitTransaction');
        action.setParams({ 'T' : component.get('v.CreditAmount') });
   
       action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
           
           var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            
             var action = component.get('c.getSingleCustomer');
        action.setParams({"Name": component.get("v.AccountNumber")
                         });
        action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set("v.RList",responsevalue);
        },'SUCCESS');  
        console.log(component.get('v.RList'));
        $A.enqueueAction(action);
            component.set("v.isModalOpen", true);
        }
        else {
            console.log("Failed with state: " + state);
        }
    });
         console.log('v.CreditAmount');
        $A.enqueueAction(action);//Sends request to the server//
   
}

        else{
             var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Error!",
        "message": "Please Enter Correct Pin."
    });
    toastEvent.fire();
        }
        
    },closeModel: function(component, event, helper) {
      // Set isModalOpen attribute to false  
      component.set("v.isModalOpen", false);
   },
  
   submitDetails: function(component, event, helper) {
      // Set isModalOpen attribute to false
      //Add your code to call apex method or do some processing
      component.set("v.isModalOpen", false);
   },
})