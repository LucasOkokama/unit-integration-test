using Bogus;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit.Abstractions;

namespace FudamentosTestes.Tests.Handlers.Exceptions
{
    public sealed class InvalidChassiExceptionTests
    {
        private readonly Faker _faker = new("pt_BR");
        private readonly ITestOutputHelper _testOutputHelper;

        public InvalidChassiExceptionTests(ITestOutputHelper testOutputHelper)
        {
            this._testOutputHelper = testOutputHelper;
        }

        [Fact]
        public void Constructor_GivenMessage_ThenShouldSetMessageToException()
        {
            var message = _faker.Lorem.Text();
            var exception = new InvalidCastException(message);

            _testOutputHelper.WriteLine(message);

            exception.Message.Should().Be(message);
        }
    }
}
