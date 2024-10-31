
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=sharp-light crosshairs}
 * @preview ![crosshairs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crosshairs.svg)
 */
const Crosshairs: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l0 16 0 32.6C374.1 56.4 455.6 137.9 463.4 240l32.6 0 16 0 0 32-16 0-32.6 0C455.6 374.1 374.1 455.6 272 463.4l0 32.6 0 16-32 0 0-16 0-32.6C137.9 455.6 56.4 374.1 48.6 272L16 272 0 272l0-32 16 0 32.6 0C56.4 137.9 137.9 56.4 240 48.6L240 16l0-16 32 0zM80.7 272c7.6 84.4 74.8 151.7 159.3 159.3l0-47.3 0-16 32 0 0 16 0 47.3c84.4-7.6 151.7-74.8 159.3-159.3L384 272l-16 0 0-32 16 0 47.3 0C423.7 155.6 356.4 88.3 272 80.7l0 47.3 0 16-32 0 0-16 0-47.3C155.6 88.3 88.3 155.6 80.7 240l47.3 0 16 0 0 32-16 0-47.3 0zM256 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Crosshairs;