using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static class BLPayment
  {
    public static Payments addPayment(Payments payment)
    {
      payment.Date = DateTime.Now;
      payment.StartDate = DateTime.Now;
      Users u = Connect.db.Users.FirstOrDefault(us => us.IdUser == payment.IdUser);
      if (u.Status == 1)//if manager
      {
        payment.Type = 0;
        payment.EndDate = null;
        // payment.EndDate = DateTime.Now.AddDays(Convert.ToDouble(365));//to change it to the data from new table Payment Types

      }
      else if (payment.Type == 1)
      {
        payment.EndDate = DateTime.Now.AddDays(Convert.ToDouble(365)); //to change it to the data from new table Payment Types
      }
      else if (payment.Type ==2)
      {
        payment.EndDate = DateTime.Now.AddDays(Convert.ToDouble(30)); //to change it to the data from new table Payment Types
      }
      else
      {
        payment.EndDate = null;
      }
      return DalPayment.addPayment(payment);
    }
    public static bool deletePayment(int idPayment)
    {
      return DalPayment.deletePayment(idPayment);
    }

    public static bool checkPayment(int idUser)
    {

      Payments[] p = DalPayment.checkPayment(idUser);
      if (p != null)
      {
        foreach (var Payment in p)
        {
          if (Payment.EndDate != null && Payment.EndDate > DateTime.Now)
            return true;
        }
      }

      return false;
    }
  }
}
