({
	 Transactions : function(component, event, helper) {
	
            var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                componentDef : "c:MakeaTransaction",
                
            });
            evt.fire();
        },

})