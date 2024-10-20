
import { Icon } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=sharp-thin shuttlecock}
 * @preview ![shuttlecock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shuttlecock.svg)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l-5 0-2.2 4.5L93.8 258.2l-9.1 9.1L33.1 318.9C11.9 340.1 0 368.9 0 398.9C0 461.3 50.7 512 113.1 512c30 0 58.8-11.9 80-33.1l51.5-51.5 9.1-9.1 253.7-123L512 293l0-5 0-72 0-8-8 0-88 0 0-104 0-8-8 0L304 96l0-88 0-8-8 0L224 0zM330 363.5l-85.2 41.3-.1-.1-63-63L260.3 263l137.1-43.3L330 363.5zM292.3 114.6L249 251.7l-78.6 78.6-63-63-.1-.1L148.5 182l143.8-67.5zM288 98.9L159.6 159.2 229 16l59 0 0 82.9zM268.3 243.7L309.9 112l90.1 0 0 90.1L268.3 243.7zM53 321.7l43-43L233.4 416l-43 43L53 321.7zM179 470.3c-17.9 16.5-41.4 25.7-65.8 25.7C59.5 496 16 452.5 16 398.9c0-24.4 9.2-47.9 25.7-65.8L179 470.3zM352.8 352.4L413.1 224l82.9 0 0 59L352.8 352.4z" />
    </Icon>
);

export default Shuttlecock;