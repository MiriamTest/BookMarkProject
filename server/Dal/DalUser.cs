using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using System.IO;

namespace Dal
{
    public static class  DalUser
    {
        public static bool addUser(Users newUser)
        {


            try
            {

       var i= Connect.db.Users.Add(Convertors.UserConvert.UserToModel(newUser));
        Connect.db.SaveChanges();
        return true;
      }
      catch (IOException e)
      {

                return false;
            }
        }

   

    public static Users login(string mail, string password)
        {
      if(password==null)
      {
       return Connect.db.Users.FirstOrDefault(p => p.EMail == mail);
      }
      else { 
      var i= Connect.db.Users.FirstOrDefault(p => p.EMail == mail && p.Password == password);
      return i;
      } 

    }
    public static Users getUser(int idUser)
    {
      return Connect.db.Users.FirstOrDefault(p => p.IdUser == idUser);
    }

    public static bool resetPassword(int idUser, string password)
    {
      Users user= Connect.db.Users.FirstOrDefault(p => p.IdUser == idUser);
      if (user != null)
      {
        try
        {
          user.Password = password;
          Connect.db.SaveChanges();
          return true;
        }
        catch (IOException e)
        {
          throw e;
        }
      }
      return false;
    }

    public static bool checkEMail(string email)
    {
      if (Connect.db.Users.FirstOrDefault(u => u.EMail == email)!=null)
        return false;
      return true;
    }
  }
}
				

