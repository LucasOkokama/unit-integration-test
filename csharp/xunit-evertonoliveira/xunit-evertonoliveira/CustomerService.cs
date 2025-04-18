using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xunit_evertonoliveira
{
    public class CustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly ICustomerAgeValidator _customerAgeValidator;

        public CustomerService(ICustomerRepository customerRepository, ICustomerAgeValidator customerAgeValidator)
        {
            _customerRepository = customerRepository;
            _customerAgeValidator = customerAgeValidator;
        }

        public void AddCustomer(CustomerEntity customer)
        {
            if (!_customerAgeValidator.IsOfLegalAge(customer.BirthDate))
            {
                throw new ArgumentException($"Cliente {customer.Name} não pode ser adicionado pois é menor de idade :/");
            }

            _customerRepository.AddCustomer(customer);
        }

        public List<CustomerEntity> GetAllCustomers()
        {
            return _customerRepository.GetAllCustomers();
        }
    }
}
