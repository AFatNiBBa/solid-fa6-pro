
import { Icon } from "../../index";

/**
 * A component that renders the `cent-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=regular cent-sign}
 * @preview ![cent-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cent-sign.svg)
 */
const CentSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 0c13.3 0 24 10.7 24 24l0 48.5C277.9 75 313 88 341.9 108.4c10.8 7.7 13.4 22.6 5.7 33.5s-22.6 13.4-33.5 5.7C289.7 130.3 259.2 120 226 120c-82 0-146 62.2-146 136s64 136 146 136c33.3 0 63.7-10.3 88.2-27.6c10.8-7.7 25.8-5.1 33.5 5.7s5.1 25.8-5.7 33.5C313 424 277.9 437 240 439.5l0 48.5c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-50.8C102 422 32 347.7 32 256s70-166 160-181.2L192 24c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CentSign;