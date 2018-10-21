using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Entities;
using Dal;
using BL;
using System.Web.Http;
using System.Net.Http;
using System.Net;

namespace API.Controllers
{
  public class LendingController : ApiController
  {


    [System.Web.Http.HttpPost]
    [System.Web.Http.Route("api/Lending/addLending")]
    public HttpResponseMessage addLending([FromBody] Lendings lending)
    {
      try
      {
        return Request.CreateResponse(HttpStatusCode.OK, BLLending.addLending(lending));
      }
      catch (Exception ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
      }




    }
    //[System.Web.Http.HttpGet]
    //[System.Web.Http.Route("api/user/getUser/{idUser}")]
    //public Users getUser([FromUri] int idUser)
    //{
    //  return BLUser.getUser(idUser);

    //}
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Lending/getBook/{code}")]
    public Books getBook([FromUri] int code)
    {
      return BLLending.checkLending(code);

    }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Lending/changeToBorrowed/{code}/{status}")]
    public Boolean changeToBorrowed([FromUri] int code, int status)
    {
      return BLLending.changeStatus(code);

    }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Lending/isValid/{code}")]
    public string allCategories(int code)
    {
      return BLLending.checkDaysForLending(code);

    }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Lending/checkStatus/{code}")]
    public int checkStatus(int code)
    {
      return BLLending.checkStatus(code);

    }
  }
}
