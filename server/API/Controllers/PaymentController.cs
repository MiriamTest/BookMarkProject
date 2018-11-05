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
  public class PaymentController : ApiController
  {
        // GET: Payment
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/Payment/addPayment")]
        public HttpResponseMessage addPayment([FromBody] Payments addPayment)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLPayment.addPayment(addPayment));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Payment/deletePayment/{idPayment}")]
    public bool deletePayment(int idPayment)
    {
      return BLPayment.deletePayment(idPayment);

    }
  }
}
