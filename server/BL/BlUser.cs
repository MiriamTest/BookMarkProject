using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static class BLUser
  {
    public static Users addUsers(Users user)
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

    public static object checkForResetPassword(string mail)
    {
      Users user = DalUser.login(mail, null);
      if (user != null)
      {


        string mailSubject = "Bookmark-reset password";
        if (BLSendinMail.SendingEmail(buildMailBodyForResetPassword(user), mailSubject, mail))//sending mail

        {
          return true;

        }
        else
        {
          return false;
        }
      }
      return false;
    }

    private static string buildMailBodyForResetPassword(Users user)
    {
      StringBuilder str = new StringBuilder();
      str.Append("<div><b>שלום " + user.FirstName + "</b>").Append(Environment.NewLine);
      str.Append("<p>תודה שהשתמשת בשרותי Bookmark  </p>").Append(Environment.NewLine);
      str.Append("<p> לחץ על לינק זה לבחירת סיסמא חדשה </p> ").Append(Environment.NewLine);
      str.Append("<a href='http://localhost:5200/managment/resetPassword/" + user.IdUser + "'>בחירת סיסמא חדשה</a>").Append(Environment.NewLine);
      str.Append("<p>נשמח לעמוד לשרותכם תמיד</p></div>").Append(Environment.NewLine);
      str.Append("<img height = '92px' src=' / images / branding / googlelogo / 2x / googlelogo_color_272x92dp.png' width='272px'  alt='Bookmark' title='Bookmark' />").Append(Environment.NewLine);
      return str.ToString();
    }

    public static bool resetPassword(int idUser, string password)
    {
      return DalUser.resetPassword(idUser, password);
    }

    public static bool checkEMail(string email)
    {
      return DalUser.checkEMail(email);
    }
  }
}
