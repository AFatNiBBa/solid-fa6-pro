
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=light compass}
 * @preview ![compass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/compass.svg)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm92.6-389.1L202.1 171.8c-14.3 4.8-25.6 16-30.4 30.4L122.9 348.6c-8.3 25 15.5 48.8 40.5 40.5l146.5-48.8c14.3-4.8 25.6-16 30.4-30.4l48.8-146.5c8.3-25-15.5-48.8-40.5-40.5zm10.1 30.4L309.9 299.8c-1.6 4.8-5.3 8.5-10.1 10.1L153.3 358.7l48.8-146.5c1.6-4.8 5.3-8.5 10.1-10.1l146.5-48.8zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Compass;