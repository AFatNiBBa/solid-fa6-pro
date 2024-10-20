
import { Icon } from "../../index";

/**
 * A component that renders the `hand-wave` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-wave?s=sharp-solid hand-wave}
 * @preview ![hand-wave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-wave.svg)
 */
const HandWave: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 80c0-26.5-21.5-48-48-48l-8 0-16 0 0-32 16 0 8 0c44.2 0 80 35.8 80 80l0 8 0 16-32 0 0-16 0-8zM185.4 70.6L162.7 48 208 2.7l22.6 22.6 192 192c3.3 3.3 6.4 6.7 9.4 10.2l0-99.5 0-32 32 0 16 0 32 0 0 32 0 184.3c0 60.2-27.9 116.9-75.5 153.7C385.7 505.3 321 515.7 263 498.7c-28.4-7.1-55.3-21.8-77.6-44.1l-4.9-4.9L73.4 342.6 50.7 320l-9.4-9.4L18.7 288 64 242.7l22.6 22.6 9.4 9.4 22.6 22.6 56 56 18.7-18.7-136-136L34.7 176 80 130.7l22.6 22.6 136 136 18.7-18.7-152-152L82.7 96 128 50.7l22.6 22.6 152 152 18.7-18.7-136-136zM32 344l0 16 0 8c0 26.5 21.5 48 48 48l8 0 16 0 0 32-16 0-8 0c-44.2 0-80-35.8-80-80l0-8 0-16 32 0z" />
    </Icon>
);

export default HandWave;