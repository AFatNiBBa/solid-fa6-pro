
import { Icon } from "../../index";

/**
 * A component that renders the `air-conditioner` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/air-conditioner?s=sharp-regular air-conditioner}
 * @preview ![air-conditioner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/air-conditioner.svg)
 */
const AirConditioner: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 48l0 160 480 0 0-160L48 48zM0 0L48 0 528 0l48 0 0 48 0 160 0 48-48 0L48 256 0 256l0-48L0 48 0 0zM120 128l336 0 24 0 0 48-24 0-336 0-24 0 0-48 24 0zM368 288l0 104c0 22.1 17.9 40 40 40s40-17.9 40-40c0-14.8-8-27.7-20-34.7l24.1-41.5C478.3 331 496 359.4 496 392c0 48.6-39.4 88-88 88s-88-39.4-88-88l0-104 48 0zM208 424l0-136 48 0 0 136c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-32.6 17.7-61 43.9-76.2L148 389.3c-12 7-20 19.9-20 34.7c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
    </Icon>
);

export default AirConditioner;