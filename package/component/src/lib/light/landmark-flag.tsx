
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=light landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32l0 32 64 0 0-32-64 0zm80 64l-80 0 0 32 192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L48 160c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0 0-32 0-32 0-40 0-8c0-8.8 7.2-16 16-16l8 0 8 0 80 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16zM48 368c0-8.8 7.2-16 16-16l0-160 32 0 0 160 80 0 0-160 32 0 0 160 96 0 0-160 32 0 0 160 80 0 0-160 32 0 0 160c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 384c-8.8 0-16-7.2-16-16zM24 432c0-8.8 7.2-16 16-16l432 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L40 448c-8.8 0-16-7.2-16-16zM0 496c0-8.8 7.2-16 16-16l480 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 512c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default LandmarkFlag;