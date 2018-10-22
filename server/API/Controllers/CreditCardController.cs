using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Entities;
using System.Net;
using BL;

namespace API.Controllers
{
  public class CreditCardController : ApiController
  {
        // GET: Payment
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/CreditCard/addCreditCard")]
        public HttpResponseMessage addCreditCard([FromBody] CreditCards addCreditCard)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLCreditCard.addCreditCard(addCreditCard));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
