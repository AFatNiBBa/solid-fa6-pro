
import { Icon } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=sharp-thin sitemap}
 * @preview ![sitemap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sitemap.svg)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 48l0 128-128 0 0-128 128 0zM224 32l-16 0 0 16 0 128 0 16 16 0 56 0 0 56L80 248l-8 0 0 8 0 64-56 0L0 320l0 16L0 464l0 16 16 0 128 0 16 0 0-16 0-128 0-16-16 0-56 0 0-56 192 0 0 56-56 0-16 0 0 16 0 128 0 16 16 0 128 0 16 0 0-16 0-128 0-16-16 0-56 0 0-56 192 0 0 56-56 0-16 0 0 16 0 128 0 16 16 0 128 0 16 0 0-16 0-128 0-16-16 0-56 0 0-64 0-8-8 0-200 0 0-56 56 0 16 0 0-16 0-128 0-16-16 0L224 32zM16 464l0-128 128 0 0 128L16 464zM224 336l128 0 0 128-128 0 0-128zM432 464l0-128 128 0 0 128-128 0z" />
    </Icon>
);

export default Sitemap;