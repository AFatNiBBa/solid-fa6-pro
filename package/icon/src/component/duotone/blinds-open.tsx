
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=duotone blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 174.2C0 184 8 192 17.8 192L128 192l0-64-80.6 0c-9.7 0-18.9 4.4-25 12L3.9 163.1C1.4 166.3 0 170.2 0 174.2zm0 160C0 344 8 352 17.8 352L144 352c-26.5 0-48-21.5-48-48c0-.7 0-1.4 0-2.1s.1-1.4 .1-2.1c.1-1.4 .3-2.7 .5-4.1c.5-2.7 1.1-5.3 2-7.8l-51.4 0c-9.7 0-18.9 4.4-25 12L3.9 323.1C1.4 326.3 0 330.2 0 334.2zm0 160C0 504 8 512 17.8 512l476.5 0c9.8 0 17.8-8 17.8-17.8c0-4-1.4-7.9-3.9-11.1L489.6 460c-6.1-7.6-15.3-12-25-12L47.4 448c-9.7 0-18.9 4.4-25 12L3.9 483.1C1.4 486.3 0 490.2 0 494.2zM144 352l350.2 0c9.8 0 17.8-8 17.8-17.8c0-4-1.4-7.9-3.9-11.1L489.6 300c-6.1-7.6-15.3-12-25-12l-275.4 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48zm16-224l0 64 334.2 0c9.8 0 17.8-8 17.8-17.8c0-4-1.4-7.9-3.9-11.1L489.6 140c-6.1-7.6-15.3-12-25-12L160 128z" />
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l96 0 0 194.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 64l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 0z" />
    </Icon>
);

export default BlindsOpen;