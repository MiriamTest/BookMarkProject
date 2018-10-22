using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal.Convertors
{
    class PaymentConvert
    {
        public static Payments PaymentToModel(Payments CreditCardEntity)
        {
            return new Payments()
            {
              CreditCards = CreditCardEntity.CreditCards,
              Date = CreditCardEntity.Date,
              EndDate = CreditCardEntity.EndDate,
              StartDate = CreditCardEntity.StartDate,
              IdCreditCard = CreditCardEntity.IdCreditCard,
              IdUser = CreditCardEntity.IdUser

            };

        }
    }
}
