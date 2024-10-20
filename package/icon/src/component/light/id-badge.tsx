
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=light id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM224 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm0-144c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zM112 400c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default IdBadge;