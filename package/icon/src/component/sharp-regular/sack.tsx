
import { Icon } from "../../index";

/**
 * A component that renders the `sack` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=sharp-regular sack}
 * @preview ![sack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sack.svg)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M382.9 48L360.2 80.9 333 120.4c8.2 5.3 17.8 11.7 28.2 19.4C422.6 185.5 512 274.8 512 416l0 48 0 48-48 0L48 512 0 512l0-48 0-48C0 274.8 89.4 185.5 150.8 139.9c10.4-7.7 20-14.2 28.2-19.4L151.8 80.9 129.1 48 96 0l58.3 0L357.7 0 416 0 382.9 48zM464 416c0-139-102.9-220.6-156.9-255.2L293.3 152l-74.6 0-13.8 8.8C150.9 195.4 48 277 48 416l0 48 416 0 0-48zM286 104l7.5-10.8L324.6 48 187.4 48l31.1 45.2L226 104l60 0z" />
    </Icon>
);

export default Sack;