
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=regular dice-d6}
 * @preview ![dice-d6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dice-d6.svg)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M243.9 7.7c-12.4-7-27.6-6.9-39.9 .3L19.8 115.6C7.5 122.8 0 135.9 0 150.1L0 366.6c0 14.5 7.8 27.8 20.5 34.9l184 103c12.1 6.8 26.9 6.8 39.1 0l184-103c12.6-7.1 20.5-20.4 20.5-34.9l0-219.9c0-14.4-7.7-27.7-20.3-34.8L243.9 7.7zM71.8 140.8L224.2 51.7l152 86.2L223.8 228.2l-152-87.4zM48 182.4l152 87.4 0 177.2L48 361.9l0-179.5zM248 447.1l0-177.4 152-90.1 0 182.4L248 447.1z" />
    </Icon>
);

export default DiceD6;