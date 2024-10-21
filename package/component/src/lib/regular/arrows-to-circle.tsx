
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=regular arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M7 7C16.4-2.3 31.6-2.3 41 7l119 119L160 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 96c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l38.1 0L7 41C-2.3 31.6-2.3 16.4 7 7zM633 7c9.4 9.4 9.4 24.6 0 33.9l-119 119 38.1 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-96c0-13.3 10.7-24 24-24s24 10.7 24 24l0 38.1L599 7c9.4-9.4 24.6-9.4 33.9 0zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM432 424l0-96c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-38.1 0L633 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-119-119 0 38.1c0 13.3-10.7 24-24 24s-24-10.7-24-24zm-224 0c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-38.1L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l119-119L88 352c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 96z" />
    </Icon>
);

export default ArrowsToCircle;