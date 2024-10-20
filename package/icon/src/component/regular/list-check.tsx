
import { Icon } from "../../index";

/**
 * A component that renders the `list-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=regular list-check}
 * @preview ![list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/list-check.svg)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M153.8 72.1c8.9-9.9 8.1-25-1.8-33.9s-25-8.1-33.9 1.8L63.1 101.1 41 79C31.6 69.7 16.4 69.7 7 79s-9.4 24.6 0 33.9l40 40c4.7 4.7 11 7.2 17.6 7s12.8-3 17.2-7.9l72-80zm0 160c8.9-9.9 8.1-25-1.8-33.9s-25-8.1-33.9 1.8L63.1 261.1 41 239c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l40 40c4.7 4.7 11 7.2 17.6 7s12.8-3 17.2-7.9l72-80zM216 120l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L216 72c-13.3 0-24 10.7-24 24s10.7 24 24 24zM192 256c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-272 0c-13.3 0-24 10.7-24 24zM160 416c0 13.3 10.7 24 24 24l304 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-304 0c-13.3 0-24 10.7-24 24zm-64 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ListCheck;