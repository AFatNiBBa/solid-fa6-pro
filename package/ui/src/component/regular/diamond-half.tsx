
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=regular diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M227.7 11.7C235.5 3.9 245.8 0 256 0l0 48 0 3.3 0 409.4 0 3.3 0 48c-10.2 0-20.5-3.9-28.3-11.7l-216-216c-15.6-15.6-15.6-40.9 0-56.6l216-216zM208 412.7l0-313.4L51.3 256 208 412.7z" />
    </Icon>
);

export default DiamondHalf;