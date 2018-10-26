using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal.Convertors
{
    class CreditCardConvert
  {
        public static CreditCards CreditCardToModel(CreditCards CreditCardEntity)
        {
            return new CreditCards()
            {
              CardNumber = CreditCardEntity.CardNumber,
              ExpiryDate = CreditCardEntity.ExpiryDate,
              IdUser = CreditCardEntity.IdUser,
              TzOwner = CreditCardEntity.TzOwner,
              CVV = CreditCardEntity.CVV

            };

        }
    }
}
