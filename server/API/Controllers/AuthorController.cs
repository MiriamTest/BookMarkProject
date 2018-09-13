using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Entities;
using BL;
using System.Web.Http;

namespace API.Controllers
{
    public class AuthorController : ApiController
    {
        // GET: Author
      
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Author/allAuthors")]
        public Authors[] allAuthors()
        {
            return BLAuthor.allAuthors();

        }
    }
}