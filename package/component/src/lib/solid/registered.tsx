
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=solid registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24l88 0c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288 208 288l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112zm48 88l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0 64z" />
    </Icon>
);

export default Registered;