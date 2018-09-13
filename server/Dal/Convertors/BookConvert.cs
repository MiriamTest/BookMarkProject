using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
namespace Dal.Convertors
{
    class BookConvert
    {
        public static Books BookToModel(Books BookEntity)
        {
            return new Books()
            {
                NameBook=BookEntity.NameBook,
                IdAuthor=BookEntity.IdAuthor,
                category=BookEntity.category,
                Description=BookEntity.Description,
                Img=BookEntity.Img
            };

        }
    }
}
