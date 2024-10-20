
import { Icon } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=sharp-regular clock-rotate-left}
 * @preview ![clock-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-rotate-left.svg)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 106.7L48 56l0-24L0 32 0 56 0 168l0 24 24 0 112 0 24 0 0-48-24 0-55.3 0c37-57.8 101.7-96 175.3-96c114.9 0 208 93.1 208 208s-93.1 208-208 208c-42.5 0-81.9-12.7-114.7-34.5l-20-13.3-26.5 40 20 13.3C155.2 496.4 203.8 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C170.3 0 94.4 42.1 48 106.7zM280 128l-48 0 0 24 0 104 0 9.9 7 7 72 72 17 17L361.9 328l-17-17-65-65 0-94.1 0-24z" />
    </Icon>
);

export default ClockRotateLeft;