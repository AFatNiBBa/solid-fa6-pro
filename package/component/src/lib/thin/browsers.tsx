
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=thin browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 16c26.5 0 48 21.5 48 48l0 32L200 96l0-48 0-32 312 0zM160 16l24 0 0 32 0 48-72 0 0-32c0-26.5 21.5-48 48-48zM112 352l0-240 80 0 368 0 0 240c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48zM160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L160 0zM16 104c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 392c0 66.3 53.7 120 120 120l352 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-352 0C62.6 496 16 449.4 16 392l0-288z" />
    </Icon>
);

export default Browsers;