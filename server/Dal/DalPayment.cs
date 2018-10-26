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
       
        public static Payments addPayment(Payments newPayment)
        {    
            try
            {

             var payment=   Connect.db.Payments.Add(Convertors.PaymentConvert.PaymentToModel(newPayment));
                Connect.db.SaveChanges();
                return payment;
            }
            catch (IOException e)
            {
                return null;
            }
        }
   


  }

}
