
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=solid alarm-plus}
 * @preview ![alarm-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/alarm-plus.svg)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M14.9 146.4C5.5 131.6 0 114 0 95.2C0 42.6 42.6 0 95.2 0c25 0 47.8 9.6 64.8 25.4L14.9 146.4zM390.2 467.4C352.8 495.4 306.3 512 256 512s-96.8-16.6-134.1-44.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l35.2-35.2C48.6 384.8 32 338.3 32 288C32 164.3 132.3 64 256 64s224 100.3 224 224c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-35.2-35.2zM352 25.4C369 9.6 391.8 0 416.8 0C469.4 0 512 42.6 512 95.2c0 18.8-5.5 36.3-14.9 51.1L352 25.4zM256 176c-13.3 0-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default AlarmPlus;