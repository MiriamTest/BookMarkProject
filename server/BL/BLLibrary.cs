using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using Dal;
namespace BL
{
  public static  class BLLibrary
    {
        public static bool addLibrary(Libraries library)
        {
            return DalLibrary.addLibrary(library);
        }
        public static Cities[] allCities()
        {
            return DalLibrary.allCities();
        }
        public static Streets[] allStreets()
        {
            return DalLibrary.allStreets();
        }
        public static Libraries getLibrary(int id)
        {
            return DalLibrary.getLibrary(id);
        }
        public static Libraries[] allLibraries()
        {
            return DalLibrary.allLibraries();
        }
    }
}
