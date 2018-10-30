using BL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;
using System.Web.Mvc;
namespace API.Controllers
{
    public class HomeController : Controller
    {
  

    static Timer TimerToExcuteFunctionEveryMinute = new Timer(3600000);//every 24 hours
    static void CheckForTime_Elapsed(object sender, ElapsedEventArgs e)
    {
      try
      {
       if( DateTime.Now.Hour==0)
         BLLending.updateStatusEveryDay();
      }
      catch(Exception ex)
      {
        throw ex;
      }
      
    }
    static HomeController()
    {
     TimerToExcuteFunctionEveryMinute.Elapsed += new ElapsedEventHandler(CheckForTime_Elapsed);
     TimerToExcuteFunctionEveryMinute.Enabled = true;
    }

    public string Index()
        {
            ViewBag.Title = "Home Page";

            return "Hodu Lhashem";
        }
    }
}
