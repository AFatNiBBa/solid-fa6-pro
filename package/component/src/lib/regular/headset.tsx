
import { Icon } from "../../index";

/**
 * A component that renders the `headset` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=regular headset}
 * @preview ![headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/headset.svg)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48s208 93.1 208 208l0 144.1c0 22.1-17.9 40-40 40L313.6 440c-8.3-14.4-23.8-24-41.6-24l-32 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l32 0c17.8 0 33.3-9.7 41.6-24l110.4 .1c48.6 0 88.1-39.4 88.1-88L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm112-32l0 112c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32zM80 256l0 48c0 44.2 35.8 80 80 80l16 0c17.7 0 32-14.3 32-32l0-144c0-17.7-14.3-32-32-32l-16 0c-44.2 0-80 35.8-80 80zm272-32c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32l0-112zm80 32c0-44.2-35.8-80-80-80l-16 0c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l16 0c44.2 0 80-35.8 80-80l0-48z" />
    </Icon>
);

export default Headset;