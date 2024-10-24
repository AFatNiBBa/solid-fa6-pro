
import { Icon } from "../../index";

/**
 * A component that renders the `hat-santa` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=sharp-solid hat-santa}
 * @preview ![hat-santa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hat-santa.svg)
 */
const HatSanta: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M149.7 137.8L64 352l384 0L384 192l81.3 22.2-2.6-13.4-6.3-32.2 32.3-5.6 5.4-.9L434.4 91.6c-32-37.8-79-59.6-128.5-59.6c-68.8 0-130.7 41.9-156.3 105.8zm395.8 23.5L526.9 189l-32.8 5.6 6.4 32.7-19.2 27.2L509 273.1l5.6 32.8 32.7-6.4 27.2 19.2L593.1 291l32.8-5.6-6.4-32.7 19.2-27.2L611 206.9l-5.6-32.8-32.7 6.4-27.2-19.2zM0 384l0 96 48 0 416 0 48 0 0-96-48 0L48 384 0 384z" />
    </Icon>
);

export default HatSanta;