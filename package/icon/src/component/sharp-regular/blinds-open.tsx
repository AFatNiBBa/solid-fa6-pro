
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=sharp-regular blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0L0 0 0 48l24 0 120 0 0 112 0 48 0 36.1C116 254 96 280.7 96 312c0 39.8 32.2 72 72 72s72-32.2 72-72c0-31.3-20-58-48-67.9l0-36.1 0-48 0-112 296 0 24 0 0-48L488 0 24 0zM144 312a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM0 464l0 48 24 0 464 0 24 0 0-48-24 0L24 464 0 464zM64.3 320L24 320 0 320l0 48 24 0 56.3 0c-9-14.1-14.7-30.4-16-48zm191.3 48L488 368l24 0 0-48-24 0-216.3 0c-1.3 17.6-7 33.9-16 48zM24 160L0 160l0 48 24 0 88 0 0-48-88 0zm200 48l264 0 24 0 0-48-24 0-264 0 0 48z" />
    </Icon>
);

export default BlindsOpen;