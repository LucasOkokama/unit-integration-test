using Bogus;
using FluentAssertions;
using FudamentosTestes.Db;
using FudamentosTestes.Entities;
using FudamentosTestes.Handlers;
using FudamentosTestes.Handlers.Exceptions;
using FudamentosTestes.Services;
using Microsoft.EntityFrameworkCore;
using NSubstitute;

namespace FudamentosTestes.Tests.Handlers
{
    public sealed class AddCarCommandHandlerTests
    {
        private readonly AddCarCommandHandler _handler;
        private readonly Faker _faker = new("pt_BR");
        private readonly ICarChassiValidatorService _mockCarChassiValidatorService;

        public AddCarCommandHandlerTests()
        {
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>();
            dbContextOptions.UseInMemoryDatabase("FundamentosTestes");
            var dbContext = new AppDbContext(dbContextOptions.Options);

            _mockCarChassiValidatorService = Substitute.For<ICarChassiValidatorService>();

            _handler = new AddCarCommandHandler(_mockCarChassiValidatorService, dbContext);
        }

        [Fact]
        public async Task Handle_GivenChassiInvalid_ThenShouldThrowException()
        {
            var carName = _faker.Vehicle.Model();
            var invalidCommand = new AddCarCommand(carName);

            _mockCarChassiValidatorService.CheckIfValidAsync(Arg.Any<Guid>(), Arg.Any<CancellationToken>())
                .Returns(Task.FromResult(false));

            var resultAction = () => _handler.Handle(invalidCommand, CancellationToken.None);

            await resultAction.Should().ThrowAsync<InvalidChassiException>()
            .WithMessage($"[{carName}] chassi invalido!");
        }
    }
}
