
import { Icon } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=solid candy-bar}
 * @preview ![candy-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/candy-bar.svg)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 320l128 0 0-96L0 224l0 96zm0 64c0 35.3 28.7 64 64 64l64 0 0-96L0 352l0 32zm288 64l0-96-128 0 0 96 128 0zm0-224l-128 0 0 96 128 0 0-96zm0-160L160 64l0 128 128 0 0-128zm288 0L320 64l0 384 256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM44.2 192l75.8 0s0 0 0 0l8 0 0-32s0 0 0 0l0-51.8c0-7.1-9-11.1-15-7.4C101 107.9 87 112 72 112c-4 0-7.9-.3-11.7-.9c-7-1-14.2 6.2-13.1 13.1c.6 3.8 .9 7.7 .9 11.7c0 15-4.1 29-11.3 41c-3.6 6.1 .4 15 7.4 15z" />
    </Icon>
);

export default CandyBar;