using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal
{
    public static class DalAuthor
    {
        public static Authors[] allAuthors()
        {
            return Connect.db.Authors.ToArray();
        }
    }
}



