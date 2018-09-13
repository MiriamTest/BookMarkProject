using Entities;
using System;
using System.Collections.Generic;
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
        public static bool addNewBook(Books newBook)
        {    
            try
            {

                Connect.db.Books.Add(Convertors.BookConvert.BookToModel(newBook));
                Connect.db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public static BooksInLibrary[] searchBook(Model.SearchObj searchObj)
        {
            return null;
         

        }
       
    }
}
