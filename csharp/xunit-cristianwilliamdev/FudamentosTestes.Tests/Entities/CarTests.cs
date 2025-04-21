using FudamentosTestes.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FudamentosTestes.Tests.Entities
{
    public sealed class CarTests
    {
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


    }
}
