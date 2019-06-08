({
	myPushButtonAction : function(component, event, helper) {
        helper.MyPushhelper(component, event, helper)
		
	},
    mypullButtonAction : function(component, event, helper) {
        component.set("v.mylabel1","mylabel1 attribute is set");
        var myatttribute2 =component.get("v.mylabel1");
        alert(myatttribute2)
		component.set("v.mylabel1","Pull");
	},
    myVarunButtonAction : function(component, event, helper) {
        //component.set("v.Varun","Varunset");
        //var Varunattribute =component.get("v.Varun");
        //alert(Varunattribute)
        component.set("v.New",component.get("v.Varun"));
		
	},
    myTarunButtonAction: function(component, event, helper) {
       // component.set("v.Varun","Varunset");
        //var Varunattribute =component.get("v.Varun");
        //alert(Varunattribute)
        component.set("v.New",component.get("v.Tarun"));
        
		
	},
     ToggglingOnandOffButton : function(component, event, helper) {
         console.log('before if');
        if(component.get("v.OnandoffButton")=="ON")
        {
            component.set("v.OnandoffButton","OFF");
        }
         else
         {
            component.set("v.OnandoffButton","ON");
         }
     }
    ,
    IncrementalAction : function(component, event, helper) {
        debugger;
        var myvar = component.get("v.MyNumber")
        myvar=myvar+1;
        component.set("v.MyNumber",myvar);
	},
    DecrementalAction : function(component, event, helper) {
        var myvar1 = component.get("v.MyNumber")
        myvar1=myvar1-1;
        component.set("v.MyNumber",myvar1);
	},
    ComboBoxController : function(component, event, helper) {
                var myvar=component.find("Designation").get("v.value");
        alert(myvar);
	},
    SelectHeartspecialist : function(component, event, helper) {
               component.find("Designation").set("v.value","Heartspecialist");
        
	}
})