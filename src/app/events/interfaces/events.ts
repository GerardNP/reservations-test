// #region EVENT LIST
export interface EventByList {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
}
// #endregion

// #region EVENT DETAILS
export interface EventDetailsDTO {
  event: EventInfoDTO;
  sessions: SessionInfoDTO[];
}

export interface EventInfoDTO {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface SessionInfoDTO {
  date: string;
  availability: string;
}

export interface EventDetails {
  event: EventInfo;
  sessions: SessionInfo[];
  locationsSelected: number;
}

export interface EventInfo {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}


export interface SessionInfo {
  date: Date;
  availability: number;
  amountSelected: number;
}
// #endregion
