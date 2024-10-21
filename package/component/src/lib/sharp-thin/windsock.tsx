
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=sharp-thin windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 0l0 8 0 120 80 0 0-63.7L96 48l16 3.1L512 128l0 160L112 364.9 96 368l0-16.3L96 288l-80 0 0 216 0 8L0 512l0-8L0 280 0 136 0 8 0 0 16 0zm0 144l0 128 80 0 0-128-80 0zm96-76.6l0 281.3 104-20 0-241.3-104-20zM232 90.4l0 235.1 144-27.7 0-179.7L232 90.4zm160 30.8l0 173.6 104-20 0-133.6-104-20z" />
    </Icon>
);

export default Windsock;