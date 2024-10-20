
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=sharp-light scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0C144.7 0 48.9 130.1 15.1 192C4.5 211.3 0 224 0 224l34.7 0 493.1 0 6.4-32L52.1 192c10.6-17.1 25.3-37.5 44.9-57.8C146 83.5 226 32 352 32l214.2 0 6.4-32L352 0zM637.9 0L605.3 0 544.5 304l-.5 0-144 0-16 0 0 32 16 0 138.1 0L502.9 512l32.6 0L637.9 0z" />
    </Icon>
);

export default Scythe;