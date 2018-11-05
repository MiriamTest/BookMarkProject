using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;



namespace BL
{
  public static class BLBook
  {
    public static Books[] allBooks()
    {
      return DalBook.allBooks();
    }
    public static Categories[] allCategories()
    {
      return DalBook.allCategories();
    }
    public static Books getBook(BooksInLibrary[] id)
    {
      return DalBook.getBook(id);
    }
    public static Books addNewBook(Books newBook)
    {
      return DalBook.addNewBook(newBook);
    }
    public static bool addBook(BooksInLibrary newBook)
    {
      newBook.IdStatus = 2;
      return DalBook.addBook(newBook);
    }
    public static BooksInLibrary[] searchBook(Dal.Model.SearchObj searchObj)
    {
<<<<<<< HEAD

      return DalBook.searchBook(searchObj);
=======

      return DalBook.searchBook(searchObj);




>>>>>>> 6be3c5a6e78d693b154a47589c358a740004e3e6
    }
    public static StatusLending getStatus(int id)
    {
      return DalBook.getStatus(id);
    }
    public static BooksInLibrary getBook(int bookId)
    {
      return DalBook.getBook(bookId);
    }
    public static Books getBookObj(int bookId)
    {
      return DalBook.getBookObj(bookId);
    }
    public static bool deleteBook(int bookId)
    {
      return DalBook.deleteBook(bookId);
    }
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 6be3c5a6e78d693b154a47589c358a740004e3e6
    public static Object getSearchObj()
    {
      return DalBook.getSearchObj();
    }
    public static StatusLending[] allStatuses()
    {
      return DalBook.allStatuses();
<<<<<<< HEAD

=======
        
>>>>>>> 6be3c5a6e78d693b154a47589c358a740004e3e6
    }
    public static bool editBook(BooksInLibrary book)
    {
      return DalBook.editBook(book);
<<<<<<< HEAD

    }

    public static BooksInLibrary getSpesificBook(int IdBookInLibrary)
    {
      return DalBook.getSpesificBook(IdBookInLibrary);
    }
=======
    }
=======
   
>>>>>>> 9da0ddb7cd1774f8683283bb539ca529211fd1c9
>>>>>>> 6be3c5a6e78d693b154a47589c358a740004e3e6
  }
}
