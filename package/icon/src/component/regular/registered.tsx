
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=regular registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152l0 112 0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 60.9 0 37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8L315.7 275c21.8-14.3 36.3-39 36.3-67c0-44.2-35.8-80-80-80l-88 0c-13.3 0-24 10.7-24 24zm48 88l0-64 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0z" />
    </Icon>
);

export default Registered;