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
		
	}
})