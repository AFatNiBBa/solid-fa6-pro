
import { Icon } from "../../index";

/**
 * A component that renders the `h2` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h2?s=light h2}
 * @preview ![h2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/h2.svg)
 */
const H2: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 80c0-8.8-7.2-16-16-16S0 71.2 0 80L0 256 0 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160 256 0 0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160L32 240 32 80zm400.1 41.5c19.2-16.5 43.7-25.5 69-25.5l5.8 0c47 0 85 38.1 85 85c0 23.1-9.4 45.2-26.1 61.2l-185 178.2c-4.7 4.5-6.2 11.5-3.7 17.5s8.3 10 14.8 10l232 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192.3 0L588.1 265.3C611.1 243.3 624 212.8 624 181c0-64.6-52.4-117-117-117l-5.8 0c-33 0-64.8 11.8-89.9 33.2l-21.7 18.6c-6.7 5.8-7.5 15.9-1.7 22.6s15.8 7.5 22.6 1.7l21.7-18.6z" />
    </Icon>
);

export default H2;