
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=solid circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M506.5 203L480 229.5l-18.7-18.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5l64 64c11.9 11.9 27.4 18.2 43 18.7c-44.3 76.5-127 128-221.8 128C114.6 512 0 397.4 0 256S114.6 0 256 0C379.2 0 482.1 87 506.5 203zM280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM625 209L497 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </Icon>
);

export default CircleExclamationCheck;