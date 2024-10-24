
import { Icon } from "../../index";

/**
 * A component that renders the `files` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=regular files}
 * @preview ![files](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/files.svg)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 368l224 0c8.8 0 16-7.2 16-16l0-224-48 0c-17.7 0-32-14.3-32-32l0-48L160 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16zm224 48l-224 0c-35.3 0-64-28.7-64-64L96 64c0-35.3 28.7-64 64-64L325.5 0c17 0 33.3 6.7 45.3 18.7l58.5 58.5c12 12 18.7 28.3 18.7 45.3L448 352c0 35.3-28.7 64-64 64zM24 96c13.3 0 24 10.7 24 24l0 256c0 48.6 39.4 88 88 88l192 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-192 0C60.9 512 0 451.1 0 376L0 120c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Files;