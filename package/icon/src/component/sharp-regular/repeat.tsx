
import { Icon } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-regular repeat}
 * @preview ![repeat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/repeat.svg)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 280l0-24L0 96 0 72l24 0 280 0 0-24 0-48 48 0 62.1 62.1L448 96l-33.9 33.9L352 192l-48 0 0-48 0-24L48 120l0 136 0 24L0 280zM352 124.1L380.1 96 352 67.9l0 56.2zM512 232l0 24 0 160 0 24-24 0-280 0 0 24 0 48-48 0L97.9 449.9 64 416l33.9-33.9L160 320l48 0 0 48 0 24 256 0 0-136 0-24 48 0zM160 444.1l0-56.2L131.9 416 160 444.1z" />
    </Icon>
);

export default Repeat;