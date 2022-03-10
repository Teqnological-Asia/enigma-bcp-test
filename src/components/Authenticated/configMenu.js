import { matchPath } from "../../utils";

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
        {
          id: 0,
          name: '口座余力',
          href: '/account/balance',
          subItems: [],
          groupId: 1,
          role: ['mainAccount', 'emergency', 'bankClosing', 'securityClosing', 'subAccount']
        },
        {
          id: 1,
          name: "取引履歴",
          href: "/account/trade/history",
          subItems: [],
          groupId: 1,
          role: ['mainAccount', 'emergency', 'bankClosing', 'securityClosing', 'subAccount']
        },
        {
          id: 2,
          name: "特定口座取引明細",
          href: "/account/trade/tax",
          subItems: [],
          groupId: 1,
          role: ['mainAccount', 'emergency', 'bankClosing', 'securityClosing', 'subAccount']
        },
        {
          id: 3,
          name: "入出金状況",
          href: "/account/payment/history",
          subItems: [],
          groupId: 1,
          role: ['bankClosing', 'securityClosing', 'subAccount']
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
          role: ['bankClosing', 'securityClosing', 'subAccount']
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
          role: ['bankClosing', 'securityClosing', 'subAccount']
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
          role: ['mainAccount', 'emergency', 'bankClosing', 'securityClosing', 'subAccount']
        },
        {
          id: 8,
          name: "電子交付サービス",
          href: "/account/report/output",
          subItems: [],
          groupId: 2,
          role: ['mainAccount', 'emergency', 'bankClosing', 'securityClosing', 'subAccount']
        },
        {
          id: 12,
          name: "口座閉鎖",
          href: "/account/close-account",
          subItems: [],
          groupId: 2,
          role: ['mainAccount', 'emergency', 'bankClosing', 'securityClosing', 'subAccount']
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
          role: ['emergency', 'bankClosing', 'subAccount']
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
          role: ['emergency', 'bankClosing', 'subAccount']
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
          role: ['emergency', 'bankClosing', 'subAccount']
        }
      ]
    }
  ];
};


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

export default function conditionConfigMenu() {
  const currentAccountType = sessionStorage.getItem("currentAccountType");
  const bankClosingFlag = sessionStorage.getItem("bankClosing");
  const securityClosingFlag = sessionStorage.getItem("securityClosing");
  const emergencyFlag = sessionStorage.getItem("emergency");

  let rule = ''

  if (bankClosingFlag) {
    rule = 'bankClosing';
  }
  else if (!bankClosingFlag && securityClosingFlag) {
    rule = 'securityClosing';
  }
  else if (!bankClosingFlag && !securityClosingFlag && emergencyFlag) {
    rule = 'emergency';
  }
  else if (!bankClosingFlag && !securityClosingFlag && !emergencyFlag && currentAccountType === "MAIN") {
    rule = 'mainAccount';
  }
  else {
    rule = 'subAccount';
    const pathname = window.location.pathname;
    if (pathname === '/account/trade/tax') {
      rule = 'mainAccount';
      return listMenuBaseRules(checkNormalAccountType(configMenu(), pathname), rule);

    }
  }
  return listMenuBaseRules(configMenu(), rule);
}

const checkNormalAccountType = (sidebarList, pathname) => {
  const itemsArray = sidebarList[1].items;
  for (let index = 0; index < sidebarList[1].items.length; index++) {
    if (itemsArray[index].href === pathname) {
      sidebarList[1].items[index] = {
        ...itemsArray[index],
        isDisabled: true,
        helpUrl: "https://help.smartplus-sec.com/s/article/bcp-syukouza"
      }
    }
  }
  return sidebarList;
};

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
