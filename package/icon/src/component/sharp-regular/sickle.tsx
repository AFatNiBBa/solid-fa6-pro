
import { Icon } from "../../index";

/**
 * A component that renders the `sickle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=sharp-regular sickle}
 * @preview ![sickle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sickle.svg)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M218.2 90.2c56.2-56.2 147.4-56.2 203.6 0c2.3 2.3 4.5 4.7 6.7 7.1c-16.4-6-34-9.3-52.5-9.3c-83.9 0-152 68.1-152 152c0 17.8 3.1 35 8.7 50.9l-8.7 8.7-5.8-5.8c-56.2-56.2-56.2-147.4 0-203.6zM455.8 56.2c-75-75-196.5-75-271.5 0s-75 196.5 0 271.5L207 350.6l17 17 17-17 37.1-37.1 12.2-12.2-7.6-15.4C275.8 272.1 272 256.5 272 240c0-57.4 46.6-104 104-104c38.7 0 72.5 21.1 90.5 52.6l44.8-14c-3.9-43.2-22.4-85.3-55.4-118.4zM0 448l64 64 88-88 24 24 48-48L112 288 64 336l24 24L0 448z" />
    </Icon>
);

export default Sickle;