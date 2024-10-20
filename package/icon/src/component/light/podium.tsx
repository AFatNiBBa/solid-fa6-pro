
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=light podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zM178.7 64L168 64c-26.5 0-48 21.5-48 48l0 48 312 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 192c-8.8 0-16-7.2-16-16s7.2-16 16-16l72 0 0-48c0-44.2 35.8-80 80-80l10.7 0C185.3 13.4 203.1 0 224 0l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-20.9 0-38.7-13.4-45.3-32zM73.5 455.2L47.3 224l32.2 0 25.9 227.6c1.8 16.2 15.5 28.4 31.8 28.4l173.7 0c16.3 0 30-12.2 31.8-28.4L368.5 224l32.2 0L374.5 455.2c-3.7 32.3-31 56.8-63.6 56.8l-173.7 0c-32.6 0-59.9-24.4-63.6-56.8z" />
    </Icon>
);

export default Podium;