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
      catch (IOException e)
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
      var i = Connect.db.Libraries.Where(l => l.IdAdmin == id).ToArray();
      return i;
    }
    public static Libraries[] allLibraries()
    {
      return Connect.db.Libraries.ToArray();
    }
    public static Libraries getLibraryAccordingToBook(int bookId)
    {
      var bookInLibrary = Connect.db.BooksInLibrary.FirstOrDefault(l => l.IdBook == bookId);
      var library = Connect.db.Libraries.FirstOrDefault(l => l.IdLibrary == bookInLibrary.IdLibrary);
      return library;
    }
    public static Boolean deleteLibrary(int idLibrary)
    {
      Libraries library = Connect.db.Libraries.FirstOrDefault(l => l.IdLibrary == idLibrary);
      Connect.db.Libraries.Remove(library);
      var bookInLibrary = Connect.db.BooksInLibrary.Where(b => b.IdLibrary == library.IdLibrary);
      foreach (var item in bookInLibrary)
      {
        Connect.db.BooksInLibrary.Remove(item);
      }
      var secratery = Connect.db.SecretaryInLibrary.Where(s => s.IdLibrary == library.IdLibrary);
      foreach (var item in secratery)
      {
        Connect.db.SecretaryInLibrary.Remove(item);
      }
      Connect.db.SaveChanges();
      return true;
    }
<<<<<<< HEAD

=======
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
    public static BooksInLibrary[] getBooksInLibrary(int idLibrary)
    {
      return Connect.db.BooksInLibrary.Where(b => b.IdLibrary == idLibrary).ToArray();
    }
    public static bool addSecrateryToLibrary(int idLibrary, int idSecratery)
    {
      try
      {

        Connect.db.SecretaryInLibrary.Add(Convertors.SecrateryInLibraryConvert.secrateryToLibrary(idLibrary, idSecratery));
        Connect.db.SaveChanges();
        return true;
      }
      catch (IOException e)
      {

        return false;
      }

    }
    public static bool editLibrary(Libraries library)
    {
      try
      {
        Libraries lib = Connect.db.Libraries.FirstOrDefault(l => l.IdLibrary == library.IdLibrary);
        if (lib != null)
        {
          lib.City = library.City;
          lib.Street = library.Street;
          lib.NumHouse = library.NumHouse;
          lib.NameLibrary = library.NameLibrary;
          lib.IdAdmin = library.IdAdmin;
          lib.OpeningHours = library.OpeningHours;
          Connect.db.SaveChanges();
          return true;
        }
        return false;
      }

      catch (IOException e)
      {
        return false;
      }

    }


    public static Object getSearchLibrary()
    {

      var search = (from Libraries in Connect.db.Libraries.ToList()
                    join Cities in Connect.db.Cities.ToList()
                on Libraries.City equals Cities.IdCity
                    join Streets in Connect.db.Streets.ToList()
                    on Libraries.Street equals Streets.IdStreet
                    //join Regions in Connect.db.Regions.ToList()
                    //on Libraries.re equals statusess.IdStatus
                    //join cities in Connect.db.Cities.ToList()
                    //on libraries.City equals cities.IdCity
                    //join regions in Connect.db.Regions.ToList()
                    //on cities.IdRegion equals regions.IdRegion
                    //join categories in Connect.db.Categories.ToList()
                    //on books.category equals categories.IdCategory
                    select new
                    {
                      IdLibrary = Libraries.IdLibrary,
                      NameLibrary = Libraries.NameLibrary,
                      City = Cities.NameCity,
                      Street = Streets.NameStreet,
                      OpeningHour = Libraries.OpeningHours,
                      NumHouse = Libraries.NumHouse
                    }).AsQueryable();
      List<Object> dynamicList = new List<Object>();
      dynamicList.Add(search);

      return search;
    }
  }
}
