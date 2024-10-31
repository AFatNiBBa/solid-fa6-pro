
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=regular desktop}
 * @preview ![desktop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/desktop.svg)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48L64 48c-8.8 0-16 7.2-16 16l0 192 480 0 0-192c0-8.8-7.2-16-16-16zm64 208l0 48 0 48c0 35.3-28.7 64-64 64l-147.7 0 8 48 51.7 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0-128 0-72 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l51.7 0 8-48L64 416c-35.3 0-64-28.7-64-64l0-48 0-48L0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 192zM48 304l0 48c0 8.8 7.2 16 16 16l175.5 0c.3 0 .6 0 .8 0l95.2 0c.3 0 .6 0 .8 0L512 368c8.8 0 16-7.2 16-16l0-48L48 304zM252.3 464l71.3 0-8-48-55.3 0-8 48z" />
    </Icon>
);

export default Desktop;