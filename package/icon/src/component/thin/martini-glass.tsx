
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=thin martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 25.5c0-5.3 4.3-9.5 9.5-9.5l460.9 0c5.3 0 9.5 4.3 9.5 9.5c0 2.5-1 5-2.8 6.7L397.5 128l-283 0L18.8 32.3C17 30.5 16 28.1 16 25.5zM130.5 144l251 0L256 269.5 130.5 144zM7.5 43.6L248 284.1 248 496l-112 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l120 0 120 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-112 0 0-211.9L504.5 43.6c4.8-4.8 7.5-11.3 7.5-18.1C512 11.4 500.6 0 486.5 0L25.5 0C11.4 0 0 11.4 0 25.5c0 6.8 2.7 13.3 7.5 18.1z" />
    </Icon>
);

export default MartiniGlass;