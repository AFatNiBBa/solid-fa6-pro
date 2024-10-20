
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=sharp-light arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 33.4L67.3 44.7 192 169.4 192 64l0-16 32 0 0 16 0 144 0 16-16 0L64 224l-16 0 0-32 16 0 105.4 0L44.7 67.3 33.4 56 56 33.4zM478.6 56L467.3 67.3 342.6 192 448 192l16 0 0 32-16 0-144 0-16 0 0-16 0-144 0-16 32 0 0 16 0 105.4L444.7 44.7 456 33.4 478.6 56zM48 320l0-32 16 0 144 0 16 0 0 16 0 144 0 16-32 0 0-16 0-105.4L67.3 467.3 56 478.6 33.4 456l11.3-11.3L169.4 320 64 320l-16 0zm240-32l16 0 144 0 16 0 0 32-16 0-105.4 0L467.3 444.7 478.6 456 456 478.6l-11.3-11.3L320 342.6 320 448l0 16-32 0 0-16 0-144 0-16z" />
    </Icon>
);

export default ArrowsMinimize;