
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-thin headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48C134.3 48 33.8 138.6 18.1 256L32 256l96 0 0 224L0 480 0 368l0-80C0 146.6 114.6 32 256 32s256 114.6 256 256l0 80 0 112-128 0 0-224 109.9 0C478.2 138.6 377.7 48 256 48zM495.5 272L400 272l0 192 96 0 0-96 0-80c0-5.4-.2-10.7-.5-16zm-479 0c-.3 5.3-.5 10.6-.5 16l0 80 0 96 96 0 0-192-95.5 0z" />
    </Icon>
);

export default Headphones;