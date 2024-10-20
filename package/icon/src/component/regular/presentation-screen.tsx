
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=regular presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l528 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 0zm8 80l0 216c0 30.9 25.1 56 56 56l176 0 0 46.1-73 73c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63 63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73-73 0-46.1 176 0c30.9 0 56-25.1 56-56l0-216-48 0 0 216c0 4.4-3.6 8-8 8l-200 0L88 304c-4.4 0-8-3.6-8-8L80 80 32 80z" />
    </Icon>
);

export default PresentationScreen;