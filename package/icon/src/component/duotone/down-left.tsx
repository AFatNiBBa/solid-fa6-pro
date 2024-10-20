
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=duotone down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M142.6 209.4L276.7 75.3C283.9 68.1 293.8 64 304 64s20.1 4.1 27.3 11.3l41.4 41.4c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L238.6 305.4c-32-32-64-64-96-96z" />
        <path d="M48 432H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-240-240c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6V400c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default DownLeft;