export type RootStackParamList = {
    Loading: undefined,
    NewGame: undefined,
    GameManager: undefined,
    TeamManager: undefined,
};

export type Player = {
    name: string,
    number: number,
}

export type Team = {
    name: string,
    players: Player[],
}