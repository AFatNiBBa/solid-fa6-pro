
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=thin sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48l-224 0 0-416 224 0zM64 48l144 0 0 416L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48zm0-16C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 96zm-8 72c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zm8 56c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0z" />
    </Icon>
);

export default Sidebar;