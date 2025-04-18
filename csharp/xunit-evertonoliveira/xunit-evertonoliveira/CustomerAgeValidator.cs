using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xunit_evertonoliveira
{
    public class CustomerAgeValidator : ICustomerAgeValidator
    {
        private const int eighteenYearsInDays = 6570;

        public bool IsOfLegalAge(DateTime birthDate)
        {
            return (DateTime.Now.Date - birthDate.Date).Days > eighteenYearsInDays;
        }
    }
}
