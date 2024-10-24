
import { Icon } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=solid list-dropdown}
 * @preview ![list-dropdown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/list-dropdown.svg)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM448 192l0 224L64 416l0-224 384 0zM436.7 96c7.1 0 10.7 8.6 5.7 13.7l-36.7 36.7c-3.1 3.1-8.2 3.1-11.3 0l-36.7-36.7c-5-5-1.5-13.7 5.7-13.7l73.4 0zM128 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l256 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-256 0z" />
    </Icon>
);

export default ListDropdown;