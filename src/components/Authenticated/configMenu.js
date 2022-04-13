import { matchPath } from "../../utils";
import { currentAccountTypeSelector, mainAccountIdSelector } from "../../selectors/profileSelector";
import store from "../../store";

const configMenu = () => {
  return [
    {
      id: 0,
      is_highlight: false,
      defaultName: "お客さまサポートWEB",
      items: [
        {
          id: 0,
          name: "トップページ",
          href: "/account",
          subItems: [],
          groupId: 0
        }
      ]
    },
    {
      id: 1,
      name: "資産状況",
      is_highlight: false,
      items: [
        // {
        //   id: 0,
        //   name: '口座余力',
        //   href: '/account/balance',
        //   subItems: [],
        //   groupId: 1,
        //   role: ['normal', 'emergency', 'bankClosing', 'securityClosing']
        // },
        {
          id: 1,
          name: "取引履歴",
          href: "/account/trade/history",
          subItems: [],
          groupId: 1,
          role: ['normal', 'emergency', 'bankClosing', 'securityClosing']
        },
        {
          id: 2,
          name: "特定口座取引明細",
          href: "/account/trade/tax",
          subItems: [],
          groupId: 1,
          role: ['normal', 'emergency', 'bankClosing', 'securityClosing']
        },
        {
          id: 3,
          name: "入出金状況",
          href: "/account/payment/history",
          subItems: [],
          groupId: 1,
          role: ['bankClosing', 'securityClosing']
        },
        {
          id: 4,
          name: "出金取消",
          href: "/account/payment/cancel",
          subItems: [
            "/account/payment/:id/cancel/confirm",
            "/account/payment/:id/cancel/complete"
          ],
          groupId: 1,
          role: ['bankClosing', 'securityClosing']
        }
      ]
    },
    {
      id: 2,
      name: "手続き／報告書",
      is_highlight: false,
      items: [
        {
          id: 5,
          name: "入出金",
          href: "/account/payment",
          subItems: [
            "/account/payment/withdrawal",
            "/account/payment/withdrawal/complete"
          ],
          groupId: 2,
          role: ['bankClosing', 'securityClosing']
        },
        {
          id: 7,
          name: "株式出庫",
          href: "/account/delivery",
          subItems: [
            "/account/delivery/complete",
            "/account/delivery/cancel",
            "/account/delivery/cancel/complete"
          ],
          groupId: 2,
          role: ['normal', 'emergency', 'bankClosing', 'securityClosing']
        },
        {
          id: 8,
          name: "電子交付サービス",
          href: "/account/report/output",
          subItems: [],
          groupId: 2,
          role: ['normal', 'emergency', 'bankClosing', 'securityClosing']
        },
        {
          id: 12,
          name: "口座廃止",
          href: "/account/close-account",
          subItems: [],
          groupId: 2,
          role: ['normal', 'emergency', 'bankClosing', 'securityClosing']
        }
      ]
    },
    {
      id: 3,
      name: "緊急時取引メニュー",
      is_highlight: true,
      items: [
        {
          id: 9,
          name: "国内株式売却",
          href: "/account/physical",
          subItems: [
            "/account/physical/:code/order",
            "/account/physical/:code/order/confirm",
            "/account/physical/:code/order/complete"
          ],
          groupId: 3,
          role: ['emergency', 'bankClosing']
        },
        // {
        //   id: 10,
        //   name: "米国株式購入",
        //   href: "/account/us-stock/purchase",
        //   subItems: [
        //     "/account/us-stock/:code/purchase",
        //     "/account/us-stock/:code/purchase/confirm",
        //     "/account/us-stock/:code/purchase/complete"
        //   ],
        //   groupId: 3
        // },
        {
          id: 12,
          name: "米国株式売却",
          href: "/account/us-stock",
          subItems: [
            "/account/us-stock/:code/sell",
            "/account/us-stock/:code/sell/confirm",
            "/account/us-stock/:code/sell/complete"
          ],
          groupId: 3,
          role: ['emergency', 'bankClosing']
        },
        {
          id: 13,
          name: "注文照会",
          href: "/account/order",
          subItems: [
            "/account/order/:id/cancel",
            "/account/order/:id/cancel/complete",
            "/account/order/:id/detail"
          ],
          groupId: 4,
          role: ['emergency', 'bankClosing']
        }
      ]
    }
  ];
};

