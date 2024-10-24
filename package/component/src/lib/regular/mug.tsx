
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=regular mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 352c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-240L80 112l0 240zM32 96c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 32c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L32 96zM416 272l32 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-32 0 0 160z" />
    </Icon>
);

export default Mug;