'use client';

import styled from 'styled-components';
import FileManagement from '@components/FileManagement';

export default function HomeHeader() {
    return (
        <S.Container>
            <S.Left>
                <h1>
                    <span>Ajoutez</span> facilement un <span>filligrane</span> sur vos fichiers de façon <span>sécurisée</span>
                </h1>
                <p>Choisissez un fichier de votre choix juste en dessous, et on vous le retourne filligrané en à peine quelques secondes !</p>
                <FileManagement />
            </S.Left>
            <svg width='580' height='580' viewBox='0 0 580 580' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M106.094 509.24C209.055 561.881 375.979 561.892 478.941 509.24C581.902 456.588 581.902 371.2 478.941 318.606C375.979 266.011 209.055 265.965 106.094 318.606C3.13191 371.246 3.13191 456.634 106.094 509.24Z'
                    fill='#F5F5F5'
                />
                <path d='M172.295 451.089L116.708 419.212L189.95 378.021L172.631 451.669' fill='#E0E0E0' />
                <path
                    d='M480.994 431.578C511.412 431.578 536.071 418.174 536.071 401.638C536.071 385.103 511.412 371.699 480.994 371.699C450.576 371.699 425.917 385.103 425.917 401.638C425.917 418.174 450.576 431.578 480.994 431.578Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M275.639 422.53L325.136 451.112C326.981 452.045 329.02 452.531 331.087 452.531C333.154 452.531 335.193 452.045 337.038 451.112L436.798 393.53C440.081 391.628 440.081 388.554 436.798 386.663L387.301 358.08C385.456 357.148 383.417 356.662 381.35 356.662C379.282 356.662 377.244 357.148 375.399 358.08L275.639 415.663C272.345 417.6 272.345 420.639 275.639 422.53Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M91.083 400.676C90.3522 391.662 86.2226 376.849 75.7362 362.744C64.519 347.664 50.8311 338.221 40.6695 342.629C31.2039 346.747 34.7883 359.809 51.1095 372.708C62.5354 381.744 74.3906 393.518 80.7706 407.728L91.1063 425.813L91.083 400.676Z'
                    fill='var(--color-secondary)'
                />
                <g opacity='0.1'>
                    <path
                        d='M91.083 400.676C90.3522 391.662 86.2226 376.849 75.7362 362.744C64.519 347.664 50.8311 338.221 40.6695 342.629C31.2039 346.747 34.7883 359.809 51.1095 372.708C62.5354 381.744 74.3906 393.518 80.7706 407.728L91.1063 425.813L91.083 400.676Z'
                        fill='black'
                    />
                </g>
                <path
                    d='M90.1666 407.554C90.034 407.554 89.9045 407.513 89.7964 407.436C89.6883 407.359 89.6069 407.251 89.5634 407.125C80.4806 382.127 61.5727 356.828 45.5763 348.278C45.5001 348.239 45.4325 348.185 45.3773 348.119C45.322 348.053 45.2803 347.977 45.2545 347.895C45.2286 347.813 45.2191 347.727 45.2266 347.642C45.234 347.556 45.2582 347.473 45.2978 347.397C45.3375 347.321 45.3917 347.253 45.4574 347.198C45.5232 347.143 45.5991 347.101 45.681 347.075C45.7629 347.049 45.849 347.04 45.9345 347.047C46.0201 347.055 46.1033 347.079 46.1795 347.118C62.4195 355.807 81.5942 381.396 90.7698 406.673C90.8259 406.831 90.8171 407.005 90.7454 407.158C90.6737 407.31 90.545 407.427 90.387 407.485C90.3195 407.524 90.2443 407.548 90.1666 407.554Z'
                    fill='white'
                />
                <path
                    d='M90.1667 431.52C84.9192 435.646 78.6781 438.318 72.0707 439.269C60.6679 441.055 55.6799 435.603 55.6799 435.603C55.6799 435.603 60.1691 424.908 66.6535 421.904C59.6456 423.473 52.9543 426.218 46.8639 430.024C46.8639 430.024 39.9039 430.128 37.1315 419.502C37.1315 419.502 41.2495 413.111 55.0883 409.654C55.0883 409.654 46.6783 407.531 34.5447 410.628C33.6283 410.988 29.7539 397.254 28.5823 390.908C27.4107 384.563 29.9511 384.633 34.8927 383.31C39.8343 381.988 56.6543 381.164 59.7515 383.89C62.8487 386.616 64.3915 395.896 64.3915 395.896C64.3915 395.896 67.3495 390.642 66.6419 385.944C70.0897 384.959 73.7555 385.048 77.1515 386.199C82.7079 388.124 82.3483 390.839 82.3483 394.876C82.3722 398.944 81.8136 402.995 80.6895 406.905C80.6895 406.905 84.5291 403.587 84.6567 391.361C84.6567 391.361 92.1619 397.776 95.1779 403.297C98.1939 408.819 97.4399 423.261 90.1667 431.52Z'
                    fill='var(--color-secondary)'
                />
                <path
                    d='M90.1666 432.135C90.0458 432.136 89.9271 432.103 89.8244 432.039C89.7218 431.975 89.6393 431.884 89.5866 431.775C80.3878 412.658 46.1794 390.456 33.9066 388.066C33.7396 388.033 33.5926 387.935 33.4972 387.794C33.4017 387.653 33.3654 387.48 33.3962 387.312C33.4128 387.23 33.4455 387.152 33.4924 387.082C33.5393 387.013 33.5995 386.953 33.6696 386.906C33.7396 386.86 33.8181 386.828 33.9006 386.812C33.9831 386.796 34.0679 386.797 34.1502 386.814C46.6318 389.238 81.397 411.8 90.7466 431.218C90.8187 431.373 90.8275 431.549 90.7712 431.709C90.7148 431.87 90.5976 432.002 90.445 432.077C90.3581 432.118 90.2627 432.138 90.1666 432.135Z'
                    fill='white'
                />
                <path d='M87.8003 228.752V436.995L282.135 324.788V136.845L149.385 213.428L144.397 196.005L87.8003 228.752Z' fill='#37474F' />
                <path d='M87.8003 436.995L97.7647 254.133L292.099 141.938L282.135 324.788L87.8003 436.995Z' fill='#F0F0F0' />
                <path d='M87.8003 436.995L105.397 259.225L299.732 147.03L282.135 324.788L87.8003 436.995Z' fill='#455A64' />
                <path
                    d='M171.924 451.901C171.378 451.901 171.297 451.275 171.297 450.904V183.361C171.338 182.665 171.541 181.988 171.89 181.384C172.238 180.78 172.722 180.266 173.304 179.881L361.062 71.5604C361.273 71.4228 361.517 71.3428 361.769 71.3284C362.303 71.3284 362.384 71.9548 362.384 72.326V339.88C362.343 340.576 362.14 341.253 361.791 341.857C361.443 342.461 360.959 342.976 360.377 343.36L172.631 451.669C172.418 451.804 172.175 451.884 171.924 451.901Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M361.676 72.0243C361.693 72.1242 361.693 72.2261 361.676 72.3259V339.88C361.628 340.455 361.453 341.012 361.165 341.511C360.876 342.011 360.48 342.44 360.006 342.768L172.295 451.089C172.205 451.143 172.107 451.182 172.005 451.205C171.995 451.105 171.995 451.004 172.005 450.904V183.361C172.049 182.787 172.221 182.229 172.508 181.73C172.795 181.23 173.19 180.801 173.663 180.473L361.398 72.1403C361.485 72.0889 361.579 72.0499 361.676 72.0243ZM361.769 70.6555C361.399 70.6645 361.039 70.7727 360.725 70.9687L172.967 179.301C172.289 179.748 171.726 180.349 171.323 181.054C170.92 181.759 170.688 182.55 170.647 183.361V450.904C170.647 451.959 171.169 452.574 171.947 452.574C172.316 452.56 172.675 452.452 172.991 452.261L360.76 343.928C361.436 343.479 361.997 342.877 362.4 342.173C362.803 341.468 363.035 340.679 363.08 339.868V72.3259C363.08 71.2587 362.546 70.6555 361.781 70.6555H361.769Z'
                    fill='#E6E6E6'
                />
                <path d='M187.119 190.182L242.103 158.433V221.919L187.119 253.669V190.182Z' fill='var(--color-secondary)' />
                <path
                    d='M233.856 174.302V193.349L232.128 194.312V188.512C232.128 185.287 229.506 184.196 226.27 186.064L203 199.52C199.764 201.388 197.13 205.517 197.13 208.73V214.53L195.414 215.563V196.527L233.856 174.302Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M223.254 222.848C220.423 224.483 218.138 222.766 218.138 219.031V188.477L211.12 192.328V223.114C211.12 226.85 208.8 231.234 206.004 232.824L200.9 235.77V237.8L228.392 221.92V219.901L223.254 222.848Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M253.1 155.266C253.1 157.018 254.678 157.586 256.58 156.426L343.024 106.546C343.965 106.004 344.769 105.252 345.372 104.349C345.976 103.445 346.363 102.415 346.504 101.338C346.504 99.586 344.926 99.0756 343.024 100.178L256.58 150.058C255.637 150.598 254.832 151.349 254.228 152.253C253.624 153.156 253.238 154.188 253.1 155.266Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M253.1 174.301C253.1 176.065 254.678 176.621 256.58 175.461L343.024 125.581C343.965 125.039 344.769 124.287 345.372 123.384C345.976 122.481 346.363 121.45 346.504 120.373C346.504 118.621 344.926 118.053 343.024 119.213L256.58 169.093C255.637 169.633 254.832 170.384 254.228 171.288C253.624 172.192 253.238 173.223 253.1 174.301Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M253.1 193.349C253.1 195.112 254.678 195.669 256.58 194.509L343.024 144.629C343.965 144.087 344.769 143.335 345.372 142.431C345.976 141.528 346.363 140.498 346.504 139.42C346.504 137.669 344.926 137.1 343.024 138.26L256.58 188.14C255.637 188.68 254.832 189.432 254.228 190.336C253.624 191.239 253.238 192.271 253.1 193.349Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M253.1 212.396C253.1 214.147 254.678 214.716 256.58 213.556L343.024 163.676C343.965 163.134 344.769 162.382 345.372 161.478C345.976 160.575 346.363 159.545 346.504 158.467C346.504 156.716 344.926 156.205 343.024 157.307L256.58 207.187C255.637 207.727 254.832 208.479 254.228 209.383C253.624 210.286 253.238 211.318 253.1 212.396Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 269.549C187.119 271.301 188.697 271.811 190.599 270.709L343.023 182.781C343.965 182.239 344.769 181.487 345.372 180.584C345.976 179.68 346.363 178.65 346.503 177.573C346.503 175.821 344.926 175.311 343.023 176.413L190.599 264.352C189.659 264.893 188.856 265.643 188.253 266.545C187.649 267.446 187.262 268.474 187.119 269.549Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 288.596C187.119 290.348 188.697 290.916 190.599 289.756L343.058 201.84C344 201.298 344.803 200.546 345.407 199.643C346.011 198.739 346.398 197.709 346.538 196.632C346.538 194.88 344.961 194.37 343.058 195.472L190.634 283.388C189.686 283.926 188.876 284.676 188.266 285.58C187.656 286.483 187.264 287.516 187.119 288.596Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 307.644C187.119 309.395 188.697 309.964 190.599 308.804L343.023 220.876C343.965 220.334 344.769 219.582 345.372 218.678C345.976 217.775 346.363 216.744 346.503 215.667C346.503 213.916 344.926 213.347 343.023 214.507L190.599 302.447C189.659 302.988 188.856 303.738 188.253 304.639C187.649 305.54 187.262 306.568 187.119 307.644Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 326.679C187.119 328.431 188.697 328.999 190.599 327.839L343.023 239.9C343.965 239.361 344.769 238.611 345.373 237.71C345.977 236.808 346.364 235.779 346.503 234.703C346.503 232.94 344.926 232.383 343.023 233.543L190.599 321.482C189.658 322.021 188.853 322.771 188.25 323.672C187.646 324.574 187.259 325.603 187.119 326.679Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 345.68C187.119 347.431 188.697 347.942 190.599 346.84L343.023 258.9C343.965 258.358 344.769 257.606 345.372 256.703C345.976 255.799 346.363 254.769 346.503 253.692C346.503 251.94 344.926 251.43 343.023 252.532L190.599 340.46C189.656 341.003 188.852 341.757 188.248 342.662C187.644 343.568 187.258 344.6 187.119 345.68Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 364.773C187.119 366.525 188.697 367.093 190.599 365.933L343.023 278.005C343.965 277.463 344.769 276.711 345.372 275.808C345.976 274.905 346.363 273.874 346.503 272.797C346.503 271.045 344.926 270.477 343.023 271.637L190.634 359.6C189.69 360.135 188.883 360.879 188.273 361.777C187.664 362.674 187.269 363.699 187.119 364.773Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 383.809C187.119 385.561 188.697 386.129 190.599 384.969L343.023 297.029C343.965 296.491 344.769 295.741 345.373 294.839C345.977 293.938 346.364 292.909 346.503 291.833C346.503 290.069 344.926 289.513 343.023 290.673L190.599 378.612C189.658 379.151 188.853 379.901 188.25 380.802C187.646 381.704 187.259 382.733 187.119 383.809Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 402.856C187.119 404.608 188.697 405.118 190.599 404.016L343.023 316.077C343.965 315.535 344.769 314.783 345.372 313.879C345.976 312.976 346.363 311.946 346.503 310.868C346.503 309.117 344.926 308.548 343.023 309.708L190.599 397.636C189.656 398.18 188.852 398.933 188.248 399.839C187.644 400.744 187.258 401.777 187.119 402.856Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M187.119 421.904C187.119 423.655 188.697 424.224 190.599 423.064L343.023 335.136C343.965 334.593 344.769 333.841 345.372 332.938C345.976 332.035 346.363 331.004 346.503 329.927C346.503 328.176 344.926 327.665 343.023 328.767L190.599 416.707C189.659 417.248 188.856 417.998 188.253 418.899C187.649 419.8 187.262 420.828 187.119 421.904Z'
                    fill='#E0E0E0'
                />
                <path
                    d='M421.857 284.734C421.901 277.975 423.829 271.363 427.425 265.64V254.864C427.474 254.314 427.388 253.761 427.176 253.252C426.964 252.743 426.631 252.293 426.207 251.94C426.102 251.867 425.989 251.805 425.871 251.755L390.92 231.536C390.391 231.306 389.812 231.217 389.238 231.278C388.665 231.339 388.117 231.548 387.649 231.884L360.099 247.788C358.77 248.704 357.669 249.912 356.879 251.32C356.089 252.727 355.631 254.296 355.54 255.908C355.227 263.796 352.652 278.4 338.72 286.439C324.788 294.478 322.178 282.704 321.888 275.187C321.772 272.194 319.928 270.988 317.341 272.484L289.78 288.388C288.424 289.282 287.297 290.484 286.491 291.894C285.685 293.305 285.222 294.885 285.14 296.508V307.284C285.14 307.284 290.708 308.838 290.708 319.951C290.708 331.064 282.1 351.213 282.1 379.181C282.1 393.182 286.543 404.875 295.87 410.246L330.89 430.453C340.17 435.928 354.392 435.093 373.961 423.748C412.914 401.256 430.615 362.024 430.615 334.068C430.615 306.112 421.857 295.8 421.857 284.734Z'
                    fill='var(--color-secondary)'
                />
                <path
                    d='M387.533 231.849L359.983 247.753C358.653 248.668 357.551 249.876 356.761 251.283C355.97 252.691 355.513 254.261 355.424 255.873C355.134 263.146 352.93 276.115 341.678 284.385L320.485 272.147L320.369 272.089C319.861 271.862 319.301 271.776 318.748 271.839C318.195 271.903 317.669 272.113 317.225 272.449L289.664 288.353C289.28 288.576 288.918 288.836 288.585 289.13C287.688 289.899 286.93 290.817 286.346 291.844C285.507 293.251 285.037 294.847 284.977 296.484V307.261L286.497 308.142C288.167 309.488 290.545 312.666 290.545 319.916C290.545 331.029 281.938 351.236 281.938 379.146C281.938 393.147 286.381 404.863 295.707 410.234L330.6 430.36C321.448 424.919 317.098 413.319 317.098 399.446C317.098 371.478 325.693 351.317 325.693 340.205C325.693 329.092 320.125 327.549 320.125 327.549V316.773C320.214 315.152 320.68 313.574 321.485 312.164C322.291 310.754 323.414 309.552 324.765 308.653L352.327 292.749C352.757 292.429 353.261 292.222 353.793 292.149C354.324 292.076 354.865 292.139 355.366 292.331H355.482C355.952 292.682 356.326 293.145 356.57 293.678C356.813 294.211 356.918 294.798 356.874 295.382C357.152 302.911 359.681 314.743 373.706 306.646C387.73 298.549 390.212 284.003 390.537 276.115C390.623 274.503 391.078 272.934 391.866 271.526C392.655 270.118 393.756 268.91 395.084 267.995L422.634 252.091C423.085 251.77 423.607 251.565 424.155 251.495C424.704 251.424 425.261 251.489 425.778 251.685L390.92 231.536C390.379 231.28 389.779 231.174 389.184 231.229C388.588 231.284 388.018 231.498 387.533 231.849Z'
                    fill='var(--color-secondary)'
                />
                <path
                    opacity='0.1'
                    d='M286.52 308.131L320.16 327.538V316.761C320.212 315.121 320.688 313.523 321.54 312.121L286.346 291.856C285.506 293.262 285.035 294.859 284.977 296.496V307.272L286.52 308.131Z'
                    fill='black'
                />
                <path
                    opacity='0.4'
                    d='M341.678 284.386L320.485 272.148L320.369 272.09C319.861 271.863 319.301 271.776 318.748 271.839C318.195 271.903 317.669 272.113 317.225 272.449L289.664 288.353C289.28 288.576 288.918 288.836 288.585 289.13C287.688 289.899 286.93 290.817 286.346 291.844L321.552 312.168C322.34 310.745 323.478 309.547 324.858 308.688L352.42 292.784C352.85 292.464 353.354 292.257 353.885 292.184C354.417 292.111 354.958 292.174 355.459 292.366L341.678 284.386Z'
                    fill='white'
                />
                <path
                    opacity='0.4'
                    d='M425.871 251.72L390.92 231.536C390.385 231.289 389.794 231.188 389.207 231.243C388.621 231.298 388.059 231.507 387.579 231.849L360.029 247.753C358.672 248.608 357.567 249.809 356.828 251.233L392.022 271.544C392.761 270.121 393.866 268.92 395.224 268.064L422.774 252.161C423.216 251.842 423.728 251.635 424.268 251.558C424.807 251.482 425.358 251.537 425.871 251.72Z'
                    fill='white'
                />
                <path
                    opacity='0.1'
                    d='M391.976 271.556C391.186 272.983 390.722 274.568 390.618 276.196C390.305 284.084 387.718 298.688 373.798 306.727C359.878 314.766 357.245 302.992 356.967 295.463C357.011 294.879 356.906 294.293 356.663 293.759C356.419 293.226 356.045 292.763 355.575 292.413H355.459L341.678 284.455C352.93 276.184 355.134 263.215 355.424 255.942C355.524 254.314 355.988 252.728 356.781 251.302L391.976 271.556Z'
                    fill='black'
                />
                <path
                    opacity='0.2'
                    d='M330.6 430.36L295.661 410.211C286.381 404.84 281.892 393.124 281.892 379.123C281.892 351.167 290.499 331.006 290.499 319.893C290.499 312.701 288.179 309.523 286.497 308.142L320.137 327.549C320.137 327.549 325.705 329.104 325.705 340.205C325.705 351.306 317.109 371.525 317.109 399.446C317.144 413.331 321.494 424.931 330.6 430.36Z'
                    fill='black'
                />
                <path
                    d='M381.791 382.498L366.711 391.198L369.031 363.927C367.221 362.975 366.073 360.632 366.073 357.268C366.073 351.259 369.727 344.288 374.193 341.678C378.659 339.068 382.313 341.84 382.313 347.849C382.22 351.408 381.204 354.881 379.366 357.929L381.791 382.498Z'
                    fill='#455A64'
                />
                <path d='M381.791 382.498L368.137 374.61L366.711 391.198L381.791 382.498Z' fill='#37474F' />
                <path
                    d='M374.251 341.678C371.304 343.383 368.729 346.956 367.291 350.958L379.448 357.976C381.285 354.927 382.301 351.454 382.394 347.896C382.406 341.84 378.752 339.08 374.251 341.678Z'
                    fill='#37474F'
                />
                <path
                    d='M391.291 183.129C383.832 178.825 374.471 179.313 365.574 184.44L332.711 203.417C318.466 211.642 307.725 230.248 307.725 246.685V291.055C307.725 292.888 308.954 294.733 311.379 296.136C314.105 297.52 317.12 298.241 320.177 298.241C323.235 298.241 326.25 297.52 328.976 296.136C331.4 294.733 332.63 292.888 332.63 291.055V246.685C332.63 239.122 338.604 228.775 345.158 224.993L378.021 206.016H378.102V250.467C378.102 252.311 379.332 254.144 381.756 255.548C384.483 256.932 387.497 257.653 390.555 257.653C393.612 257.653 396.627 256.932 399.353 255.548C401.778 254.144 403.007 252.311 403.007 250.467V206.062C403.007 195.785 398.738 187.433 391.291 183.129Z'
                    fill='#37474F'
                />
                <path
                    d='M378.16 206.062V250.421C378.16 252.265 379.39 254.098 381.814 255.501C382.966 256.147 384.199 256.639 385.48 256.963V201.747L378.16 205.969V206.062Z'
                    fill='#263238'
                />
                <path
                    d='M526.895 252.567C524.97 252.01 523.415 250.919 520.643 250.363C518.713 250.123 516.87 249.418 515.272 248.309C513.184 246.906 509.089 240.874 505.853 234.865C502.468 228.032 500.272 220.673 499.357 213.103C498.603 203.974 496.492 191.759 495.947 186.423C495.065 178.002 492.559 173.663 482.827 174.255C482.827 174.255 485.437 177.225 484.683 184.834C483.929 192.444 486.121 205.714 487.768 216.015C488.569 221.003 491.179 227.847 496.063 236.988C499.461 243.368 502.547 248.75 507.291 254.202C508.579 255.687 509.17 257.114 511.305 260.246C512.106 261.592 513.107 262.809 514.274 263.853C515.781 265.075 517.458 266.072 519.251 266.811C521.518 267.759 523.999 268.076 526.431 267.728C527.752 267.556 529.015 267.08 530.12 266.336C531.235 265.557 532.033 264.405 532.37 263.088C532.44 262.826 532.44 262.55 532.37 262.287C532.231 261.812 531.756 261.533 531.326 261.29C528.767 260.113 526.269 258.804 523.844 257.369C521.942 256.058 520.782 254.875 521.223 254.759C521.664 254.643 522.742 255.49 524.703 255.745C526.663 256 528.635 255.084 528.682 254.005C528.728 252.926 528.821 253.123 526.895 252.567Z'
                    fill='#9A4A4D'
                />
                <path
                    d='M482.166 173.733C485.646 173.501 493.139 172.573 495.39 179.638C497.64 186.702 500.238 213.104 500.934 216.456C502.086 221.535 503.638 226.516 505.574 231.35C507.616 236.362 513.544 246.581 513.544 246.581L506.154 252.88C506.154 252.88 495.807 240.874 490.494 228.126C485.182 215.377 483.534 198.917 483.268 189.115C483.194 183.971 482.826 178.835 482.166 173.733Z'
                    fill='var(--color-secondary)'
                />
                <path
                    opacity='0.1'
                    d='M482.166 173.733C485.646 173.501 493.139 172.573 495.39 179.638C497.64 186.702 500.238 213.104 500.934 216.456C502.086 221.535 503.638 226.516 505.574 231.35C507.616 236.362 513.544 246.581 513.544 246.581L506.154 252.88C506.154 252.88 495.807 240.874 490.494 228.126C485.182 215.377 483.534 198.917 483.268 189.115C483.194 183.971 482.826 178.835 482.166 173.733Z'
                    fill='black'
                />
                <path d='M488.766 388.774L499.09 389.134L499.612 370.4L489.277 370.04L488.766 388.774Z' fill='#9A4A4D' />
                <path d='M450.103 401.627H460.439V383.925H450.103V401.627Z' fill='#9A4A4D' />
                <path
                    d='M460.439 396.534V395.049C461.425 395.479 463.722 404.248 467.828 407.995C471.088 410.965 475.53 414.398 476.667 417.716C477.804 421.033 470.473 423.075 467.387 422.53C463.849 421.903 457.713 419.409 456.17 417.101C454.627 414.793 453.908 411.382 452.69 409.689C451.472 407.995 448.56 406.104 447.876 404.144C447.505 403.065 447.946 400.664 448.468 398.715C448.99 396.766 449.477 394.875 450.092 395.049V396.209C451.565 397.368 453.391 397.986 455.265 397.961C456.773 397.984 460.45 397.683 460.439 396.534Z'
                    fill='#263238'
                />
                <path
                    d='M499.206 385.944C499.74 385.944 500.18 386.721 501.364 387.997C503.128 389.788 505.183 391.266 507.442 392.37C511.317 394.319 518.845 397.3 522.244 398.831C524.378 399.782 524.274 402.311 522.081 403.819C519.889 405.327 514.565 406.336 508.161 404.91C504.681 404.132 500.169 400.931 497.304 401.105C494.438 401.279 489.091 401.232 486.98 399.771C484.869 398.309 485.704 395.212 486.307 392.532C486.957 389.621 487.884 385.155 488.859 385.352V386.268C490.1 388.159 496.434 388.925 499.16 387.533L499.206 385.944Z'
                    fill='#263238'
                />
                <path
                    d='M454.511 237.301C446.391 253.936 454.407 316.668 454.407 316.668C454.117 319.383 450.869 324.684 449.431 336.667C447.737 350.819 449.198 387.196 449.198 387.196C449.198 387.196 455.95 390.189 461.448 387.707C461.448 387.707 471.157 333.72 473.268 319.661C475.101 307.388 478.709 280.384 478.709 280.384L486.272 319.893C484.938 323.83 483.944 327.874 483.303 331.98C482.305 340.251 488.244 378.856 488.244 378.856C491.917 380.397 495.998 380.67 499.844 379.633C499.844 379.633 503.324 328.396 504.345 318.42C505.992 301.67 501.132 249.272 499.415 238.31L454.511 237.301Z'
                    fill='#263238'
                />
                <path
                    d='M465.322 174.104C462.712 174.406 456.68 175.462 456.68 175.462C452.678 176.923 453.108 179.382 452.04 183.222C450.672 187.978 451.565 196.469 453.2 201.144L460.949 223.544C458.049 230.504 455.265 232.569 453.873 237.893C466.529 247.277 493.731 246.72 499.577 238.809C499.821 237.127 497.594 217.86 496.666 209.287C500.61 202.13 502.118 197.003 500.053 191.516C496.515 182.132 486.817 173.362 482.212 173.733L465.322 174.104Z'
                    fill='var(--color-secondary)'
                />
                <path
                    d='M473.187 166.042H469.371C464.033 166.042 458.914 163.922 455.14 160.148C451.365 156.373 449.245 151.254 449.245 145.916C449.245 140.551 451.376 135.405 455.17 131.611C458.964 127.817 464.11 125.686 469.475 125.686H473.083C478.448 125.686 483.594 127.817 487.388 131.611C491.182 135.405 493.313 140.551 493.313 145.916C493.313 151.254 491.193 156.373 487.418 160.148C483.644 163.922 478.525 166.042 473.187 166.042Z'
                    fill='#263238'
                />
                <path
                    d='M438.932 175.299C440.562 175.301 442.176 174.981 443.681 174.359C445.187 173.736 446.556 172.823 447.708 171.671C448.861 170.52 449.775 169.152 450.399 167.647C451.023 166.142 451.344 164.528 451.344 162.899V136.323C448.052 136.323 444.895 137.631 442.568 139.959C440.24 142.286 438.932 145.443 438.932 148.735V175.299Z'
                    fill='#263238'
                />
                <path
                    d='M486.724 133.029C489.149 134.467 492.153 140.58 491.852 153.387C491.608 164.233 488.081 166.912 486.318 167.69C484.555 168.467 481.145 167.991 477.827 167.434V174L477.166 181.644L464.197 175.717V159.929C464.197 159.929 461.958 162.91 458.304 160.486C454.65 158.062 454.511 152.041 456.634 149.884C458.757 147.726 463.35 148.41 464.197 151.392C464.197 151.392 465.682 148.271 473.268 145.673C481.261 142.935 483.917 138.133 486.724 133.029Z'
                    fill='#B16668'
                />
                <path
                    d='M478.523 150.661C478.525 150.929 478.448 151.192 478.302 151.417C478.156 151.642 477.947 151.819 477.701 151.926C477.455 152.033 477.183 152.065 476.919 152.019C476.655 151.973 476.41 151.85 476.215 151.666C476.02 151.482 475.883 151.245 475.822 150.984C475.761 150.723 475.777 150.449 475.87 150.198C475.963 149.946 476.127 149.727 476.343 149.568C476.559 149.409 476.817 149.317 477.085 149.304C477.455 149.294 477.814 149.432 478.084 149.686C478.353 149.94 478.511 150.291 478.523 150.661Z'
                    fill='#263238'
                />
                <path
                    d='M480.101 159.86L483.268 160.869C483.214 161.083 483.118 161.284 482.984 161.46C482.851 161.635 482.683 161.782 482.49 161.89C482.298 161.999 482.086 162.067 481.867 162.091C481.647 162.115 481.425 162.094 481.214 162.029C480.781 161.885 480.422 161.578 480.214 161.172C480.006 160.766 479.965 160.295 480.101 159.86Z'
                    fill='#9A4A4D'
                />
                <path
                    d='M489.706 146.462L486.945 144.548C487.061 144.358 487.215 144.195 487.397 144.068C487.579 143.941 487.786 143.852 488.003 143.809C488.221 143.765 488.446 143.767 488.663 143.815C488.88 143.862 489.085 143.953 489.265 144.084C489.632 144.345 489.884 144.74 489.966 145.184C490.048 145.627 489.955 146.085 489.706 146.462Z'
                    fill='#263238'
                />
                <path
                    d='M489.079 149.64C489.103 149.827 489.088 150.017 489.036 150.198C488.983 150.379 488.893 150.547 488.772 150.692C488.651 150.837 488.502 150.955 488.333 151.039C488.164 151.123 487.98 151.172 487.791 151.181C487.603 151.191 487.415 151.162 487.238 151.095C487.062 151.028 486.901 150.926 486.766 150.794C486.631 150.663 486.525 150.505 486.454 150.33C486.383 150.155 486.348 149.968 486.353 149.779C486.339 149.597 486.361 149.414 486.418 149.24C486.476 149.066 486.567 148.906 486.687 148.768C486.806 148.629 486.952 148.516 487.116 148.435C487.28 148.354 487.458 148.306 487.641 148.294C488.009 148.285 488.367 148.421 488.636 148.673C488.905 148.924 489.064 149.272 489.079 149.64Z'
                    fill='#263238'
                />
                <path d='M482.409 148.886L482.63 157.099L486.945 155.765L482.409 148.886Z' fill='#9A4A4D' />
                <path
                    d='M477.827 167.434C474.347 166.982 467.167 164.917 466.042 162.075C466.489 163.515 467.368 164.782 468.559 165.706C470.705 167.539 477.839 169.615 477.839 169.615L477.827 167.434Z'
                    fill='#9A4A4D'
                />
                <path
                    d='M478.709 280.384L482.653 261.232C482.653 261.232 490.889 259.852 495.262 256.731C492.778 259.741 489.563 262.061 485.924 263.471L481.4 281.544L482.56 300.336L478.709 280.384Z'
                    fill='black'
                />
                <path
                    d='M463.93 138.875C463.93 138.875 479.521 149.489 490.355 144.188C501.19 138.887 487.154 131.428 487.154 131.428L463.93 138.875Z'
                    fill='#37474F'
                />
                <path
                    d='M487.037 116.626C477.757 114.028 467.7 112.358 456.007 116.626C444.315 120.895 441.763 128.11 441.763 128.11C441.763 128.11 453.664 132.82 463.35 131.231C473.036 129.642 487.037 116.626 487.037 116.626Z'
                    fill='var(--color-secondary)'
                />
                <path
                    opacity='0.4'
                    d='M487.037 116.626C477.757 114.028 467.7 112.358 456.007 116.626C444.315 120.895 441.763 128.11 441.763 128.11C441.763 128.11 453.664 132.82 463.35 131.231C473.036 129.642 487.037 116.626 487.037 116.626Z'
                    fill='white'
                />
                <path
                    d='M448.27 132.483C448.27 132.483 442.319 129.653 441.763 128.087C446.392 128.614 451.078 128.312 455.602 127.194C463.339 125.326 471.389 117.809 480.101 116.487C488.812 115.165 492.524 119.607 492.524 119.607C492.524 119.607 490.599 125.802 487.583 129.56C487.583 129.56 484.892 135.441 474.637 136.799C464.383 138.156 448.27 132.483 448.27 132.483Z'
                    fill='var(--color-secondary)'
                />
                <path
                    d='M448.271 132.484L448.758 134.177C448.943 134.75 449.245 135.279 449.644 135.73C450.043 136.181 450.531 136.545 451.078 136.799C458.644 139.811 466.91 140.616 474.916 139.119C482.119 137.785 485.356 135.94 486.667 134.548C487.135 134.136 487.488 133.61 487.692 133.02C487.895 132.43 487.942 131.797 487.827 131.184L487.583 129.537C487.583 129.537 485.356 132.646 473.582 134.954C461.808 137.263 448.271 132.484 448.271 132.484Z'
                    fill='#455A64'
                />
                <path
                    d='M481.006 119.956C480.913 121.777 478.999 125.118 476.458 123.54V128.18C476.458 131.022 478.129 132.008 480.832 131.44C482.176 131.185 483.388 130.464 484.252 129.402C485.116 128.341 485.577 127.008 485.553 125.64C485.553 124.77 485.553 121.696 485.553 121.696C483.558 124.387 480.971 120.64 481.006 119.956Z'
                    fill='#FAFAFA'
                />
                <path
                    d='M464.197 154.199V148.039H466.598V151.797C466.598 152.434 466.345 153.045 465.895 153.495C465.445 153.946 464.834 154.199 464.197 154.199Z'
                    fill='#263238'
                />
                <path
                    d='M477.166 181.598L464.197 172.144V169.824C464.197 169.824 461.471 170.288 460.81 175.485C462.839 179.968 466.31 183.643 470.67 185.925L473.35 181.18L477.166 181.598Z'
                    fill='var(--color-secondary)'
                />
                <path
                    opacity='0.1'
                    d='M477.166 181.598L464.197 172.144V169.824C464.197 169.824 461.471 170.288 460.81 175.485C462.839 179.968 466.31 183.643 470.67 185.925L473.35 181.18L477.166 181.598Z'
                    fill='black'
                />
                <path
                    d='M477.827 170.358C479.512 170.629 481.028 171.539 482.061 172.898C483.337 174.998 483.047 183.002 483.047 183.002L479.648 179.127L477.166 181.598C477.444 178.93 477.827 173.954 477.827 173.954V170.358Z'
                    fill='var(--color-secondary)'
                />
                <path
                    opacity='0.1'
                    d='M477.827 170.358C479.512 170.629 481.028 171.539 482.061 172.898C483.337 174.998 483.047 183.002 483.047 183.002L479.648 179.127L477.166 181.598C477.444 178.93 477.827 173.954 477.827 173.954V170.358Z'
                    fill='black'
                />
                <path
                    d='M467.155 265.408C465.543 264.248 464.487 262.647 462.074 261.151C460.346 260.255 458.864 258.948 457.759 257.346C456.298 255.293 454.569 248.217 453.641 241.454C452.539 233.473 453.757 222.639 454.326 218.161C455.583 209.563 457.325 201.043 459.546 192.641C459.638 192.259 457.55 180.589 455.254 178.721C455.254 178.721 452.62 178.35 449.245 185.217C445.869 192.084 444.21 207.257 443.282 217.454C442.517 224.999 442.657 232.608 443.7 240.12C444.651 247.289 445.66 253.402 448.201 260.176C448.885 262.021 448.943 263.564 449.848 267.241C450.133 268.78 450.641 270.269 451.356 271.661C452.346 273.33 453.568 274.849 454.987 276.173C456.783 277.854 458.999 279.02 461.402 279.549C462.713 279.862 464.08 279.862 465.392 279.549C466.713 279.187 467.864 278.369 468.64 277.24C468.807 277.02 468.911 276.76 468.942 276.486C468.91 275.991 468.685 275.529 468.315 275.199C466.333 273.201 464.455 271.102 462.689 268.911C461.355 267.009 460.682 265.489 461.146 265.547C461.61 265.605 462.306 266.765 464.093 267.705C465.879 268.645 468.014 268.459 468.443 267.461C468.872 266.464 468.768 266.591 467.155 265.408Z'
                    fill='#9A4A4D'
                />
                <path
                    d='M456.495 175.485C456.495 175.485 462.295 187.189 459.708 197.525C457.33 206.967 455.984 219.054 455.474 222.442C454.76 227.599 454.45 232.804 454.546 238.009C454.708 243.414 456.692 255.061 456.692 255.061L447.609 258.425C447.609 258.425 442.111 243.554 441.589 229.75C441.067 215.946 442.401 199.59 444.64 190.008C445.626 185.878 446.786 177.144 456.495 175.485Z'
                    fill='var(--color-secondary)'
                />
                <path
                    opacity='0.1'
                    d='M456.495 175.485C456.495 175.485 462.295 187.189 459.708 197.525C457.33 206.967 455.984 219.054 455.474 222.442C454.76 227.599 454.45 232.804 454.546 238.009C454.708 243.414 456.692 255.061 456.692 255.061L447.609 258.425C447.609 258.425 442.111 243.554 441.589 229.75C441.067 215.946 442.401 199.59 444.64 190.008C445.626 185.878 446.786 177.144 456.495 175.485Z'
                    fill='black'
                />
                <path
                    d='M465.833 195.402C465.833 195.402 474.486 195.042 478.048 193.662V191.934C474.44 193.314 465.833 193.72 465.833 193.72V195.402Z'
                    fill='#37474F'
                />
                <path
                    d='M446.925 189.08C446.925 189.08 449.651 188.129 453.409 190.24L453.502 189.857C453.544 189.659 453.519 189.452 453.431 189.269C453.342 189.087 453.196 188.939 453.015 188.848C451.398 187.998 449.561 187.662 447.748 187.885C447.577 187.915 447.419 187.995 447.293 188.115C447.167 188.234 447.079 188.389 447.041 188.558L446.925 189.08Z'
                    fill='#37474F'
                />
                <path
                    d='M451.736 194.377C452.187 192.351 451.321 190.434 449.802 190.095C448.282 189.757 446.684 191.125 446.233 193.151C445.782 195.177 446.648 197.094 448.167 197.432C449.687 197.771 451.284 196.403 451.736 194.377Z'
                    fill='#37474F'
                />
            </svg>
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 100px;
    align-items: center;
    padding-inline: var(--app-padding-inline);
    height: calc(100svh - 70px);

    svg {
        width: 100%;
        max-width: 500px;
        height: fit-content;
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        align-items: flex-start;
        padding-top: 70px;

        svg {
            display: none;
        }
    }
`;

S.Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 650px;

    h1 {
        text-align: center;
        font-family: var(--outfit);

        span {
            color: var(--color-secondary);
        }
    }

    p {
        text-align: center;
        color: #585858;
        font-weight: 500;
    }

    @media (max-width: 600px) {
        gap: 25px;

        p {
            font-size: 0.9rem;
        }
    }
`;
