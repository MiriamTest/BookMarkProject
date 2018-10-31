using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static  class BLLibrary
    {
        public static bool addLibrary(Libraries library)
        {
            return DalLibrary.addLibrary(library);
        }
        public static Cities[] allCities()
        {
            return DalLibrary.allCities();
        }
        public static Streets[] allStreets()
        {
            return DalLibrary.allStreets();
        }
        public static Libraries[] getLibrary(int id)
        {
            return DalLibrary.getLibrary(id);
        }
        public static Libraries[] allLibraries()
        {
            return DalLibrary.allLibraries();
        }
    public static Libraries getLibraryAccordingToBook(int bookId)
    {
      return DalLibrary.getLibraryAccordingToBook(bookId);
    }
   public static Boolean deleteLibrary(int idLibrary)
    {
      return DalLibrary.deleteLibrary(idLibrary);
    }
    public static BooksInLibrary[] getBooksInLibrary(int idLibrary)
    {
      return DalLibrary.getBooksInLibrary(idLibrary);
    }
    public static bool addSecrateryToLibrary(int idLibrary, int idSecratery)
    {
      return DalLibrary.addSecrateryToLibrary(idLibrary, idSecratery);
    }
    public static bool editLibrary(Libraries library)
    {
      return DalLibrary.editLibrary(library);
    }
    public static Object getSearchLibrary()
    {
      return DalLibrary.getSearchLibrary();
    }
  }
}
