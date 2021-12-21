import React from "react";

function Header(props) {
  return (
    <header>
      <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <svg
            width="150"
            height="20"
            viewBox="0 0 280 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M158.177 52.4668C159.119 52.1045 160.052 51.7624 160.955 51.3901C163.724 50.2731 166.265 48.965 168.082 46.6204C168.539 46.0267 168.958 45.3726 169.31 44.638C169.595 44.0644 169.843 43.4405 170.062 42.7563C169.824 42.9575 169.576 43.1487 169.31 43.3299C168.92 43.6015 168.511 43.8531 168.082 44.0946C166.084 45.2015 163.61 46.0568 160.955 46.8619C160.042 47.1336 159.11 47.4052 158.177 47.687C157.578 47.8581 156.978 48.0392 156.379 48.2203C156.892 47.2644 157.492 46.248 158.177 45.2216C158.986 44.0141 159.909 42.8066 160.955 41.6594C162.069 40.4419 163.325 39.2947 164.733 38.3186C163.487 38.7815 162.221 39.506 160.955 40.4117C160.023 41.0859 159.09 41.8506 158.177 42.6858C157.482 43.3198 156.788 43.994 156.112 44.6883C154.514 46.3386 153.01 48.1096 151.65 49.8002L151.374 49.9109C148.005 51.2089 144.96 52.8794 142.934 55.385C142.239 56.2403 141.668 57.1862 141.24 58.2528C141.173 54.6605 141.82 51.6517 142.934 49.0958C144.789 44.8393 147.958 41.8506 151.374 39.5966C152.934 38.5702 154.552 37.6847 156.112 36.9098C156.816 36.5577 157.501 36.2356 158.177 35.9237C159.157 35.4709 160.09 35.0482 160.955 34.6357C164.076 33.1766 166.303 31.9489 166.303 30.2685C164.704 31.6772 162.859 32.3615 160.955 32.7942C160.032 33.0055 159.09 33.1565 158.177 33.3074C157.473 33.4181 156.788 33.5288 156.112 33.6596C155.351 33.8105 154.609 33.9917 153.914 34.2332C155.741 28.437 156.388 25.8107 154.666 20.3366C154.666 27.3503 153.848 31.0534 151.374 34.1124C150.784 34.8369 150.108 35.5212 149.318 36.2155C147.596 37.7149 145.151 39.1136 142.934 41.0255C142.049 41.7903 141.202 42.6355 140.441 43.6015C140.298 43.7827 140.155 43.9739 140.022 44.1651C140.022 42.9676 140.174 41.8305 140.441 40.7236C140.964 38.5299 141.915 36.4771 142.934 34.4143C145.474 29.232 148.357 23.9793 145.655 16.1807C145.331 20.9101 144.228 24.2409 142.934 26.9578C142.125 28.6484 141.249 30.0974 140.441 31.4961C139.489 33.1464 138.642 34.7262 138.138 36.5375L137.929 36.3564C136.844 35.4306 135.921 34.525 135.16 33.6395C130.402 28.1452 131.296 23.1944 132.315 15.587C126.31 34.6256 135.131 31.4961 135.131 46.1675C132.248 42.2028 129.574 39.3953 127.414 36.5677C124.131 32.281 122 27.9339 122 19.3605C120.164 29.0207 123.532 34.3439 127.414 40.0997C130.402 44.5172 133.685 49.1763 135.16 56.2302C135.436 57.5484 135.645 58.9472 135.788 60.4364C135.578 60.1849 135.369 59.9333 135.16 59.6918C132.61 56.7032 130.097 54.4391 127.414 52.4467C126.976 52.1247 126.539 51.8026 126.092 51.4907C123.608 46.4694 123.189 40.633 118.936 35.813C118.622 35.4608 118.289 35.1086 117.927 34.7665C118.299 35.3501 118.632 35.9338 118.936 36.5174C121.201 40.9047 121.619 45.3826 123.104 49.4882C121.781 48.643 120.401 47.7977 118.936 46.9021C117.918 46.2782 116.862 45.6342 115.758 44.9499C113.826 43.7525 111.752 42.4443 109.506 40.9349C108.869 40.5022 108.222 40.0595 107.556 39.5966C107.584 40.8343 108.336 42.0016 109.506 43.1387C111.096 44.6984 113.455 46.2178 115.758 47.8379C116.862 48.6128 117.947 49.4077 118.936 50.253C120.268 51.38 121.429 52.5775 122.181 53.8856C121.581 53.6743 120.44 53.3926 118.936 53.0907C117.994 52.8995 116.919 52.7083 115.758 52.5171C113.845 52.2152 111.695 51.9435 109.506 51.7624C108.631 51.692 107.756 51.6316 106.89 51.5913C106.033 51.5511 105.177 51.531 104.349 51.541C100.867 51.5611 97.7551 51.9838 95.9853 53.1209C95.8997 53.1812 95.814 53.2316 95.7284 53.2919H95.9853C98.8399 53.302 101.647 53.4227 104.349 53.7045C105.206 53.7951 106.052 53.8957 106.89 54.0164C107.775 54.1372 108.65 54.2881 109.506 54.4491C111.695 54.8617 113.788 55.395 115.758 56.0692C116.862 56.4416 117.918 56.8642 118.936 57.3271C122.295 58.8667 125.178 60.8993 127.424 63.5458C129.346 65.8301 130.792 68.557 131.648 71.8174C132.219 74.011 132.4 83.0272 130.621 85.714H145.845C144.399 83.6008 143.248 77.5833 142.943 73.9909C142.857 72.9645 142.838 72.1394 142.896 71.6564C142.915 71.5457 142.924 71.435 142.943 71.3243C144.133 62.6704 147.434 58.3635 151.383 55.7472C152.896 54.741 154.504 53.9762 156.122 53.312C156.807 52.99 157.492 52.7284 158.177 52.4668Z"
              fill="#929292"
            />
            <path
              d="M127.424 27.2499C127.053 26.948 126.634 26.7065 126.187 26.5354C125.606 27.7128 125.492 29.1316 125.977 30.4599C126.282 31.2951 126.786 31.9794 127.414 32.4926C127.785 32.7944 128.204 33.0359 128.642 33.207C129.222 32.0397 129.336 30.6108 128.851 29.2825C128.546 28.4473 128.042 27.7631 127.424 27.2499Z"
              fill="#BFEB55"
            />
            <path
              d="M138.947 7.1143C139.584 6.65142 140.098 6.01747 140.45 5.27283C140.659 4.79988 140.812 4.28668 140.869 3.74329C140.973 2.80746 140.812 1.91188 140.45 1.11693C140.26 0.704359 140.022 0.332039 139.736 -3.05176e-05C138.88 0.623857 138.243 1.53956 137.948 2.6364C137.881 2.8779 137.833 3.11941 137.805 3.37097C137.738 4.00493 137.795 4.61875 137.948 5.20239C138.138 5.91684 138.48 6.57091 138.947 7.1143Z"
              fill="#BFEB55"
            />
            <path
              d="M150.689 9.30808C151.269 8.14081 151.393 6.7119 150.898 5.38362C150.403 4.05535 149.404 3.08933 148.224 2.63651C147.644 3.81384 147.529 5.23268 148.024 6.57102C148.519 7.8993 149.509 8.86532 150.689 9.30808Z"
              fill="#BFEB55"
            />
            <path
              d="M130.64 7.92938C130.706 6.51054 130.174 5.20239 129.27 4.28668C128.29 5.10176 127.633 6.3596 127.576 7.76837C127.5 9.20734 128.042 10.5054 128.946 11.4312C129.926 10.6161 130.583 9.35828 130.64 7.92938Z"
              fill="#BFEB55"
            />
            <path
              d="M118.936 12.5986C119.478 13.5344 120.306 14.2086 121.239 14.5708C121.819 13.4036 121.933 11.9747 121.448 10.6464C120.982 9.36843 120.04 8.44266 118.936 7.96971C118.889 7.94958 118.831 7.92946 118.774 7.90933C118.194 9.06654 118.08 10.4954 118.565 11.8338C118.679 12.0954 118.803 12.3571 118.936 12.5986Z"
              fill="#BFEB55"
            />
            <path
              d="M169.319 21.9567C168.825 22.7415 168.568 23.6673 168.568 24.583C168.815 24.6233 169.062 24.6333 169.319 24.6233C170.328 24.5931 171.327 24.2107 172.136 23.456C173.154 22.5302 173.668 21.202 173.668 19.8837C172.431 19.7026 171.127 20.0749 170.109 21.0108C169.805 21.2925 169.538 21.6145 169.319 21.9567Z"
              fill="#BFEB55"
            />
            <path
              d="M176.056 33.5793C176.465 33.9114 176.932 34.163 177.426 34.324C178.14 34.5554 178.911 34.6057 179.681 34.4347C181.004 34.1529 182.07 33.2674 182.679 32.1202C181.689 31.3253 180.386 30.963 179.053 31.2548C178.454 31.3856 177.902 31.6372 177.417 31.9894C176.855 32.402 176.389 32.9554 176.056 33.5793Z"
              fill="#BFEB55"
            />
            <path
              d="M168.092 17.9013C168.511 17.851 168.92 17.7504 169.319 17.5692C169.491 17.4988 169.652 17.4082 169.814 17.3177C170.994 16.6133 171.746 15.436 172.003 14.1379C171.146 13.8159 170.214 13.7656 169.319 14.0272C168.977 14.1278 168.634 14.2687 168.311 14.47C168.235 14.5102 168.159 14.5605 168.092 14.6108C167.036 15.3253 166.351 16.4322 166.113 17.6498C166.741 17.8812 167.416 17.9718 168.092 17.9013Z"
              fill="#BFEB55"
            />
            <path
              d="M156.226 11.1996C156.978 10.9077 157.663 10.3945 158.177 9.71027C158.462 9.33795 158.7 8.90525 158.872 8.43231C159.347 7.10403 159.224 5.67512 158.643 4.50784C158.491 4.56822 158.329 4.63866 158.187 4.71916C157.302 5.18205 156.569 5.95687 156.122 6.95308C156.074 7.05371 156.036 7.1644 155.998 7.26503C155.551 8.51281 155.627 9.84109 156.122 10.9681C156.15 11.0486 156.188 11.1291 156.226 11.1996Z"
              fill="#BFEB55"
            />
            <path
              d="M103.417 21.5542C103.712 21.7856 104.026 21.9869 104.349 22.1278C105.158 22.5001 106.043 22.6007 106.89 22.4598C106.937 22.4498 106.985 22.4397 107.042 22.4296C107.023 22.1076 106.975 21.7856 106.89 21.4737C106.642 20.5077 106.1 19.6121 105.291 18.958C104.996 18.7165 104.682 18.5253 104.349 18.3744C103.493 17.9819 102.551 17.8813 101.666 18.0825C101.742 19.3907 102.341 20.6787 103.417 21.5542Z"
              fill="#BFEB55"
            />
            <path
              d="M157.206 58.9673C156.873 58.6252 156.512 58.3333 156.112 58.122C155.37 57.7095 154.533 57.5283 153.714 57.5887C153.629 58.917 154.057 60.2654 155.018 61.2717C155.351 61.6239 155.713 61.9056 156.103 62.1169C156.75 62.4792 157.454 62.6603 158.167 62.6603C158.282 62.6603 158.386 62.6603 158.501 62.6503C158.548 61.9157 158.434 61.1811 158.167 60.4968C157.958 59.9434 157.635 59.4201 157.206 58.9673Z"
              fill="#BFEB55"
            />
            <path
              d="M109.506 56.9346C109.335 56.9748 109.164 57.0251 108.983 57.0956C108.108 57.4277 107.394 58.0214 106.88 58.7559C106.652 59.088 106.462 59.4603 106.319 59.8427C106.5 59.9534 106.69 60.044 106.88 60.1245C107.699 60.4565 108.603 60.5471 109.497 60.3358C109.668 60.2955 109.849 60.2351 110.02 60.1748C111.286 59.6918 112.228 58.6654 112.685 57.4277C111.752 56.8641 110.62 56.6729 109.506 56.9346Z"
              fill="#BFEB55"
            />
            <path
              d="M175.247 56.5626C174.029 55.9487 172.678 55.9689 171.527 56.5022C171.869 57.7801 172.707 58.8971 173.925 59.5109C175.067 60.0845 176.323 60.1046 177.417 59.6719C177.493 59.6417 177.569 59.6116 177.645 59.5814C177.588 59.36 177.512 59.1386 177.417 58.9273C177.008 57.921 176.256 57.0758 175.247 56.5626Z"
              fill="#BFEB55"
            />
            <path
              d="M177.426 42.6959C177.227 42.6255 177.017 42.5752 176.798 42.5349C175.466 42.3136 174.172 42.7362 173.211 43.5815C173.887 44.7085 174.981 45.5236 176.323 45.755C176.694 45.8154 177.065 45.8255 177.426 45.7953C178.349 45.7047 179.215 45.3122 179.9 44.7085C179.348 43.7726 178.483 43.0481 177.426 42.6959Z"
              fill="#BFEB55"
            />
            <path
              d="M179.31 37.2822C178.616 37.3526 177.978 37.5941 177.426 37.9463C176.903 38.2885 176.446 38.7312 176.094 39.2545C176.484 39.6469 176.932 39.9589 177.426 40.1803C178.102 40.4822 178.844 40.613 179.615 40.5325C180.957 40.3916 182.108 39.6268 182.831 38.5501C181.927 37.6344 180.652 37.1413 179.31 37.2822Z"
              fill="#BFEB55"
            />
            <path
              d="M107.042 17.3783C107.508 18.6261 108.422 19.5619 109.516 20.0349C109.583 20.0651 109.649 20.0852 109.716 20.1154C110.296 18.9481 110.41 17.5192 109.925 16.1909C109.811 15.8891 109.678 15.5972 109.516 15.3356C108.974 14.44 108.165 13.7859 107.261 13.4438C107.109 13.7558 106.985 14.0878 106.899 14.44C106.699 15.2249 106.69 16.0702 106.899 16.8853C106.928 17.0563 106.975 17.2173 107.042 17.3783Z"
              fill="#BFEB55"
            />
            <path
              d="M95.9853 49.3777C96.0805 49.2469 96.1661 49.1161 96.2422 48.9752C96.1566 48.9048 96.0709 48.8343 95.9853 48.774C95.0433 48.0796 93.8539 47.7778 92.6359 48.0092C91.3038 48.2708 90.2191 49.1161 89.5815 50.2633C90.5616 51.0884 91.8557 51.4708 93.1878 51.2192C94.3582 50.9878 95.3288 50.3035 95.9853 49.3777Z"
              fill="#BFEB55"
            />
            <path
              d="M94.3867 44.296C94.9481 44.3463 95.481 44.286 95.9853 44.135C96.7084 43.9136 97.3555 43.5111 97.8788 42.9677C97.4031 42.2835 96.7465 41.73 95.9853 41.3879C95.5666 41.2068 95.1099 41.086 94.6246 41.0458C93.2925 40.925 92.0269 41.4583 91.123 42.3841C91.8747 43.4407 93.0451 44.1753 94.3867 44.296Z"
              fill="#BFEB55"
            />
            <path
              d="M139.556 19.0587C138.975 19.3605 138.433 19.7329 137.938 20.1656C136.701 21.2523 135.759 22.7416 135.312 24.5026C135.255 24.724 135.207 24.9453 135.169 25.1667C134.988 26.2132 134.998 27.2598 135.169 28.256C135.369 29.4132 135.797 30.4999 136.406 31.466C136.949 31.1842 137.462 30.8421 137.938 30.4295C139.051 29.4836 139.936 28.2157 140.45 26.7164C140.526 26.4849 140.602 26.2535 140.659 26.022C141.107 24.2711 140.992 22.49 140.45 20.9102C140.222 20.2561 139.927 19.6322 139.556 19.0587Z"
              fill="#458766"
            />
            <path
              d="M135.169 16.714C135.654 17.1367 136.178 17.4889 136.739 17.7807C137.31 16.875 137.719 15.8587 137.938 14.7921C138.166 13.655 138.176 12.4575 137.938 11.25C137.91 11.1091 137.881 10.9582 137.843 10.8173C137.386 9.02614 136.425 7.52679 135.169 6.42996C134.684 6.00732 134.151 5.65513 133.599 5.36331C132.353 7.3356 131.877 9.84122 132.505 12.3267C132.952 14.1179 133.913 15.6273 135.169 16.714Z"
              fill="#458766"
            />
            <path
              d="M140.269 10.8173C139.832 12.538 139.927 14.2889 140.45 15.8587C140.678 16.543 140.983 17.187 141.364 17.7807C141.925 17.4889 142.448 17.1367 142.934 16.714C144.19 15.6273 145.151 14.1179 145.607 12.3267C146.235 9.85128 145.76 7.3356 144.513 5.36331C143.952 5.65513 143.428 6.00732 142.934 6.42996C141.82 7.39598 140.945 8.67394 140.441 10.1934C140.384 10.4047 140.326 10.616 140.269 10.8173Z"
              fill="#458766"
            />
            <path
              d="M126.729 24.9352C126.977 24.6937 127.205 24.4422 127.424 24.1705C128.651 22.6309 129.374 20.6183 129.308 18.4347C129.251 16.4423 128.556 14.631 127.424 13.2122C127.1 12.8097 126.748 12.4374 126.358 12.1053C124.712 13.7354 123.713 16.0599 123.779 18.6159C123.856 21.1718 124.988 23.4359 126.729 24.9352Z"
              fill="#458766"
            />
            <path
              d="M169.319 28.6787C168.806 29.5542 168.444 30.5202 168.254 31.5265C168.606 31.6573 168.958 31.7579 169.319 31.8384C171.165 32.2309 173.145 31.9391 174.895 30.8825C175.923 30.2586 176.779 29.4334 177.426 28.4775C178.102 27.4813 178.568 26.3442 178.797 25.1568C178.349 24.9958 177.893 24.865 177.426 24.7945C175.676 24.4927 173.82 24.8046 172.145 25.8109C170.956 26.5153 169.995 27.5215 169.319 28.6787Z"
              fill="#458766"
            />
            <path
              d="M169.319 35.8232C169.072 35.944 168.825 36.0748 168.587 36.2157C168.415 36.3163 168.244 36.427 168.092 36.5377C166.275 37.8257 165.095 39.798 164.695 41.9313C165.78 42.3338 166.941 42.4848 168.092 42.3741C168.501 42.3338 168.92 42.2634 169.319 42.1527C170.005 41.9615 170.68 41.6798 171.327 41.2873C173.44 40.0194 174.791 37.8861 175.228 35.5616C173.354 34.8673 171.241 34.9176 169.319 35.8232Z"
              fill="#458766"
            />
            <path
              d="M148.709 16.3719C148.081 18.8474 148.557 21.363 149.813 23.3353C150.375 23.0435 150.898 22.6913 151.383 22.2687C152.649 21.1819 153.6 19.6725 154.057 17.8914C154.685 15.416 154.209 12.9003 152.963 10.928C152.401 11.2198 151.868 11.5821 151.383 11.9947C150.118 13.0814 149.166 14.5808 148.709 16.3719Z"
              fill="#458766"
            />
            <path
              d="M158.177 13.9367C157.197 15.8184 156.969 17.9718 157.406 19.9542C157.663 19.934 157.92 19.8938 158.177 19.8435C159.157 19.6422 160.109 19.2598 160.956 18.6863C161.802 18.1228 162.573 17.3781 163.192 16.4624C164.609 14.3895 165.019 11.8638 164.514 9.53928C163.258 9.66003 162.04 10.0927 160.956 10.8072C160.109 11.3707 159.338 12.1153 158.71 13.031C158.52 13.3229 158.339 13.6247 158.177 13.9367Z"
              fill="#458766"
            />
            <path
              d="M160.965 22.8623C160.737 23.0636 160.518 23.2648 160.308 23.4963C159.224 24.6434 158.52 26.0422 158.187 27.5113C157.996 28.3666 157.93 29.2421 157.987 30.1075C158.053 30.1075 158.12 30.1175 158.187 30.1175C159.129 30.1578 160.071 30.027 160.965 29.7251C162.164 29.3226 163.277 28.6182 164.229 27.6119C165.942 25.8006 166.712 23.3655 166.551 20.9907C164.581 20.8599 162.573 21.4837 160.965 22.8623Z"
              fill="#458766"
            />
            <path
              d="M168.092 54.8416C166.75 53.7951 165.095 53.1712 163.306 53.1712C162.487 53.1712 161.698 53.302 160.956 53.5334C159.928 53.8655 158.986 54.4089 158.177 55.1133C157.835 55.4152 157.511 55.7472 157.226 56.0994C157.52 56.4516 157.835 56.7837 158.177 57.0755C158.986 57.7799 159.928 58.3233 160.956 58.6453C161.698 58.8868 162.487 59.0075 163.306 59.0075C165.095 59.0075 166.75 58.3937 168.092 57.3472C168.539 56.995 168.958 56.6026 169.319 56.1598L169.377 56.0894L169.319 56.0189C168.948 55.5963 168.539 55.1938 168.092 54.8416Z"
              fill="#458766"
            />
            <path
              d="M115.758 21.6949C116.738 22.3289 117.823 22.7314 118.936 22.8823C119.107 22.9024 119.269 22.9226 119.44 22.9326C119.764 21.232 119.612 19.4409 118.936 17.8107C118.679 17.1969 118.356 16.6032 117.956 16.0497C117.338 15.1843 116.586 14.48 115.758 13.9366C114.635 13.2121 113.37 12.7894 112.076 12.7089C111.619 15.0334 112.085 17.5491 113.56 19.5818C114.179 20.4572 114.93 21.1616 115.758 21.6949Z"
              fill="#458766"
            />
            <path
              d="M173.373 47.4855C171.784 47.8176 170.404 48.6125 169.319 49.7194C168.853 50.2024 168.434 50.7458 168.092 51.3395C168.044 51.4301 167.997 51.5106 167.949 51.6011C167.997 51.6414 168.044 51.6816 168.092 51.7219C168.482 52.0238 168.891 52.2854 169.319 52.5168C170.851 53.3118 172.631 53.6137 174.439 53.2313C175.542 52.9999 176.551 52.547 177.426 51.9131C178.435 51.1886 179.263 50.2326 179.862 49.1358C179.139 48.5421 178.311 48.0691 177.426 47.7673C176.161 47.3044 174.772 47.1937 173.373 47.4855Z"
              fill="#458766"
            />
            <path
              d="M104.349 56.9248C102.912 55.516 100.99 54.6606 98.8779 54.6606C97.8598 54.6606 96.8892 54.8619 95.9853 55.2242C94.7483 55.7273 93.654 56.5424 92.8072 57.5788C93.6636 58.6153 94.7483 59.4304 95.9853 59.9335C96.8797 60.3058 97.8598 60.5071 98.8779 60.5071C100.99 60.5071 102.912 59.6417 104.349 58.243C104.559 58.0317 104.768 57.8103 104.958 57.5788C104.768 57.3575 104.568 57.1361 104.349 56.9248Z"
              fill="#458766"
            />
            <path
              d="M102.57 30.842C103.141 31.2546 103.74 31.5766 104.359 31.8181C105.187 32.1401 106.043 32.3111 106.899 32.3413C107.661 32.3615 108.412 32.2709 109.145 32.0797C108.945 30.2282 108.174 28.4571 106.899 27.0785C106.538 26.6962 106.148 26.344 105.71 26.022C105.282 25.71 104.825 25.4484 104.359 25.227C102.684 24.4522 100.838 24.3214 99.1349 24.7842C99.3823 27.149 100.572 29.393 102.57 30.842Z"
              fill="#458766"
            />
            <path
              d="M109.506 34.7665C109.449 34.7766 109.402 34.7967 109.345 34.8067C109.383 35.1388 109.43 35.4709 109.506 35.7929C109.944 37.7853 111.067 39.6167 112.78 40.8645C113.703 41.5387 114.721 41.9815 115.758 42.2028C116.814 42.4242 117.899 42.4242 118.936 42.2028C119.079 42.1727 119.222 42.1425 119.355 42.1022C119.279 41.4481 119.136 40.8142 118.936 40.2004C118.384 38.5702 117.366 37.101 115.92 36.0445C115.863 36.0042 115.815 35.964 115.758 35.9338C113.845 34.6055 111.59 34.2533 109.506 34.7665Z"
              fill="#458766"
            />
            <path
              d="M114.14 30.651C114.645 31.1139 115.187 31.4963 115.758 31.8082C116.757 32.3516 117.842 32.6535 118.936 32.7139C119.469 32.7441 120.011 32.7239 120.535 32.6434C120.525 30.8523 119.983 29.0611 118.936 27.5718C118.594 27.0888 118.203 26.636 117.756 26.2335C117.138 25.67 116.462 25.2171 115.758 24.8851C114.359 24.231 112.827 24.0096 111.343 24.231C111.362 26.5957 112.304 28.9605 114.14 30.651Z"
              fill="#458766"
            />
            <path
              d="M105.453 43.7325C105.082 43.642 104.72 43.5715 104.359 43.5313C102.38 43.3099 100.457 43.8835 98.9065 45.0306C99.9341 47.1438 101.78 48.7941 104.13 49.418C104.206 49.4381 104.283 49.4582 104.359 49.4784C105.215 49.6695 106.071 49.7199 106.899 49.6293C107.822 49.5287 108.707 49.267 109.516 48.8545C109.925 48.6431 110.315 48.4016 110.686 48.1299C110.372 47.4759 109.973 46.8721 109.516 46.3287C108.793 45.4835 107.908 44.7791 106.899 44.2759C106.433 44.0545 105.957 43.8734 105.453 43.7325Z"
              fill="#458766"
            />
            <path
              d="M97.974 39.2745C99.9151 40.6833 102.227 41.0757 104.349 40.5625C104.416 40.5424 104.473 40.5323 104.54 40.5122C104.501 40.1399 104.435 39.7675 104.349 39.4053C103.892 37.4632 102.789 35.672 101.105 34.4544C99.544 33.3174 97.7361 32.8444 95.9853 32.9652C95.4905 32.9953 95.0052 33.0859 94.5295 33.2067C94.6817 34.6356 95.1765 36.0142 95.9853 37.2016C96.5182 37.9965 97.1842 38.6908 97.974 39.2745Z"
              fill="#458766"
            />
            <path
              d="M2.95346 75.0478L3.07782 77.3173C3.07782 77.4417 3.06746 77.6697 3.04673 78.0013C3.04673 78.3329 2.92237 78.6334 2.67366 78.9029C2.44567 79.1516 2.15551 79.2759 1.80317 79.2759C1.47155 79.2759 1.21247 79.2656 1.02594 79.2449C0.34198 79.2449 0 78.9443 0 78.3433C0 77.8458 0.227987 75.8458 0.68396 72.3431C1.13993 68.8196 1.4301 66.5501 1.55445 65.5346C1.67881 64.519 1.78244 63.6692 1.86534 62.9853C1.96897 62.2806 2.04152 61.7624 2.08297 61.4308C2.12442 61.0992 2.1866 60.7676 2.2695 60.436C2.35241 60.1043 2.47676 59.8349 2.64257 59.6276C2.95346 59.2339 3.55452 59.037 4.44574 59.037C5.93801 59.7831 7.47174 61.8971 9.04692 65.3791C10.1661 67.8663 10.9123 69.4414 11.2853 70.1047C11.6584 70.7679 12.0211 71.2239 12.3735 71.4726L18.5913 60.6536C19.0265 60.3427 19.3581 60.1873 19.5861 60.1873C20.2493 60.1873 20.7571 60.4878 21.1095 61.0888C21.4618 61.6899 21.752 62.4257 21.98 63.2962C22.2287 64.1459 22.4359 65.089 22.6018 66.1253C22.7883 67.1616 22.9437 68.2497 23.0681 69.3896C23.2132 70.5088 23.3479 71.6073 23.4722 72.6851C23.7624 75.2758 23.98 76.9028 24.1251 77.566C24.2909 78.2293 24.3738 78.706 24.3738 78.9961C24.3738 79.2656 24.2806 79.535 24.094 79.8045C23.9075 80.0532 23.6484 80.1775 23.3168 80.1775C22.9852 80.1775 22.6536 80.0532 22.322 79.8045C21.9903 79.535 21.7831 79.2138 21.7002 78.8407C21.638 78.4469 21.5655 77.9391 21.4825 77.3173C21.4204 76.6955 21.3375 76.0012 21.2338 75.2344C21.1302 74.4468 21.0266 73.6281 20.9229 72.7783C20.8193 71.9078 20.7157 71.0788 20.6121 70.2912C20.5084 69.5036 20.4152 68.8093 20.3323 68.2082C20.2493 67.5864 20.1872 67.1201 20.1457 66.8092C20.1457 66.3947 20.1354 66.0113 20.1146 65.6589C20.0939 65.3066 20.011 65.089 19.8659 65.0061C19.7208 64.9232 19.4928 65.0268 19.182 65.3169C18.8918 65.5864 18.4773 66.146 17.9384 66.9958C16.7777 68.7989 15.0989 71.8353 12.902 76.1049C12.6118 76.623 12.2284 76.737 11.7517 76.4468C11.1921 76.1359 10.7154 75.338 10.3216 74.053L4.60118 61.8971C4.10376 62.892 3.64778 66.1874 3.23326 71.7835C3.17109 72.4674 3.12963 73.0478 3.10891 73.5245C3.00528 74.0426 2.95346 74.5504 2.95346 75.0478Z"
              fill="black"
            />
            <path
              d="M41.7029 75.0789C40.1484 77.5246 38.0758 79.0376 35.4851 79.6179C34.884 79.7423 34.3348 79.8045 33.8373 79.8045C33.3606 79.8045 32.9565 79.8045 32.6249 79.8045C32.314 79.7837 31.9616 79.7319 31.5678 79.649C31.174 79.5661 30.8113 79.4314 30.4797 79.2449C29.7129 78.8096 29.3294 78.1982 29.3294 77.4106C29.2465 77.0375 29.2051 76.623 29.2051 76.167C29.2051 75.6903 29.3087 75.0686 29.516 74.3017C29.7232 73.5348 30.0963 72.7058 30.6352 71.8146C31.1948 70.9233 31.8684 70.1047 32.656 69.3585C34.2933 67.7833 36.0654 66.7678 37.9722 66.3118C38.5318 66.1874 39.0396 66.1253 39.4956 66.1253C39.9723 66.1253 40.3971 66.1564 40.7702 66.2185C41.9723 66.2185 42.7806 67.0372 43.1952 68.6746C43.4646 69.7109 43.62 71.1617 43.6615 73.027C43.7237 74.8717 43.7755 76.3018 43.8169 77.3173C43.8791 78.3122 44.0138 79.2241 44.2211 80.0532H42.3868C42.3039 79.4936 42.2418 78.9961 42.2003 78.5609C42.1589 78.1256 42.1174 77.7215 42.0759 77.3484C41.9723 76.4779 41.848 75.7214 41.7029 75.0789ZM41.5785 70.2601C41.5785 69.058 40.9878 68.4569 39.8064 68.4569C39.6614 68.4362 39.5163 68.4259 39.3712 68.4259C37.8582 68.4259 36.2623 69.1513 34.5835 70.6021C33.7959 71.2653 33.1223 72.0115 32.5627 72.8405C31.7337 74.0219 31.3191 75.0789 31.3191 76.0116C31.3191 77.2344 32.0238 77.9598 33.4332 78.1878C35.2985 78.1464 37.081 77.2966 38.7805 75.6385C39.5059 74.9131 40.107 74.1255 40.5837 73.2757C41.2469 72.1358 41.5785 71.1306 41.5785 70.2601Z"
              fill="black"
            />
            <path
              d="M64.1305 68.8922C63.26 68.2704 62.1408 67.9595 60.7729 67.9595C59.4879 67.9595 58.2962 68.1979 57.1977 68.6746C55.1251 69.5451 53.7053 70.6643 52.9385 72.0322C52.6069 72.654 52.441 73.3172 52.441 74.0219C52.441 74.1462 52.441 74.4986 52.441 75.0789C52.441 75.6385 52.5447 76.4054 52.7519 77.3795C52.9592 78.3329 53.0628 79.307 53.0628 80.3019C52.6276 80.3226 52.2752 80.3744 52.0058 80.4573C51.7364 80.5402 51.5084 80.5817 51.3218 80.5817C51.1353 80.5817 50.9695 80.4988 50.8244 80.333C50.7001 80.1672 50.555 79.8459 50.3892 79.3692C50.3684 79.2449 50.327 78.8925 50.2648 78.3122C50.2026 77.7318 50.1197 77.0272 50.0161 76.1981C49.9332 75.3691 49.8296 74.4675 49.7052 73.4934C49.6016 72.4985 49.4979 71.5244 49.3943 70.571C49.1663 68.4984 48.9902 66.975 48.8658 66.0009C48.8658 65.5035 49.2285 65.2548 49.9539 65.2548C50.3892 65.2548 50.7311 65.4413 50.9799 65.8144C51.2286 66.1667 51.4255 66.5812 51.5706 67.0579C51.7156 67.5139 51.8089 67.9699 51.8504 68.4259C51.9125 68.8818 51.9643 69.2031 52.0058 69.3896C54.7416 66.9439 58.1407 65.7211 62.203 65.7211C62.659 65.7211 63.1357 65.7315 63.6331 65.7522C63.7575 65.7315 63.9129 65.7211 64.0994 65.7211C64.286 65.7211 64.4725 65.8455 64.659 66.0942C64.887 66.3843 65.001 66.7367 65.001 67.1512C65.001 68.1875 64.7109 68.7678 64.1305 68.8922Z"
              fill="black"
            />
            <path
              d="M74.3091 77.2552L74.3713 72.2809C74.3713 71.4933 74.2987 70.8197 74.1537 70.2601H69.3349L69.2727 68.115H73.936V60.094C73.9982 59.9074 74.1226 59.7209 74.3091 59.5344C74.5993 59.2442 74.8376 59.0991 75.0242 59.0991C75.2314 59.0991 75.4076 59.1199 75.5527 59.1613C75.6977 59.2028 75.8532 59.3478 76.019 59.5966C76.3506 60.9645 76.5164 63.0267 76.5164 65.7833C76.5164 66.4672 76.5475 67.1408 76.6097 67.8041C77.2729 67.7212 77.9362 67.6797 78.5994 67.6797C78.5994 67.6797 79.1383 67.6797 80.216 67.6797C80.6098 67.6797 80.9725 67.659 81.3041 67.6175L81.2109 69.856L76.6719 69.7316L76.8273 80.4573C76.4542 80.6231 76.133 80.706 75.8636 80.706C74.8273 80.706 74.3091 79.5557 74.3091 77.2552Z"
              fill="black"
            />
            <path
              d="M88.4671 65.6278C88.7365 69.5036 88.9645 73.9908 89.151 79.0894C89.0267 79.7319 88.5292 80.0532 87.6587 80.0532C87.4308 80.0532 87.1924 80.0117 86.9437 79.9288C86.7157 79.8252 86.5706 79.6905 86.5085 79.5247V65.6278H88.4671ZM85.5758 61.3997C85.5758 60.6743 86.0007 60.3116 86.8504 60.3116C87.41 60.3116 87.866 60.436 88.2184 60.6847C88.2805 60.9127 88.3116 61.1406 88.3116 61.3686C88.3116 61.5759 88.2287 61.7832 88.0629 61.9904C87.8971 62.1977 87.6484 62.3013 87.3168 62.3013C86.9852 62.3013 86.6535 62.2288 86.3219 62.0837C85.9903 61.9179 85.7416 61.6899 85.5758 61.3997Z"
              fill="black"
            />
            <path
              d="M105.796 73.4312C105.796 70.9648 105.661 69.1513 105.392 67.9906C105.558 67.6797 105.309 67.5243 104.646 67.5243C103.941 67.5243 103.029 67.7004 101.91 68.0528C100.791 68.4051 99.8788 68.7575 99.1741 69.1098C97.4953 69.9181 96.5627 70.7057 96.3761 71.4726V79.9288H94.2932C94.0237 79.2241 93.889 77.2448 93.889 73.9908C93.889 71.0892 93.9408 68.9544 94.0444 67.5864C94.1688 66.2185 94.2621 65.4413 94.3242 65.2548C94.8631 64.9024 95.2984 64.7263 95.63 64.7263C96.1481 64.7263 96.4072 65.3377 96.4072 66.5605C96.4072 67.0372 96.3761 67.5035 96.3139 67.9595C96.2725 68.3948 96.2518 68.6953 96.2518 68.8611C99.6094 66.3947 102.211 65.1615 104.055 65.1615C106.148 65.1615 107.34 66.8507 107.63 70.229C107.755 71.4104 107.817 73.0478 107.817 75.1411L107.786 77.5971C107.786 78.5091 107.807 79.3899 107.848 80.2397C107.641 80.3641 107.475 80.4262 107.351 80.4262C107.288 80.4055 107.154 80.3744 106.946 80.333C106.739 80.2915 106.47 80.2604 106.138 80.2397C105.931 79.4107 105.817 78.5713 105.796 77.7215C105.775 76.851 105.765 76.053 105.765 75.3276L105.796 73.4312Z"
              fill="black"
            />
            <path
              d="M170.865 71.4726C170.803 72.1773 170.772 73.1825 170.772 74.4882C170.772 75.7732 170.969 77.3381 171.362 79.1827L168.906 80.4262L167.787 71.97C167.062 71.8664 166.699 71.6177 166.699 71.2239C166.699 70.9337 166.865 70.5917 167.196 70.1979C167.549 69.8041 167.808 69.4829 167.974 69.2342C168.139 68.9647 168.233 68.6746 168.253 68.3637C168.295 68.0321 168.347 67.4517 168.409 66.6227C168.471 65.7936 168.523 64.9128 168.564 63.9801C168.627 63.0474 168.678 62.1666 168.72 61.3375C168.782 60.5085 168.813 59.9282 168.813 59.5966C169.269 59.1406 169.601 58.8608 169.808 58.7572C170.326 58.4877 170.678 58.5913 170.865 59.068L170.678 68.8611C175.798 68.8611 178.876 68.5295 179.912 67.8663V58.0421C180.036 57.6898 180.617 57.5136 181.653 57.5136C181.881 57.5136 182.067 57.524 182.212 57.5447C182.212 57.9385 182.223 58.5395 182.244 59.3478C182.285 60.1354 182.316 61.037 182.337 62.0526C182.378 63.0682 182.42 64.1459 182.461 65.2859C182.503 66.4051 182.544 67.4725 182.585 68.488C182.648 70.6021 182.699 72.1565 182.741 73.1514C182.886 75.6385 183.394 77.6489 184.264 79.1827C183.332 79.5557 182.306 79.7423 181.186 79.7423C180.233 77.3795 179.725 74.281 179.663 70.4466C178.295 70.4052 177.363 70.3845 176.865 70.3845C176.368 70.3845 175.808 70.4156 175.186 70.4777C173.901 70.5606 172.461 70.8923 170.865 71.4726Z"
              fill="black"
            />
            <path
              d="M190.121 74.3328C190.121 71.8871 191.179 69.9181 193.293 68.4259C194.971 67.2445 196.992 66.5294 199.355 66.2807C199.479 66.2807 199.769 66.2807 200.225 66.2807C200.681 66.2807 201.293 66.4154 202.06 66.6849C203.759 67.2652 204.92 68.2911 205.542 69.7627C205.79 70.343 205.915 70.8404 205.915 71.255C205.915 71.6488 205.904 71.9286 205.884 72.0944C205.884 74.6851 204.899 76.7266 202.93 78.2189C201.106 79.5868 198.826 80.2708 196.091 80.2708C194.122 80.2708 192.629 79.8148 191.614 78.9029C190.619 77.9909 190.121 76.4676 190.121 74.3328ZM192.267 75.0789C192.267 76.3639 192.609 77.2344 193.293 77.6904C193.811 78.022 194.681 78.1878 195.904 78.1878C197.127 78.1878 198.205 78.0946 199.137 77.908C200.07 77.7215 200.899 77.4002 201.624 76.9443C203.179 75.9494 203.956 74.4053 203.956 72.312C203.956 71.0684 203.625 70.0528 202.961 69.2653C202.236 68.4155 201.282 67.9906 200.101 67.9906C199.293 68.1357 198.474 68.2911 197.645 68.4569C196.837 68.6228 196.07 68.944 195.344 69.4207C193.769 70.4363 192.743 72.3224 192.267 75.0789Z"
              fill="black"
            />
            <path
              d="M210.995 68.1771C210.953 67.0579 210.912 66.0631 210.87 65.1926C210.829 64.3014 210.798 63.6485 210.777 63.234C210.777 62.7987 210.611 61.7521 210.28 60.094C210.466 59.8453 210.642 59.6069 210.808 59.3789C210.995 59.1509 211.254 59.037 211.585 59.037C212.311 59.037 212.87 62.094 213.264 68.2082C213.471 71.7524 213.575 75.2965 213.575 78.8407C213.575 79.7941 212.912 80.2708 211.585 80.2708L211.337 80.2397C211.337 79.1619 211.306 77.7837 211.243 76.1049C211.181 74.426 211.129 72.9649 211.088 71.7213C211.067 70.4777 211.036 69.2963 210.995 68.1771Z"
              fill="black"
            />
            <path
              d="M219.184 68.1771C219.142 67.0579 219.101 66.0631 219.059 65.1926C219.018 64.3014 218.987 63.6485 218.966 63.234C218.966 62.7987 218.8 61.7521 218.469 60.094C218.655 59.8453 218.831 59.6069 218.997 59.3789C219.184 59.1509 219.443 59.037 219.774 59.037C220.5 59.037 221.059 62.094 221.453 68.2082C221.66 71.7524 221.764 75.2965 221.764 78.8407C221.764 79.7941 221.101 80.2708 219.774 80.2708L219.526 80.2397C219.526 79.1619 219.494 77.7837 219.432 76.1049C219.37 74.426 219.318 72.9649 219.277 71.7213C219.256 70.4777 219.225 69.2963 219.184 68.1771Z"
              fill="black"
            />
            <path
              d="M239.031 75.0789C237.476 77.5246 235.404 79.0376 232.813 79.6179C232.212 79.7423 231.663 79.8045 231.165 79.8045C230.689 79.8045 230.284 79.8045 229.953 79.8045C229.642 79.7837 229.29 79.7319 228.896 79.649C228.502 79.5661 228.139 79.4314 227.808 79.2449C227.041 78.8096 226.657 78.1982 226.657 77.4106C226.574 77.0375 226.533 76.623 226.533 76.167C226.533 75.6903 226.637 75.0686 226.844 74.3017C227.051 73.5348 227.424 72.7058 227.963 71.8146C228.523 70.9233 229.196 70.1047 229.984 69.3585C231.621 67.7833 233.393 66.7678 235.3 66.3118C235.86 66.1874 236.368 66.1253 236.823 66.1253C237.3 66.1253 237.725 66.1564 238.098 66.2185C239.3 66.2185 240.109 67.0372 240.523 68.6746C240.793 69.7109 240.948 71.1617 240.989 73.027C241.052 74.8717 241.103 76.3018 241.145 77.3173C241.207 78.3122 241.342 79.2241 241.549 80.0532H239.715C239.632 79.4936 239.57 78.9961 239.528 78.5609C239.487 78.1256 239.445 77.7215 239.404 77.3484C239.3 76.4779 239.176 75.7214 239.031 75.0789ZM238.906 70.2601C238.906 69.058 238.316 68.4569 237.134 68.4569C236.989 68.4362 236.844 68.4259 236.699 68.4259C235.186 68.4259 233.59 69.1513 231.911 70.6021C231.124 71.2653 230.45 72.0115 229.891 72.8405C229.062 74.0219 228.647 75.0789 228.647 76.0116C228.647 77.2344 229.352 77.9598 230.761 78.1878C232.626 78.1464 234.409 77.2966 236.108 75.6385C236.834 74.9131 237.435 74.1255 237.912 73.2757C238.575 72.1358 238.906 71.1306 238.906 70.2601Z"
              fill="black"
            />
            <path
              d="M258.318 73.4312C258.318 70.9648 258.184 69.1513 257.914 67.9906C258.08 67.6797 257.831 67.5243 257.168 67.5243C256.463 67.5243 255.552 67.7004 254.432 68.0528C253.313 68.4051 252.401 68.7575 251.697 69.1098C250.018 69.9181 249.085 70.7057 248.898 71.4726V79.9288H246.816C246.546 79.2241 246.411 77.2448 246.411 73.9908C246.411 71.0892 246.463 68.9544 246.567 67.5864C246.691 66.2185 246.784 65.4413 246.847 65.2548C247.385 64.9024 247.821 64.7263 248.152 64.7263C248.671 64.7263 248.93 65.3377 248.93 66.5605C248.93 67.0372 248.898 67.5035 248.836 67.9595C248.795 68.3948 248.774 68.6953 248.774 68.8611C252.132 66.3947 254.733 65.1615 256.577 65.1615C258.671 65.1615 259.863 66.8507 260.153 70.229C260.277 71.4104 260.339 73.0478 260.339 75.1411L260.308 77.5971C260.308 78.5091 260.329 79.3899 260.37 80.2397C260.163 80.3641 259.997 80.4262 259.873 80.4262C259.811 80.4055 259.676 80.3744 259.469 80.333C259.262 80.2915 258.992 80.2604 258.66 80.2397C258.453 79.4107 258.339 78.5713 258.318 77.7215C258.298 76.851 258.287 76.053 258.287 75.3276L258.318 73.4312Z"
              fill="black"
            />
            <path
              d="M280 55.2752C280 57.2649 279.938 59.2131 279.813 61.1199C279.71 63.006 279.606 64.861 279.503 66.6849C279.42 68.488 279.378 70.4156 279.378 72.4674C279.378 74.4986 279.523 76.6541 279.813 78.934C279.813 79.4107 279.72 79.7526 279.534 79.9599C279.368 80.1672 279.078 80.2708 278.663 80.2708C277.689 80.2708 277.202 79.4625 277.202 77.8458V76.8199C274.259 79.0169 271.772 80.1153 269.741 80.1153C268.932 80.1153 268.103 79.9184 267.253 79.5247C266.424 79.1309 265.637 78.3329 264.891 77.1308C264.787 76.6334 264.735 76.1256 264.735 75.6074C264.735 75.0893 264.829 74.4675 265.015 73.7421C265.222 72.9959 265.626 72.2291 266.228 71.4415C266.849 70.6539 267.595 69.9596 268.466 69.3585C270.373 68.0735 272.435 67.431 274.653 67.431C275.606 67.431 276.518 67.5761 277.389 67.8663C277.389 67.4932 277.409 66.8403 277.451 65.9076C277.513 64.975 277.575 63.9905 277.637 62.9542C277.762 60.2598 277.844 58.6742 277.886 58.1975C277.927 57.7001 277.979 57.2856 278.041 56.954C278.124 56.6016 278.238 56.3011 278.383 56.0524C278.694 55.5343 279.233 55.2752 280 55.2752ZM267.005 75.3587C267.005 76.9961 267.595 77.8148 268.777 77.8148C268.963 77.8148 269.171 77.794 269.399 77.7526C270.248 77.7526 271.295 77.5039 272.539 77.0064C274.901 76.0738 276.342 75.2655 276.86 74.5815V70.4466C276.86 69.7212 276.269 69.3585 275.088 69.3585C274.943 69.3378 274.746 69.3274 274.497 69.3274C274.269 69.3274 273.907 69.3793 273.409 69.4829C272.912 69.5865 272.352 69.773 271.73 70.0425C271.109 70.3119 270.497 70.6435 269.896 71.0373C268.632 71.8871 267.761 72.882 267.285 74.0219C267.098 74.4571 267.005 74.9027 267.005 75.3587Z"
              fill="black"
            />
          </svg>

          <span class="font-semibold text-xl tracking-tight text-black">
            FakeShop
          </span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              class="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
