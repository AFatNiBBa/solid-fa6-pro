
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=sharp-regular mug}
 * @preview ![mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mug.svg)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 112l0 288 288 0 0-288L80 112zM32 64l48 0 288 0 16 0 32 0 32 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 80 0 48-48 0L80 448l-48 0 0-48 0-288 0-48zM416 272l32 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-32 0 0 160z" />
    </Icon>
);

export default Mug;