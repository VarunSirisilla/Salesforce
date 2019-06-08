({
    getColumnAndAction : function(component) {
        var actions = [
            {label: 'Edit', name: 'edit'},
            {label: 'Delete', name: 'delete'},
            {label: 'View', name: 'view'}
        ];
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'Disease', fieldName: 'Disease__c', type: 'text'},
             {label: 'Gender', fieldName: 'Gender__c', type: 'text'},
             {label: 'Phone', fieldName: 'Phone__c', type: 'phone'},
            {label: 'Age', fieldName: 'Age__c', type: 'Number'},
            {label: 'Doctor', fieldName: 'Doctor__c', type: 'text'},
            {type: 'action', typeAttributes: { rowActions: actions } } 
        ]);
    },
     
    getAccounts : function(component, helper) {
        var action = component.get("c.getPatients");
        var pageSize = component.get("v.pageSize").toString();
        var pageNumber = component.get("v.pageNumber").toString();
         
        action.setParams({
            'pageSize' : pageSize,
            'pageNumber' : pageNumber
        });
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var resultData = response.getReturnValue();
                if(resultData.length < component.get("v.pageSize")){
                    component.set("v.isLastPage", true);
                } else{
                    component.set("v.isLastPage", false);
                }
                component.set("v.dataSize", resultData.length);
                component.set("v.data", resultData);
            }
        });
        $A.enqueueAction(action);
    },
     
    viewRecord : function(component, event) {
        var row = event.getParam('row');
        var recordId = row.Id;
        var navEvt = $A.get("event.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recordId,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
     
    deleteRecord : function(component, event) {
        var action = event.getParam('action');
        var row = event.getParam('row');
         
        var action = component.get("c.deleteAccount");
        action.setParams({
            "acc": row
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" ) {
                var rows = component.get('v.data');
                var rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                component.set('v.data', rows);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been delete successfully."
                });
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },
     
    editRecord : function(component, event) {
         console.log(event.getParam('row'));
        var row = event.getParam('row');
        var recordId = row.Id;
        console.log(recordId);
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": recordId
        });
        editRecordEvent.fire();
    },    
})