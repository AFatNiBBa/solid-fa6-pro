
import { Icon } from "../../index";

/**
 * A component that renders the `space-station-moon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/space-station-moon?s=thin space-station-moon}
 * @preview ![space-station-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/space-station-moon.svg)
 */
const SpaceStationMoon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240c0 12.4-.9 24.5-2.7 36.4C419.6 320.6 339.6 336 256 336s-163.6-15.4-237.3-43.6c-1.8-11.9-2.7-24-2.7-36.4zm6.3 54.8C95.2 337.4 173.9 352 256 352s160.8-14.6 233.7-41.2C464.9 416.9 369.7 496 256 496S47.1 416.9 22.3 310.8zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM128 160a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm144 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-64 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default SpaceStationMoon;