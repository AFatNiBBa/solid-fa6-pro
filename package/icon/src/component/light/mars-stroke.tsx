
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke?s=light mars-stroke}
 * @preview ![mars-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mars-stroke.svg)
 */
const MarsStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l89.4 0L384 105.4 347.3 68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L361.4 128l-40.7 40.7C290.1 143.3 250.8 128 208 128c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-42.8-15.3-82.1-40.7-112.6L384 150.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L406.6 128 480 54.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L368 0zM64 304a144 144 0 1 1 288 0A144 144 0 1 1 64 304z" />
    </Icon>
);

export default MarsStroke;