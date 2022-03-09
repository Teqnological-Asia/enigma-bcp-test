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


const showMenuRules = (configMenu, rule) => {
  let itemBaseRule = false;
  for (let index = 1; index < configMenu.length; index++) {
    let tempItem = configMenu[index];
    for (let indexOfItem = 0; indexOfItem < tempItem.items.length; indexOfItem++) {
      itemBaseRule = tempItem.items[indexOfItem].role.includes(rule);
      if (!itemBaseRule) {
        delete configMenu[index].items[indexOfItem]
      }
    }
  }
  return configMenu;
}

export default function conditionConfigMenu(bankClosingFlag, securityClosingFlag, emergencyFlag, currentAccountType) {
  currentAccountType = sessionStorage.getItem("currentAccountType");
  bankClosingFlag = sessionStorage.getItem("bankClosing");
  securityClosingFlag = sessionStorage.getItem("securityClosing");
  emergencyFlag = sessionStorage.getItem("emergency");

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
    if (window.location.pathname === '/account/trade/tax') {
      rule = 'mainAccount';
    }
  }

  return showMenuRules(configMenu(), rule);
}

// const checkAccountType = sidebarList => {
//   const currentAccountType = sessionStorage.getItem("currentAccountType");
//   if (currentAccountType && currentAccountType === "NORMAL") {
//     // Disable Trade Tax Navi
//     const tradeItem = {
//       ...sidebarList[1],
//       items: [
//         // replace Tax item
//         sidebarList[1].items[0],
//         {
//           ...sidebarList[1].items[1],
//           isDisabled: true,
//           helpUrl: "https://help.smartplus-sec.com/s/article/bcp-syukouza"
//         },
//         ...sidebarList[1].items.slice(2, sidebarList[1].items.length)
//       ]
//     };
//     return [
//       // replace Trade item
//       sidebarList[0],
//       tradeItem,
//       ...sidebarList.slice(2, sidebarList.length)
//     ];
//   }
//   return sidebarList;
// };

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
