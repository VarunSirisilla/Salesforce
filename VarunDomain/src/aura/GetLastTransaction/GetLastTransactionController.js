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
            component.set("v.CList",responsevalue);
            component.set("v.AccountNumber",component.get('v.CList.Id'));
        },'SUCCESS');  
        console.log(component.get('v.CList'));
        $A.enqueueAction(action);//Sends request to the server//
     },
    GetLasttransaction : function(component, event, helper) {
        
        var action = component.get('c.getTransaction');
       action.setParams({"Name": component.get('v.AccountNumber')
                         });
        action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set('v.TList',responsevalue);
        },'SUCCESS');
        
        console.log('v.TList');
        
        /*step2*/
        $A.enqueueAction(action);//Sends request to the server//
       
    }
})