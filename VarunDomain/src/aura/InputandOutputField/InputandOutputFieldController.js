({
    
	createcontact : function(component, event, helper) {
			var action = component.get('c.createPatient');
        action.setParams({ 'Pat' : component.get('v.vcreatePatient') });
       action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.newRecord", response.getReturnValue());
        }
        else {
            console.log("Failed with state: " + state);
        }
    });
         console.log('v.PatientList');
        $A.enqueueAction(action);//Sends request to the server//
	}
})