using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
<<<<<<< HEAD

  public static class BLPayment
  {
    public static Payments addPayment(Payments payment)

=======
  public static  class BLPayment
    {
    public static bool addPayment(Payments payment)
>>>>>>> parent of 4486ca7... Merge branch 'master' of https://github.com/MiriamTest/BookMarkProject
    {
      payment.Date = DateTime.Now;
      payment.StartDate = DateTime.Now;
      if (payment.Type == 1)
        payment.EndDate = DateTime.Now.AddDays(Convert.ToDouble(30));//to change it to the data from new table Payment Types
      else if (payment.Type == 2)
        payment.EndDate = DateTime.Now.AddDays(Convert.ToDouble(365));//to change it to the data from new table Payment Types
      else
        payment.EndDate = null;
      return DalPayment.addPayment(payment);
    }
    public static bool deletePayment(int idPayment)
    {
      return DalPayment.deletePayment(idPayment);
    }
  }
}
