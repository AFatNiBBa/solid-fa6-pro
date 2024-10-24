
import { Icon } from "../../index";

/**
 * A component that renders the `crate-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crate-empty?s=sharp-regular crate-empty}
 * @preview ![crate-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crate-empty.svg)
 */
const CrateEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 272l0 72 416 0 0-72L48 272zm0 120l0 72 416 0 0-72L48 392zM0 224l48 0 416 0 48 0 0 48 0 192 0 48-48 0L48 512 0 512l0-48L0 272l0-48zm400 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 304a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM96 416a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default CrateEmpty;