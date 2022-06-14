import { executive } from '../../../assets/constantVariables';

export const checkCode = (insiderArr, stockName, stockCode) => {
    const insiderArray = insiderArr.filter(el => {
        return el.name === stockName;
    });
    if (insiderArray.length > 0) {
        return insiderArray[0].code === stockCode;
    }
    return false;
}

export const checkPosition = (occupationInfo, position) => {
    return occupationInfo.position === position;
}

export const isShowExecutiveCautionBox = (codeCondition, positionCondition) => {
    return codeCondition && positionCondition;
}

export const cautionConditions = (stockDetail, userInfo) => {
    let result = {
        codeChecked: false,
        positionChecked: false,
        isShowExecutiveCautionBox: false
    }

    if (!stockDetail && !userInfo && (userInfo && (userInfo.insiders.length === 0 || !userInfo.occupation))) return result;
    if (userInfo && (userInfo.insiders.length === 0 || !userInfo.occupation)) return result;

    const codeChecked = checkCode(userInfo.insiders, stockDetail.name, stockDetail.code);
    const positionChecked = checkPosition(userInfo.occupation, executive.toUpperCase());
    const isShowExecutiveCautionBox = codeChecked && positionChecked;

    result.codeChecked = codeChecked;
    result.positionChecked = positionChecked;
    result.isShowExecutiveCautionBox = isShowExecutiveCautionBox;

    return result;
}
