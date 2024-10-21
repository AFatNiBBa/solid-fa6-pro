
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shuttle-space` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttle-space?s=sharp-duotone-solid shuttle-space}
 * @preview ![shuttle-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shuttle-space.svg)
 */
const ShuttleSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 32l0 96 52 0 5.9 0 5.2 2.8 .8 .4L96 32 32 32zm0 352l0 96 64 0 0-99.2-.8 .4L89.9 384 84 384l-52 0zM128 32l0 116 22.7 12 254.6 0L192 32l-64 0zm0 332l0 116 64 0L405.3 352l-254.6 0L128 364z" />
        <path d="M0 128l24 0 60 0 5.9 0 5.2 2.8L150.7 160 456 160c70.4 0 127.6 23.5 171.2 81.6L638 256l-10.8 14.4C583.6 328.5 526.4 352 456 352l-305.3 0L95.2 381.2 89.9 384 84 384l-60 0L0 384l0-24 0-32L0 184l0-32 0-24zM512 264l0-16c0-22.1-17.9-40-40-40l0 96c22.1 0 40-17.9 40-40z" />
    </Icon>
);

export default ShuttleSpace;