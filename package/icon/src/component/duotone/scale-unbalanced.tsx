
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scale-unbalanced` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-unbalanced?s=duotone scale-unbalanced}
 * @preview ![scale-unbalanced](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scale-unbalanced.svg)
 */
const ScaleUnbalanced: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96.5 170.1c5.6 16.8 23.7 25.8 40.5 20.2l135.5-45.2c4.5 3.2 9.3 5.9 14.4 8.2l0 326.7c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-294.7c21-9.2 37.2-27 44.2-49L521 62.4c16.8-5.6 25.8-23.7 20.2-40.5C536.7 8.5 524.2 0 510.9 0c-3.4 0-6.8 .5-10.1 1.7l-113 37.7C373.8 15.8 348.2 0 318.8 0c-44.2 0-80 35.8-80 80c0 3 .2 5.9 .5 8.8L116.7 129.6c-16.8 5.6-25.8 23.7-20.2 40.5z" />
        <path d="M510.8 163.8L583.3 288l-144.9 0 72.4-124.2zm-126 141.3C395.7 350 448 384 510.8 384s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L534.9 109.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L391.6 273.1c-5.7 9.8-9.3 21.1-6.7 32.1zM128 291.8L200.4 416 55.6 416 128 291.8zM2 433.1C12.8 478 65.1 512 128 512s115.2-34 126-78.9c2.6-11-1-22.3-6.7-32.1L152.1 237.8c-5-8.6-14.2-13.8-24.1-13.8s-19.1 5.3-24.1 13.8L8.7 401.1C3 410.8-.6 422.1 2 433.1z" />
    </Icon>
);

export default ScaleUnbalanced;