
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=sharp-regular plug}
 * @preview ![plug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/plug.svg)
 */
const Plug: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120 24l0-24L72 0l0 24 0 88 48 0 0-88zm192 0l0-24L264 0l0 24 0 88 48 0 0-88zM24 144L0 144l0 48 24 0 8 0 0 64c0 80.2 59 146.6 136 158.2l0 97.8 48 0 0-97.8c77-11.6 136-78 136-158.2l0-64 8 0 24 0 0-48-24 0-8 0-48 0L80 144l-48 0-8 0zM192 368c-61.9 0-112-50.1-112-112l0-64 224 0 0 64c0 61.9-50.1 112-112 112z" />
    </Icon>
);

export default Plug;