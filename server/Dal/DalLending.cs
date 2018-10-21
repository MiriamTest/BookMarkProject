using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using System.IO;

namespace Dal
{
  public static class DalLending
  {
    public static Lendings addLending(Lendings newLending)
    {


      try
      {

       Lendings lendings=Connect.db.Lendings.Add(Convertors.LendingConvert.LendingToModel(newLending));
        Connect.db.SaveChanges();
        return lendings;
      }
      catch (IOException e)
      {

        return null;
      }
    }
    public static bool deleteLending(int id)
    {


      try
      {

        Lendings lendingObj = Connect.db.Lendings.FirstOrDefault(l => l.IdLending == id);
        Connect.db.Lendings.Attach(lendingObj);
        Connect.db.Lendings.Remove(lendingObj);
        Connect.db.SaveChanges();
        return true;
      }
      catch (IOException e)
      {

        return false;
      }
    }
    //public static Users login(string mail, string password)
    //{
    //  return Connect.db.Users.FirstOrDefault(p => p.EMail == mail && p.Password == password);
    //}
    //public static Users getLendind(int idUser)
    //{
    //  return Connect.db.Users.FirstOrDefault(p => p.IdUser == idUser);
    //}
    public static Lendings checkLending(int code)
    {
     return  Connect.db.Lendings.FirstOrDefault(l => l.IdLending==code);
      
    }
    public static BooksInLibrary lendingBook(int book)
    {
      return Connect.db.BooksInLibrary.FirstOrDefault(b => b.IdBookInLibrary == book);
    }
  }


}


