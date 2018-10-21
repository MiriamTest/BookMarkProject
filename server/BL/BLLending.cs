using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static class BLLending
  {

    public static bool addLending(Lendings lending)
    {
      BooksInLibrary book = BLBook.getBook(lending.IdBook);//gettin book according to bookId
      Users user = BLUser.getUser(lending.IdUser);//gettin user according to userId
      lending.StartDate = DateTime.Now;//setting the lend date for today
      lending.EndDate = lending.StartDate.AddDays(Convert.ToDouble(book.LendingDuration));
      //setting the lend expiration date for today plus the borrowing time
      Lendings newLending = DalLending.addLending(lending);//add new lending
      if (newLending != null)
      {
        if (changeBookStatuse(lending.IdBook, 3)) //3 means catch-statusLending table(1-borrowed,2-free,3-catch)
        {
          Books bookObj = BLBook.getBookObj(book.IdBook);
          string mailSubject = "lending book";
          if (BLSendinMail.SendingEmail(buildMailBodyForLending(lending, user.FirstName, bookObj.NameBook), mailSubject, user.EMail))//sending mail
          {
            return true;

          }
          else
          {
            DalLending.deleteLending(newLending.IdLending);//if can't send email deleting the lending from the DB
            return false;
          }
        }
        else
        {
          DalLending.deleteLending(newLending.IdLending);//if can't change the status of the book(to catch) deleting the lending from the DB
          return false;
        }
      }
      else
      {
        return false;//if can't create the new lending deleting the lending from the DB
      }
    }
    public static bool changeBookStatuse(int idBook, int idStatus)
    {
      return DalBook.changeStatus(idBook, idStatus);

    }
    //public static Users login(string mail, string password)
    //{
    //  return DalUser.login(mail, password);
    //}
    //public static Users getUser(int idUser)
    //{
    //  return DalUser.getUser(idUser);


    public static string buildMailBodyForLending(Lendings lending, string userName, string bookName)
    {

      Libraries library = BL.BLLibrary.getLibraryAccordingToBook(lending.IdBook);//gettin library according to bookId
      StringBuilder str = new StringBuilder();
      str.Append("<div><b>שלום " + userName + "</b>").Append(Environment.NewLine);
      str.Append("<p>תודה שהשתמשת בשרותי Bookmark  </p>").Append(Environment.NewLine);
      str.Append("<p> מקוים שנהנית </p> ").Append(Environment.NewLine);
      str.Append("<p>הספר <b>" + bookName + "</b></p>").Append(Environment.NewLine);
      str.Append("מחכה לך בספריה <b>" + library.NameLibrary + "</b></p>").Append(Environment.NewLine);
      str.Append("<p>קוד השאלה:</p>").Append(Environment.NewLine);
      str.Append("<h3 style='color:red'>" + lending.IdLending + "</h3>").Append(Environment.NewLine);
      str.Append("<p>נשמח לעמוד לשרותכם תמיד</p></div>").Append(Environment.NewLine);
      return str.ToString();
    }


    //   string mailBody = "<div><b>" + user.FirstName + "שלום</b>" +
    //"<p>Bookmark תודה שהשתמשת בשרותי </p>" +
    //"<p>מקוים שנהנית</p>" +
    //"<p>" + book.NameBook + "הספר" +
    //"" + library.NameLibrary + "מחכה לך בספריה" +
    //"<p>:קוד השאלה</p>" +
    //"<h3>" + lending.IdLending + "</h3>" +
    //"<p>נשמח לעמוד לשרותכם תמיד</p></div>";

    public static Books checkLending(int code)
    {

      Lendings lending = DalLending.checkLending(code);

      BooksInLibrary book = DalLending.lendingBook(lending.IdBook);
      return DalBook.getBookObj(book.IdBook);
    }
    public static Boolean changeToBorrowed(int code, int status)
    {
      Lendings lending = DalLending.checkLending(code);


      return DalBook.changeStatus(lending.IdBook, status);
    }
    public static Boolean changeToFree(int code)
    {
      Lendings lending = DalLending.checkLending(code);
      return DalBook.changeStatus(lending.IdBook, 2);


    }
    public static string checkDaysForLending(int code)
    {
    //  Lendings lending = DalLending.checkLending(code);
    //  var dayNow = DateTime.Now;
    //  var dayStart = lending.StartDate;
    //  int days = dayNow.Day-dayStart.Day;
    //  //int d = int.Parse(days.ToString());
    //  if (days > 2)
    //    return "לא ניתן לבצע השאלה";
    return null;
    }
    public static int checkDaysForFree(int code)
    {
      Lendings lending = DalLending.checkLending(code);
      var dayNow = DateTime.Now;
      var dateEnd = lending.EndDate;
      if (dayNow.Day - dateEnd.Day > 0)
        return dayNow.Day - dateEnd.Day;
      else return 0;
    }
    public static int checkStatus(int code)
    {
         Lendings lending = DalLending.checkLending(code);
      BooksInLibrary book = DalLending.lendingBook(lending.IdBook);
        if (book.IdStatus == 2)
      {
        return -1;

      }
      else if (book.IdStatus == 1)
        return checkDaysForFree(code);
      else return 0;

    }
    public static Boolean changeStatus(int code)
    {
      int status;
      Lendings lending = DalLending.checkLending(code);
      BooksInLibrary book = DalLending.lendingBook(lending.IdBook);
      if (book.IdStatus == 3)
        status = 1;
      else
        status = 2;
      return DalBook.changeStatus(lending.IdBook, status);
    }

  }
}

