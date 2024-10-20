
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=duotone list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M104 256c0 13.3 10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0c-13.3 0-24 10.7-24 24zm0 88c0 13.3 10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0c-13.3 0-24 10.7-24 24z" />
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 96l0 224 384 0 0-224L64 192zM363.3 96c-7.1 0-10.7 8.6-5.7 13.7l36.7 36.7c3.1 3.1 8.2 3.1 11.3 0l36.7-36.7c5-5 1.5-13.7-5.7-13.7l-73.4 0z" />
    </Icon>
);

export default ListDropdown;