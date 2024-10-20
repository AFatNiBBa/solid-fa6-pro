
import { Icon } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=regular dial-med}
 * @preview ![dial-med](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dial-med.svg)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM176 288c0-53.6 37.7-98.4 88-109.4L264 288c0 13.3 10.7 24 24 24s24-10.7 24-24l0-109.4c50.3 11 88 55.8 88 109.4c0 61.9-50.1 112-112 112s-112-50.1-112-112zM288 128a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM576 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM32 320a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 96A32 32 0 1 0 64 96a32 32 0 1 0 64 0zm352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM128 480a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm352 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DialMed;