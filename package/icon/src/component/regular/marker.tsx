
import { Icon } from "../../index";

/**
 * A component that renders the `marker` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=regular marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 113.9L225.9 224 288 286.1 447 127c17.1-17.1 17.1-44.9 0-62.1s-44.9-17.1-62.1 0l-15 15L336 113.9zm-144 144l-58.5 58.5c-38.8 38.8-66 87.5-78.6 140.7c53.2-12.7 101.9-39.9 140.7-78.6L254.1 320 192 257.9zM232.4 23.7c27.9-18.4 65.9-15.4 90.5 9.2c0 0 0 0 0 0L336 46.1l15-15s0 0 0 0C386.9-4.8 445.1-4.8 481 31c35.9 35.9 35.9 94.1 0 129.9L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8l80-80L199 183l69.1-69.1 6.2-6.2L285.1 97l17-17L289 66.9s0 0 0 0c-9.4-9.4-24.6-9.3-33.9 0L169 153c-4.1 4.1-9.3 6.4-14.7 6.9c-6.9 .7-14-1.7-19.3-6.9c-9.4-9.4-9.4-24.6 0-33.9L221.1 33c3.5-3.5 7.3-6.6 11.3-9.2z" />
    </Icon>
);

export default Marker;