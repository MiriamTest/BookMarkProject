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
    public class LibraryController : ApiController
    {
        // GET: Library
        [System.Web.Http.HttpPost]
        [System.Web.Http.Route("api/Library/addLibrary")]
        public HttpResponseMessage addLibrary([FromBody] Libraries library)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, BLLibrary.addLibrary(library));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Library/allCities")]
        public Cities[] allCities()
        {
            return BLLibrary.allCities();

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Library/allStreets")]
        public Streets[] allStreets()
        {
            return BLLibrary.allStreets();

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Library/getLibrary/{id}")]
        public Libraries[] getLibrary([FromUri] int id)
        {
            return BLLibrary.getLibrary(id);

        }
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/Library/allLibraries")]
        public Libraries[] allLibraries()
        {
            return BLLibrary.allLibraries();

        }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Library/deleteLibrary/{idLibrary}")]
    public Boolean deleteLibrary(int idLibrary)
    {
      return BLLibrary.deleteLibrary(idLibrary);

    }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Library/getBooksInLibrary/{idLibrary}")]
    public BooksInLibrary[] getBooksInLibrary(int idLibrary)
    {
      return BLLibrary.getBooksInLibrary(idLibrary);

    }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Library/addSecrateryToLibrary/{idLibrary}/{idSecratery}")]
    public HttpResponseMessage addSecrateryToLibrary([FromUri] int idLibrary, [FromUri]  int idSecratery)
    {
      try
      {
        return Request.CreateResponse(HttpStatusCode.OK, BLLibrary.addSecrateryToLibrary(idLibrary, idSecratery));
      }
      catch (Exception ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
      }
    }
    [System.Web.Http.HttpPost]
    [System.Web.Http.Route("api/Library/editLibrary/{library}")]
    public HttpResponseMessage editLibrary([FromBody] Libraries library)
    {
      try
      {
        return Request.CreateResponse(HttpStatusCode.OK, BLLibrary.editLibrary(library));
      }
      catch (Exception ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
      }
    }
    [System.Web.Http.HttpGet]
    [System.Web.Http.Route("api/Library/getSearchLibrary")]
    public HttpResponseMessage getSearchLibrary()
    {
      try
      {
        return Request.CreateResponse(HttpStatusCode.OK, BLLibrary.getSearchLibrary());
      }
      catch (Exception ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
      }
    }
  }
}
