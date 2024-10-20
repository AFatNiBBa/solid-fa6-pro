
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=thin mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 256c0 44.2 35.8 80 80 80l192 0c44.2 0 80-35.8 80-80l0-64 0-16 0-192-32 0L64 80zM416 288l0 64c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L32 96c0-17.7 14.3-32 32-32l304 0 32 0 16 0 48 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0zm0-16l48 0c53 0 96-43 96-96s-43-96-96-96l-48 0 0 192z" />
    </Icon>
);

export default Mug;