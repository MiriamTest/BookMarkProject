﻿using System;
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
    public class UserController : ApiController
    {
        // GET: User

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/user/login/{mail}/{password}")]
        public Users login([FromUri] string mail, [FromUri] string password)
        {
            
       var i= BLUser.login(mail, password);
      return i;
        }


        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/user/addUsers")]
        public HttpResponseMessage addUsers([FromBody] Users newUser)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLUser.addUsers(newUser));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }



            
        }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/user/getUser/{idUser}")]
    public Users getUser([FromUri] int idUser)
    {
      return BLUser.getUser(idUser);

    }
  }
}