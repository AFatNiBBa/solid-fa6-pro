
import { Icon } from "../../index";

/**
 * A component that renders the `truck-fire` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fire?s=solid truck-fire}
 * @preview ![truck-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/truck-fire.svg)
 */
const TruckFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 24C0 37.3 10.7 48 24 48l8 0 0 50.7C13.4 105.3 0 123.1 0 144l0 80 384 0 0-128 0-16 0-32 232 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0C10.7 0 0 10.7 0 24zM0 256L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l16 0c26.5 0 48-21.5 48-48l0-112 0-96c0-35.3-28.7-64-64-64l-16 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-48 0-32 0 0 144 0 16-16 0L0 256zM280 48l56 0 0 48-56 0 0-48zM232 96l-48 0 0-48 48 0 0 48zM80 48l56 0 0 48L80 96l0-48zM576 160l0 96-96 0 0-96 96 0zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default TruckFire;