export default function conditionConfigMenu() {
  const bankClosingFlag = JSON.parse(sessionStorage.getItem("bankClosing"));
  const securityClosingFlag = JSON.parse(sessionStorage.getItem("securityClosing"));
  const emergencyFlag = JSON.parse(sessionStorage.getItem("emergency"));

  let rule = ''

  const pathNameTax = '/account/trade/tax';
  const pathNameCloseAccount = '/account/close-account';

  if (bankClosingFlag) {
    rule = 'bankClosing';
  }
  else if (!bankClosingFlag && securityClosingFlag) {
    rule = 'securityClosing';
  }
  else if (!bankClosingFlag && !securityClosingFlag && emergencyFlag) {
    rule = 'emergency';
  }
  else if (!bankClosingFlag && !securityClosingFlag && !emergencyFlag) {
    rule = 'normal';
  }
  return listMenuBaseRules(checkNormalAccountType(configMenu(), pathNameTax, pathNameCloseAccount), rule);
}

const listMenuBaseRules = (configMenu, rule) => {
  let configMenuClear = configMenu;
  let menuEmptyItemsDeleted = [configMenu[0]];
  let itemsArray = []
  let itemBaseRule = false;
  for (let index = 1; index < configMenu.length; index++) {
    let tempItem = configMenu[index];
    for (let indexOfItem = 0; indexOfItem < tempItem.items.length; indexOfItem++) {
      itemBaseRule = tempItem.items[indexOfItem].role.includes(rule);
      if (itemBaseRule) {
        itemsArray.push(configMenu[index].items[indexOfItem])
      }
    }
    configMenuClear[index].items = itemsArray;
    itemsArray = []
  }
  for (let index = 1; index < configMenu.length; index++) {
    if (configMenu[index].items.length !== 0) {
      menuEmptyItemsDeleted.push(configMenu[index])
    }
  }
  return menuEmptyItemsDeleted;
}

const checkNormalAccountType = (sidebarList, pathNameTax, pathNameCloseAcc) => {
  let sidebarListConfig = sidebarList;
  const state = store.getState()
  const currentAccountType = sessionStorage.getItem("currentAccountType") || currentAccountTypeSelector(state);
  const mainAccount = sessionStorage.getItem("mainAccount") || mainAccountIdSelector(state);
  if (mainAccount&&currentAccountType&&currentAccountType==="NORMAL") {
    const mainAccountLink = process.env[`REACT_APP_${mainAccount.toUpperCase()}_URL`];
    for (let indexOfSidebarList = 1; indexOfSidebarList < sidebarList.length; indexOfSidebarList++) {
      const itemsArray = sidebarList[indexOfSidebarList].items;
      for (let index = 0; index < sidebarList[indexOfSidebarList].items.length; index++) {
        if (itemsArray[index].href === pathNameTax) {
          sidebarListConfig[indexOfSidebarList].items[index] = {
            ...itemsArray[index],
            isSubAccount: true,
            mainAccountLink: mainAccountLink,
            helpUrl: "https://help.smartplus-sec.com/s/article/bcp-syukouza"
          }
        }
        else if (itemsArray[index].href === pathNameCloseAcc) {
          sidebarListConfig[indexOfSidebarList].items[index] = {
            ...itemsArray[index],
            isSubAccount: false,
            mainAccountLink: mainAccountLink,
          }
        }
      }
    }
  }
  return sidebarListConfig;
}

export function findMenuInfoByPathName(pathName) {
  let result = null;

  conditionConfigMenu().forEach(function (menu) {
    menu.items.forEach(function (item) {
      const path = pathName.replace(/\/+$/, "");
      const pathPatterns = item.subItems.concat(item.href);

      if (matchPath(pathPatterns, path)) {
        result = {
          id: item.id,
          name: item.name2 || item.name,
          group: menu
        };
      }
    });
  });

  return result;
}
