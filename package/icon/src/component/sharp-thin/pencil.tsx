
import { Icon } from "../../index";

/**
 * A component that renders the `pencil` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil?s=sharp-thin pencil}
 * @preview ![pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pencil.svg)
 */
const Pencil: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l4.4-17.6L40 352 380.7 11.3 392 0l11.3 11.3 97.4 97.4L512 120l-11.3 11.3L160 472 17.6 507.6 0 512zM160 408l0 41.4 251-251L313.7 101 62.6 352l41.4 0 8 0 0 8 0 40 40 0 8 0 0 8zm-16 48l0-40-40 0-8 0 0-8 0-40-40 0c-1.2 0-2.3-.3-3.3-.7L22 490l122.7-30.7c-.5-1-.7-2.1-.7-3.3zM422.3 187l67-67L392 22.6l-67 67L422.3 187zM317.7 173.1l-144 144-5.7 5.7-11.3-11.3 5.7-5.7 144-144 5.7-5.7 11.3 11.3-5.7 5.7z" />
    </Icon>
);

export default Pencil;