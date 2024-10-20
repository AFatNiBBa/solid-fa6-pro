
import { Icon } from "../../index";

/**
 * A component that renders the `racquet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=sharp-light racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349 32c35.5 0 69 12.2 93.9 37.1S480 127.5 480 163c0 45.1-19.6 93.4-57.6 131.4c-68.1 68.1-168.9 76.9-225.3 20.5C172.2 290 160 256.5 160 221c0-45.1 19.6-93.4 57.6-131.4S303.9 32 349 32zm0-32c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 37.7 11.4 74.7 35.7 104.7l-31 31-6.1-6.1L104 328 81.4 350.6 22.6 409.4 0 432l22.6 22.6 34.7 34.7L80 512l22.6-22.6 58.7-58.7L184 408l-22.6-22.6-6.1-6.1 31-31c73.5 60.1 186.4 41.1 258.7-31.2c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0zM104 373.3L138.7 408 80 466.7 45.3 432 104 373.3z" />
    </Icon>
);

export default Racquet;