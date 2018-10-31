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
        public static Users addUser(Users newUser)
        {


            try
            {

       var i= Connect.db.Users.Add(Convertors.UserConvert.UserToModel(newUser));
        Connect.db.SaveChanges();
        return i;
      }
      catch (IOException e)
      {

                return null;
            }
        }
        public static Users login(string mail, string password)
        {
      var i= Connect.db.Users.FirstOrDefault(p => p.EMail == mail && p.Password == password);
      return i;  

    }
    public static Users getUser(int idUser)
    {
      return Connect.db.Users.FirstOrDefault(p => p.IdUser == idUser);
    }
  }
}
				

