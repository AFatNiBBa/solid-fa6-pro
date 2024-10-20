
import { Icon } from "../../index";

/**
 * A component that renders the `popsicle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/popsicle?s=thin popsicle}
 * @preview ![popsicle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/popsicle.svg)
 */
const Popsicle: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M304 160c0-79.5-64.5-144-144-144S16 80.5 16 160l0 176c0 17.7 14.3 32 32 32l104 0 0-200c0-4.4 3.6-8 8-8s8 3.6 8 8l0 200 104 0c17.7 0 32-14.3 32-32l0-176zM152 384L48 384c-26.5 0-48-21.5-48-48L0 160C0 71.6 71.6 0 160 0s160 71.6 160 160l0 176c0 26.5-21.5 48-48 48l-104 0 0 120c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-120z" />
    </Icon>
);

export default Popsicle;