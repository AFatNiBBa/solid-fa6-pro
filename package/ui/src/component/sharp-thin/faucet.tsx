
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=sharp-thin faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 64l0 8 0 46.8L368 98.4 384 96l0 16.2 0 63.6 0 16.2-16-2.4L232 169.2l0 38.8 40 0 3.3 0 2.3 2.3L323.3 256l52.7 0c75.1 0 136 60.9 136 136l0 48 0 8-8 0-112 0-8 0 0-8 0-31.9c0-13.3-10.8-24-24.1-24l-40.1 .1C298 413.2 263.2 432 224 432s-74-18.8-95.9-47.8L8 384l-8 0 0-16 8 0 124.2 .2 4.2 0 2.4 3.4c18.8 26.9 50 44.4 85.3 44.4s66.4-17.5 85.3-44.4l2.4-3.4 4.2 0 44.1-.1c22.1 0 40.1 17.9 40.1 40l0 23.9 96 0 0-40c0-66.3-53.7-120-120-120l-56 0-3.3 0-2.3-2.3L268.7 224l-89.4 0-45.7 45.7-2.3 2.3-3.3 0L8 272l-8 0 0-16 8 0 116.7 0 45.7-45.7 2.3-2.3 3.3 0 40 0 0-38.8L80 189.6 64 192l0-16.2 0-63.6L64 96l16 2.4 136 20.4L216 72l0-8 16 0zM80 114.6l0 58.8L216 153l0-18L80 114.6zM232 135l0 18 136 20.4 0-58.8L232 135z" />
    </Icon>
);

export default Faucet;