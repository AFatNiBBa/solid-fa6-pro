
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=light arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.7 36.7c6.2-6.2 16.4-6.2 22.6 0L192 169.4 192 64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 144c0 8.8-7.2 16-16 16L64 224c-8.8 0-16-7.2-16-16s7.2-16 16-16l105.4 0L36.7 59.3c-6.2-6.2-6.2-16.4 0-22.6zm416 0c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L342.6 192 448 192c8.8 0 16 7.2 16 16s-7.2 16-16 16l-144 0c-8.8 0-16-7.2-16-16l0-144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 105.4L452.7 36.7zM48 304c0-8.8 7.2-16 16-16l144 0c8.8 0 16 7.2 16 16l0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-105.4L59.3 475.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L169.4 320 64 320c-8.8 0-16-7.2-16-16zm240 0c0-8.8 7.2-16 16-16l144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-105.4 0L475.3 452.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L320 342.6 320 448c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144z" />
    </Icon>
);

export default ArrowsMinimize;