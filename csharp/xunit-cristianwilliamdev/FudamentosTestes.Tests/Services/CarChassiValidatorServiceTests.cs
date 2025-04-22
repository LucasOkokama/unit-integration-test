using FluentAssertions;
using FudamentosTestes.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FudamentosTestes.Tests.Services
{
    public sealed class CarChassiValidatorServiceTests
    {
        [Fact]
        public async Task CheckIfValidAsync_GivenAnyParams_ShouldReturnTrueAsync()
        {
            var anyId = Guid.NewGuid();
            var validator = new CarChassiValidatorService();

            var result = await validator.CheckIfValidAsync(anyId, CancellationToken.None);

            result.Should().BeTrue();
        }
    }
}
