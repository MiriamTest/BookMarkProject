//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;
//using System.Web.Mvc;
//using Entities;
//using BL;
//using System.Web.Http;
//using System.Net.Mail;
//using System.Net;

//namespace API.Controllers
//{
//  public class MailController : ApiController
//  {
//    [System.Web.Http.Route("api/Mail/SendEmail/{bookId}/{idUser}")]
//    [System.Web.Http.HttpGet]
//    public void SendEmail(int bookId, int idUser)
//    {
//      Books b = BLBook.getBook(bookId);//שליפת הספר
//      Users u = BlUser.getUser(idUser);//שליפת המשתמש
//      try
//      {
//        MailMessage mail = new MailMessage();
//        SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

//        mail.From = new MailAddress("libbookmark@gmail.com");
//        mail.To.Add(u.EMail);
//        mail.Subject = "lending book";
//        mail.IsBodyHtml = true;
//        string pathe = "http://localhost:4200/yourgift/";
//        mail.Body = "<div>This is for testing <b>Rivka</b> mail from GMAIL</div>" + b.NameBook + " <a href=" + pathe + ">לחץ כאן</a><br/><p>" + b.IdBook + "</p>";

//        SmtpServer.UseDefaultCredentials = true;
//        SmtpServer.Port = 587;
//        SmtpServer.Credentials = new NetworkCredential("libbookmark @gmail.com", "0533121776");
//        SmtpServer.EnableSsl = true;

//        SmtpServer.Send(mail);
//      }
//      catch (Exception ex)
//      {
//        var a = 3;
//      }

//    }

//  }
//}
