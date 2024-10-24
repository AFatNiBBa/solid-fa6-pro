
import { Icon } from "../../index";

/**
 * A component that renders the `lamp-street` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-street?s=sharp-solid lamp-street}
 * @preview ![lamp-street](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lamp-street.svg)
 */
const LampStreet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 176c0-61.9 50.1-112 112-112c57.4 0 104.7 43.2 111.2 98.8C196.8 178.3 128 257.1 128 352l384 0c0-95.3-69.4-174.4-160.5-189.4C344.6 71.6 268.7 0 176 0C78.8 0 0 78.8 0 176L0 512l64 0 0-336zM320 448c35.3 0 64-28.7 64-64l-128 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default LampStreet;