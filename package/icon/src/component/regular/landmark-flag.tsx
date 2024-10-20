
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=regular landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0L256 0c-8.8 0-16 7.2-16 16l0 112L48 128c-13.3 0-24 10.7-24 24s10.7 24 24 24l416 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-192 0 0-32 80 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L272 0zM112 208l-48 0 0 176-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-176-48 0 0 176-64 0 0-176-48 0 0 176-64 0 0-176-48 0 0 176-64 0 0-176zM0 488c0 13.3 10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default LandmarkFlag;