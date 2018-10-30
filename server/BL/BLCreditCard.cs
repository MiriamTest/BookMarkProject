using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static  class BLCreditCard
  {
    public static CreditCards addCreditCard(CreditCards newCreditCard)
    {
      return DalCreditCard.addCreditCard(newCreditCard);
    }

    public static bool deleteCreditCard(int idCreditCard)
    {
      return DalCreditCard.deleteCreditCard(idCreditCard);
    }

    
  }
}
