
import { Icon } from "../../index";

/**
 * A component that renders the `hands` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands?s=sharp-solid hands}
 * @preview ![hands](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hands.svg)
 */
const Hands: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 128l0 32-.1 72.6c-.1 52.2-23.9 101-63.9 133c-.8-80.9-42.8-155.8-111.5-198.8l-46.6-29.1-34.2-21.4-39-67.5L236.7 28 278.3 4l12 20.8 84 145.5 20.8-12L331.8 48.8 319.8 28 361.4 4l12 20.8 63.2 109.5s0 0 0 0l43.3 75 0-49.3 0-32 64 .1zM259.9 116.2l-28.8 46.1-28.7-49.8-12-20.8 41.6-24 12 20.8 16 27.7zm-43.2 69.1L200 212l-23.4 0L156 176.2l-12-20.8 41.6-24 12 20.8 19.1 33.1zm61.1-37.4l27.1 17 60.2 37.6C416.7 234.7 448 291.2 448 352l0 8c0 83.9-68.1 152-152 152l-176 0-24 0 0-48 24 0 104 0 0-24L88 440l-24 0 0-48 24 0 136 0 0-24L56 368l-24 0 0-48 24 0 168 0 0-24L88 296l-24 0 0-48 24 0 136 0s0 0 0 0l93.2 0L271 219.1l-27.1-17 33.9-54.3z" />
    </Icon>
);

export default Hands;