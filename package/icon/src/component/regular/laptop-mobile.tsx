
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=regular laptop-mobile}
 * @preview ![laptop-mobile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/laptop-mobile.svg)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 48l320 0c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L128 0C92.7 0 64 28.7 64 64l0 256-48 0c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48l304 0 0-64-240 0 0-256c0-8.8 7.2-16 16-16zM384 464c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-160 0c-26.5 0-48 21.5-48 48l0 288zm208 0l-160 0 0-288 160 0 0 288z" />
    </Icon>
);

export default LaptopMobile;