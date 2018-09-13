using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal
{
    public static class DalCategory
    { 
        public static Categories[] allCategories()
        {
            return Connect.db.Categories.ToArray();
        }
    }
}



