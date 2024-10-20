
import { Icon } from "../../index";

/**
 * A component that renders the `sausage` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=light sausage}
 * @preview ![sausage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sausage.svg)
 */
const Sausage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L400 0zM32 400c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM480 160c0 176.7-143.3 320-320 320c-35.3 0-64-28.7-64-64s28.7-64 64-64c106 0 192-86 192-192c0-35.3 28.7-64 64-64s64 28.7 64 64zm32 0c0-53-43-96-96-96s-96 43-96 96c0 88.4-71.6 160-160 160c-53 0-96 43-96 96s43 96 96 96c194.4 0 352-157.6 352-352zm-112 0c-8.8 0-16 7.2-16 16c0 114.9-93.1 208-208 208c-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240-107.5 240-240c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Sausage;