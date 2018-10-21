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
  static  int i = 0;

    static Timer TimerToExcuteFunctionEveryMinute = new Timer(6000);
    static void CheckForTime_Elapsed(object sender, ElapsedEventArgs e)
    {
      i++;
    }
    static HomeController()//áåðä ñèèéú
    {
     // TimerToExcuteFunctionEveryMinute = new ElapsedEventHandler(CheckForTime_Elapsed);//áñåâøééí ùí äôåð÷öéä ùàú øåöä ìäôòéì ëì ã÷ä
    //  TimerToExcuteFunctionEveryMinute = true;
    }

    public string Index()
        {
            ViewBag.Title = "Home Page";

            return "Hodu Lhashem";
        }
    }
}
