
import { Icon } from "../../index";

/**
 * A component that renders the `list-radio` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-radio?s=sharp-light list-radio}
 * @preview ![list-radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/list-radio.svg)
 */
const ListRadio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 96a32 32 0 1 1 64 0A32 32 0 1 1 32 96zm96 0A64 64 0 1 0 0 96a64 64 0 1 0 128 0zm64-16l0 32 16 0 288 0 16 0 0-32-16 0L208 80l-16 0zm0 160l0 32 16 0 288 0 16 0 0-32-16 0-288 0-16 0zm0 160l0 32 16 0 288 0 16 0 0-32-16 0-288 0-16 0zM64 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0-96a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM80 96A16 16 0 1 0 48 96a16 16 0 1 0 32 0zM32 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default ListRadio;