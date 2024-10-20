
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=regular list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 192l0 224c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-224L48 192zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm436.7 0l-73.4 0c-7.1 0-10.7 8.6-5.7 13.7l36.7 36.7c3.1 3.1 8.2 3.1 11.3 0l36.7-36.7c5-5 1.5-13.7-5.7-13.7zM128 232l256 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-256 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96l256 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-256 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default ListDropdown;