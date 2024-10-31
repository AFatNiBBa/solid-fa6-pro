
import { Icon } from "../../index";

/**
 * A component that renders the `ampersand` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ampersand?s=thin ampersand}
 * @preview ![ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ampersand.svg)
 */
const Ampersand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M175.6 48l33.3 0c39.3 0 71.1 31.8 71.1 71.1c0 23-11.2 44.7-30 58l-70 49.6-55.7-57.2c-13-13.4-20.3-31.3-20.3-50C104 80.1 136.1 48 175.6 48zm15.8 190.4l67.9-48.2c23-16.3 36.7-42.8 36.7-71.1C296 71 257 32 208.9 32l-33.3 0C127.2 32 88 71.2 88 119.6c0 22.9 8.9 44.8 24.9 61.2l54 55.4L73.1 302.7C47.3 321 32 350.7 32 382.3c0 53.9 43.7 97.7 97.7 97.7l77.6 0c33.2 0 64.4-15.8 84-42.6L322 395.3l80.3 82.3c3.1 3.2 8.2 3.2 11.3 .1s3.2-8.2 .1-11.3l-82.2-84.3 82.9-113.4c2.6-3.6 1.8-8.6-1.7-11.2s-8.6-1.8-11.2 1.7L320.2 370.5 191.4 238.4zm-13.2 9.4L310.7 383.6l-32.4 44.3c-16.6 22.7-43 36.1-71.1 36.1l-77.6 0C84.6 464 48 427.4 48 382.3c0-26.5 12.8-51.3 34.4-66.6l95.8-68z" />
    </Icon>
);

export default Ampersand;