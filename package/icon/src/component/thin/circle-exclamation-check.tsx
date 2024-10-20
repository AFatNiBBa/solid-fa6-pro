
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=thin circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16c99.6 0 185 60.7 221.4 147.1c1.7 4.1 6.4 6 10.5 4.3s6-6.4 4.3-10.5C453.4 64.7 362.3 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c93 0 174.5-49.7 219.3-123.9c2.3-3.8 1.1-8.7-2.7-11s-8.7-1.1-11 2.7C419.6 449.5 343.2 496 256 496C123.5 496 16 388.5 16 256zM264 136c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-160zm-8 232a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM613.7 186.3c-3.1-3.1-8.2-3.1-11.3 0L480 308.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l128-128c3.1-3.1 3.1-8.2 0-11.3z" />
    </Icon>
);

export default CircleExclamationCheck;