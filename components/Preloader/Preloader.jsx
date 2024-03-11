'use client';
import Image from 'next/image';
import styles from './Preloader.module.scss';
import left from '../../public/images/left.png'
import right from '../../public/images/right.png'
export const Preloader = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.images}>
                        <Image
                            src={left}
                            width="100px"
                            height="auto"
                            alt="preloading"
                            priority={true}
                        />
                        <Image
                            src={right}
                            width="100px"
                            height="auto"
                            alt="preloading"
                            priority={true}
                        />
                    </div>
                    <div className={styles.name}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <path
                                d="M9.65962 5.32577C9.65962 6.20135 9.43652 6.96847 8.99444 7.63118C8.55236 8.29388 7.97807 8.82404 7.27157 9.22568C6.6601 9.57912 5.96599 9.84823 5.20165 10.033C4.43731 10.2177 3.54076 10.3101 2.52439 10.3101C2.04926 10.3101 1.52455 10.3021 0.954394 10.29C0.384236 10.278 0.0661052 10.2699 0 10.2699C0 10.2217 -1.53913e-08 9.69158 0.0165263 8.68749C0.0330526 7.68339 0.0330526 6.51061 0.0330526 5.16913C0.0330526 4.61086 0.0330528 3.91602 0.0247896 3.08061C0.0165265 2.24521 0.0123947 1.30938 0 0.277171C0.0826315 0.277171 0.42142 0.277176 1.0205 0.269143C1.61958 0.265127 2.03687 0.261108 2.2765 0.261108C3.39615 0.261108 4.37534 0.353486 5.21818 0.53824C6.06102 0.722994 6.80057 1.01217 7.4451 1.4098C8.19291 1.87168 8.74654 2.42996 9.11012 3.08061C9.4737 3.73127 9.65549 4.47832 9.65549 5.32577H9.65962ZM7.04847 5.24545C7.04847 4.74741 6.93691 4.29356 6.70968 3.87987C6.48244 3.46618 6.13126 3.12078 5.652 2.83561C5.22231 2.58258 4.75131 2.40586 4.24313 2.30946C3.73494 2.21307 3.25155 2.16488 2.79708 2.16488H2.52026C2.52026 2.67094 2.512 3.15291 2.512 3.61077V5.99651C2.512 6.57487 2.512 7.36208 2.52026 8.36617H2.77229C3.23089 8.36617 3.71842 8.30995 4.23486 8.19749C4.74718 8.08503 5.17273 7.93642 5.50326 7.74765C6.0197 7.45446 6.40807 7.10102 6.66423 6.68733C6.92039 6.27364 7.04847 5.79168 7.04847 5.24545Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                            <path
                                d="M11.4391 9.67548L8.9354 10.4908C8.88169 10.3261 8.74948 9.96466 8.5429 9.41039C8.33219 8.85212 8.0843 8.22556 7.79509 7.52269H3.88662C3.58914 8.23359 3.33298 8.86818 3.12227 9.42646C2.91156 9.98473 2.78348 10.3382 2.7339 10.4948L0.378906 9.71564C0.515248 9.41842 1.05235 8.23359 1.97783 6.16114C2.9033 4.08868 3.79159 2.10459 4.63856 0.204834H7.24145C8.12148 2.205 9.0263 4.24532 9.95177 6.32581C10.8772 8.40629 11.373 9.52285 11.4391 9.67949V9.67548ZM7.19601 5.96835C7.00182 5.46228 6.78698 4.904 6.55561 4.29351C6.32424 3.68302 6.09288 3.08458 5.86151 2.49819H5.83259C5.6384 2.98015 5.40703 3.5786 5.13848 4.2895C4.86993 5.0004 4.65096 5.56269 4.48569 5.96835V5.97638H7.20014V5.96835H7.19601Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path
                                d="M10.0856 9.59122L7.73882 10.4788C7.54877 10.2098 7.17693 9.7318 6.61916 9.03696C6.0614 8.34213 5.21443 7.27377 4.08238 5.81984L4.11956 5.67123C4.28896 5.63508 4.51206 5.55074 4.78888 5.4182C5.06569 5.28566 5.29706 5.12902 5.47885 4.95632C5.6689 4.77156 5.81351 4.57878 5.90854 4.37394C6.00769 4.16911 6.05314 3.90804 6.05314 3.59074C6.05314 3.27345 5.97051 3.0164 5.80938 2.77541C5.64824 2.53443 5.42514 2.36173 5.14419 2.24525C4.91282 2.14886 4.67732 2.09263 4.42943 2.06853C4.18154 2.04443 3.94603 2.0364 3.71467 2.0364H3.25606C3.25606 2.62681 3.2478 3.23329 3.24367 3.85181C3.23954 4.47033 3.24367 5.02861 3.24367 5.51861C3.24367 6.32992 3.24367 7.21754 3.25193 8.17745C3.2602 9.13737 3.26433 9.83622 3.26846 10.262H0.727539C0.727539 9.86835 0.739932 9.29 0.748195 8.52688C0.756458 7.76377 0.760589 6.63516 0.760589 5.14107V3.4341C0.760589 2.69509 0.748195 1.63878 0.731668 0.269192C0.880405 0.269192 1.19028 0.265173 1.65714 0.253123C2.12401 0.241074 2.56196 0.237061 2.96685 0.237061C3.73119 0.237061 4.39225 0.261158 4.95001 0.305338C5.50777 0.349519 6.04074 0.453944 6.53653 0.618616C7.24716 0.84755 7.77601 1.18493 8.12306 1.63075C8.47011 2.07657 8.63951 2.57861 8.63951 3.13287C8.63951 3.77148 8.45771 4.31369 8.09414 4.76755C7.73056 5.2214 7.35872 5.56279 6.98274 5.79173V5.83591C7.51159 6.48656 8.08174 7.14926 8.68082 7.82402C9.28403 8.49877 9.7509 9.08516 10.0897 9.58319V9.59122H10.0856Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                            <path
                                d="M2.94912 10.27H0.408203C0.408203 10.1013 0.420599 9.53496 0.428862 8.57103C0.437125 7.60709 0.441256 6.33792 0.441256 4.75546C0.441256 4.16907 0.441257 3.47825 0.428862 2.683C0.416468 1.88776 0.416466 1.08448 0.408203 0.281206H2.94912C2.94912 1.00817 2.93673 1.83956 2.9326 2.7794C2.92846 3.71923 2.92433 4.56669 2.92433 5.32579C2.92433 6.70742 2.92433 7.83602 2.9326 8.7116C2.94086 9.58717 2.94499 10.1053 2.94912 10.274V10.27ZM9.7373 9.53496L7.47319 10.4547C6.41551 9.1775 5.42393 8.03283 4.50672 7.02472C3.58951 6.0166 3.08133 5.47037 2.98217 5.38603V5.36193C3.25486 5.02857 3.80436 4.34981 4.63067 3.32563C5.45699 2.30145 6.29983 1.22505 7.1468 0.100464L9.37372 1.00415C8.65069 1.83554 7.9194 2.71112 7.17572 3.62686C6.43204 4.54259 5.99409 5.07275 5.85362 5.21333V5.22538C5.91972 5.28964 6.32049 5.73947 7.06004 6.56685C7.79959 7.39422 8.68788 8.38627 9.73317 9.53094L9.7373 9.53496Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none" className={styles.m}>
                            <path
                                d="M14.2723 9.94864L11.8222 10.4025L10.5332 3.67505L10.4919 3.663C10.3555 3.97226 10.0498 4.67111 9.57879 5.75955C9.10779 6.84799 8.62853 8.00471 8.14927 9.22971H6.23635C5.76122 8.00471 5.27783 6.83594 4.78617 5.71939C4.29451 4.60283 3.99704 3.92005 3.88962 3.67103H3.85243C3.80285 3.908 3.62933 4.72332 3.34012 6.11299C3.05091 7.50266 2.76996 8.92848 2.50554 10.3985L0.129883 9.95668C0.666987 7.62717 1.12972 5.5266 1.51396 3.64693C1.8982 1.76726 2.12543 0.686853 2.18741 0.397674L4.64983 0.144639C4.72006 0.337426 5.00514 1.04833 5.50093 2.26931C5.99672 3.49029 6.57514 4.89201 7.23619 6.46242H7.29817C7.82701 5.21332 8.38477 3.87587 8.97971 2.44603C9.57466 1.0162 9.8928 0.249067 9.93824 0.140625L12.4502 0.349479C12.475 0.518167 12.6609 1.53029 13.008 3.38988C13.3551 5.24947 13.7765 7.43439 14.2764 9.94463H14.2723V9.94864Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                            <path
                                d="M11.1912 5.27754C11.1912 6.07278 11.0424 6.80778 10.7491 7.47852C10.4557 8.14925 10.0385 8.72761 9.50135 9.20958C8.99317 9.66745 8.42714 10.0088 7.79914 10.2297C7.17114 10.4506 6.49769 10.5631 5.7788 10.5631C5.05991 10.5631 4.40712 10.4587 3.78325 10.2458C3.15938 10.0329 2.60575 9.71564 2.11822 9.29392C1.56872 8.81597 1.13904 8.2336 0.829175 7.54679C0.519307 6.85999 0.362305 6.1009 0.362305 5.2695C0.362305 4.49836 0.490385 3.79549 0.750674 3.1609C1.01096 2.52631 1.40347 1.95598 1.92818 1.44992C2.40744 0.984015 2.97759 0.622543 3.63038 0.373527C4.2873 0.124511 4.99793 0 5.76228 0C6.52662 0 7.21246 0.116475 7.85285 0.345409C8.49325 0.57836 9.05927 0.91574 9.5468 1.36558C10.0922 1.86762 10.5053 2.45402 10.778 3.12475C11.0507 3.79549 11.187 4.51041 11.187 5.27754H11.1912ZM8.58001 5.35786C8.58001 4.85582 8.49325 4.35778 8.31972 3.86377C8.1462 3.36975 7.88177 2.96008 7.52232 2.63877C7.29922 2.42992 7.03893 2.26524 6.74559 2.14877C6.45225 2.02828 6.12999 1.96803 5.77054 1.96803C5.41109 1.96803 5.09296 2.02828 4.79549 2.14877C4.49802 2.26926 4.22533 2.45 3.9733 2.69098C3.65517 3.00025 3.40728 3.38582 3.23375 3.85172C3.06023 4.31762 2.96933 4.79557 2.96933 5.28557C2.96933 5.82778 3.0561 6.32581 3.23375 6.77565C3.41141 7.2295 3.66757 7.60704 4.00636 7.9163C4.23359 8.12515 4.49388 8.28983 4.79549 8.41433C5.09709 8.53884 5.42348 8.59909 5.7788 8.59909C6.13412 8.59909 6.44398 8.53884 6.74146 8.41835C7.03893 8.29786 7.31162 8.12917 7.55125 7.90425C7.86525 7.61507 8.11314 7.24556 8.29906 6.79171C8.48498 6.33786 8.58001 5.85991 8.58001 5.35384V5.35786Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                            <path
                                d="M11.4412 5.27754C11.4412 6.07278 11.2924 6.80778 10.9991 7.47852C10.7057 8.14925 10.2884 8.72761 9.75135 9.20958C9.24316 9.66745 8.67714 10.0088 8.04914 10.2297C7.42114 10.4506 6.74769 10.5631 6.0288 10.5631C5.3099 10.5631 4.65712 10.4587 4.03325 10.2458C3.40938 10.0329 2.85162 9.71564 2.36822 9.29392C1.82286 8.81597 1.38904 8.2336 1.07917 7.54679C0.7693 6.85999 0.612305 6.1009 0.612305 5.2695C0.612305 4.49836 0.740385 3.79549 1.00067 3.1609C1.25683 2.52631 1.64933 1.95598 2.17817 1.44992C2.65743 0.984015 3.22759 0.622543 3.88038 0.373527C4.53317 0.124511 5.24793 0 6.01227 0C6.77661 0 7.46245 0.116475 8.10284 0.345409C8.74324 0.57836 9.30927 0.91574 9.79679 1.36558C10.3422 1.86762 10.7553 2.45402 11.028 3.12475C11.3007 3.79549 11.437 4.51041 11.437 5.27754H11.4412ZM8.83001 5.35786C8.83001 4.85582 8.74324 4.35778 8.56971 3.86377C8.39619 3.36975 8.13177 2.96008 7.77232 2.63877C7.54922 2.42992 7.28893 2.26524 6.99559 2.14877C6.70224 2.02828 6.37998 1.96803 6.02053 1.96803C5.66109 1.96803 5.34296 2.02828 5.04548 2.14877C4.74801 2.26926 4.47532 2.45 4.2233 2.69098C3.90517 3.00025 3.65727 3.38582 3.48375 3.85172C3.30609 4.31762 3.21933 4.79557 3.21933 5.28557C3.21933 5.82778 3.30609 6.32581 3.48375 6.77565C3.66141 7.2295 3.91756 7.60704 4.25635 7.9163C4.47945 8.12515 4.74388 8.28983 5.04548 8.41433C5.34709 8.53884 5.67348 8.59909 6.0288 8.59909C6.38411 8.59909 6.69398 8.53884 6.99146 8.41835C7.29306 8.29786 7.56161 8.12917 7.80124 7.90425C8.11524 7.61507 8.36313 7.24556 8.54906 6.79171C8.73498 6.33786 8.83001 5.85991 8.83001 5.35384V5.35786Z"
                                fill="#EBEBEB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path
                                d="M1.20965 3.08061C1.57323 2.42996 2.12686 1.87168 2.87467 1.4098C3.5192 1.01217 4.26289 0.722994 5.1016 0.53824C5.94444 0.353486 6.92362 0.261108 8.04328 0.261108C8.28291 0.261108 8.70433 0.26111 9.29928 0.269143C9.89835 0.273159 10.2371 0.277171 10.3198 0.277171C10.3115 1.30938 10.3032 2.24521 10.295 3.08061C10.2867 3.91602 10.2867 4.61086 10.2867 5.16913C10.2867 6.51061 10.2909 7.68339 10.3033 8.68749C10.3115 9.69158 10.3198 10.2177 10.3198 10.2699C10.2537 10.2699 9.93554 10.278 9.36538 10.29C8.79522 10.3021 8.27051 10.3101 7.79538 10.3101C6.77901 10.3101 5.8866 10.2177 5.11812 10.033C4.34965 9.84823 3.65968 9.57912 3.04821 9.22568C2.34171 8.82404 1.76741 8.28986 1.32533 7.63118C0.883255 6.97249 0.660156 6.20135 0.660156 5.32577C0.660156 4.4502 0.841942 3.73127 1.20552 3.08061H1.20965ZM3.65968 6.68331C3.91584 7.097 4.30007 7.45044 4.82065 7.74364C5.15118 7.93241 5.57673 8.08101 6.09318 8.19347C6.60549 8.30593 7.09301 8.36216 7.55575 8.36216H7.80778C7.81191 7.35806 7.81604 6.56684 7.81604 5.99249V3.60676C7.81604 3.14889 7.81604 2.66692 7.80778 2.16086H7.53096C7.07649 2.16086 6.59309 2.20905 6.08491 2.30545C5.57673 2.40184 5.10573 2.57856 4.67604 2.83159C4.19678 3.11676 3.84146 3.46217 3.61836 3.87586C3.39525 4.28954 3.27957 4.74339 3.27957 5.24143C3.27957 5.78765 3.40765 6.26963 3.66381 6.68331H3.65968Z"
                                fill="#EBEBEB" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};