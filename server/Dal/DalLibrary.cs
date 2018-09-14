using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using System.IO;

namespace Dal
{
    public static class DalLibrary
    {
        public static bool addLibrary(Libraries library)
        {
            

            try
            {

                Connect.db.Libraries.Add(Convertors.LibraryConvert.LibraryToModel(library));
                Connect.db.SaveChanges();
                return true;
            }
            catch(IOException e)
            {

                return false;
            }
        }
        public static Cities[] allCities()
        {
            return Connect.db.Cities.ToArray();
        }
        public static Streets[] allStreets()
        {
            return Connect.db.Streets.ToArray();
        }
        public static Libraries getLibrary(int id)
        {
            var i= Connect.db.Libraries.FirstOrDefault(l => l.IdLibrary == id);
            return i;
        }
        public static Libraries[] allLibraries()
        {
            return Connect.db.Libraries.ToArray();
        }
    }
}

