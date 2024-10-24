
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=thin id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM240 224a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm0-152c0-4.4 3.6-8 8-8l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L136 80c-4.4 0-8-3.6-8-8zM96 392c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72l80 0c39.8 0 72 32.2 72 72c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56l-80 0c-30.9 0-56 25.1-56 56z" />
    </Icon>
);

export default IdBadge;