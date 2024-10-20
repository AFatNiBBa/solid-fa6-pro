
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=light browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 32c17.7 0 32 14.3 32 32l0 32L256 96l0-64 256 0zM160 32l64 0 0 64-96 0 0-32c0-17.7 14.3-32 32-32zM128 352l0-224 112 0 304 0 0 224c0 17.7-14.3 32-32 32l-352 0c-17.7 0-32-14.3-32-32zM160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L160 0zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 384c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-272z" />
    </Icon>
);

export default Browsers;