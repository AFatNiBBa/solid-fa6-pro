
import { Icon } from "../../index";

/**
 * A component that renders the `list-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=thin list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M157.7 53.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L63.5 125.2 21.1 89.9c-3.4-2.8-8.4-2.4-11.3 1s-2.4 8.4 1 11.3l48 40c3.2 2.6 7.9 2.4 10.8-.5l88-88zm0 160c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L63.5 285.2 21.1 249.9c-3.4-2.8-8.4-2.4-11.3 1s-2.4 8.4 1 11.3l48 40c3.2 2.6 7.9 2.4 10.8-.5l88-88zM200 96c0 4.4 3.6 8 8 8l288 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L208 88c-4.4 0-8 3.6-8 8zm0 160c0 4.4 3.6 8 8 8l288 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-288 0c-4.4 0-8 3.6-8 8zM168 416c0 4.4 3.6 8 8 8l320 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-320 0c-4.4 0-8 3.6-8 8zm-88 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default ListCheck;