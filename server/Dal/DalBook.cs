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
    public static BooksInLibrary[] getAllCatchBooks()
    {
      return Connect.db.BooksInLibrary.Where(p => p.IdStatus == 3).ToArray();
    }
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

    }

  }

}
