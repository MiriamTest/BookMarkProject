using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal.Convertors
{
  class SecrateryInLibraryConvert
  {
    public static SecretaryInLibrary secrateryToLibrary(int idLibrary, int idSecratery)
    {
      SecretaryInLibrary secInLib = new SecretaryInLibrary()
      {

        IdLibrary = idLibrary,
        IdSecretary= idSecratery,
      };
      return secInLib;


    }
  }
}
