using Bogus;
using FluentAssertions;
using FudamentosTestes.Db;
using FudamentosTestes.Entities;
using FudamentosTestes.Handlers;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FudamentosTestes.Tests.Handlers
{
    public sealed class GetCarByIdQueryHandlerTests
    {
        private readonly GetCarByIdQueryHandler _handler;
        private readonly AppDbContext _appDb;
        private readonly Faker _faker = new("pt_BR");

        public GetCarByIdQueryHandlerTests()
        {
            var dbContextOptions = new DbContextOptionsBuilder<AppDbContext>();
            dbContextOptions.UseInMemoryDatabase("FundamentosTestes");
            _appDb = new AppDbContext(dbContextOptions.Options);

            _handler = new GetCarByIdQueryHandler(_appDb);
        }

        [Fact]
        public async Task Handle_GivenValidCarId_ThenShouldReturnCarDto()
        {
            var carId = Guid.NewGuid();
            var carName = _faker.Vehicle.Model();
            _appDb.Cars.Add(new Car(carId, carName));
            await _appDb.SaveChangesAsync();

            var getCarByIdQuery = new GetCarByIdQuery(carId);

            var result = await _handler.Handle(getCarByIdQuery, CancellationToken.None);

            result.Should().NotBeNull();
            result.Id.Should().Be(carId);
            result.Name.Should().Be(carName);
        }
    }
}
