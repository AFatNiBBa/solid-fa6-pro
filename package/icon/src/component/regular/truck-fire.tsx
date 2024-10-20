
import { Icon } from "../../index";

/**
 * A component that renders the `truck-fire` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-fire?s=regular truck-fire}
 * @preview ![truck-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/truck-fire.svg)
 */
const TruckFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l8 0 0 50.7C13.4 105.3 0 123.1 0 144L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l16 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-48 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l-96 0 0-48 232 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0zM336 48l0 48-56 0 0-48 56 0zm0 96l48 0 0 80L48 224l0-80 288 0zM48 368l0-96 352 0c17.7 0 32-14.3 32-32l0-96 160 0 0 224-28.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48l-153.7 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L48 368zM232 48l0 48-48 0 0-48 48 0zm-96 0l0 48L80 96l0-48 56 0zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8-192c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
    </Icon>
);

export default TruckFire;