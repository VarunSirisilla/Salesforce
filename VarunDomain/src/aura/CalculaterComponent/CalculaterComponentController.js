({
    MyCalFunc : function(component, event, helper) {
        var clickbutton	= event.getSource().get("v.label");//It will give label of a button// 
        var str1 = component.get("v.Expression");
        var str = component.get("v.Expression2");
        if(component.get("v.Operater")=='' || component.get("v.Operater")==undefined ||component.get("v.Operater")==null){
            component.set("v.Operand1",clickbutton); 
            str1=str1+component.get("v.Operand1")//Nothing but concating
            console.log(str1);
            component.set("v.Expression" ,str1);
        }else{
            component.set("v.Operand2",clickbutton); 
            str=str+component.get("v.Operand2")//Nothing but concating
            component.set("v.Expression2" ,str);
        }
        
    },
    MyOperFunc : function(component, event, helper) {
        var clickbutton	= event.getSource().get("v.label");//It will give label of a button//
        component.set("v.Operater" ,clickbutton);
        var inputoperater = component.get("v.Operater")
        console.log(inputoperater);
    },
    MyResFunc : function(component, event, helper) {
        
        component.set("v.Expression" ,"");
        component.set("v.Operater" ,"");
         component.set("v.Expression2" ,"");
         component.set("v.Result" ,"");
        
    },
    MyResultFunc : function(component, event, helper) {
        var operater = component.get("v.Operater");
        var result =''; 
        if(operater=='+')
        {
            result = Number(component.get("v.Expression"))+Number(component.get("v.Expression2"));
        }
        else if(operater=='-'){
            result = Number(component.get("v.Expression"))-Number(component.get("v.Expression2"));
        }
            else if(operater=='*'){
                result = Number(component.get("v.Expression"))*Number(component.get("v.Expression2"));
            }
            else if(operater=='%'){
                result = Number(component.get("v.Expression"))%Number(component.get("v.Expression2"));
            }
        result = '='+result;
          component.set("v.Result" ,result);
    }
    
})