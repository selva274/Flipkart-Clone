import React, { useState } from 'react'
import "./navbar.css";
import {Link} from "react-router-dom";
const Navbar = ({setSearchValue}) => { 
  const [searchValue,setSearchValue1]=useState("");
  const handlesubmit=(event)=>{
    event.preventDefault(); 
  }
   return( 
       <div className="container">
      <Link to="/">
       <svg xmlns="http://www.w3.org/2000/svg" width="159" height="40" viewBox="0 0 159 40" fill="none">

  <path d="M82.7564 4.78263L83.0013 3.18827C83.043 2.93813 82.97 2.68796 82.8033 2.49515C82.6417 2.30234 82.402 2.19287 82.1467 2.19287H72.4645C72.0372 2.19287 71.6777 2.50027 71.6099 2.92237L69.0096 19.3632C68.9731 19.6133 69.0409 19.8688 69.2076 20.0616C69.3692 20.2544 69.6089 20.369 69.859 20.369H72.0945C72.5219 20.369 72.8762 20.0616 72.9492 19.6395L73.9549 13.261H79.4943C79.9164 13.261 80.2759 12.9536 80.3437 12.5315L80.573 11.1402C80.6094 10.8901 80.5417 10.6348 80.3749 10.442C80.2082 10.244 79.9685 10.1344 79.7131 10.1344H74.4864L75.1691 5.51747H81.8966C82.3343 5.51226 82.6939 5.20993 82.7564 4.78263ZM133.507 10.27L133.439 10.2438C132.84 10.0614 132.142 9.96265 131.376 9.96265C130.13 9.96265 129.182 10.4679 128.562 11.4685C127.957 12.4534 127.644 13.5635 127.644 14.762C127.644 15.5176 127.775 16.1532 128.035 16.6482C128.306 17.1589 128.692 17.4248 129.182 17.4248C129.729 17.4248 130.359 17.0703 131.063 16.3772C131.751 15.6998 132.381 14.8871 132.923 13.9699L133.507 10.27ZM137.572 8.37847L135.795 19.655C135.727 20.0823 135.367 20.3848 134.94 20.3848H133.622C133.387 20.3848 133.163 20.2908 133.001 20.1189C132.84 19.9521 132.751 19.7229 132.762 19.4884L132.814 18.0917L132.658 18.2637C132.652 18.2689 132.147 18.8317 131.563 19.2851C130.693 19.9625 129.729 20.3273 129.625 20.369C129.088 20.567 128.51 20.6659 127.905 20.6659C126.576 20.6659 125.586 20.1917 124.862 19.2225C124.143 18.2584 123.783 16.9767 123.783 15.4238C123.783 14.6161 123.866 13.8188 124.023 13.058C124.184 12.2972 124.466 11.5259 124.867 10.7598C125.268 9.99901 125.774 9.32153 126.368 8.75352C126.957 8.18551 127.738 7.72165 128.681 7.36729C129.625 7.01815 130.703 6.8411 131.876 6.8411C133.319 6.8411 135.003 7.02352 136.879 7.3935C137.342 7.4873 137.645 7.91468 137.572 8.37847ZM147.014 6.97138C146.128 7.17982 145.263 7.72177 144.69 8.14387C144.039 8.62328 143.106 9.63951 143.09 9.64993L142.934 9.82194L143.017 8.02911C143.028 7.79461 142.944 7.56012 142.777 7.38816C142.616 7.21619 142.387 7.12252 142.152 7.12252H140.823C140.396 7.12252 140.036 7.42471 139.969 7.85202L138.15 19.384C138.114 19.6342 138.186 19.8843 138.348 20.0772C138.51 20.27 138.749 20.3794 139.005 20.3794H141.058C141.485 20.3794 141.845 20.072 141.912 19.6499L142.871 13.5112C143.418 12.7399 144.127 12.0781 144.987 11.5361C145.628 11.1349 146.284 10.8744 146.941 10.7754C147.301 10.718 147.587 10.4421 147.655 10.0825L148.051 7.97186C148.108 7.68525 148.015 7.39343 147.801 7.1902C147.603 6.98697 147.301 6.90884 147.014 6.97138ZM105.815 12.7453C105.815 11.9845 105.68 11.3486 105.419 10.8588C105.148 10.3481 104.768 10.0876 104.278 10.0876C103.731 10.0876 103.095 10.4369 102.397 11.1351C101.704 11.8178 101.078 12.6253 100.531 13.5425L99.9477 17.2373L100.021 17.2581C100.62 17.4457 101.313 17.5393 102.084 17.5393C103.335 17.5393 104.283 17.034 104.898 16.0335C105.503 15.0538 105.815 13.949 105.815 12.7453ZM108.593 8.28966C109.307 9.25371 109.672 10.5358 109.672 12.0835C109.672 13.1048 109.531 14.1052 109.255 15.0536C108.978 16.002 108.541 16.9244 107.952 17.7999C107.368 18.6649 106.524 19.3736 105.44 19.8947C104.351 20.421 103.059 20.6922 101.605 20.6922C101.032 20.6922 100.307 20.6349 99.4526 20.5151L99.3641 20.5046L99.2077 22.0679C99.2025 22.0836 99.2025 22.099 99.2025 22.1199L98.7492 24.8661C98.6762 25.283 98.3218 25.5854 97.8997 25.5854H95.8622C95.6069 25.5854 95.3724 25.4759 95.2108 25.2831C95.0441 25.0903 94.9711 24.84 95.0128 24.5847L97.6705 7.85202C97.7382 7.42992 98.0978 7.12761 98.5251 7.12761H99.8435C100.078 7.12761 100.307 7.22141 100.469 7.38816C100.63 7.56012 100.719 7.78939 100.709 8.01868L100.656 9.4362L100.813 9.23824C100.828 9.22261 102.084 7.6957 104.007 7.09122C104.539 6.92447 105.049 6.8411 105.565 6.8411C106.873 6.84631 107.869 7.31519 108.593 8.28966ZM156.133 7.12252H154.528L154.883 4.8297C154.919 4.57957 154.846 4.32419 154.685 4.13659C154.523 3.94378 154.278 3.83431 154.028 3.83431H152.407C152.027 3.83431 151.688 4.08441 151.579 4.45439L150.792 7.12252H149.906C149.479 7.12252 149.125 7.42483 149.057 7.84693L148.854 9.0871C148.817 9.33723 148.88 9.59249 149.052 9.7853C149.213 9.97811 149.453 10.0876 149.708 10.0876H150.245L149.286 16.2261C149.218 16.6117 149.182 17.0131 149.182 17.4352C149.182 18.5243 149.468 19.3164 150.063 19.8583C150.646 20.3899 151.537 20.6659 152.72 20.6659C153.429 20.6659 154.429 20.369 154.549 20.3273C154.643 20.2908 154.82 20.2336 154.841 20.2232C154.878 20.2076 154.914 20.1918 154.945 20.1761C155.195 20.0406 155.357 19.7958 155.388 19.5197L155.539 18.2482C155.565 17.9824 155.472 17.7113 155.274 17.5289C155.216 17.4768 155.159 17.4301 155.091 17.3884C155.044 17.3676 155.003 17.3465 154.956 17.3309C154.924 17.3205 154.846 17.3048 154.539 17.31C154.466 17.31 154.388 17.3154 154.31 17.3154C154.169 17.3154 154.08 17.31 154.033 17.2996C153.913 17.2788 153.616 17.2163 153.465 17.0808C153.392 17.0183 153.168 16.8203 153.168 16.0907C153.168 16.0178 153.174 15.9084 153.194 15.7521L154.075 10.0929H155.894C156.305 10.0929 156.665 9.80107 156.743 9.39981L156.983 8.15939C157.035 7.90404 156.967 7.64368 156.8 7.44566C156.639 7.23722 156.394 7.12252 156.133 7.12252ZM123.47 7.47162C123.309 7.25275 123.048 7.12252 122.777 7.12252H120.63C120.25 7.12252 119.911 7.37795 119.802 7.73751C119.619 8.36284 119.276 9.08178 118.77 9.88428C118.067 11.0151 117.488 11.7135 116.998 12.0262L116.92 12.0626C116.748 12.1512 116.477 12.2813 115.529 12.4481L115.409 12.4689L116.894 3.18827C116.931 2.93813 116.863 2.68275 116.696 2.49515C116.535 2.30234 116.295 2.18753 116.045 2.18753H113.992C113.564 2.18753 113.205 2.49518 113.137 2.91728L110.526 19.3894C110.484 19.6395 110.557 19.8897 110.719 20.0825C110.881 20.2753 111.125 20.3899 111.376 20.3899H113.429C113.856 20.3899 114.216 20.0825 114.283 19.6604L114.956 15.3663H116.243L118.014 19.8428C118.145 20.1763 118.463 20.3899 118.817 20.3899H121.047C121.521 20.3899 121.912 20.0042 121.912 19.5247C121.912 19.4101 121.886 19.2904 121.839 19.181L119.812 13.9542L119.854 13.9178C120.693 13.1622 121.553 12.0886 122.413 10.739C122.97 9.86351 123.366 9.01929 123.601 8.24285C123.684 7.97187 123.632 7.69048 123.47 7.47162ZM93.7413 5.98641C94.5959 5.98641 95.2369 5.76754 95.6433 5.3246C96.055 4.87645 96.2583 4.3242 96.2583 3.62591C96.2583 3.08396 96.1071 2.67758 95.7997 2.40661C95.4974 2.13563 95.0285 2 94.4031 2C93.5485 2 92.9075 2.22409 92.5063 2.66182C92.0894 3.10997 91.8862 3.66756 91.8862 4.36584C91.8862 4.90779 92.0425 5.3143 92.3448 5.58006C92.6574 5.85625 93.1108 5.98641 93.7413 5.98641ZM94.4344 7.12252H92.4021C91.9748 7.12252 91.6204 7.42483 91.5475 7.84693L89.7288 19.384C89.6923 19.6342 89.7601 19.8896 89.9268 20.0772C90.0884 20.27 90.3281 20.3794 90.5782 20.3794H92.6105C93.0378 20.3794 93.3922 20.072 93.4651 19.6499L95.2838 8.11791C95.3203 7.86778 95.2525 7.6124 95.0858 7.4248C94.9242 7.2372 94.6897 7.12252 94.4344 7.12252ZM88.5563 2.49515C88.7179 2.68796 88.796 2.93813 88.7543 3.18827L86.7533 15.9554C86.7324 16.1742 86.7272 16.3095 86.7272 16.3981C86.7272 16.8254 86.8106 17.1225 86.9721 17.2737C87.1233 17.4144 87.4568 17.4925 87.5141 17.5029C87.6965 17.529 87.8684 17.6229 87.9987 17.7584C88.1707 17.9408 88.2593 18.1907 88.2384 18.4408L88.1238 19.5873C88.0977 19.8323 87.9935 20.0354 87.8424 20.1448C87.7017 20.2386 87.5297 20.3274 87.3109 20.4107C87.092 20.4941 86.4771 20.6713 86.0498 20.6713C84.9711 20.6713 84.1373 20.4211 83.5693 19.926C83.0065 19.4362 82.7199 18.7222 82.7199 17.7999C82.7199 17.5497 82.746 17.2738 82.7981 16.9767C82.8137 16.8517 84.9711 3.07883 84.9971 2.92771C85.0649 2.50562 85.4245 2.19796 85.8518 2.19796H87.9049C88.1551 2.19275 88.3896 2.30234 88.5563 2.49515Z" fill="#2A55E5"/>
  <path d="M147.678 29.5242C147.678 29.5242 148.967 30.1648 149.603 30.4367C150.221 30.7007 150.291 31.6903 149.611 32.0245C148.93 32.3588 148.742 32.4131 148.742 32.4131C148.742 32.4131 148.849 32.1359 148.835 31.868C148.791 31.3905 147.385 31.0031 146.453 30.7737C146.453 30.7737 145.738 28.5214 145.414 27.894C145.089 27.2626 144.43 27 144.43 27L145.988 27.0212C145.988 27.0212 146.524 26.9946 146.762 27.5716C146.999 28.1513 147.678 29.5242 147.678 29.5242Z" fill="url(#paint0_linear_11912_12661)"/>
  <path d="M147.588 34.4583C147.588 34.4583 146.956 35.737 146.678 36.3909C146.414 37.0117 145.409 37.082 145.076 36.3989C144.743 35.7157 144.709 35.595 144.709 35.595C144.709 35.595 144.91 35.6348 145.23 35.6202C145.706 35.5765 146.114 34.1651 146.343 33.23C146.343 33.23 148.585 32.5111 149.212 32.1874C149.841 31.8611 150.101 31.1992 150.101 31.1992L150.08 32.9966C150.08 32.9966 150.107 33.303 149.532 33.5417C148.955 33.7778 147.588 34.4583 147.588 34.4583Z" fill="url(#paint1_linear_11912_12661)"/>
  <path d="M142.628 34.3683C142.628 34.3683 141.346 33.7315 140.703 33.4556C140.084 33.1917 140.014 32.2009 140.695 31.8679C141.375 31.5337 141.649 31.4727 141.649 31.4727C141.649 31.4727 141.472 31.7565 141.515 32.0762C141.56 32.555 142.922 32.8892 143.851 33.1187C143.851 33.1187 144.593 35.3577 144.89 35.9984C145.252 36.7783 145.852 36.8978 145.852 36.8978L144.085 36.8712C144.085 36.8712 143.779 36.8977 143.541 36.3207C143.306 35.7411 142.628 34.3683 142.628 34.3683Z" fill="url(#paint2_linear_11912_12661)"/>
  <path d="M142.734 29.4255C142.734 29.4255 143.368 28.1402 143.643 27.4929C143.906 26.8721 144.892 26.8031 145.225 27.4849C145.558 28.168 145.59 28.2914 145.59 28.2914C145.59 28.2914 145.339 28.2953 145.073 28.3099C144.596 28.355 144.208 29.7213 143.98 30.6551C143.98 30.6551 141.744 31.3886 141.111 31.6976C140.24 32.1221 140.207 32.666 140.207 32.666L140.243 30.8898C140.243 30.8898 140.216 30.5835 140.791 30.3447C141.366 30.1059 142.734 29.4255 142.734 29.4255Z" fill="url(#paint3_linear_11912_12661)"/>
  <path d="M73.8872 35.6454H68L69.2929 27.4841H75.1801L74.9377 29.0656H70.9205L70.655 30.774H74.1297L73.8872 32.2862H70.4126L70.1356 34.0639H74.1412L73.8872 35.6454Z" fill="#9E9E9E"/>
  <path d="M80.7741 35.6454H78.7424L77.9112 33.9254L76.4567 35.6454H74.5405L77.1263 32.6094L75.5794 29.5619H77.6227L78.4307 31.3512L79.9083 29.5619H81.7668L79.181 32.5748L80.7741 35.6454Z" fill="#9E9E9E"/>
  <path d="M86.0739 29.4349C86.6819 29.4349 87.1513 29.6581 87.4822 30.1045C87.8131 30.5508 87.9786 31.1319 87.9786 31.8476C87.9786 32.317 87.9132 32.7711 87.7824 33.2097C87.6592 33.6407 87.463 34.0562 87.1936 34.4564C86.9243 34.8566 86.5395 35.1798 86.0393 35.4261C85.539 35.6647 84.9542 35.7839 84.2846 35.7839C84.023 35.7839 83.6959 35.757 83.3034 35.7031L83.2342 36.3842L82.9687 38.0003H81.1794L82.5185 29.5619H83.9268L83.8806 30.8548C84.4501 29.9082 85.1812 29.4349 86.0739 29.4349ZM85.4967 30.9818C85.2582 30.9818 84.9811 31.1357 84.6656 31.4435C84.3577 31.7514 84.0807 32.1131 83.8344 32.5286L83.5805 34.1563C83.8498 34.2409 84.1577 34.2833 84.504 34.2833C85.0581 34.2833 85.4698 34.0639 85.7391 33.6253C86.0162 33.1789 86.1547 32.6864 86.1547 32.1477C86.1547 31.8091 86.097 31.532 85.9816 31.3166C85.8661 31.0934 85.7045 30.9818 85.4967 30.9818Z" fill="#9E9E9E"/>
  <path d="M91.7202 34.1563L91.5817 35.5184C91.1584 35.6877 90.7236 35.7724 90.2773 35.7724C89.7771 35.7724 89.3923 35.657 89.1229 35.4261C88.8613 35.1952 88.7304 34.8643 88.7304 34.4333C88.7304 34.3179 88.742 34.1909 88.7651 34.0524L89.8386 27.207H91.6394L90.6351 33.6022C90.6274 33.6945 90.6236 33.76 90.6236 33.7984C90.6236 33.9831 90.6544 34.1063 90.7159 34.1678C90.7852 34.2294 90.9199 34.2602 91.12 34.2602C91.2816 34.2602 91.4817 34.2255 91.7202 34.1563Z" fill="#9E9E9E"/>
  <path d="M95.1317 35.7608C94.3006 35.7455 93.6541 35.5223 93.1924 35.0913C92.7306 34.6604 92.4998 34.0562 92.4998 33.279C92.4998 32.14 92.823 31.2165 93.4694 30.5085C94.1236 29.7928 94.9932 29.4349 96.0783 29.4349C96.9402 29.4349 97.6059 29.6504 98.0753 30.0814C98.5525 30.5047 98.791 31.1126 98.791 31.9053C98.791 33.0827 98.4678 34.0216 97.8214 34.7219C97.1749 35.4145 96.2784 35.7608 95.1317 35.7608ZM95.3279 34.2602C95.8359 34.2602 96.2399 34.0716 96.54 33.6945C96.8402 33.3098 96.9902 32.7864 96.9902 32.1246C96.9902 31.3243 96.6478 30.9241 95.9628 30.9241C95.4626 30.9241 95.0586 31.1126 94.7508 31.4897C94.4429 31.8668 94.289 32.394 94.289 33.0712C94.289 33.4791 94.3737 33.7792 94.543 33.9716C94.72 34.1563 94.9816 34.2525 95.3279 34.2602Z" fill="#9E9E9E"/>
  <path d="M99.345 35.6454L100.303 29.5619H101.723L101.654 31.028C102.277 29.966 103.054 29.4349 103.986 29.4349H104.089L103.743 31.2704C103.351 31.2704 102.962 31.3935 102.577 31.6398C102.192 31.8783 101.877 32.1708 101.631 32.5171L101.146 35.6454H99.345Z" fill="#9E9E9E"/>
  <path d="M110.056 31.2704C109.994 32.6864 108.936 33.3944 106.881 33.3944C106.589 33.3944 106.304 33.3829 106.027 33.3598C106.065 33.7138 106.189 33.9677 106.396 34.1217C106.612 34.2756 106.977 34.3525 107.493 34.3525C108.101 34.3525 108.728 34.2409 109.375 34.0178L109.098 35.4838C108.451 35.6839 107.758 35.7839 107.02 35.7839C105.988 35.7839 105.253 35.5646 104.815 35.126C104.384 34.6873 104.168 34.0524 104.168 33.2213C104.168 32.1592 104.484 31.2665 105.115 30.5431C105.754 29.8197 106.612 29.458 107.689 29.458C108.497 29.458 109.094 29.6235 109.478 29.9544C109.863 30.2776 110.056 30.7163 110.056 31.2704ZM106.119 32.2285C106.196 32.2439 106.319 32.2516 106.489 32.2516C107.666 32.2516 108.255 31.9784 108.255 31.432C108.255 31.255 108.197 31.1126 108.082 31.0049C107.966 30.8894 107.793 30.8317 107.562 30.8317C107.193 30.8317 106.885 30.9549 106.639 31.2011C106.4 31.4474 106.227 31.7898 106.119 32.2285Z" fill="#9E9E9E"/>
  <path d="M115.123 35.6454H113.242L114.535 27.4841H117.882C118.906 27.4841 119.625 27.6726 120.041 28.0497C120.464 28.4268 120.676 28.9578 120.676 29.6427C120.676 29.989 120.645 30.3123 120.584 30.6124C120.522 30.9048 120.407 31.205 120.237 31.5128C120.076 31.8129 119.86 32.0707 119.591 32.2862C119.329 32.494 118.979 32.6672 118.54 32.8057C118.102 32.9365 117.594 33.0019 117.017 33.0019H115.551L115.123 35.6454ZM115.781 31.5128H117.086C118.179 31.5128 118.725 30.9933 118.725 29.9544C118.725 29.6312 118.633 29.3888 118.448 29.2272C118.263 29.0579 117.944 28.9732 117.49 28.9732H116.185L115.781 31.5128Z" fill="#FFC200"/>
  <path d="M123.907 34.1563L123.769 35.5184C123.345 35.6877 122.91 35.7724 122.464 35.7724C121.964 35.7724 121.579 35.657 121.31 35.4261C121.048 35.1952 120.917 34.8643 120.917 34.4333C120.917 34.3179 120.929 34.1909 120.952 34.0524L122.025 27.207H123.826L122.822 33.6022C122.814 33.6945 122.81 33.76 122.81 33.7984C122.81 33.9831 122.841 34.1063 122.903 34.1678C122.972 34.2294 123.107 34.2602 123.307 34.2602C123.468 34.2602 123.668 34.2255 123.907 34.1563Z" fill="#FFC200"/>
  <path d="M131.104 29.5619L130.134 35.6454H128.726L128.772 34.3525C128.133 35.2991 127.314 35.7724 126.313 35.7724C125.775 35.7724 125.371 35.6223 125.101 35.3222C124.832 35.0221 124.697 34.6219 124.697 34.1217C124.697 33.9139 124.713 33.7292 124.743 33.5676L125.39 29.5619H127.179L126.614 33.1174C126.59 33.2328 126.579 33.3559 126.579 33.4868C126.579 33.9408 126.741 34.1678 127.064 34.1678C127.318 34.1678 127.602 34.0255 127.918 33.7407C128.234 33.456 128.53 33.0981 128.807 32.6672L129.303 29.5619H131.104Z" fill="#FFC200"/>
  <path d="M131.36 35.4723L131.672 33.9716C131.726 34.0332 131.968 34.1101 132.399 34.2025C132.83 34.2871 133.234 34.3294 133.611 34.3294C134.389 34.3294 134.777 34.137 134.777 33.7523C134.777 33.6137 134.677 33.5021 134.477 33.4175C134.285 33.3328 134.046 33.2636 133.761 33.2097C133.484 33.1481 133.203 33.0712 132.919 32.9788C132.642 32.8788 132.403 32.7133 132.203 32.4825C132.011 32.2439 131.914 31.9438 131.914 31.5821C131.914 30.8894 132.165 30.3584 132.665 29.989C133.165 29.6196 133.919 29.4349 134.927 29.4349C135.258 29.4349 135.581 29.458 135.897 29.5042C136.212 29.5427 136.451 29.585 136.613 29.6312C136.782 29.6774 136.89 29.7158 136.936 29.7466L136.636 31.2011C136.505 31.1165 136.266 31.0434 135.92 30.9818C135.574 30.9202 135.239 30.8894 134.916 30.8894C134.115 30.8894 133.715 31.0741 133.715 31.4435C133.715 31.5744 133.811 31.6783 134.004 31.7552C134.204 31.8322 134.442 31.9014 134.719 31.963C134.997 32.0169 135.274 32.0938 135.551 32.1939C135.835 32.2862 136.074 32.4517 136.266 32.6902C136.466 32.9211 136.566 33.2174 136.566 33.5791C136.566 34.3256 136.297 34.8758 135.758 35.2298C135.227 35.5838 134.496 35.7608 133.565 35.7608C133.211 35.7608 132.853 35.7378 132.492 35.6916C132.13 35.6454 131.857 35.6031 131.672 35.5646C131.495 35.5184 131.391 35.4876 131.36 35.4723Z" fill="#FFC200"/>
  <defs>
    <linearGradient id="paint0_linear_11912_12661" x1="144.463" y1="26.9664" x2="149.609" y2="32.094" gradientUnits="userSpaceOnUse">
      <stop offset="0.0411" stop-color="#FFF300"/>
      <stop offset="0.2727" stop-color="#FFF300"/>
      <stop offset="0.5022" stop-color="#FFE500"/>
      <stop offset="0.8126" stop-color="#F2A930"/>
    </linearGradient>
    <linearGradient id="paint1_linear_11912_12661" x1="145.01" y1="36.3995" x2="150.165" y2="31.2631" gradientUnits="userSpaceOnUse">
      <stop offset="0.1874" stop-color="#F2A930"/>
      <stop offset="0.4978" stop-color="#FFE500"/>
      <stop offset="0.7273" stop-color="#FFF300"/>
      <stop offset="0.9589" stop-color="#FFF300"/>
    </linearGradient>
    <linearGradient id="paint2_linear_11912_12661" x1="140.703" y1="31.7914" x2="145.84" y2="36.9099" gradientUnits="userSpaceOnUse">
      <stop offset="0.1874" stop-color="#F2A930"/>
      <stop offset="0.4978" stop-color="#FFE500"/>
      <stop offset="0.7273" stop-color="#FFF300"/>
      <stop offset="0.9589" stop-color="#FFF300"/>
    </linearGradient>
    <linearGradient id="paint3_linear_11912_12661" x1="140.179" y1="32.6384" x2="145.322" y2="27.5143" gradientUnits="userSpaceOnUse">
      <stop offset="0.0411" stop-color="#FFF300"/>
      <stop offset="0.2727" stop-color="#FFF300"/>
      <stop offset="0.5022" stop-color="#FFE500"/>
      <stop offset="0.8126" stop-color="#F2A930"/>
    </linearGradient>
  </defs>
      </svg>
      </Link>
      <form onSubmit={handlesubmit}>
      <i class="bi bi-search"></i>
      <input type="text" value={searchValue} onChange={(e)=>{setSearchValue1(e.target.value)}} placeholder='Search for Prducts, Brands and more'/>
      <input type='submit'/>
      </form>
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span><i class="bi bi-person-circle"></i></span>Go
  </button>
  <ul class="dropdown-menu"> 
    <li><Link className='dropdown-item' to='/profiles'>Profiles</Link></li>
    <li><Link className='dropdown-item' to='/user/myprofile'>MyProfile</Link></li>
    <li><Link className='dropdown-item' to='/order'>Orders</Link></li>
    <li><Link className='dropdown-item' to='/wishlist'>WishList</Link></li> 
    <li><Link className='dropdown-item' to='/login'>Login</Link></li> 
  </ul>
</div>
  <div className="cart">
  <Link to='/cart'><i class="bi bi-cart3"></i><p>Cart</p></Link>   
  </div>
 
   <div className="store">
      <Link to='/seller'>
      <i class="bi bi-shop"></i>
      <p><span>Become a Seller</span></p>
      </Link>
    </div>
    
    <div class="dropdown">
    <i class="bi bi-three-dots-vertical" type="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
  <ul class="dropdown-menu">
    <li><Link className='dropdown-item' to='/notification'>Notification</Link></li>  
  </ul>
</div>
       </div>
   )
}

export default Navbar