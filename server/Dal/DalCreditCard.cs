using Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public static class DalCreditCard
  {
       
        public static CreditCards addCreditCard(CreditCards newCreditCard)
        {    
            try
            {

             var creditCard =   Connect.db.CreditCards.Add(Convertors.CreditCardConvert.CreditCardToModel(newCreditCard));
                Connect.db.SaveChanges();
                return creditCard;
            }
            catch (IOException e)
            {
                return null;
            }
        }

 

    public static bool deleteCreditCard(int idCreditCard)
    {
      try
      {
CreditCards creditCards = Connect.db.CreditCards.FirstOrDefault(l => l.IdCreditCard == idCreditCard);
      Connect.db.CreditCards.Remove(creditCards);

        Connect.db.SaveChanges();
      return true;
      }
      catch(IOException e)
      {
        return false;
      }
    }
  }

}
