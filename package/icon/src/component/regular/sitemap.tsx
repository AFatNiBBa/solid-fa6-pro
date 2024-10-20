
import { Icon } from "../../index";

/**
 * A component that renders the `sitemap` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sitemap?s=regular sitemap}
 * @preview ![sitemap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sitemap.svg)
 */
const Sitemap: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 80l0 64-64 0 0-64 64 0zM256 32c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l8 0 0 40-152 0c-30.9 0-56 25.1-56 56l0 32-8 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-8 0 0-32c0-4.4 3.6-8 8-8l152 0 0 40-8 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-8 0 0-40 152 0c4.4 0 8 3.6 8 8l0 32-8 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-8 0 0-32c0-30.9-25.1-56-56-56l-152 0 0-40 8 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-64 0zM48 368l64 0 0 64-64 0 0-64zm208 0l64 0 0 64-64 0 0-64zm208 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default Sitemap;