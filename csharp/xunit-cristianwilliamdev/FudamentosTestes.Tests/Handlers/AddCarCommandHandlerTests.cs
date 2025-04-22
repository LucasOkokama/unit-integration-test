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
        private readonly AppDbContext _appDb;

        public AddCarCommandHandlerTests()
        {
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>();
            dbContextOptions.UseInMemoryDatabase("FundamentosTestes");
            _appDb = new AppDbContext(dbContextOptions.Options);

            _mockCarChassiValidatorService = Substitute.For<ICarChassiValidatorService>();

            _handler = new AddCarCommandHandler(_mockCarChassiValidatorService, _appDb);
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

        [Fact]
        public async Task Handle_GivenChassiValid_ThenShouldInsertAndReturnNewCar()
        {
            var expectedCarName = _faker.Vehicle.Model();
            var validCommand = new AddCarCommand(expectedCarName);

            _mockCarChassiValidatorService.CheckIfValidAsync(Arg.Any<Guid>(), Arg.Any<CancellationToken>()).Returns(Task.FromResult(true));

            var result = await _handler.Handle(validCommand, CancellationToken.None);
            result.Name.Should().Be(expectedCarName);
            result.Id.Should().NotBeEmpty();

            var carId = result.Id;
            var insertedCar = await _appDb.Cars.SingleAsync(x => x.Id == carId, CancellationToken.None);

            insertedCar.Should().NotBeNull();
            insertedCar.Name.Should().Be(expectedCarName);
        }
    }
}
