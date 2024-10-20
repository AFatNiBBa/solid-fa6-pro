
import { Icon } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=regular drumstick}
 * @preview ![drumstick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/drumstick.svg)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 304c-17.7 0-32-14.3-32-32l0-96c0-70.7 57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128l-96 0zm-37.5 78c10.2-14.4 23.9-30 41.5-30l92 0c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176l0 92c0 17.7-15.6 31.3-30 41.5c-2.4 1.7-4.6 3.6-6.8 5.7c-12 12-31.5 11.1-47.9 6.8c-4.9-1.3-10-2-15.4-2c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5.3-.7-10.5-2-15.4c-4.3-16.4-5.2-35.9 6.8-47.9c2.1-2.1 4-4.4 5.7-6.7z" />
    </Icon>
);

export default Drumstick;