
import { Icon } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=regular blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l120 0 0 112 0 48 0 36.1C116 254 96 280.7 96 312c0 39.8 32.2 72 72 72s72-32.2 72-72c0-31.3-20-58-48-67.9l0-36.1 0-48 0-112 296 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0zM144 312a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM0 488c0 13.3 10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24zM64.3 320L24 320c-13.3 0-24 10.7-24 24s10.7 24 24 24l56.3 0c-9-14.1-14.7-30.4-16-48zm191.3 48L488 368c13.3 0 24-10.7 24-24s-10.7-24-24-24l-216.3 0c-1.3 17.6-7 33.9-16 48zM24 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l88 0 0-48-88 0zm200 48l264 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-264 0 0 48z" />
    </Icon>
);

export default BlindsOpen;