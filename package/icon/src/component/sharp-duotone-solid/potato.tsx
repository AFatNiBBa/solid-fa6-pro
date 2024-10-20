
import { Icon, generic } from "../../index";

/**
 * A component that renders the `potato` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=sharp-duotone-solid potato}
 * @preview ![potato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/potato.svg)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 364.9C0 446.2 65.8 512 147.1 512c39 0 76.4-15.5 104-43.1L272 448l112-48 80-144 4.9-4.9c27.6-27.6 43.1-65 43.1-104C512 65.8 446.2 0 364.9 0c-39 0-76.4 15.5-104 43.1L224 80l-80 48L96 208 43.1 260.9C15.5 288.5 0 325.9 0 364.9zM136 392l48 0 0 48-48 0 0-48zm32-192l48 0 0 48-48 0 0-48zm192-32l48 0 0 48-48 0 0-48z" />
        <path d="M360 168l48 0 0 48-48 0 0-48zM168 200l48 0 0 48-48 0 0-48zm16 192l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Potato;