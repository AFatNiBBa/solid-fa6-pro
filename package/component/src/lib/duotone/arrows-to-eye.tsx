
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-eye` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-eye?s=duotone arrows-to-eye}
 * @preview ![arrows-to-eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-to-eye.svg)
 */
const ArrowsToEye: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M8 32c0 6.1 2.3 12.3 7 17l63 63L40 112c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0c13.3 0 24-10.7 24-24l0-96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 38.1L49 15c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7s-7 10.8-7 17zM8 480c0 6.1 2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7l63-63 0 38.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l38.1 0L15 463c-4.7 4.7-7 10.8-7 17zM480 40l0 96c0 13.3 10.7 24 24 24l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-38.1 0 63-63c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17s-10.8-7-17-7s-12.3 2.3-17 7l-63 63L528 40c0-13.3-10.7-24-24-24s-24 10.7-24 24zm0 336l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-38.1 63 63c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7s7-10.8 7-17s-2.3-12.3-7-17l-63-63 38.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24z" />
        <path d="M133.5 243.9C158.6 193.6 222.7 112 320 112s161.4 81.6 186.5 131.9c3.8 7.6 3.8 16.5 0 24.2C481.4 318.4 417.3 400 320 400s-161.4-81.6-186.5-131.9c-3.8-7.6-3.8-16.5 0-24.2zM320 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ArrowsToEye;