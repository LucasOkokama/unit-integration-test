import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointments-repository";


describe("Create appointment", () => {
  it("Should be able to create an appointment", () => {
    const startsAt = getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-11')

    const appointmentsRepository = new InMemoryAppointmentRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})