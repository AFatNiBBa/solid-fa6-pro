
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=light briefcase}
 * @preview ![briefcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/briefcase.svg)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 48l0 48 192 0 0-48c0-8.8-7.2-16-16-16L176 32c-8.8 0-16 7.2-16 16zM128 96l0-48c0-26.5 21.5-48 48-48L336 0c26.5 0 48 21.5 48 48l0 48 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zm240 32l-224 0-80 0c-17.7 0-32 14.3-32 32l0 96 144 0 32 0 96 0 32 0 144 0 0-96c0-17.7-14.3-32-32-32l-80 0zM480 288l-144 0 0 48c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-48L32 288l0 128c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-128zm-272 0l0 48 96 0 0-48-96 0z" />
    </Icon>
);

export default Briefcase;