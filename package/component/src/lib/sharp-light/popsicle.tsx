
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-light popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 160c0-70.7-57.3-128-128-128S32 89.3 32 160l0 192 112 0 0-160 0-16 32 0 0 16 0 160 112 0 0-192zM144 384L32 384 0 384l0-32L0 160C0 71.6 71.6 0 160 0s160 71.6 160 160l0 192 0 32-32 0-112 0 0 112 0 16-32 0 0-16 0-112z" />
    </Icon>
);

export default Popsicle;