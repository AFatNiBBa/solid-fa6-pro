
import { Icon } from "../../index";

/**
 * A component that renders the `presentation-screen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/presentation-screen?s=light presentation-screen}
 * @preview ![presentation-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/presentation-screen.svg)
 */
const PresentationScreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l544 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 0zM32 64l0 224c0 35.3 28.7 64 64 64l176 0 0 41.4-91.3 91.3c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L288 422.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L304 393.4l0-41.4 176 0c35.3 0 64-28.7 64-64l0-224-32 0 0 224c0 17.7-14.3 32-32 32l-192 0L96 320c-17.7 0-32-14.3-32-32L64 64 32 64z" />
    </Icon>
);

export default PresentationScreen;