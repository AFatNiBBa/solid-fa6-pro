
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=sharp-regular cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 464l-96 0 0-144 0-96 0-128c0-26.5 21.5-48 48-48s48 21.5 48 48l0 368zM48 320l112 0 0 144 0 48 48 0 96 0 48 0 0-48 0-16 112 0 48 0 0-48 0-128 0-48-96 0 0 48 0 80-64 0 0-256c0-53-43-96-96-96s-96 43-96 96l0 128-64 0 0-80 0-48L0 96l0 48L0 272l0 48 48 0zM256 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;