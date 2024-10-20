
import { Icon } from "../../index";

/**
 * A component that renders the `id-badge` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-badge?s=sharp-thin id-badge}
 * @preview ![id-badge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/id-badge.svg)
 */
const IdBadge: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM128 64l8 0 112 0 8 0 0 16-8 0L136 80l-8 0 0-16zM240 224a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm-4.5 112l-21.3 64-16.9 0L112 320l160 0 26.7 80-16.9 0-21.3-64-136.9 0z" />
    </Icon>
);

export default IdBadge;