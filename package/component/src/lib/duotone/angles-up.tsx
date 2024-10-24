
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up?s=duotone angles-up}
 * @preview ![angles-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angles-up.svg)
 */
const AnglesUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 416c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-160-160c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4l-160 160C35.1 399.6 32 407.8 32 416z" />
        <path d="M201.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 109.3 86.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </Icon>
);

export default AnglesUp;