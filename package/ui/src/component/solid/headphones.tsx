
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=solid headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" />
    </Icon>
);

export default Headphones;