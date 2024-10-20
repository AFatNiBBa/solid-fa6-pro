
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=sharp-regular dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 48l0 416L48 464 48 48l352 0zM48 0L0 0 0 48 0 464l0 48 48 0 352 0 48 0 0-48 0-416 0-48L400 0 48 0zm80 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm40 256c-44.7 0-82.3-30.6-93-72l53 0 24 0 0-48-24 0-53 0c10.7-41.4 48.2-72 93-72c53 0 96 43 96 96s-43 96-96 96zm0 48a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default Dryer;