
import { Icon } from "../../index";

/**
 * A component that renders the `city` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/city?s=sharp-solid city}
 * @preview ![city](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/city.svg)
 */
const City: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 0L288 0l0 96-64 0 0-72 0-24L176 0l0 24 0 72-64 0 0-72 0-24L64 0l0 24 0 72L0 96l0 96L0 512l288 0 64 0 128 0 160 0 0-320-160 0L480 0zm96 352l0 64-64 0 0-64 64 0zm-384 0l64 0 0 64-64 0 0-64zm-64 64l-64 0 0-64 64 0 0 64zM512 256l64 0 0 64-64 0 0-64zM64 160l64 0 0 64-64 0 0-64zm192 96l0 64-64 0 0-64 64 0zm0-96l0 64-64 0 0-64 64 0zM64 320l0-64 64 0 0 64-64 0zm352-64l0 64-64 0 0-64 64 0zM352 64l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default City;