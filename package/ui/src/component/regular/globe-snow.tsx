
import { Icon } from "../../index";

/**
 * A component that renders the `globe-snow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=regular globe-snow}
 * @preview ![globe-snow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/globe-snow.svg)
 */
const GlobeSnow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M297.4 384C358 356.2 400 295 400 224c0-97.2-78.8-176-176-176S48 126.8 48 224c0 71 42 132.2 102.6 160l-83.3 0C25.7 343.3 0 286.7 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 62.7-25.7 119.3-67.2 160l-83.3 0zM232 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm3.3 84.7l64 64c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-16.5 0 44.8 53.8c4 4.8 4.8 11.4 2.2 17s-8.3 9.2-14.5 9.2l-56 0 0 48-48 0 0-48-56 0c-6.2 0-11.9-3.6-14.5-9.2s-1.8-12.3 2.2-17L176.5 256 160 256c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l64-64c6.2-6.2 16.4-6.2 22.6 0zM328 144a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM80 184a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM20.3 474.2L61.1 416l325.8 0 40.8 58.2c5.1 7.3 5.8 16.9 1.6 24.8S416.9 512 408 512L40 512c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8z" />
    </Icon>
);

export default GlobeSnow;