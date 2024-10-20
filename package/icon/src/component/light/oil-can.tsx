
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=light oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 96c8.8 0 16-7.2 16-16s-7.2-16-16-16L176 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 64-112 0-32 0-48 0c-26.5 0-48 21.5-48 48l0 62.7c0 20 12.4 37.9 31.1 44.9L96 340l0 28c0 26.5 21.5 48 48 48l259.1 0c18.4 0 35.8-7.9 48-21.7L633.5 187.7c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8L272 160l0-64 64 0zm97.7 124.6c6.5 3.2 13.9 4.2 21 2.7l129.1-27.7L427.1 373.2c-6.1 6.9-14.8 10.8-24 10.8L144 384c-8.8 0-16-7.2-16-16l0-16 0-34.2L128 192l240.9 0c5 0 9.9 1.2 14.3 3.4l50.5 25.2zM96 305.8L42.4 285.7c-6.2-2.3-10.4-8.3-10.4-15L32 208c0-8.8 7.2-16 16-16l48 0 0 113.8z" />
    </Icon>
);

export default OilCan;