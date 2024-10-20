
import { Icon } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=sharp-solid hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 208C0 98.5 84.6 8.8 192 .6L192 96c107.4 8.2 192 97.9 192 207.4s-84.6 199.2-192 207.4l0-95.4C84.6 407.2 0 317.5 0 208zm288 48A96 96 0 1 0 96 256a96 96 0 1 0 192 0zm-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hurricane;