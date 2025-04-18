using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xunit_evertonoliveira
{
    public interface ICustomerAgeValidator
    {
        bool IsOfLegalAge(DateTime birthDate);
    }
}
