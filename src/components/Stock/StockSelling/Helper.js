import { executive } from '../../../assets/constantVariables';

export const checkCode = (insiderArr, stockCode) => {
    const insiderArray = insiderArr.filter(el => {
        return el.code === stockCode;
    });
    return insiderArray.length > 0;
}

export const checkPosition = (occupationInfo, position) => {
    return occupationInfo.position === position;
}

export const checkCompanyCodeCondition = (stockCode, companyCode) => {
    return stockCode === companyCode;
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

    const codeChecked = checkCode(userInfo.insiders, stockDetail.code);
    const companyCodeChecked = checkCompanyCodeCondition(stockDetail.code, userInfo.occupation.companyCode);
    const positionChecked = checkPosition(userInfo.occupation, executive.toUpperCase());
    const isShowExecutiveCautionBox = companyCodeChecked && positionChecked;

    result.codeChecked = codeChecked;
    result.positionChecked = positionChecked;
    result.isShowExecutiveCautionBox = isShowExecutiveCautionBox;

    return result;
}
