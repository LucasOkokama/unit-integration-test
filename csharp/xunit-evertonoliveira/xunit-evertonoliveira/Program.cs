namespace xunit_evertonoliveira
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                CustomerEntity maria = new("Maria", DateTime.Now.AddYears(-20));
                CustomerEntity joao = new("João", DateTime.Now.AddYears(-19));
                CustomerEntity pedro = new("Pedro", DateTime.Now.AddYears(-17));

                ICustomerRepository customerRepository = new CustomerRepository();
                ICustomerAgeValidator customerAgeValidator = new CustomerAgeValidator();

                CustomerService customerUseCase = new(customerRepository, customerAgeValidator);

                customerUseCase.AddCustomer(maria);
                customerUseCase.AddCustomer(joao);

                List<CustomerEntity> customers = customerUseCase.GetAllCustomers();

                customers.ForEach(c => Console.WriteLine($"Cliente {c.Name} adicionado(a) com sucesso :)"));

                customerUseCase.AddCustomer(pedro);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
