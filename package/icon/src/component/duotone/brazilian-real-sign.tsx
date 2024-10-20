
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brazilian-real-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brazilian-real-sign?s=duotone brazilian-real-sign}
 * @preview ![brazilian-real-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/brazilian-real-sign.svg)
 */
const BrazilianRealSign: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 165.9c0 48.2 29.3 91.5 74.1 109.4l52 20.8c20.5 8.2 33.9 28 33.9 50l0 3.4c0 27.9-22.6 50.5-50.5 50.5c-12.9 0-25.6-3.8-36.3-11l-23.4-15.6c-14.7-9.8-34.6-5.8-44.4 8.9c-3.6 5.5-5.4 11.6-5.4 17.7c0 10.3 5 20.5 14.3 26.7l23.4 15.6c13 8.6 27.3 14.8 42.3 18.3l0 19.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-21.3c46.4-14.6 80-58 80-109.2l0-3.4c0-48.2-29.3-91.5-74.1-109.4l-52-20.8c-20.5-8.2-33.9-28-33.9-50c0-29.7 24.1-53.9 53.9-53.9l1.7 0c11.1 0 22 2.6 32 7.5l10.2 5.1c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9l-10.1-5.1c-11.5-5.7-23.6-9.8-36.2-12.1L432 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 22.2C321.5 70 288 114 288 165.9z" />
        <path d="M32 32C14.3 32 0 46.3 0 64L0 288 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 42.3 0 56 139.9c6.6 16.4 25.2 24.4 41.6 17.8s24.4-25.2 17.8-41.6L170.3 307.7C220.8 285.3 256 234.8 256 176c0-79.5-64.5-144-144-144L32 32zm80 224l-48 0L64 96l48 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default BrazilianRealSign;