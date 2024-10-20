
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=light swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 416c0 53 43 96 96 96l360 0c30.9 0 56-25.1 56-56l0-80c0-30.9-25.1-56-56-56l-124.3 0L419 232.7c21.9-21.9 21.9-57.3 0-79.2L362.4 97c-21.9-21.9-57.3-21.9-79.2 0L192 188.2 192 56c0-30.9-25.1-56-56-56L56 0C25.1 0 0 25.1 0 56L0 416zm456 64l-284.3 0 128-128L456 352c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24zM396.4 210.1L192 414.5l0-181L305.9 119.6c9.4-9.4 24.6-9.4 33.9 0l56.6 56.6c9.4 9.4 9.4 24.6 0 33.9zM96 480c-35.3 0-64-28.7-64-64l0-128 128 0 0 128c0 35.3-28.7 64-64 64zM32 256l0-96 128 0 0 96L32 256zm0-128l0-72c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24l0 72L32 128zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Swatchbook;