
import { Icon } from "../../index";

/**
 * A component that renders the `terminal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=regular terminal}
 * @preview ![terminal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/terminal.svg)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M6.3 72.2c-9-9.8-8.3-24.9 1.4-33.9s24.9-8.3 33.9 1.4l184 200c8.5 9.2 8.5 23.3 0 32.5l-184 200c-9 9.8-24.2 10.4-33.9 1.4s-10.4-24.2-1.4-33.9L175.4 256 6.3 72.2zM248 432l304 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-304 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Terminal;