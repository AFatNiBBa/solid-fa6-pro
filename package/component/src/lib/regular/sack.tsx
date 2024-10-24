
import { Icon } from "../../index";

/**
 * A component that renders the `sack` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=regular sack}
 * @preview ![sack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sack.svg)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M293.3 152l-74.6 0-13.8 8.8C150.9 195.4 48 277 48 416c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48c0-139-102.9-220.6-156.9-255.2L293.3 152zm.2-58.8L324.6 48 187.4 48l31.1 45.2L226 104l60 0 7.5-10.8zM0 416C0 274.8 89.4 185.5 150.8 139.9c10.4-7.7 20-14.2 28.2-19.4L151.8 80.9 121.9 37.6C111 21.7 122.4 0 141.7 0L370.3 0c19.3 0 30.7 21.7 19.8 37.6L360.2 80.9 333 120.4c8.2 5.3 17.8 11.7 28.2 19.4C422.6 185.5 512 274.8 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96z" />
    </Icon>
);

export default Sack;