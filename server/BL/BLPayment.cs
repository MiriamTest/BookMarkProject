using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static  class BLPayment
    {
        public static bool addLibraryPayment(Librariespayments payment)
        {
            return DalPayment.addLibraryPayment(payment);
        }
    }
}
