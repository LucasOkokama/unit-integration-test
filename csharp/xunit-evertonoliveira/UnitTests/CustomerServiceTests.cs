using FluentAssertions;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using xunit_evertonoliveira;

namespace UnitTests
{
    public class CustomerServiceTests
    {
        private readonly Mock<ICustomerRepository> _customerRepositoryMock;
        private readonly Mock<ICustomerAgeValidator> _customerAgeValidadorMock;

        public CustomerServiceTests()
        {
            _customerRepositoryMock = new Mock<ICustomerRepository>();
            _customerAgeValidadorMock = new Mock<ICustomerAgeValidator>();
        }

        [Fact]
        public void Given_Customer_When_IsNotOfLegalAge_Then_ShouldThrowException()
        {
            var customer = new CustomerEntity("Maria", DateTime.Now);
            var customerService = new CustomerService(_customerRepositoryMock.Object, _customerAgeValidadorMock.Object);

            _customerAgeValidadorMock.Setup(v => v.IsOfLegalAge(customer.BirthDate)).Returns(false);

            Action action = () => customerService.AddCustomer(customer);

            action.Should().Throw<ArgumentException>();
            _customerRepositoryMock.Verify(r => r.AddCustomer(customer), Times.Never);
        }

        [Fact]
        public void Given_Customer_When_IsOfLegalAge_Then_ShouldAddCustomer()
        {
            var customer = new CustomerEntity("Maria", DateTime.Now);
            var customerService = new CustomerService(_customerRepositoryMock.Object, _customerAgeValidadorMock.Object);

            _customerAgeValidadorMock.Setup(v => v.IsOfLegalAge(customer.BirthDate)).Returns(true);

            customerService.AddCustomer(customer);
            _customerRepositoryMock.Verify(r => r.AddCustomer(customer), Times.Once);
        }


        [Fact]
        public void Given_Customer_When_IsOfLegalAge_Then_ShouldReturnListOfCustomers()
        {
            var customer = new CustomerEntity("Maria", DateTime.Now);
            var customersList = new List<CustomerEntity>();
            var customerService = new CustomerService(_customerRepositoryMock.Object, _customerAgeValidadorMock.Object);

            _customerAgeValidadorMock.Setup(v => v.IsOfLegalAge(customer.BirthDate)).Returns(true);
            _customerRepositoryMock.Setup(r => r.AddCustomer(customer)).Callback(() => customersList.Add(customer));
            _customerRepositoryMock.Setup(r => r.GetAllCustomers()).Returns(customersList);

            customerService.AddCustomer(customer);

            var listOfCustomers = customerService.GetAllCustomers();
            listOfCustomers.Count().Should().Be(1);
            _customerRepositoryMock.Verify(r => r.GetAllCustomers(), Times.Once);
        }

    }
}
