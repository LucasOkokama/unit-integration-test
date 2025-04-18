using FluentAssertions;
using xunit_evertonoliveira;

namespace UnitTests
{
    public class CustomerAgeValidatorTests
    {
        [Fact]
        public void Given_BirthDate_When_IsNotOfLegalAge_Then_ShouldReturnFalse()
        {
            var birthDate = DateTime.Now;
            var customerAgeValidator = new CustomerAgeValidator();

            var ofLegalAge = customerAgeValidator.IsOfLegalAge(birthDate);

            ofLegalAge.Should().BeFalse();
        }

        [Fact]
        public void Given_BirthDate_When_IsOfLegalAge_Then_ShouldReturnFalse()
        {
            var birthDate = DateTime.Now.AddYears(-20);
            var customerAgeValidator = new CustomerAgeValidator();

            var ofLegalAge = customerAgeValidator.IsOfLegalAge(birthDate);

            ofLegalAge.Should().BeTrue();
        }
    }
}
