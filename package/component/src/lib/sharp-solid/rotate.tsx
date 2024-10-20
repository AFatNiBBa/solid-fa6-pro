
import { Icon } from "../../index";

/**
 * A component that renders the `rotate` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=sharp-solid rotate}
 * @preview ![rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rotate.svg)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8L44.8 181.4C55.6 150.7 73.2 122 97.6 97.6c87.5-87.5 229.3-87.5 316.8 0c0 0 0 0 0 0L472 40l24 24 0 160-160 0-24-24 57.1-57.1s0 0 0 0c-62.5-62.5-163.8-62.5-226.3 0zm0 226.3c62.5 62.5 163.8 62.5 226.3 0c17.5-17.5 30.1-38 37.8-59.8l60.4 21.3c-10.8 30.6-28.4 59.3-52.9 83.8c-87.5 87.5-229.3 87.5-316.7 0c0 0 0 0 0 0L40 472 16 448l0-160 160 0 24 24-57.1 57.1z" />
    </Icon>
);

export default Rotate;