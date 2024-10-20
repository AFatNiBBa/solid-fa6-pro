
import { Icon } from "../../index";

/**
 * A component that renders the `house-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-lock?s=sharp-light house-lock}
 * @preview ![house-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-lock.svg)
 */
const HouseLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M298.6 12L288 2.7 277.4 12 5.4 252l21.2 24L64 243l0 253 0 16 16 0 304 0 0-32-16 0 0-176 0-16-16 0-128 0-16 0 0 16 0 176L96 480l0-265.3L288 45.3 451.8 189.9c8.1-7.5 17.2-13.8 27.2-18.7L298.6 12zM336 480l-96 0 0-160 96 0 0 160zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default HouseLock;