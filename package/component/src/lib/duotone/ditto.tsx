
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ditto` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=duotone ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 2.3c0 3.8 .3 7.6 1 11.4L26.5 256.5C29.7 274.7 45.5 288 64 288s34.3-13.3 37.5-31.5L127 109.6c.7-3.8 1-7.5 1-11.4l0-2.3c0-35.3-28.7-64-64-64S0 60.7 0 96z" />
        <path d="M192 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4L293.5 256.5c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L193 109.6c-.7-3.8-1-7.5-1-11.4z" />
    </Icon>
);

export default Ditto;