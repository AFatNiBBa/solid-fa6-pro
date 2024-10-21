
import { Icon } from "../../index";

/**
 * A component that renders the `list-check` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=sharp-thin list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M157.7 53.7l5.7-5.7L152 36.7l-5.7 5.7L63.5 125.2 21.1 89.9 15 84.7 4.7 97l6.1 5.1 48 40 5.6 4.7 5.2-5.2 88-88zm0 160l5.7-5.7L152 196.7l-5.7 5.7L63.5 285.2 21.1 249.9 15 244.7 4.7 257l6.1 5.1 48 40 5.6 4.7 5.2-5.2 88-88zM200 88l0 16 8 0 288 0 8 0 0-16-8 0L208 88l-8 0zm0 160l0 16 8 0 288 0 8 0 0-16-8 0-288 0-8 0zM168 408l0 16 8 0 320 0 8 0 0-16-8 0-320 0-8 0zm-88 8a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default ListCheck;