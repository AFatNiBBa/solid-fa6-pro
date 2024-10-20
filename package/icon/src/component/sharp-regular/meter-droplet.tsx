
import { Icon } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=sharp-regular meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 464c48.8 0 93.8-16.8 129.2-45c2.3 17.2 7.6 33.5 15.4 48.3C359.5 495.5 309.7 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C369.8 0 466.3 74.3 499.6 177l-36.8 56.5C451.6 129.2 363.3 48 256 48C141.1 48 48 141.1 48 256s93.1 208 208 208zM192 152l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm88 0l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm88 0l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zm160 40l93.5 143.6c12.1 18.5 18.5 40.2 18.5 62.3l0 2.1c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-2.1c0-22.1 6.4-43.7 18.5-62.3L528 192z" />
    </Icon>
);

export default MeterDroplet;