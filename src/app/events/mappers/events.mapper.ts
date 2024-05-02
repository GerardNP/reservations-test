import { EventDetails, EventDetailsDTO, EventInfo, EventInfoDTO, SessionInfo, SessionInfoDTO } from "../interfaces/events";

export class EventsMapper {

  static toEventDetails(dto: EventDetailsDTO): EventDetails {
    return {
      event: this.toEventInfo(dto.event),
      sessions: dto.sessions.map(session => EventsMapper.toSessionInfo(session)),
      locationsSelected: 0,
    }
  }

  static toEventInfo(dto: EventInfoDTO): EventInfo {
    return {
      id: parseInt(dto.id),
      title: dto.title,
      subtitle: dto.subtitle,
      image: dto.image,
    }

  }

  static toSessionInfo(dto: SessionInfoDTO): SessionInfo {
    return {
      date: new Date(parseInt(dto.date)),
      availability: parseInt(dto.availability),
      amountSelected: 0
    }
  }
}
