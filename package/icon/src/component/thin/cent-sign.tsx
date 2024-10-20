
import { Icon } from "../../index";

/**
 * A component that renders the `cent-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cent-sign?s=thin cent-sign}
 * @preview ![cent-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cent-sign.svg)
 */
const CentSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0c4.4 0 8 3.6 8 8l0 56c43.7 .4 84.1 14.6 116.7 38.3c3.6 2.6 4.4 7.6 1.8 11.2s-7.6 4.4-11.2 1.8C308.9 93.1 271 80 230 80C129.2 80 48 159 48 256s81.2 176 182 176c41.1 0 78.9-13.1 109.3-35.3c3.6-2.6 8.6-1.8 11.2 1.8s1.8 8.6-1.8 11.2c-32.6 23.7-73 37.9-116.7 38.3l0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56.5C113.4 440.6 32 357.7 32 256S113.4 71.4 216 64.5L216 8c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default CentSign;