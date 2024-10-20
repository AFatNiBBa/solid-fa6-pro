
import { Icon } from "../../index";

/**
 * A component that renders the `gavel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=light gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M315.3 4.7c6.2 6.2 6.2 16.4 0 22.6L302.6 40 472 209.4l12.7-12.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-24 24-96 96-24 24c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L353.4 328 184 158.6l-12.7 12.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l24-24 96-96 24-24c6.2-6.2 16.4-6.2 22.6 0zM206.6 136L376 305.4 449.4 232 280 62.6 206.6 136zM144 320L32 432l48 48L192 368l-48-48zm-22.6-22.6c12.5-12.5 32.8-12.5 45.3 0l12.7 12.7 49.8-49.8 22.6 22.6-49.8 49.8 12.7 12.7c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-48-48c-12.5-12.5-12.5-32.8 0-45.3l112-112z" />
    </Icon>
);

export default Gavel;