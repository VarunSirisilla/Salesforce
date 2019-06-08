public class MainPageController {
List <Patient__C> Plist;
List <Doctor__C> Dlist;
List <Lab__C> Llist;
List <Bill__C> Blist; 
List <Operations__C> Olist;
    Public Pagereference PatientObject()
    {
        Pagereference Patient1Page = new Pagereference('/apex/PatientobjectVF?core.apexpages.devmode.url=1&core.apexpages.request.devconsole=1');
        return(patient1Page);
    }
    Public Pagereference DoctorObject()
    {
        Pagereference DoctorPage = new Pagereference('/apex/DoctorObjectVF?core.apexpages.request.devconsole=1');
            return(DoctorPage);
    }
    Public Pagereference BillObject()
    {
        Pagereference BillPage = new Pagereference('/apex/BillObjectVF?core.apexpages.request.devconsole=1');
    return(BillPage);
    }
    
}