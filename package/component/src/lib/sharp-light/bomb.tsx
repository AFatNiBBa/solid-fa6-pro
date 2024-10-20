
import { Icon } from "../../index";

/**
 * A component that renders the `bomb` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=sharp-light bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 0l0 16 0 32 32 0 16 0 0 32-16 0-32 0 0 32 0 16-32 0 0-16 0-32-32 0-16 0 0-32 16 0 32 0 0-32 0-16 32 0zM304 128l-2.9 2.9-14.4 14.4-19.1-6.9C249.1 131.7 229 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-21-3.7-41.1-10.4-59.7l-6.9-19.1 14.4-14.4L384 208l-80-80zM406.6 230.6l-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9L304 82.7l22.6 22.6 28.7 28.7 17.4-17.4L384 105.4 406.6 128l-11.3 11.3-17.4 17.4 28.7 28.7L429.3 208l-22.6 22.6zM96 296l0 8-32 0 0-8c0-75.1 60.9-136 136-136l8 0 0 32-8 0c-57.4 0-104 46.6-104 104z" />
    </Icon>
);

export default Bomb;