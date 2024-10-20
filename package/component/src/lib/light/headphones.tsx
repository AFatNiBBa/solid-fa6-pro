
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=light headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32.6 271.6C41 155.5 137.8 64 256 64s215 91.5 223.4 207.6C466.1 261.8 449.7 256 432 256c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48c44.2 0 80-35.8 80-80l0-32 0-32 0-48C512 146.6 397.4 32 256 32S0 146.6 0 288l0 48 0 32 0 32c0 44.2 35.8 80 80 80c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48c-17.7 0-34.1 5.8-47.4 15.6zM32 336c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16c-26.5 0-48-21.5-48-48l0-32 0-32zm448 0l0 32 0 32c0 26.5-21.5 48-48 48c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16c26.5 0 48 21.5 48 48z" />
    </Icon>
);

export default Headphones;