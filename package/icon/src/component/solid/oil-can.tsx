
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=solid oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32-80 0-48 0-48 0c-26.5 0-48 21.5-48 48l0 64.8c0 19 11.2 36.2 28.5 43.9l67.5 30L96 368c0 26.5 21.5 48 48 48l259.1 0c18.4 0 35.8-7.9 48-21.7L633.5 187.7c12.3-13.9-.3-35.4-18.4-31.5L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8L288 160l0-32 32 0zM96 208l0 86.1L48 272.8 48 208l48 0z" />
    </Icon>
);

export default OilCan;