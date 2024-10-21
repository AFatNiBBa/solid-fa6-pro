
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=thin registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152l0 128 0 96c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 96 0c3.8 0 7.5-.3 11.2-.8l62.1 93.2c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-59-88.5C330.2 271.8 352 242.5 352 208c0-44.2-35.8-80-80-80l-88 0c-13.3 0-24 10.7-24 24zm16 120l0-120c0-4.4 3.6-8 8-8l88 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-96 0z" />
    </Icon>
);

export default Registered;