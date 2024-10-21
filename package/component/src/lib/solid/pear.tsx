
import { Icon } from "../../index";

/**
 * A component that renders the `pear` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=solid pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M505 7c9.4 9.4 9.4 24.6 0 33.9L457.9 88.1c14 20.5 22.1 45.3 22.1 71.9c0 30.7-10.8 58.9-28.9 81c-29.9 36.5-61.4 81.8-73.3 127.4c-8.3 32-25 62.3-50.1 87.3c-75 75-196.5 75-271.5 0s-75-196.5 0-271.5c25.1-25.1 55.3-41.8 87.3-50.1c45.7-11.8 90.9-43.4 127.4-73.3c22.1-18 50.3-28.9 81-28.9c26.7 0 51.4 8.2 71.9 22.1L471 7c9.4-9.4 24.6-9.4 33.9 0zM320 320c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 53-43 96-96 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c70.7 0 128-57.3 128-128z" />
    </Icon>
);

export default Pear;