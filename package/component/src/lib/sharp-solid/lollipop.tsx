
import { Icon } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=sharp-solid lollipop}
 * @preview ![lollipop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lollipop.svg)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210.8 334.8C265.3 314.2 304 261.6 304 200l0-8c0-61.9-50.1-112-112-112S80 130.1 80 192c0 39.8 32.2 72 72 72s72-32.2 72-72l0-16-48 0 0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-35.3 28.7-64 64-64s64 28.7 64 64l0 8c0 53-43 96-96 96l-8 0C94.6 296 48 249.4 48 192c0-79.5 64.5-144 144-144s144 64.5 144 144c0 73.2-54.6 133.6-125.2 142.8zM0 192C0 298 86 384 192 384c41.5 0 79.9-13.1 111.2-35.5L465.4 510.6l45.3-45.3L348.5 303.2C370.9 271.9 384 233.5 384 192C384 86 298 0 192 0S0 86 0 192z" />
    </Icon>
);

export default Lollipop;