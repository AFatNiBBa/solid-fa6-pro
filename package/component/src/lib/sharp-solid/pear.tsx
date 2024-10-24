
import { Icon } from "../../index";

/**
 * A component that renders the `pear` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=sharp-solid pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M510.7 35.2l-17 17L457.9 88c33.9 49.8 28.8 118.3-15.4 162.5l-58.8 58.8c.2 3.5 .3 7.1 .3 10.7c0 106-86 192-192 192S0 426 0 320S86 128 192 128c3.6 0 7.2 .1 10.7 .3l58.8-58.8c44.2-44.2 112.6-49.3 162.5-15.4l35.9-35.9 17-17 33.9 33.9zM288 320c0 53-43 96-96 96l0 32c70.7 0 128-57.3 128-128l-32 0z" />
    </Icon>
);

export default Pear;