using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public static class DalBook
    {
       public static Entities.Books[] allBooks()
        {
            return Connect.db.Books.ToArray();
        }
        public static Categories[] allCategories()
        {
            return Connect.db.Categories.ToArray();
        }
        public static StatusLending getStatus(int id)
        {
            return Connect.db.StatusLending.FirstOrDefault(s => s.IdStatus == id);
        }
        public static Books getBook(BooksInLibrary[] id)
        {
            //return Connect.db.Books.FirstOrDefault(b => b.IdBook == id);
            return null;
        }
        public static Books addNewBook(Books newBook)
        {    
            try
            {

             var book=   Connect.db.Books.Add(Convertors.BookConvert.BookToModel(newBook));
                Connect.db.SaveChanges();
                return book;
            }
            catch (IOException e)
            {
                return null;
            }
        }
    public static bool addBook(BooksInLibrary newBook)
    {
      try
      {

        Connect.db.BooksInLibrary.Add(Convertors.BookInLibraryConvert.BookInLibraryToModel(newBook));
        Connect.db.SaveChanges();
        return true;
      }
      catch (IOException e)
      {
        return false;
      }
    }
    public static BooksInLibrary[] searchBook(Model.SearchObj searchObj)
        {
            return null;
         

    }
    public static BooksInLibrary getBook(int bookId)
    {
      return Connect.db.BooksInLibrary.FirstOrDefault(s => s.IdBook == bookId);
    }

    public static Books getBookObj(int bookId)
    {
      Books b= Connect.db.Books.FirstOrDefault(s => s.IdBook == bookId);
      return b;
    }
    public static bool changeStatus(int idBook,int idStatus)
    {
      BooksInLibrary book = Connect.db.BooksInLibrary.FirstOrDefault(b =>b.IdBookInLibrary==idBook);//retrieval the book according the Id
      if (book!=null)
      {
        try
        {
          book.IdStatus = idStatus;
          Connect.db.SaveChanges();
          return true;
        }
        catch (IOException e)
        {
          return false;
        }
      }
      return false;
    }
<<<<<<< HEAD
    public static BooksInLibrary[] getAllCatchBooks()
    {
      return Connect.db.BooksInLibrary.Where(p => p.IdStatus == 3).ToArray();
=======
    public static bool deleteBook(int bookId)
    {
      BooksInLibrary book = Connect.db.BooksInLibrary.FirstOrDefault(b => b.IdBook == bookId);
      if(book!=null)
      {
        Connect.db.BooksInLibrary.Remove(book);
        Connect.db.SaveChanges();
        return true;
      }
      return false;

>>>>>>> 6012c53d9db648d1d593df3988ee42f688200f22
    }
    public static Object getSearchObj()
    {
      //Model.SearchObj[] obj = new Model.SearchObj[] { };
      //obj[0]  = new Model.SearchObj();
      var search = (from booksInLibrary in Connect.db.BooksInLibrary.ToList()
                    join books in Connect.db.Books.ToList()
                on booksInLibrary.IdBook equals books.IdBook
                    join libraries in Connect.db.Libraries.ToList()
                    on booksInLibrary.IdLibrary equals libraries.IdLibrary
                    join statusess in Connect.db.StatusLending.ToList()
                    on booksInLibrary.IdStatus equals statusess.IdStatus
                    join cities in Connect.db.Cities.ToList()
                    on libraries.City equals cities.IdCity
                    join regions in Connect.db.Regions.ToList()
                    on cities.IdRegion equals regions.IdRegion
                    join categories in Connect.db.Categories.ToList()
                    on books.category equals categories.IdCategory
                    select new
                    {
                      bookID = books.IdBook,
                      bookName = books.NameBook,
                      library = libraries.NameLibrary,
                      city = cities.NameCity,
                      status = statusess.Status,
                      ares = regions.NameRegion,
                      category = categories.Category
                    }).AsQueryable();
      List<Object> dynamicList = new List<Object>();
      dynamicList.Add(search);

      return search;
    }
    public static StatusLending[] allStatuses()
    {
      return Connect.db.StatusLending.ToArray();
    }
    public static bool editBook(BooksInLibrary book)
    {
      try
      {
       BooksInLibrary b=  Connect.db.BooksInLibrary.FirstOrDefault(bl => bl.IdBookInLibrary == book.IdBookInLibrary);
        if(b!=null)
        { 
        b.IdBook = book.IdBook;
        b.IdLibrary = book.IdLibrary;
        b.LendingDuration = book.LendingDuration;
        b.StatusLending = book.StatusLending;
        Connect.db.SaveChanges();
        return true;
        }
        return false;
      }
      catch(IOException e)
      {
        return false;
      }
    }
    public static Object getEditBook()
    {
      //Model.SearchObj[] obj = new Model.SearchObj[] { };
      //obj[0]  = new Model.SearchObj();
      var search = (from booksInLibrary in Connect.db.BooksInLibrary.ToList()
                    join books in Connect.db.Books.ToList()
                on booksInLibrary.IdBook equals books.IdBook
                    join statusess in Connect.db.StatusLending.ToList()
                    on booksInLibrary.IdStatus equals statusess.IdStatus
                  
                    join categories in Connect.db.Categories.ToList()
                    on books.category equals categories.IdCategory
                    select new
                    {
                      bookID = books.IdBook,
                      bookName = books.NameBook,
                      LendingDuration = booksInLibrary.LendingDuration,
                      status = statusess.Status,
                  
                    }).AsQueryable();
      List<Object> dynamicList = new List<Object>();
      dynamicList.Add(search);

      return search;
    }
  }

}
