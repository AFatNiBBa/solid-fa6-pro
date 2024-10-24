
import { Icon } from "../../index";

/**
 * A component that renders the `potato` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=sharp-solid potato}
 * @preview ![potato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/potato.svg)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path d="M43.1 260.9L96 208l48-80 80-48 36.9-36.9C288.5 15.5 325.9 0 364.9 0C446.2 0 512 65.8 512 147.1c0 39-15.5 76.4-43.1 104L464 256 384 400 272 448l-20.9 20.9c-27.6 27.6-65 43.1-104 43.1C65.8 512 0 446.2 0 364.9c0-39 15.5-76.4 43.1-104zM408 168l-48 0 0 48 48 0 0-48zM216 200l-48 0 0 48 48 0 0-48zM136 392l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default Potato;