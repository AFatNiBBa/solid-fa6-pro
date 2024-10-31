
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=sharp-regular knife}
 * @preview ![knife](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/knife.svg)
 */
const Knife: typeof Icon = x => (
    <Icon {...x}>
        <path d="M461.8 0L472 0l16 0 24 0 0 24 0 59.6c0 65.5-25.9 128.4-72.1 174.9L330 368.9l-17 17.1-17-17-62.8-62.8L57.3 488.7 40.6 505.9 6.1 472.6l16.7-17.3 432-448L461.8 0zM266.6 271.6L313 318l92.9-93.4c37.3-37.5 58.2-88.2 58.2-141l0-16.7L266.6 271.6z" />
    </Icon>
);

export default Knife;