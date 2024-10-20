
import { Icon } from "../../index";

/**
 * A component that renders the `soap` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soap?s=sharp-regular soap}
 * @preview ![soap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/soap.svg)
 */
const Soap: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM48 192l161.1 0c2.5 17.7 9.2 34 18.9 48L48 240l0 224 416 0 0-224-52.1 0c9.8-14 16.4-30.3 18.9-48l33.1 0 48 0 0 48 0 224 0 48-48 0L48 512 0 512l0-48L0 240l0-48 48 0zm96 96l176 0 48 0 48 0 0 48 0 32 0 48-48 0-224 0-48 0 0-48 0-32 0-48 48 0zm0 80l224 0 0-32-224 0 0 32zM320 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-112a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM384 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Soap;