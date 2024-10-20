
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=regular oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L184 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 48-84.8 0-3.2 0-48 0-48 0c-26.5 0-48 21.5-48 48l0 64.8c0 19 11.2 36.2 28.5 43.9l67.5 30L96 368c0 26.5 21.5 48 48 48l259.1 0c18.4 0 35.8-7.9 48-21.7L615 208.6l1.4-1.6 7.6-8.6 9.4-10.6c12.3-13.9-.3-35.4-18.4-31.5l-13.9 3-11.3 2.4-2.1 .4L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8L280 160l0-48 48 0zm97.1 125.8c10.4 5.2 22.3 6.7 33.6 4.3l72.1-15.4L412.7 360.5c-2.4 2.8-5.9 4.3-9.6 4.3l-255.9 0 0-153.6 221.7 0c2 0 3.9 .5 5.7 1.4l50.5 25.2zM96 294.1L48 272.8 48 208l48 0 0 3.2 0 82.9z" />
    </Icon>
);

export default OilCan;