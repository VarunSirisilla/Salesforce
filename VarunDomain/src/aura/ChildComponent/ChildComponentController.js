({
	handlechild : function(component, event, helper) {
		var params = event.getParam('arguments')
        if(params){
            var param1 = params.param1
            alert('in child controller' + param1);
        }
	}
})