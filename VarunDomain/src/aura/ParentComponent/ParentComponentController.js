({
	doclick : function(component, event, helper) {
		var childcomp = component.find('childcomp');
        childcomp.child('I am from Parent Component')
	}
})