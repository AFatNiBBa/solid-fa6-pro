
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=thin cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 464c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-144 0-16 0-64 0-16 0-128c0-44.2 35.8-80 80-80s80 35.8 80 80l0 256 0 16 0 64 0 16 0 16zm16-112l0-256c0-53-43-96-96-96s-96 43-96 96l0 128-48 0c-8.8 0-16-7.2-16-16l0-64c0-26.5-21.5-48-48-48S0 117.5 0 144l0 64c0 61.9 50.1 112 112 112l48 0 0 144c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-16 48 0c61.9 0 112-50.1 112-112l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64c0 8.8-7.2 16-16 16l-48 0zm0 16l48 0c17.7 0 32-14.3 32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 53-43 96-96 96l-48 0 0-64zM112 304c-53 0-96-43-96-96l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7 14.3 32 32 32l48 0 0 64-48 0zM256 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm16 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;