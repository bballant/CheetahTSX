import * as Types from '../ts/types';

const cheetahsTeam: Types.Team = {
  name: 'Cheetahs FC',
  players: [
    { name: 'Leo Panthera', number: 1 },
    { name: 'Sasha Saber', number: 2 },
    { name: 'Raj Bengal', number: 3 },
    { name: 'Tara Tiger', number: 4 },
    { name: 'Juno Jaguar', number: 5 },
    { name: 'Max Lionheart', number: 6 },
    { name: 'Felix Lynx', number: 7 },
    { name: 'Zara Cheetah', number: 8 },
    { name: 'Diego Puma', number: 9 },
    { name: 'Lana Leopard', number: 10 },
    { name: 'Kato Cougar', number: 11 },
    { name: 'Ollie Ocelot', number: 12 },
    { name: 'Nala Tigress', number: 13 },
    { name: 'Rocky Puma', number: 14 },
    { name: 'Milo Panther', number: 15 },
    { name: 'Kara Cheetara', number: 16 },
    { name: 'Tony Tigerius', number: 17 },
    { name: 'Rafa Lionis', number: 18 }
  ]
};

const cheetahsGame: Types.Game = {
    name: 'Cheetahs FC vs Worms FC',
    team: cheetahsTeam,
    formation: 442,
    totalMinutes: 60,
    subPeriods: 6,
}