using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal.Convertors
{
    class LibraryConvert
    {
        public static Libraries LibraryToModel(Libraries l)
        {
             Libraries lib = new Libraries()
            {

                NameLibrary = l.NameLibrary,
                City = l.City,
                Street = l.Street,
                NumHouse = l.NumHouse,
                GeoLocationX = 234,
                GeoLocationY = 899,
                IdAdmin = l.IdAdmin

            };
            return lib;


        }
       
    }
}
