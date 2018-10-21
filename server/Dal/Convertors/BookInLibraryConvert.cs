using System;
using Entities;

namespace Dal.Convertors
{
  internal class BookInLibraryConvert
  {
    internal static BooksInLibrary BookInLibraryToModel(BooksInLibrary newBook)
    {
      return new BooksInLibrary()
      {

        IdBook = newBook.IdBook,
        IdLibrary = newBook.IdLibrary,
        LendingDuration = newBook.LendingDuration,
        IdStatus = newBook.IdStatus
   
      };
    }
  }
}
