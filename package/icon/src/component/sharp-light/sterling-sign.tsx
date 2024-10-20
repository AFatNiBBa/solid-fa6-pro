
import { Icon } from "../../index";

/**
 * A component that renders the `sterling-sign` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=sharp-light sterling-sign}
 * @preview ![sterling-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sterling-sign.svg)
 */
const SterlingSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 143.2C96 99.5 131.5 64 175.2 64c9.2 0 18.4 1.6 27.1 4.8L274.5 95l15 5.5 10.9-30.1-15-5.5L213.2 38.7c-12.2-4.4-25-6.7-38-6.7C113.8 32 64 81.8 64 143.2L64 256 0 256l0 32 64 0 0 36.2L1.7 448.8 0 452.2 0 456l0 8 0 16 16 0 288 0 16 0 0-32-16 0L37.9 448 94.3 335.2l1.7-3.4 0-3.8 0-40 160 0 0-32L96 256l0-112.8z" />
    </Icon>
);

export default SterlingSign;