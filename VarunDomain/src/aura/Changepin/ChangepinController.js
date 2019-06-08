({
    
	 doInit : function(component, event, helper) {
        console.log(component.get("v.AccountNumber"));
        var action = component.get('c.getSingleCustomer');
        action.setParams({"Name": component.get("v.AccountNumber")
                         });
        action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set("v.CList",responsevalue);
        },'SUCCESS'); 
        $A.enqueueAction(action);
		
	},
    Update: function(component, event, helper) {
     
        if(component.get('v.Pin') === component.get('v.CList').PIN_NO__c ){
            
            var action = component.get("c.UpdatePin");
        action.setParams({"Name": component.get("v.AccountNumber"),
                          "PIN":component.get("v.NewPin")
                         });
      action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set("v.Pin",responsevalue);
        },'SUCCESS'); 
        $A.enqueueAction(action);
      component.set("v.isModalOpen", true);
           
        }else{
             var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Error!",
        "message": "Please Enter Correct Existing Pin."
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