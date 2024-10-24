
import { Icon } from "../../index";

/**
 * A component that renders the `tablets` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablets?s=sharp-solid tablets}
 * @preview ![tablets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tablets.svg)
 */
const Tablets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 160c0 38.4-13.5 73.7-36.1 101.3L378.7 36.1C406.3 13.5 441.6 0 480 0c88.4 0 160 71.6 160 160zM480 320c-88.4 0-160-71.6-160-160c0-38.4 13.5-73.7 36.1-101.3L581.3 283.9C553.7 306.5 518.4 320 480 320zM160 512C77 512 8.8 448.9 .8 368l318.4 0c-8 80.9-76.2 144-159.2 144zM.8 336C8.8 255.1 77 192 160 192s151.2 63.1 159.2 144L.8 336z" />
    </Icon>
);

export default Tablets;