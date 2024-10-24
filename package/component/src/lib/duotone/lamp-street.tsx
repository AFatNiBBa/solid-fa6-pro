
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp-street` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-street?s=duotone lamp-street}
 * @preview ![lamp-street](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lamp-street.svg)
 */
const LampStreet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-304c0-61.9 50.1-112 112-112s112 50.1 112 112l0 18.7c10.4-1.7 21.1-2.7 32-2.7c1.4 0 2.7 0 4.1 0s2.7 .1 4.1 .1c2.7 .1 5.4 .3 8.1 .5c5.3 .4 10.6 1.1 15.8 2l0-18.7C352 78.8 273.2 0 176 0S0 78.8 0 176zM256 384c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0z" />
        <path d="M320 192c-95.2 0-174.2 69.3-189.4 160.1C127.7 369.6 142.3 384 160 384H480c17.7 0 32.3-14.4 29.4-31.9C494.2 261.3 415.2 192 320 192z" />
    </Icon>
);

export default LampStreet;