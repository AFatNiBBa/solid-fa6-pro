
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=light cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 464c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-144 0-32 0-32 0-32 0-128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 256 0 32 0 32 0 32 0 16zm32-112l0-256c0-53-43-96-96-96s-96 43-96 96l0 128-48 0c-8.8 0-16-7.2-16-16l0-64c0-26.5-21.5-48-48-48S0 117.5 0 144l0 64c0 61.9 50.1 112 112 112l48 0 0 144c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-16 48 0c61.9 0 112-50.1 112-112l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64c0 8.8-7.2 16-16 16l-48 0zm0 32l48 0c26.5 0 48-21.5 48-48l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 44.2-35.8 80-80 80l-48 0 0-32zM112 288c-44.2 0-80-35.8-80-80l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 26.5 21.5 48 48 48l48 0 0 32-48 0zM256 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;