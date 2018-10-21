using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace Dal.Convertors
{
  class LendingConvert
  {
    public static Lendings LendingToModel(Lendings LendingEntity)
    {
      return new Lendings()
      {
        IdLending = LendingEntity.IdLending,
        IdUser = LendingEntity.IdUser,
        IdBook = LendingEntity.IdBook,
        StartDate = LendingEntity.StartDate,
        EndDate = LendingEntity.EndDate
      };

    }

  }
}

