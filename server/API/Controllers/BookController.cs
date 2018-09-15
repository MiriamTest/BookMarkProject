using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Entities;
using Dal;
using BL;
using System.Web.Http;
using System.Net.Http;
using System.Net;
using System.IO;

namespace API.Controllers
{
    public class BookController : ApiController
    {
        // GET: Book
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Book/allBooks")]
        public Books[] allBooks()
        {
            return BLBook.allBooks();

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Book/getBook/{Id}")]
        public Books getBook([FromUri] BooksInLibrary[] id)
        {
            return BLBook.getBook(id);

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Book/getStatus/{Id}")]
        public StatusLending getStatus([FromUri] int id)
        {
            return BLBook.getStatus(id);

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Book/allCategories")]
        public Categories[] allCategories()
        {
            return BLBook.allCategories();

        }

        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/Book/addNewBook")]
        public HttpResponseMessage addNewBook([FromBody] Books newBook)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLBook.addNewBook(newBook));
            }
            catch (IOException e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }



            //}
        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Book/searchBook/{searchObj}")]
        public HttpResponseMessage searchBook([FromUri] Dal.Model.SearchObj searchObj )
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLBook.searchBook(searchObj));
            }
          catch (IOException e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
