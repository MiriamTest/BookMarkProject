using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
using System.Net.Mail;
using System.Net;

namespace BL
{
  public static class BLSendinMail
  {
    public static bool SendingEmail(string mailBody,string mailSubject,string address)
    {
     
      
      try
      {
        MailMessage mail = new MailMessage();
        SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
        mail.From = new MailAddress("libbookmark@gmail.com");
        mail.To.Add(address);
        mail.Subject = mailSubject;
        mail.IsBodyHtml = true;
        mail.Body = mailBody;
        SmtpServer.UseDefaultCredentials = true;
        SmtpServer.Port = 587;
        SmtpServer.Credentials = new NetworkCredential("libbookmark@gmail.com", "bookLib123");
        SmtpServer.EnableSsl = true;

        SmtpServer.Send(mail);
        return true;
      }
      catch (Exception ex)
      {

        return false;
      }

    }
  }
}
