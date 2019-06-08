({
	NavigatePatientrecords : function(component, event, helper) {
	
            var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                componentDef : "c:PercentageCalculater",
                
            });
            evt.fire();
        },
    NavigateDoctorrecords : function(component, event, helper) {
	
            var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                componentDef : "c:DoctorComponentforCraftship",
                
            });
            evt.fire();
        },
})