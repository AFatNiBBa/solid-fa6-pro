
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-eye` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-eye?s=solid arrows-to-eye}
 * @preview ![arrows-to-eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrows-to-eye.svg)
 */
const ArrowsToEye: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M15 15C24.4 5.7 39.6 5.7 49 15l63 63L112 40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l38.1 0L15 49C5.7 39.6 5.7 24.4 15 15zM133.5 243.9C158.6 193.6 222.7 112 320 112s161.4 81.6 186.5 131.9c3.8 7.6 3.8 16.5 0 24.2C481.4 318.4 417.3 400 320 400s-161.4-81.6-186.5-131.9c-3.8-7.6-3.8-16.5 0-24.2zM320 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM591 15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-63 63 38.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-96c0-13.3 10.7-24 24-24s24 10.7 24 24l0 38.1 63-63zM15 497c-9.4-9.4-9.4-24.6 0-33.9l63-63L40 400c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 96c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-38.1L49 497c-9.4 9.4-24.6 9.4-33.9 0zm576 0l-63-63 0 38.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-38.1 0 63 63c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z" />
    </Icon>
);

export default ArrowsToEye;