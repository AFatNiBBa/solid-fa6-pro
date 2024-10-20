
import { Icon } from "../../index";

/**
 * A component that renders the `sheet-plastic` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sheet-plastic?s=sharp-regular sheet-plastic}
 * @preview ![sheet-plastic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sheet-plastic.svg)
 */
const SheetPlastic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 176 0 0-112 112 0 0-304L48 48zM256 512L48 512 0 512l0-48L0 48 0 0 48 0 336 0l48 0 0 48 0 336L256 512zM203.3 107.3l-96 96L96 214.6 73.4 192l11.3-11.3 96-96L192 73.4 214.6 96l-11.3 11.3zm96 32l-160 160L128 310.6 105.4 288l11.3-11.3 160-160L288 105.4 310.6 128l-11.3 11.3z" />
    </Icon>
);

export default SheetPlastic;