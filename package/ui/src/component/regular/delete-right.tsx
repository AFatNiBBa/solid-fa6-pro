
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=regular delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M370.7 64c17 0 33.3 6.7 45.3 18.7L566.6 233.4c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6L416 429.3c-12 12-28.3 18.7-45.3 18.7L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l306.7 0zM48 128l0 256c0 8.8 7.2 16 16 16l306.7 0c4.2 0 8.3-1.7 11.3-4.7L521.4 256 382.1 116.7c-3-3-7.1-4.7-11.3-4.7L64 112c-8.8 0-16 7.2-16 16zm95 47c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default DeleteRight;