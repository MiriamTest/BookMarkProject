using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public static class DalPayment
    {
       
        public static bool addPayment(Payments newPayment)
        {    
            try
            {

             var payment=   Connect.db.Payments.Add(Convertors.PaymentConvert.PaymentToModel(newPayment));
                Connect.db.SaveChanges();
                return true;
            }
            catch (IOException e)
            {
                return false;
            }
        }
    public static bool deletePayment(int idPayment)
    {
      try
      {
        Payments payment = Connect.db.Payments.FirstOrDefault(l => l.IdPayment == idPayment);
        Connect.db.Payments.Remove(payment);

        Connect.db.SaveChanges();
        return true;
      }
      catch (IOException e)
      {
        return false;
      }
    }



  }

}
