
import { Icon } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=sharp-light oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M272 96l80 0 0-32L160 64l0 32 80 0 0 64-112 0-32 0-64 0L0 160l0 32L0 304l96 48 0 32 0 32 32 0 256 0 48 0L640 192l-32-32L448 192l-64-32-112 0 0-64zM32 192l64 0 0 124.2-64-32L32 192zm401.7 28.6l9.8 4.9 10.8-2.2 138.7-27.7L418 384l-34 0-256 0 0-16 0-35.8L128 192l248.4 0 57.2 28.6z" />
    </Icon>
);

export default OilCan;