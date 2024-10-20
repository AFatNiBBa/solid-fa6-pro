
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=light thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352.8 53.8L310.6 96l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L288 118.6 246.6 160l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 182.6 224l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L160 246.6l-22.6 22.6c-6 6-9.4 14.1-9.4 22.6l0 92.1 92.1 0c8.5 0 16.6-3.4 22.6-9.4L458.2 159.2c14-14 21.8-32.9 21.8-52.7C480 65.4 446.6 32 405.5 32c-19.8 0-38.7 7.8-52.7 21.8zM276.7 84.7l53.5-53.5c20-20 47.1-31.2 75.3-31.2C464.3 0 512 47.7 512 106.5c0 28.2-11.2 55.3-31.2 75.3L265.4 397.3c-12 12-28.3 18.7-45.3 18.7l-101.5 0L27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L96 393.4l0-101.5c0-17 6.7-33.3 18.7-45.3l33.9-33.9 64-64 64-64s0 0 0 0s0 0 0 0z" />
    </Icon>
);

export default Thermometer;