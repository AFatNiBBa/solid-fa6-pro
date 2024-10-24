
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-horizontal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=light ruler-horizontal}
 * @preview ![ruler-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ruler-horizontal.svg)
 */
const RulerHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 320c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-48 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-48 0c-17.7 0-32 14.3-32 32l0 128zm32 64c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l512 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 384z" />
    </Icon>
);

export default RulerHorizontal;