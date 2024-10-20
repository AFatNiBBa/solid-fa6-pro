
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=thin headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 288C16 155.4 123.5 48 256 48s240 107.4 240 240c-14.6-19.4-37.8-32-64-32c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80l0-32 0-32 0-48C512 146.6 397.4 32 256 32S0 146.6 0 288l0 48 0 32 0 32c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48c-26.2 0-49.4 12.6-64 32zm0 48c0-35.3 28.7-64 64-64c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32c-35.3 0-64-28.7-64-64l0-32 0-32zm480 0l0 32 0 32c0 35.3-28.7 64-64 64c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32c35.3 0 64 28.7 64 64z" />
    </Icon>
);

export default Headphones;