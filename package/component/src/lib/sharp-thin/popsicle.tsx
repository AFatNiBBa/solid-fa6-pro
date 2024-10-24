
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=sharp-thin popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 160c0-79.5-64.5-144-144-144S16 80.5 16 160l0 208 136 0 0-200 0-8 16 0 0 8 0 200 136 0 0-208zM152 384L16 384 0 384l0-16L0 160C0 71.6 71.6 0 160 0s160 71.6 160 160l0 208 0 16-16 0-136 0 0 120 0 8-16 0 0-8 0-120z" />
    </Icon>
);

export default Popsicle;