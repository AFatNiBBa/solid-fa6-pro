
import { Icon } from "../../index";

/**
 * A component that renders the `face-thermometer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-thermometer?s=sharp-thin face-thermometer}
 * @preview ![face-thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-thermometer.svg)
 */
const FaceThermometer: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 16C155.5 16 48 123.5 48 256s107.5 240 240 240c110.1 0 202.8-74.1 231.1-175.1L540 301.1C518.8 421 414 512 288 512C146.6 512 32 397.4 32 256S146.6 0 288 0c97 0 181.4 54 224.8 133.5c-5.9-.1-11.7 .4-17.5 1.6C453.7 63.8 376.4 16 288 16zM482.5 185.2c16.4-15.8 42.5-15.5 58.6 .6c16.6 16.6 16.3 43.7-.7 59.9L400.5 379.3c2.1 2.7 4.1 5.4 6 8.1l-13.1 9.2C372.6 366.8 337.4 336 288 336s-84.6 30.8-105.4 60.6l-13.1-9.2c22.4-32 61.9-67.4 118.6-67.4c16.7 0 31.9 3.1 45.6 8.2l148.9-143zM438 321.4l-11.7-11.7-5.7-5.7L432 292.7l5.7 5.7 12 12 21.2-20.2-12.4-12.4-5.7-5.7L464 260.7l5.7 5.7 12.7 12.7 21.2-20.2-13.2-13.2-5.7-5.7L496 228.7l5.7 5.7 13.5 13.5 14.3-13.6c10.5-10 10.7-26.8 .4-37c-10-10-26.1-10.1-36.2-.4L349.3 335.3c16.1 8.5 29.7 19.8 40.8 31.8l15.2-14.5-11-11-5.7-5.7L400 324.7l5.7 5.7 11.2 11.2L438 321.4zM208.4 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default FaceThermometer;