({
	Success : function(component, event, helper) {
            
		var action = component.get('c.CheckLogin');
        console.log(component.get("v.UserName"));
        action.setParams({"UserName": component.get("v.UserName"),
                         "Password":component.get("v.Password")});
       action.setCallback(this, function(response) {
        var state = response.getState();
        if (state === "SUCCESS") {
            component.set("v.Result", response.getReturnValue());
              if(component.get("v.Result") === "Login Successfull"){
                  var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "Log in Successfull."
    });
    toastEvent.fire();
           var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                
                componentDef : "c:CustomerWelcomePage",
                componentAttributes : {
                AccountNumber: component.get("v.UserName") ,
            },
            });
            evt.fire();        
                  
                  
           
}else{
  var toastEvent2 = $A.get("e.force:showToast");
    toastEvent2.setParams({
        "title": "Error !",
        "message": "Please Enter Correct Password and try again."
    });
    toastEvent2.fire();
}
        }
        else {
            console.log("Failed with state: " + state);
        }
    });
         console.log(component.get("v.Result"));
        $A.enqueueAction(action);//Sends request to the server//
	
  },
   
})