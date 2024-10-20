
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=sharp-thin spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M279.8 408.2l-12.6-12.8-3.2-3.3L264 496l80 0 8 0 0 16-8 0-80 0-16 0-80 0-8 0 0-16 8 0 80 0 0-103.9-3.2 3.3-12.6 12.8c-53.1 53.1-139.2 53.1-192.3 0s-53.1-139.2 0-192.3L256 0s0 0 0 0L472.2 215.8c53.1 53.1 53.1 139.2 0 192.3s-139.2 53.1-192.3 0zM51.1 396.9c46.9 46.8 122.8 46.9 169.7 0c0 0 0 0 0 0l23.8-24.1L256 361.2l11.4 11.6 23.8 24.1c0 0 0 0 0 0c46.9 46.8 122.8 46.8 169.7 0c46.9-46.9 46.9-122.8 0-169.7c0 0 0 0 0 0L256 22.6 51.1 227.1s0 0 0 0C4.3 274 4.3 350 51.1 396.9z" />
    </Icon>
);

export default Spade;