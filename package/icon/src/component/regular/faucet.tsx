
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=regular faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 64c13.3 0 24 10.7 24 24l0 21L352 96c17.7 0 32 14.3 32 32s-14.3 32-32 32L248 147l0 45 26.7 0c14.9 0 29.1 5.9 39.6 16.4L329.9 224l30.1 0c83.9 0 152 68.1 152 152l0 16c0 30.9-25.1 56-56 56l-48 0c-30.9 0-56-25.1-56-56c0-4.4-3.6-8-8-8l-20.1 0c-23.4 29.2-59.5 48-99.9 48s-76.5-18.8-99.9-48L24 384c-13.3 0-24-10.7-24-24s10.7-24 24-24l112.3 0c8.2 0 15.8 4.2 20.2 11.1C170.8 369.3 195.7 384 224 384s53.2-14.7 67.4-36.9c4.4-6.9 12-11.1 20.2-11.1l32.3 0c30.9 0 56 25.1 56 56c0 4.4 3.6 8 8 8l48 0c4.4 0 8-3.6 8-8l0-16c0-57.4-46.6-104-104-104l-40 0c-6.4 0-12.5-2.5-17-7l-22.6-22.6c-1.5-1.5-3.5-2.3-5.7-2.3l-93.5 0c-2.1 0-4.2 .8-5.7 2.3L153 265c-4.5 4.5-10.6 7-17 7L24 272c-13.3 0-24-10.7-24-24s10.7-24 24-24l102.1 0 15.6-15.6c10.5-10.5 24.7-16.4 39.6-16.4l18.7 0 0-45L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l104 13 0-21c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Faucet;