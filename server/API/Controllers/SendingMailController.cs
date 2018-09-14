using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Dal;
namespace API.Controllers
{
    public class SendingMailController : ApiController
    {
        // GET: SendingMail
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/SendingMail/sendMail")]
        public void sendMail()
        {
             DalSendingMail.sendingMail();

        }
    }
}