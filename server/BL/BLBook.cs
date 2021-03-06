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

      return DalBook.searchBook(searchObj);
<<<<<<< HEAD
=======




>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
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

>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
    public static Object getSearchObj()
    {
      return DalBook.getSearchObj();
    }
    public static StatusLending[] allStatuses()
    {
      return DalBook.allStatuses();
<<<<<<< HEAD
=======
        
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
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
    
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
  }
  
}
