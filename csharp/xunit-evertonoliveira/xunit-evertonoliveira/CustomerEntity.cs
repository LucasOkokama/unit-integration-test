using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xunit_evertonoliveira
{
    public class CustomerEntity
    {
        public CustomerEntity(string name, DateTime birthDate)
        {
            Name = name;
            BirthDate = birthDate;
        }

        public string Name { get; private set; }
        public DateTime BirthDate { get; private set; }
    }
}
