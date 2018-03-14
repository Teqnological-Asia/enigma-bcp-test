import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="l-contents">
        <div className="l-contents_head">
          <div className="p-pageTitle">
            <div className="p-pageTitle_head">
              <div className="p-pageTitle_title">お客様WEB</div>
            </div>
            <div className="p-pageTitle_body">
              <div className="p-nav_sub">
                <ul>
                  <li className="is_current"><a href="1.html">お知らせ</a></li>
                  <li><a href="https://smartplus-sec.com" target="_blank">カスタマーサポート</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="l-contents_body">
          <div className="l-contents_body_inner">
            <div className="p-section_user u-mt40p">
              <div className="p-section_user_name">須磨 太郎 様</div>
              <dl className="p-section_user_code">
                <dt>加入者口座コード</dt>
                <dd>120006001012345000000</dd>
              </dl>
            </div>
            <div className="section_user_apps u-mt40p">
              <p>いつもスマートプラスをご利用いただきありがとうございます。<br/>当Webサイトからはお手続き/取引履歴等と、障害時の決済/売却がご利用いただけます。<br/>株式のお取引とSNSは専用アプリからご利用くださいますようお願いいたします。</p>
              <dl>
                <dt>
                  <svg xmlns="http://www.w3.org/2000/svg" width="262" height="68" viewBox="0 0 262 68"><title>stream</title><path d="M91.2,28.77l-2.6,2.6L86.3,29H81.7l-.1,16H78V29H73.4l-2.3,2.3-2.6-2.5,3.2-3.2H88Zm30.2,5.5-2.5,2.5,2.4,2.4V45h-3.8v-4.3l-2-2h-9.1V45h-3.6V25.47h14.8l3.8,3.8Zm-15,1h9.1l2.1-2.1v-2.5L115.9,29h-9.5Zm33.1,6.2v-4.6H149v-3.6h-9.5V29h12.6v-3.5H135.9V45h16.3v-3.5Zm45-10.4V45h-3.6v-5.8H169.4V45h-3.7V31.07l5.6-5.7h7.5ZM173,29l-3.6,3.6v3.3h11.5v-3.3L177.3,29Zm46.7-4.4-9.5,10.8-9.6-10.8-2.2,2.1V45H202V31.37l8.2,9.4,8.2-9.5V45H222V26.67Zm-176.3,6,1.5-1.5h8l3.1,2.7,2.4-2.6-4.1-3.6H43.5l-3.6,3.5v5.2l14.7,4.5v1.4l-1.7,1.3h-9l-2.7-2.3-2.3,2.7L42.6,45H54.1l4-3.1v-5.8l-14.7-4.5Z" fill="#6b6b6b"/><rect width="262" height="68" fill="none"/></svg>
                </dt>
                <dd><a href="#"><svg id="JP" xmlns="http://www.w3.org/2000/svg" width="108.85157" height="40" viewBox="0 0 108.85157 40"><title>Download_on_the_App_Store_Badge_JP_RGB_blk_100317</title><g><g><path d="M99.32227,0H9.53468c-.3667,0-.729,0-1.09473.002-.30615.002-.60986.00781-.91895.0127A13.21476,13.21476,0,0,0,5.5171.19141a6.66509,6.66509,0,0,0-1.90088.627A6.43779,6.43779,0,0,0,1.99757,1.99707,6.25844,6.25844,0,0,0,.81935,3.61816a6.60119,6.60119,0,0,0-.625,1.90332,12.993,12.993,0,0,0-.1792,2.002C.00587,7.83008.00489,8.1377,0,8.44434V31.5586c.00489.3105.00587.6113.01515.9219a12.99232,12.99232,0,0,0,.1792,2.0019,6.58756,6.58756,0,0,0,.625,1.9043A6.20778,6.20778,0,0,0,1.99757,38.001a6.27445,6.27445,0,0,0,1.61865,1.1787,6.70082,6.70082,0,0,0,1.90088.6308,13.45514,13.45514,0,0,0,2.0039.1768c.30909.0068.6128.0107.91895.0107C8.80567,40,9.168,40,9.53468,40H99.32227c.3594,0,.7246,0,1.084-.002.3047,0,.6172-.0039.9219-.0107a13.279,13.279,0,0,0,2-.1768,6.80432,6.80432,0,0,0,1.9082-.6308,6.27742,6.27742,0,0,0,1.6172-1.1787,6.39482,6.39482,0,0,0,1.1816-1.6143,6.60413,6.60413,0,0,0,.6191-1.9043,13.50643,13.50643,0,0,0,.1856-2.0019c.0039-.3106.0039-.6114.0039-.9219.0078-.3633.0078-.7246.0078-1.0938V9.53613c0-.36621,0-.72949-.0078-1.09179,0-.30664,0-.61426-.0039-.9209a13.5071,13.5071,0,0,0-.1856-2.002,6.6177,6.6177,0,0,0-.6191-1.90332,6.46619,6.46619,0,0,0-2.7988-2.7998,6.76754,6.76754,0,0,0-1.9082-.627,13.04394,13.04394,0,0,0-2-.17676c-.3047-.00488-.6172-.01074-.9219-.01269C100.04687,0,99.68167,0,99.32227,0Z" style={{fill: '#a6a6a6'}}/><path d="M8.44483,39.125c-.30468,0-.602-.0039-.90429-.0107a12.68714,12.68714,0,0,1-1.86914-.1631,5.88381,5.88381,0,0,1-1.65674-.5479,5.40573,5.40573,0,0,1-1.397-1.0166,5.32082,5.32082,0,0,1-1.02051-1.3965,5.72186,5.72186,0,0,1-.543-1.6572,12.41351,12.41351,0,0,1-.1665-1.875c-.00634-.2109-.01464-.9131-.01464-.9131V8.44434S.88185,7.75293.8877,7.5498a12.37039,12.37039,0,0,1,.16553-1.87207,5.7555,5.7555,0,0,1,.54346-1.6621A5.37349,5.37349,0,0,1,2.61183,2.61768,5.56543,5.56543,0,0,1,4.01417,1.59521a5.82309,5.82309,0,0,1,1.65332-.54394A12.58589,12.58589,0,0,1,7.543.88721L8.44532.875h91.956l.9131.0127a12.38493,12.38493,0,0,1,1.8584.16259,5.93833,5.93833,0,0,1,1.6709.54785,5.59374,5.59374,0,0,1,2.415,2.41993A5.76267,5.76267,0,0,1,107.794,5.667a12.995,12.995,0,0,1,.1738,1.88721c.0029.2832.0029.5874.0029.89014.0079.375.0079.73193.0079,1.09179V30.4648c0,.3633,0,.7178-.0079,1.0752,0,.3252,0,.6231-.0039.9297a12.73126,12.73126,0,0,1-.1709,1.8535,5.739,5.739,0,0,1-.54,1.67,5.48029,5.48029,0,0,1-1.0156,1.3857,5.4129,5.4129,0,0,1-1.3994,1.0225,5.86168,5.86168,0,0,1-1.668.5498,12.54218,12.54218,0,0,1-1.8692.1631c-.2929.0068-.5996.0107-.8974.0107l-1.084.002Z"/></g><g><path d="M41.16742,16.55462H37.11585l-.973,2.873H34.42678L38.26437,8.79837h1.783l3.83759,10.62922H42.13957Zm-3.632-1.32573H40.747l-1.58318-4.66261h-.0443Z" style={{fill: '#fff'}}/><path d="M52.1728,15.55322c0,2.40821-1.28895,3.95545-3.23407,3.95545a2.62719,2.62719,0,0,1-2.4383-1.35582h-.03678v3.83842H44.87294V11.678h1.53972V12.967h.02926a2.749,2.749,0,0,1,2.46756-1.37C50.87633,11.59694,52.1728,13.1517,52.1728,15.55322Zm-1.635,0c0-1.569-.81082-2.60046-2.04794-2.60046-1.21539,0-2.03289,1.05323-2.03289,2.60046,0,1.56145.8175,2.60715,2.03289,2.60715C49.727,18.16037,50.53779,17.1364,50.53779,15.55322Z" style={{fill: '#fff'}}/><path d="M60.70267,15.55322c0,2.40821-1.28937,3.95545-3.23449,3.95545a2.62719,2.62719,0,0,1-2.4383-1.35582H54.9931v3.83842H53.4024V11.678h1.53972V12.967h.02926a2.749,2.749,0,0,1,2.46756-1.37C59.40578,11.59694,60.70267,13.1517,60.70267,15.55322Zm-1.63543,0c0-1.569-.81082-2.60046-2.04794-2.60046-1.21539,0-2.03289,1.05323-2.03289,2.60046,0,1.56145.8175,2.60715,2.03289,2.60715C58.25643,18.16037,59.06725,17.1364,59.06725,15.55322Z" style={{fill: '#fff'}}/><path d="M66.3391,16.466c.11786,1.05406,1.14183,1.74618,2.54112,1.74618,1.34077,0,2.30539-.69212,2.30539-1.64253,0-.825-.58178-1.319-1.95933-1.65758l-1.37755-.33185c-1.95181-.47144-2.85792-1.38424-2.85792-2.86544,0-1.834,1.59823-3.09364,3.86684-3.09364,2.24688,0,3.7866,1.25969,3.83842,3.09364H71.09032c-.09613-1.06075-.973-1.701-2.2544-1.701s-2.15828.64782-2.15828,1.59071c0,.75147.56,1.19366,1.93008,1.53219l1.17109.28755c2.18085.51575,3.08612,1.39176,3.08612,2.94652,0,1.98859-1.58318,3.23407-4.10257,3.23407-2.35722,0-3.94876-1.21623-4.05158-3.13878Z" style={{fill: '#fff'}}/><path d="M76.29961,9.84407v1.834h1.47368v1.25969H76.29961V17.21c0,.6637.29507.973.94289.973a4.971,4.971,0,0,0,.52327-.03678v1.25217a4.36838,4.36838,0,0,1-.88354.07356c-1.569,0-2.18085-.5893-2.18085-2.09224V12.93771H73.5746V11.678h1.12678v-1.834Z" style={{fill: '#fff'}}/><path d="M78.6259,15.55322c0-2.4383,1.43607-3.97049,3.67542-3.97049,2.24688,0,3.67626,1.53219,3.67626,3.97049,0,2.445-1.42185,3.97049-3.67626,3.97049C80.04776,19.52372,78.6259,17.99821,78.6259,15.55322Zm5.73089,0c0-1.67262-.76651-2.65981-2.05546-2.65981s-2.05546.99471-2.05546,2.65981c0,1.67931.76651,2.659,2.05546,2.659S84.35679,17.23253,84.35679,15.55322Z" style={{fill: '#fff'}}/><path d="M87.2891,11.678h1.51715v1.319H88.843a1.84835,1.84835,0,0,1,1.864-1.40012,2.4533,2.4533,0,0,1,.545.05935v1.48789a2.22372,2.22372,0,0,0-.71469-.09613,1.6029,1.6029,0,0,0-1.65758,1.783v4.59658H87.2891Z" style={{fill: '#fff'}}/><path d="M98.5862,17.15145a3.11011,3.11011,0,0,1-3.33689,2.37227c-2.2544,0-3.65369-1.51046-3.65369-3.93372,0-2.43078,1.40681-4.00727,3.58682-4.00727,2.14407,0,3.49236,1.47284,3.49236,3.82254v.545H93.20138v.09613a2.01837,2.01837,0,0,0,2.08472,2.19506,1.75329,1.75329,0,0,0,1.78965-1.09Zm-5.3773-2.31292h3.87437a1.86367,1.86367,0,0,0-1.90082-1.96686A1.96188,1.96188,0,0,0,93.2089,14.83853Z" style={{fill: '#fff'}}/></g><g><path d="M36.43654,30.81152l.06592-.81934a3.13245,3.13245,0,0,0,.95068.15137c.292,0,.40479-.02832.54639-.22656a4.56512,4.56512,0,0,0,.43262-2.31543c0-.84766-.26318-1.09277-.93164-1.09277-.15088,0-.32031.00977-.50879.01953a13.72712,13.72712,0,0,1-1.76953,4.123l-.78174-.42383a11.0714,11.0714,0,0,0,1.64746-3.61523,13.67658,13.67658,0,0,0-1.53418.25488l-.16943-.8291c.57422-.10352,1.26123-.19727,1.90137-.25391a17.609,17.609,0,0,0,.292-1.89258l.92285.10352c-.085.57422-.18848,1.14941-.32031,1.71387h.36719c1.1958,0,1.77.59277,1.77,1.85449a5.83361,5.83361,0,0,1-.5459,2.7959,1.1565,1.1565,0,0,1-1.12988.60254A5.18145,5.18145,0,0,1,36.43654,30.81152Zm3.03125-5.07422.6875-.46191a5.29872,5.29872,0,0,1,1.60986,3.48438l-.90381.14063A4.39851,4.39851,0,0,0,39.46779,25.7373Z" style={{fill: '#fff'}}/><path d="M44.88674,30.94336l-.188-.84766c.23535.01953.5459.02832.73438.02832,1.86377,0,2.56982-.52637,2.56982-1.30859,0-.62109-.40479-.97852-1.30859-.97852a4.03864,4.03864,0,0,0-2.57959,1.26172l-.7251-.32031A5.5238,5.5238,0,0,1,44.19,25.248l.83789.27246a3.6874,3.6874,0,0,0-.71533,2.44824,4.81661,4.81661,0,0,1,2.57031-.876c1.26172,0,2.043.64941,2.043,1.7041,0,1.33691-1.05469,2.15625-3.58691,2.15625C45.21633,30.95313,45.03762,30.94336,44.88674,30.94336Zm-.87549-6.251.23535-.8291a25.88517,25.88517,0,0,1,3.7002.84766l-.22607.81934A21.14206,21.14206,0,0,0,44.01125,24.69238Z" style={{fill: '#fff'}}/><path d="M51.65236,30.29395a5.94767,5.94767,0,0,0,2.53223-1.63867,10.69472,10.69472,0,0,0-1.76025-1.18555l.51758-.64941a11.44509,11.44509,0,0,1,1.78857,1.12891,5.95376,5.95376,0,0,0,.92285-2.1748H53.25246a9.70214,9.70214,0,0,1-2.05225,2.36328l-.6875-.59277a8.92365,8.92365,0,0,0,2.61768-3.59668l.90381.2168c-.10352.26367-.207.53613-.32959.791h2.335l.66846.31055a7.141,7.141,0,0,1-4.50977,5.76172ZM55.625,23.72266l.52734-.25488a5.67722,5.67722,0,0,1,.66846,1.1582l-.59326.27344A5.13466,5.13466,0,0,0,55.625,23.72266Zm1.17676-.09473.53662-.25391a6.35614,6.35614,0,0,1,.6875,1.18652l-.59326.25391A5.1684,5.1684,0,0,0,56.80178,23.62793Z" style={{fill: '#fff'}}/><path d="M60.92141,30.99023l-.48-.7627a3.94382,3.94382,0,0,0,3.314-4.15137h-3.9541v1.89258h-.95117V25.27539H61.2134V23.8916h.95068v1.38379h1.76074l.86621.24512C64.67775,28.19434,63.78371,30.2373,60.92141,30.99023Z" style={{fill: '#fff'}}/><path d="M66.62258,25.3418l.52734-.77246a11.68341,11.68341,0,0,1,2.31543,1.40332l-.60254.80957A11.0534,11.0534,0,0,0,66.62258,25.3418Zm.17871,4.6416a7.31748,7.31748,0,0,0,5.43262-3.917l.62109.69727a7.96352,7.96352,0,0,1-5.69531,4.09473Z" style={{fill: '#fff'}}/><path d="M80.57082,30.43555H74.64895V24.833h5.92188Zm-4.98926-4.73633v3.87012h4.04785V25.69922Z" style={{fill: '#fff'}}/><path d="M89.04934,27.9209H82.39309v-.96h6.65625Z" style={{fill: '#fff'}}/><path d="M91.314,23.91992h.93164v2.41016a29.013,29.013,0,0,1,3.59668,1.79883L95.315,28.957a22.724,22.724,0,0,0-3.06934-1.64746v3.63379H91.314Zm2.21191.50879.55566-.26367a6.19409,6.19409,0,0,1,.66895,1.28027l-.6123.27344A5.5162,5.5162,0,0,0,93.5259,24.42871Zm1.07324-.40527.56543-.26367A6.10514,6.10514,0,0,1,95.87063,25.04l-.6123.27344A6.12723,6.12723,0,0,0,94.59914,24.02344Z" style={{fill: '#fff'}}/></g><g id="_Group_" data-name="&lt;Group&gt;"><g id="_Group_2" data-name="&lt;Group&gt;"><path id="_Path_" data-name="&lt;Path&gt;" d="M24.76888,20.30068a4.94881,4.94881,0,0,1,2.35656-4.15206,5.06566,5.06566,0,0,0-3.99116-2.15768c-1.67924-.17626-3.30719,1.00483-4.1629,1.00483-.87227,0-2.18977-.98733-3.6085-.95814a5.31529,5.31529,0,0,0-4.47292,2.72787c-1.934,3.34842-.49141,8.26947,1.3612,10.97608.9269,1.32535,2.01018,2.8058,3.42763,2.7533,1.38706-.05753,1.9051-.88448,3.5794-.88448,1.65876,0,2.14479.88448,3.591.8511,1.48838-.02416,2.42613-1.33124,3.32051-2.66914a10.962,10.962,0,0,0,1.51842-3.09251A4.78205,4.78205,0,0,1,24.76888,20.30068Z" style={{fill: '#fff'}}/><path id="_Path_2" data-name="&lt;Path&gt;" d="M22.03725,12.21089a4.87248,4.87248,0,0,0,1.11452-3.49062,4.95746,4.95746,0,0,0-3.20758,1.65961,4.63634,4.63634,0,0,0-1.14371,3.36139A4.09905,4.09905,0,0,0,22.03725,12.21089Z" style={{fill: '#fff'}}/></g></g></g></svg></a></dd>
                <dd><a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="135" height="40" viewBox="0 0 135 40"><defs><linearGradient id="a" x1="21.8" y1="33.29" x2="5.02" y2="16.51" gradientTransform="matrix(1, 0, 0, -1, 0, 42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00a0ff"/><stop offset="0.01" stop-color="#00a1ff"/><stop offset="0.26" stop-color="#00beff"/><stop offset="0.51" stop-color="#00d2ff"/><stop offset="0.76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><linearGradient id="b" x1="33.83" y1="22" x2="9.64" y2="22" gradientTransform="matrix(1, 0, 0, -1, 0, 42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe000"/><stop offset="0.41" stop-color="#ffbd00"/><stop offset="0.78" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><linearGradient id="c" x1="24.83" y1="19.7" x2="2.07" y2="-3.05" gradientTransform="matrix(1, 0, 0, -1, 0, 42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><linearGradient id="d" x1="7.3" y1="41.82" x2="17.46" y2="31.66" gradientTransform="matrix(1, 0, 0, -1, 0, 42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#32a071"/><stop offset="0.07" stop-color="#2da771"/><stop offset="0.48" stop-color="#15cf74"/><stop offset="0.8" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient></defs><title>google-play-badge-2</title><rect width="135" height="40" fill="#fff" fill-opacity="0"/><rect width="135" height="40" rx="5" ry="5"/><path d="M130,.8A4.2,4.2,0,0,1,134.2,5V35a4.2,4.2,0,0,1-4.2,4.2H5A4.2,4.2,0,0,1,.8,35V5A4.2,4.2,0,0,1,5,.8H130m0-.8H5A5,5,0,0,0,0,5V35a5,5,0,0,0,5,5H130a5,5,0,0,0,5-5V5a5,5,0,0,0-5-5Z" fill="#a6a6a6"/><path d="M64.72,12.79a3.72,3.72,0,1,0,3.74,3.72A3.67,3.67,0,0,0,64.72,12.79Zm0,6a2.15,2.15,0,0,1-2.09-2.25,2.1,2.1,0,1,1,4.19,0A2.15,2.15,0,0,1,64.72,18.76Zm-8.14-6a3.72,3.72,0,1,0,3.74,3.72A3.67,3.67,0,0,0,56.58,12.79Zm0,6a2.15,2.15,0,0,1-2.09-2.25,2.1,2.1,0,1,1,4.19,0A2.15,2.15,0,0,1,56.58,18.76ZM46.9,13.93v1.58h3.77a3.2,3.2,0,0,1-.86,2,3.83,3.83,0,0,1-2.91,1.16,4.2,4.2,0,0,1,0-8.39,4,4,0,0,1,2.84,1.12l1.12-1.11a5.53,5.53,0,0,0-4-1.59A5.86,5.86,0,0,0,41,14.45a5.86,5.86,0,0,0,5.86,5.78,5.31,5.31,0,0,0,4-1.62,5.23,5.23,0,0,0,1.36-3.69,4.9,4.9,0,0,0-.08-1Zm39.6,1.23a3.46,3.46,0,0,0-3.18-2.37,3.54,3.54,0,0,0-3.51,3.72,3.64,3.64,0,0,0,3.69,3.72,3.71,3.71,0,0,0,3.1-1.65l-1.27-.85a2.12,2.12,0,0,1-1.83,1,1.89,1.89,0,0,1-1.8-1.13l5-2ZM81.43,16.4a2,2,0,0,1,1.95-2.17,1.44,1.44,0,0,1,1.38.79Zm-4,3.6H79V9.07H77.39Zm-2.67-6.38h-.06a2.57,2.57,0,0,0-2-.83,3.72,3.72,0,0,0,0,7.44,2.55,2.55,0,0,0,2-.85h.06v.54a1.9,1.9,0,0,1-2,2.18,2,2,0,0,1-1.87-1.33l-1.42.6a3.53,3.53,0,0,0,3.29,2.19c1.92,0,3.54-1.12,3.54-3.87V13H74.72Zm-1.88,5.14a2.14,2.14,0,0,1-2.07-2.24,2.16,2.16,0,0,1,2.07-2.27,2.1,2.1,0,0,1,2,2.27A2.07,2.07,0,0,1,72.84,18.76ZM94.16,9.07H90.25V20h1.63V15.86h2.28a3.46,3.46,0,0,0,3.58-3.39A3.47,3.47,0,0,0,94.16,9.07Zm0,5.27H91.88V10.59H94.2a1.88,1.88,0,1,1,0,3.75Zm10.08-1.57a3.06,3.06,0,0,0-2.91,1.67l1.44.61a1.77,1.77,0,0,1,3.21.6v.11a3.74,3.74,0,0,0-1.7-.42c-1.56,0-3.15.86-3.15,2.46a2.52,2.52,0,0,0,2.71,2.41A2.31,2.31,0,0,0,106,19.14H106V20h1.57V15.79C107.59,13.85,106.15,12.77,104.28,12.77Zm-.2,6c-.53,0-1.28-.27-1.28-.93,0-.84.93-1.17,1.73-1.17A2.91,2.91,0,0,1,106,17,2,2,0,0,1,104.08,18.76ZM113.33,13l-1.87,4.74h-.06L109.46,13h-1.75l2.91,6.62L109,23.31h1.7L115.14,13ZM98.64,20h1.63V9.07H98.64Z" fill="#fff"/><path d="M10.44,7.54A2,2,0,0,0,10,8.94V31.06a1.94,1.94,0,0,0,.47,1.4l.07.08L22.9,20.15v-.3L10.51,7.47Z" fill="url(#a)"/><path d="M27,24.28,22.9,20.15v-.3L27,15.72l.09.06L32,18.56c1.4.79,1.4,2.09,0,2.89l-4.89,2.78Z" fill="url(#b)"/><path d="M27.12,24.22,22.9,20,10.44,32.46a1.62,1.62,0,0,0,2.07.07l14.61-8.31" fill="url(#c)"/><path d="M27.12,15.78,12.51,7.48a1.61,1.61,0,0,0-2.07.06L22.9,20Z" fill="url(#d)"/><path d="M27,24.13,12.51,32.38a1.66,1.66,0,0,1-2,0h0l-.07.07h0l.07.08h0a1.66,1.66,0,0,0,2,0l14.61-8.31Z" opacity="0.2" style={{isolation:'isolate'}}/><path d="M10.44,32.32A2,2,0,0,1,10,30.91v.15a1.94,1.94,0,0,0,.47,1.4l.07-.07Z" opacity="0.12" style={{isolation:'isolate'}}/><path d="M32,21.3l-5,2.83.09.09L32,21.44A1.75,1.75,0,0,0,33.06,20h0A1.86,1.86,0,0,1,32,21.3Z" opacity="0.12" style={{isolation:'isolate'}}/><path d="M12.51,7.62,32,18.7A1.86,1.86,0,0,1,33.06,20h0A1.75,1.75,0,0,0,32,18.56L12.51,7.48C11.12,6.68,10,7.34,10,8.94v.15C10,7.49,11.12,6.83,12.51,7.62Z" fill="#fff" opacity="0.25" style={{isolation:'isolate'}}/><path d="M41.8,27c.59-.06,2.27-.22,3.91-.36,1-.08,1.81-.13,2.4-.15v.72a7.06,7.06,0,0,0-1.74.14,3.12,3.12,0,0,0-2,2.82c0,1.73,1.62,2.28,3.07,2.34l-.26.75c-1.65-.07-3.53-.95-3.53-2.94a3.61,3.61,0,0,1,1.66-3c-.79.09-3.22.33-4.18.53l-.08-.8C41.35,27.06,41.63,27.05,41.8,27Zm5.79,2.55-.46.21a8.79,8.79,0,0,0-.74-1.27l.46-.19A9.6,9.6,0,0,1,47.59,29.58Zm1-.39-.47.22a8,8,0,0,0-.77-1.26l.45-.2A12.18,12.18,0,0,1,48.62,29.19Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/><path d="M57.56,30.76h-3.7v2c0,.48-.14.68-.47.79a7,7,0,0,1-1.86.11,3.16,3.16,0,0,0-.29-.66c.76,0,1.46,0,1.67,0s.28-.07.28-.25v-2h-3.7V30.1h3.7V28.64h-3.1V28h3.1V26.61c-1,.11-2,.18-2.94.22a2.24,2.24,0,0,0-.17-.59,30.15,30.15,0,0,0,6.09-.76l.5.53a15.49,15.49,0,0,1-2.81.53V28h3.19v.64H53.86V30.1h3.7Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/><path d="M60.3,26.25c0,.15-.13.44-.17.6a20.61,20.61,0,0,0-.43,3.41,10.26,10.26,0,0,0,.07,1.23c.15-.41.35-.93.49-1.28l.39.28c-.22.64-.55,1.58-.63,2a2,2,0,0,0,0,.4l0,.31-.64,0A11.14,11.14,0,0,1,59,30.39a24.42,24.42,0,0,1,.4-3.58c0-.2.06-.44.06-.63Zm2,4.32a2.9,2.9,0,0,0-.12.82c0,.4.27.8,1.49.8A9.3,9.3,0,0,0,65.92,32v.76a11.74,11.74,0,0,1-2.23.18c-1.49,0-2.16-.5-2.16-1.33a5.29,5.29,0,0,1,.15-1.06ZM62,26.93a15.53,15.53,0,0,0,3.67,0v.74a22.36,22.36,0,0,1-3.66,0Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/><path d="M71.67,26A7.71,7.71,0,0,0,75.4,33.1a3.13,3.13,0,0,0-.54.55,7.75,7.75,0,0,1-3.57-5,8,8,0,0,1-3.59,5,5.4,5.4,0,0,0-.61-.53c2-1,3.1-2.84,3.65-5.36l.4.06A10.48,10.48,0,0,1,71,26.68H68.8V26Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/><path d="M84.17,32.28a2.31,2.31,0,0,1-1.64.74c-.58,0-1-.39-1-1.13,0-1,.33-2.46.33-3.32,0-.52-.26-.73-.71-.73a4.85,4.85,0,0,0-2.62,1.72c0,.38,0,.73,0,1,0,.81,0,1.35,0,2.15,0,.16,0,.38,0,.54h-.79c0-.12,0-.38,0-.53,0-.85,0-1.29,0-2.28,0-.09,0-.21,0-.35-.44.66-1,1.52-1.45,2.11L76,31.62c.49-.62,1.52-2,2-2.71,0-.29,0-.58,0-.86l-1.73.23-.08-.75a3.92,3.92,0,0,0,.59,0c.29,0,.81-.07,1.27-.14,0-.42,0-.74,0-.84a3.73,3.73,0,0,0,0-.66l.85,0c0,.22-.12.72-.18,1.34h0l.26.31c-.11.16-.26.41-.4.62s0,.34,0,.51a5,5,0,0,1,2.73-1.5,1.11,1.11,0,0,1,1.25,1.2c0,.89-.33,2.43-.33,3.33,0,.31.15.54.46.54a2,2,0,0,0,1.34-.74Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/><path d="M89.19,28.47c0,.58,0,1.45.09,2.22a7.08,7.08,0,0,1,2.77,1.52l-.43.67a6.16,6.16,0,0,0-2.31-1.47c0,.24,0,.43,0,.6,0,.73-.45,1.36-1.64,1.36S85.55,33,85.55,32c0-.8.71-1.46,2.25-1.46a4.73,4.73,0,0,1,.75.05c0-.72-.07-1.54-.07-2.07s0-1.25,0-1.63A6.13,6.13,0,0,0,88.4,26h.86c0,.19-.06.61-.07.88s0,.56,0,.91c.71,0,1.84-.06,2.64-.17l0,.68c-.8.07-1.94.13-2.67.15Zm-.61,2.74a4.27,4.27,0,0,0-.87-.08c-.92,0-1.44.31-1.44.8s.49.76,1.35.76c.65,0,1-.31,1-.92C88.59,31.63,88.58,31.44,88.58,31.21Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/><path d="M97.41,28.7a8.36,8.36,0,0,0-2.43.46c-.27.07-.53.18-.75.26L94,28.59c.24,0,.55-.08.81-.13A12.09,12.09,0,0,1,97.48,28a2,2,0,0,1,2.22,2c0,1.93-1.72,3-4,3.37l-.42-.68c2.16-.27,3.69-1.12,3.69-2.72A1.34,1.34,0,0,0,97.41,28.7ZM99,26.38l-.11.69c-1-.06-2.79-.24-3.8-.42L95.2,26A24.48,24.48,0,0,0,99,26.38Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.2"/></svg></a></dd>
              </dl>
            </div>
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">当社からのお知らせ</div>
              </div>
              <div className="section_user_articles">
                <div className="section_user_article">
                  <div className="section_user_article_date">2018/1/17</div>
                  <div className="section_user_article_title"><a href="#">只今障害が発生しています。</a></div>
                </div>
                <div className="section_user_article">
                  <div className="section_user_article_date">2018/1/16</div>
                  <div className="section_user_article_title"><a href="#">只今障害が発生しています。</a></div>
                </div>
                <div className="section_user_article">
                  <div className="section_user_article_date">2018/1/15</div>
                  <div className="section_user_article_title"><a href="#">只今障害が発生しています。</a></div>
                </div>
              </div>
            </div>
            <div className="u-mt40p">
              <div className="p-section_header">
                <div className="p-section_header_title">お客様宛へのお知らせ</div>
              </div>
              <div className="section_user_articles">
                <div className="section_user_article">
                  <div className="section_user_article_date">2018/1/17</div>
                  <div className="section_user_article_title"><a href="#">追証が発生しています。</a></div>
                </div>
                <div className="section_user_article">
                  <div className="section_user_article_date">2018/1/16</div>
                  <div className="section_user_article_title"><a href="#">お取引が約定しました。</a></div>
                </div>
                <div className="section_user_article">
                  <div className="section_user_article_date">2018/1/15</div>
                  <div className="section_user_article_title"><a href="#">お取引が約定しました。</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;