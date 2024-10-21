
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=regular browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 352l0-224 384 0 0 224c0 8.8-7.2 16-16 16l-352 0c-8.8 0-16-7.2-16-16zM160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-256z" />
    </Icon>
);

export default Browsers;