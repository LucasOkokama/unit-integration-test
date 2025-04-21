using Bogus;
using FluentAssertions;
using FudamentosTestes.Entities;
using Xunit.Abstractions;

namespace FudamentosTestes.Tests.Entities
{
    public sealed class CarTests
    {
        private readonly Faker _faker = new("pt_BR");
        private readonly ITestOutputHelper _testOutputHelper;

        public CarTests(ITestOutputHelper testOutputHelper)
        {
            _testOutputHelper = testOutputHelper;
        }

        [Fact]
        public void Constructor_GivenAllParameters_ThenShouldSetThePropertiesCorrectly()
        {
            var expectedId = Guid.NewGuid();
            var expectedName = "Cars name";

            var car = new Car(expectedId, expectedName);

            Assert.Equal(expectedId, car.Id);
            Assert.Equal(expectedName, car.Name);
        }

        [Theory]
        [InlineData("Ferrari")]
        [InlineData("Fusca")]
        [InlineData("")]
        public void Constructor_GivenAllParameters_ThenShouldSetThePropertiesCorrectly_UsingTheoryInlineData(string expectedCarName)
        {
            var expectedId = Guid.NewGuid();

            var car = new Car(expectedId, expectedCarName);

            Assert.Equal(expectedId, car.Id);
            Assert.Equal(expectedCarName, car.Name);
        }


        [Fact]
        public void Constructor_GivenAllParameters_ThenShouldSetThePropertiesCorrectly_UsingFaker()
        {
            var expectedId = Guid.NewGuid();
            var expectedName = _faker.Vehicle.Model();

            _testOutputHelper.WriteLine(expectedName);

            var car = new Car(expectedId, expectedName);


            //Assert.Equal(expectedId, car.Id);
            //Assert.Equal(expectedName, car.Name);
            car.Id.Should().Be(expectedId, "should be equal");
            car.Name.Should().Be(expectedName, "should be equal");
        }
    }
}
