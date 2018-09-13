using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace Dal.Convertors
{
    class UserConvert
    {
        public static Users UserToModel(Users UserEntity)
        {
            return new Users()
            {
                Tz = UserEntity.Tz,
                FirstName = UserEntity.FirstName,
                LastName = UserEntity.LastName,
                EMail = UserEntity.EMail,
                Password = UserEntity.Password,
                IsAdmin = UserEntity.IsAdmin,
                PhoneNumber = UserEntity.PhoneNumber,
                IdAppliance = UserEntity.IdAppliance
            };

        }

    }
}

