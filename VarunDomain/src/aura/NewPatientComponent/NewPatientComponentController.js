({

createAccount : function(component, event) {

  var newPat = component.get("v.createPatient");

  var action = component.get("c.createPatient");

  action.setParams({

      "Pat": newPat

  });

  action.setCallback(this, function(a) {

         var state = a.getState();

          if (state === "SUCCESS") {

              var name = a.getReturnValue();
              name.sobjectType = 'Patient__c';

             alert("hello from here"+name);

          }
      else{
           alert("Failed with state: " + state);
      }

      });

  $A.enqueueAction(action)

}

})