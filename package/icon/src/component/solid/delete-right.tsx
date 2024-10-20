
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=solid delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 128C0 92.7 28.7 64 64 64l306.7 0c17 0 33.3 6.7 45.3 18.7L566.6 233.4c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L416 429.3c-12 12-28.3 18.7-45.3 18.7L64 448c-35.3 0-64-28.7-64-64L0 128zm143 47c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    </Icon>
);

export default DeleteRight;