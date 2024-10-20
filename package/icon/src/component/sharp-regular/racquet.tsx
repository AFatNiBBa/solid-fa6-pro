
import { Icon } from "../../index";

/**
 * A component that renders the `racquet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/racquet?s=sharp-regular racquet}
 * @preview ![racquet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/racquet.svg)
 */
const Racquet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M349 48c31.9 0 61.1 10.9 82.6 32.4S464 131.2 464 163c0 40.6-17.7 84.9-52.9 120.1c-64 64-154.5 68.7-202.7 20.5C186.9 282.1 176 252.8 176 221c0-40.6 17.7-84.9 52.9-120.1S308.4 48 349 48zm0-48c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 35 9.9 69.5 30.8 98.3L127 351l-23-23L70.1 361.9 33.9 398.1 0 432l33.9 33.9 12.1 12.1L80 512l33.9-33.9 36.1-36.1L184 408l-23-23 31.7-31.7c73.6 54 182.1 34.1 252.3-36.2c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0zM80 444.1L67.9 432 104 395.9 116.1 408 80 444.1z" />
    </Icon>
);

export default Racquet;