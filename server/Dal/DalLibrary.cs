using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using System.IO;

namespace Dal
{
    public static class DalLibrary
    {
        public static bool addLibrary(Libraries library)
        {
            

            try
            {

                Connect.db.Libraries.Add(Convertors.LibraryConvert.LibraryToModel(library));
                Connect.db.SaveChanges();
                return true;
            }
            catch(IOException e)
            {

                return false;
            }
        }
        public static Cities[] allCities()
        {
            return Connect.db.Cities.ToArray();
        }
        public static Streets[] allStreets()
        {
            return Connect.db.Streets.ToArray();
        }
        public static Libraries[] getLibrary(int id)
        {
             var i=Connect.db.Libraries.Where(l => l.IdAdmin == id).ToArray();
      return i; 
        }
        public static Libraries[] allLibraries()
        {
            return Connect.db.Libraries.ToArray();
        }
    public static Libraries getLibraryAccordingToBook(int bookId)
    {
      var bookInLibrary = Connect.db.BooksInLibrary.FirstOrDefault(l => l.IdBook == bookId);
      var library= Connect.db.Libraries.FirstOrDefault(l => l.IdLibrary == bookInLibrary.IdLibrary);
      return library;
    }
    public static bool deleteLibrary(int idLibrary)
    {
      Libraries library = Connect.db.Libraries.FirstOrDefault(l => l.IdLibrary == idLibrary);
      Connect.db.Libraries.Remove(library);
      var bookInLibrary = Connect.db.BooksInLibrary.Where(b => b.IdLibrary == library.IdLibrary);
      foreach (var item in bookInLibrary)
      {
        Connect.db.BooksInLibrary.Remove(item);
        Connect.db.BooksInLibrary.Remove(item);
      }
      var secratery = Connect.db.SecrateryInLibrary.Where(s => s.IdLibrary == library.IdLibrary);
      foreach (var item in secratery)

      Connect.db.SaveChanges();
      return true;
    }
 
    public static BooksInLibrary[] getBooksInLibrary(int idLibrary)
  {
    return Connect.db.BooksInLibrary.Where(b => b.IdLibrary == idLibrary).ToArray();
  }


  }
    }

