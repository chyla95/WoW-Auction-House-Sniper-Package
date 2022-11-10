const copperPerSilver = 100;
const silverPerGold = 100;

export interface IWowCurrency {
  gold: number;
  silver: number;
  copper: number;
}

export const convertToWowCurrency = (rawAmmount: number) => {
  const gold = Math.trunc(rawAmmount / (copperPerSilver * silverPerGold));
  const silver = Math.trunc(rawAmmount - gold * copperPerSilver * silverPerGold) / copperPerSilver;
  const copper = Math.trunc(rawAmmount % copperPerSilver);

  return { gold, silver, copper } as IWowCurrency;
};
