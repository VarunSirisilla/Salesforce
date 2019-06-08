({
    
	createcontact : function(component, event, helper) {
			var action = component.get('c.MakeTransaction');
        action.setParams({ 'T' : component.get('v.vMakeTransaction') });
       action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.newRecord", response.getReturnValue());
        }
        else {
            console.log("Failed with state: " + state);
        }
    });
         console.log('v.TransactionList');
        $A.enqueueAction(action);//Sends request to the server//
	}
})