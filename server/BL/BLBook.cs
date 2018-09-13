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
        public static bool addNewBook(Books newBook)
        {
            return DalBook.addNewBook(newBook);
        }
        public static BooksInLibrary[] searchBook(Dal.Model.SearchObj searchObj )
        {

            return DalBook.searchBook(searchObj);




        }
        public static StatusLending getStatus(int id)
        {
            return DalBook.getStatus(id);
        }
    }
}
