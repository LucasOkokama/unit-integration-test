import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";


describe("Create appointment", () => {
  it("Should be able to create an appointment", () => {
    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() + 2)

    const createAppointment = new CreateAppointment()

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})