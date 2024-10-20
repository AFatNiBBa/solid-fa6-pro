
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=duotone down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144c0 10.2 4.1 20.1 11.3 27.3L145.4 305.4l96-96L107.3 75.3C100.1 68.1 90.2 64 80 64s-20.1 4.1-27.3 11.3L11.3 116.7C4.1 123.9 0 133.8 0 144z" />
        <path d="M336 432H96c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l240-240c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6V400c0 17.7-14.3 32-32 32z" />
    </Icon>
);

export default DownRight;