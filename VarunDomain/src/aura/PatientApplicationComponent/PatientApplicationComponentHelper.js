({
	fetchPatients : function(component, event, helper) {
        
		var action = component.get("c.getpatientslist");
        var PatientID = component.get("v.recordId");
        action.setParam({PatientIDs : PatientID});
       action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS') {
               var Plist = response.getReturnValue();
               console.log(Plist);
                component.set("v.PatientList",Plist);
        }
                           else{
                               alert('Error in getting respone');
                               
        }
       });
        $A.enqueueAction(action);
    }
})