import moment from "moment";
import {formatCurrency} from '../../../utils'
export const getHeaderTable = (transitions) => {
  let dates = ["日付"];
  transitions.map((transition) =>
    dates.push(moment(transition.date).format("YYYY-MM-DD"))
  );
  return dates;
};

export const transformTransitions = (transitions) => {
  if (transitions.length > 0) {
    let result = [];

    let collateralCashes = ["使用可能現金保証金"];
    let collaterals = ["代用証券評価額"];
    let marginTradePositionPLs = ["未決済建玉評価損"];
    let marginTradePositionExpenses = ["諸経費"];
    let marginTradeUnsettledLosses = ["未受渡建玉決済損"];
    let marginTradeUnsettledProfits = ["未受渡縦建玉決済益"];
    let marginReceiveds = ["受入保証金"];
    let marginRequireds = ["保証金維持必要額"];
    let cashMarginRequireds = ["必要現金保証金"];
    let withdrawables = ["追証余力"];
    let marginTradePositionAmounts = ["建玉代金"];
    let marginRates = ["保証金預託率"];

    transitions.forEach((transition) => {
      const subCollateral = formatCurrency((transition.collateralCash - transition.collateral));
      const modifiedMarginRate = formatCurrency(transition.marginRate, 2)
      collateralCashes.push(formatCurrency(transition.collateralCash));
      collaterals.push(subCollateral);
      marginTradePositionPLs.push(formatCurrency(transition.marginTradePositionPL));
      marginTradePositionExpenses.push(formatCurrency(transition.marginTradePositionExpense));
      marginTradeUnsettledLosses.push(formatCurrency(transition.marginTradeUnsettledLoss));
      marginTradeUnsettledProfits.push(formatCurrency(transition.marginTradeUnsettledProfit));
      marginReceiveds.push(formatCurrency(transition.marginReceived));
      marginRequireds.push(formatCurrency(transition.marginRequired));
      cashMarginRequireds.push(formatCurrency(transition.cashMarginRequired));
      withdrawables.push(formatCurrency(transition.withdrawable));
      marginTradePositionAmounts.push(formatCurrency(transition.marginTradePositionAmount));
      marginRates.push(`${modifiedMarginRate}%`);
    });
    result.push(
      collateralCashes,
      collaterals,
      marginTradePositionPLs,
      marginTradePositionExpenses,
      marginTradeUnsettledLosses,
      marginTradeUnsettledProfits,
      marginReceiveds,
      marginRequireds,
      cashMarginRequireds,
      withdrawables,
      marginTradePositionAmounts,
      marginRates
    );
    return result;
  }
};