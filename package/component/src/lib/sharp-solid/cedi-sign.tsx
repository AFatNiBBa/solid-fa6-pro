
import { Icon } from "../../index";

/**
 * A component that renders the `cedi-sign` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cedi-sign?s=sharp-solid cedi-sign}
 * @preview ![cedi-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cedi-sign.svg)
 */
const CediSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 32l0-32L192 0l0 32 0 34.7C101.2 81.9 32 160.9 32 256s69.2 174.1 160 189.3l0 34.7 0 32 64 0 0-32 0-34.7c49.6-8.3 92.7-35.6 121.6-74.1l-51.2-38.4c-17.2 22.9-41.9 39.8-70.4 47.2L256 132c28.5 7.3 53.2 24.2 70.4 47.2l51.2-38.4C348.7 102.3 305.6 75 256 66.7L256 32zM192 132L192 380c-55.2-14.2-96-64.3-96-124s40.8-109.8 96-124z" />
    </Icon>
);

export default CediSign;