
import { Icon } from "../../index";

/**
 * A component that renders the `cedi-sign` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cedi-sign?s=regular cedi-sign}
 * @preview ![cedi-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cedi-sign.svg)
 */
const CediSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M216 0c13.3 0 24 10.7 24 24l0 48.5C277.9 75 313 88 341.9 108.4c10.8 7.7 13.4 22.6 5.7 33.5s-22.6 13.4-33.5 5.7c-20.9-14.8-46.3-24.5-74.1-27l0 270.8c27.8-2.5 53.2-12.2 74.1-27c10.8-7.7 25.8-5.1 33.5 5.7s5.1 25.8-5.7 33.5C313 424 277.9 437 240 439.5l0 48.5c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-50.8C102 422 32 347.7 32 256s70-166 160-181.2L192 24c0-13.3 10.7-24 24-24zM80 256c0 63.2 47 117.9 112 132.3l0-264.6C127 138.1 80 192.8 80 256z" />
    </Icon>
);

export default CediSign;