using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal
{
    public static class  DalUser
    {
        public static bool addUser(Users newUser)
        {


            try
            {

                Connect.db.Users.Add(Convertors.UserConvert.UserToModel(newUser));
                Connect.db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        }
        public static Users login(string mail, string password)
        {
           return Connect.db.Users.FirstOrDefault(p => p.EMail == mail && p.Password == password);
        }
    }
}
				

