
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=solid cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96c0-53 43-96 96-96s96 43 96 96l0 256 48 0c8.8 0 16-7.2 16-16l0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64c0 61.9-50.1 112-112 112l-48 0 0 16c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-144-48 0C50.1 320 0 269.9 0 208l0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64c0 8.8 7.2 16 16 16l48 0 0-128zm80 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;