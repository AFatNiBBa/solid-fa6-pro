
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=regular mattress-pillow}
 * @preview ![mattress-pillow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mattress-pillow.svg)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 112l0 288L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l176 0zm48 0l288 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16l-288 0 0-288zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM80 176l0 160c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default MattressPillow;