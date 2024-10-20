
import { Icon } from "../../index";

/**
 * A component that renders the `shelves` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=light shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 0c8.8 0 16 7.2 16 16l0 144 576 0 0-144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160 0 256 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L32 448l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64L0 176 0 16C0 7.2 7.2 0 16 0zM32 416l576 0 0-224L32 192l0 224zM448 32l-64 0 0 64 64 0 0-64zM384 0l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM128 288l0 64 64 0 0-64-64 0zm-32 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zm192 0l0 64 64 0 0-64-64 0zm-32 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default Shelves;