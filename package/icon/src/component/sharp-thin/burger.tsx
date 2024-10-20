
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-thin burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 224l-16 0 0-16 0-16s16-160 224-160s224 160 224 160l0 16 0 16-16 0L48 224zm416-16l0-15-.1-.5c-.1-.9-.4-2.4-.7-4.3c-.7-3.8-2-9.5-4.2-16.3c-4.3-13.7-12.1-32-25.8-50.2C406.4 85.8 355.2 48 256 48s-150.4 37.8-177.2 73.6C65.1 139.8 57.3 158.1 53 171.8c-2.2 6.8-3.5 12.5-4.2 16.3c-.4 1.9-.6 3.4-.7 4.3L48 193l0 15 416 0zM47.9 193.6s0 0 0 0c0 0 0 0 0 0zM480 272L32 272l0 64 448 0 0-64zM16 256l16 0 448 0 16 0 0 16 0 64 0 16-16 0L32 352l-16 0 0-16 0-64 0-16zM464 400L48 400l0 64 416 0 0-64zM32 384l16 0 416 0 16 0 0 16 0 64 0 16-16 0L48 480l-16 0 0-16 0-64 0-16zM144 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm208 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Burger;