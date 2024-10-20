
import { Icon } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=sharp-light clock-rotate-left}
 * @preview ![clock-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-rotate-left.svg)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 132l0-84 0-16L0 32 0 48 0 176l0 16 16 0 128 0 16 0 0-32-16 0-90.4 0C89.5 84.3 166.7 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-73.3 0-138.3-35.2-179.2-89.6l-9.6-12.8L41.6 396.8l9.6 12.8C97.9 471.8 172.2 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C159.6 0 75.7 53.3 32 132zm240-4l-32 0 0 16 0 112 0 6.6 4.7 4.7 80 80L336 358.6 358.6 336l-11.3-11.3L272 249.4 272 144l0-16z" />
    </Icon>
);

export default ClockRotateLeft;