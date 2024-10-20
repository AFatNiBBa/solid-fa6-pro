
import { Icon } from "../../index";

/**
 * A component that renders the `lamp-street` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-street?s=solid lamp-street}
 * @preview ![lamp-street](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/lamp-street.svg)
 */
const LampStreet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 176c0-61.9 50.1-112 112-112c57.4 0 104.7 43.2 111.2 98.8C207.1 176.6 144 239.9 130.6 320.1C127.7 337.6 142.3 352 160 352l320 0c17.7 0 32.3-14.4 29.4-31.9c-13.5-80.6-77.2-144.2-157.9-157.6C344.6 71.6 268.7 0 176 0C78.8 0 0 78.8 0 176L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-304zM320 448c35.3 0 64-28.7 64-64l-128 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default LampStreet;