
import { Icon } from "../../index";

/**
 * A component that renders the `soap` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=solid soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM416 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 160c0 27.6-11.7 52.5-30.4 70.1C422.1 275.7 448 310.8 448 352c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96s43-96 96-96l88.4 0c-15.2-17-24.4-39.4-24.4-64L96 192c-53 0-96 43-96 96L0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96l0-128c0-53-43-96-96-96zM160 288c-35.3 0-64 28.7-64 64s28.7 64 64 64l192 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0-160 0z" />
    </Icon>
);

export default Soap;