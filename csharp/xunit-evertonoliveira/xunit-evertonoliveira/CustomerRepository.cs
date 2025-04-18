using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xunit_evertonoliveira
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly List<CustomerEntity> _customers = new();

        public void AddCustomer(CustomerEntity customer)
        {
            _customers.Add(customer);
        }

        public List<CustomerEntity> GetAllCustomers()
        {
            return _customers;
        }
    }
}
