
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=duotone mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l192 0 0-384L64 64C28.7 64 0 92.7 0 128zm64 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-192z" />
        <path d="M256 64H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H256V64z" />
    </Icon>
);

export default MattressPillow;