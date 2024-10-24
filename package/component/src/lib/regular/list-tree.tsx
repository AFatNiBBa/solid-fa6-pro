
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=regular list-tree}
 * @preview ![list-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/list-tree.svg)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 48C10.7 48 0 58.7 0 72l0 48c0 13.3 10.7 24 24 24l0 112 0 128c0 30.9 25.1 56 56 56l48 0c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l-48 0c-4.4 0-8-3.6-8-8l0-104 56 0c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l-56 0 0-88c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L24 48zM160 96c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L184 72c-13.3 0-24 10.7-24 24zM288 256c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm0 160c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default ListTree;