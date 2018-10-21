using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static class  BLUser
    {
        public static bool addUsers(Users user)
        {
            return DalUser.addUser(user);
        }
        public static Users login(string mail, string password)
        {
            return DalUser.login(mail, password);
        }
    public static Users getUser(int idUser)
    {
      return DalUser.getUser(idUser);
    }
    

  }
}
