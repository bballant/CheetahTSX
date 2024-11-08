export type RootStackParamList = {
    Loading: undefined,
    GameManager: undefined,
    TeamManager: undefined,
    TeamEditor: { teamName: string },
};

export type Player = {
    name: string,
    number: number,
}

export type TeamSummary = {
    name: string,
}

export type Team = {
    name: string,
    players: Player[],
}

export type Game = {
    name: string,
    team: Team,
    formation: number,
    totalMinutes: number,
    subPeriods: number,
}

export type LineUp = {
    subs: Player[],
    // order is important
    // first player is the goalkeeper
    // second is the right back, etc
    positions: Player[],
}

export type GamePlan = LineUp[]
