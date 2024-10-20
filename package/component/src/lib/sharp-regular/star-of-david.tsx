
import { Icon } from "../../index";

/**
 * A component that renders the `star-of-david` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-david?s=sharp-regular star-of-david}
 * @preview ![star-of-david](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star-of-david.svg)
 */
const StarOfDavid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 400l48 0 99.3 0L232 512l48 0 68.7-112 99.3 0 48 0 0-48-58.9-96L496 160l0-48-48 0-99.3 0L280 0 232 0 163.3 112 64 112l-48 0 0 48 58.9 96L16 352l0 48zm87.1-98.1L133.8 352l-61.5 0 30.8-50.1zM190.1 352l-58.9-96 58.9-96 131.7 0 58.9 96-58.9 96-131.7 0zm29.5 48l72.8 0L256 459.3 219.6 400zm158.6-48l30.7-50.1L439.7 352l-61.5 0zm30.7-141.9L378.2 160l61.5 0-30.8 50.1zM292.4 112l-72.8 0L256 52.7 292.4 112zM133.8 160l-30.8 50.1L72.3 160l61.5 0z" />
    </Icon>
);

export default StarOfDavid;