({
    doinit : function(component, event, helper) {
        /*Step1*/
        var action = component.get('c.getpatientlist');
        /*step3*/
        action.setCallback(this, function(response){
            var responsevalue=response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set('v.PatientList',responsevalue);
        },'SUCCESS');
        
        console.log('v.PatientList');
        
        /*step2*/
        $A.enqueueAction(action);//Sends request to the server//
        
    },
    ViewDetails : function(component, event, helper) {
        var clickbutton = event.getSource().get("v.name");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": clickbutton,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
    NavigatePatientrecords : function(component, event, helper){
        
        
        var pagereference = component.find("navigation");
        var pagereferencenav= {
            "type" : "standard__component",
            "attrubutes:":{
                "componentName":"c__NewPatientComponent"
            },
            "state":{
                "myAttr" : "attrValue"
            }
        };
        pagereference.navigate(pagereferencenav);
       
    },
     navigateToMyComponent : function(component, event, helper) {
            var evt = $A.get("e.force:navigateToComponent");
            evt.setParams({
                componentDef : "c:InputandOutputField",
                
            });
            evt.fire();
        },
    Sort : function(component, event, helper) {
        var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
},
    ViewDetails2 : function(component, event, helper) {
        var clickbutton = event.getSource().get("v.name");
        alert(clickbutton);
      component.set('v.Patientrecordid',clickbutton)
        $A.createComponent(
            "c:PatientDetailPage",
            {
                "Patientrid" : component.get('v.Patientrecordid')
            },
            function(patientDetailPage, Status, errorMessage){
               alert(status);
                if(status === "SUCCESS"){
                     alert(status);
                    component.find('overLayLib').showCustomModal({
                       header: "Patient Details",
                       body: "PatientDetailPage",  
                       footer:"",
                       showCloseButton: true,
                    
                       closeCallback: function() {
                           alert('You closed the alert!');
                       }
                   });
                }else if(status === "INCOMPLETE"){
                    console.log("No response from server or client is offline.")
                }else if(status === "ERROR"){
                     console.log("Error: " + errorMessage);

                }
            }
       
        
            );
           
       
    },
    navigateToMyModal : function(component, event, helper) {
       /* $A.createComponent(
            "c:PatientDetailPage",
            {
                "Patientrecordid" : clickbutton
            },
            function(PatientDetailPage, Status, errorMessage){
                if(status === "SUCCESS"){
                    component.find('overLayLib').showCustomModal({
                       header: "Application Confirmation",
                       body: "PatientDetailPage",  
           footer:"test",
                       showCloseButton: true,
                    
                       closeCallback: function() {
                           alert('You closed the alert!');
                       }
                   });
                }else if(status === "INCOMPLETE"){
                    console.log("No response from server or client is offline.")
                }else if(status === "ERROR"){
                     console.log("Error: " + errorMessage);

                }
            }
       
        
            );*/
            }
     
   
})