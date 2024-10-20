
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=sharp-light thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352.8 53.8L310.6 96l36.7 36.7L358.6 144 336 166.6l-11.3-11.3L288 118.6 246.6 160l36.7 36.7L294.6 208 272 230.6l-11.3-11.3L224 182.6 182.6 224l36.7 36.7L230.6 272 208 294.6l-11.3-11.3L160 246.6l-32 32L128 384l105.4 0L458.2 159.2c14-14 21.8-32.9 21.8-52.7C480 65.4 446.6 32 405.5 32c-19.8 0-38.7 7.8-52.7 21.8zM288 73.4l42.2-42.2 11.3 11.3L330.2 31.2c20-20 47.1-31.2 75.3-31.2C464.3 0 512 47.7 512 106.5c0 28.2-11.2 55.3-31.2 75.3L251.3 411.3l-4.7 4.7-6.6 0-121.4 0L35.3 499.3 24 510.6 1.4 488l11.3-11.3L96 393.4 96 272l0-6.6 4.7-4.7L137.4 224s0 0 0 0L160 201.4s0 0 0 0L201.4 160s0 0 0 0L224 137.4s0 0 0 0L265.4 96s0 0 0 0L288 73.4s0 0 0 0z" />
    </Icon>
);

export default Thermometer;