
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=regular plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24l0 88 48 0 0-88zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 88 48 0 0-88zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 64c0 80.2 59 146.6 136 158.2l0 73.8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-73.8c77-11.6 136-78 136-158.2l0-64 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0-48 0L80 144l-48 0-8 0zM192 368c-61.9 0-112-50.1-112-112l0-64 224 0 0 64c0 61.9-50.1 112-112 112z" />
    </Icon>
);

export default Plug;