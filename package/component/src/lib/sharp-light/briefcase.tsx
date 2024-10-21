
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-light briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0L128 0l0 16 0 80L32 96 0 96l0 32L0 448l0 32 32 0 448 0 32 0 0-32 0-320 0-32-32 0-96 0 0-80 0-16L368 0 144 0zM352 96L160 96l0-64 192 0 0 64zM144 128l224 0 112 0 0 128-144 0-32 0-96 0-32 0L32 256l0-128 112 0zM480 288l0 160L32 448l0-160 144 0 0 48 0 32 32 0 96 0 32 0 0-32 0-48 144 0zm-272 0l96 0 0 48-96 0 0-48z" />
    </Icon>
);

export default Briefcase;