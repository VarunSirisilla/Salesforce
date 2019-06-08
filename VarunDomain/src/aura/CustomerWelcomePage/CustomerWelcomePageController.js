({
    
	 doInit : function(component, event, helper) {
     
          
        console.log(component.get("v.AccountNumber"));
        /*Step1*/
        var action = component.get('c.getCustomer');
        action.setParams({"Name": component.get("v.AccountNumber")
                         });
        action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set("v.CList",responsevalue);
            component.set("v.AccountNumber",component.get("v.Clist").Id);
            alert(component.get('v.AccountNumber'));
        },'SUCCESS');  
        console.log(component.get('v.CList'));
        $A.enqueueAction(action);//Sends request to the server//
		
	}, CheckBalance : function(component, event, helper) {
 component.set("v.isModalOpen", true);
    },
  
   closeModel: function(component, event, helper) {
      // Set isModalOpen attribute to false  
      component.set("v.isModalOpen", false);
   },
  
   submitDetails: function(component, event, helper) {
      // Set isModalOpen attribute to false
      //Add your code to call apex method or do some processing
      component.set("v.isModalOpen", false);
   },
    GetLastTransactions: function(component, event, helper) {
       var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:GetLastTransaction",
                componentAttributes : {
                AccountNumber: component.get("v.AccountNumber") ,
            },
            });
            evt.fire(); 
        
    },
    CreditComponent : function(component, event, helper){
         var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:CreditLightningComp",
                componentAttributes : {
                AccountNumber: component.get("v.AccountNumber") ,
            },
            });
            evt.fire(); 
        
    },
     Debit : function(component, event, helper){
         var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:DebitLightningComp",
                componentAttributes : {
                AccountNumber: component.get("v.AccountNumber") ,
            },
            });
            evt.fire(); 
     },
    Changepin : function(component, event, helper){
         var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:Changepin",
                componentAttributes : {
                AccountNumber: component.get("v.AccountNumber") ,
            },
            });
            evt.fire(); 
     }, TransferAmount : function(component, event, helper){
         var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:TransferAmount",
                componentAttributes : {
                AccountNumber: component.get("v.AccountNumber") ,
            },
            });
            evt.fire(); 
     },DisplayMoviePage :  function(component, event, helper){
         var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:BookBus",
                componentAttributes : {
                AccountNumber: component.get("v.AccountNumber") ,
            },
            });
            evt.fire(); 
     }
})