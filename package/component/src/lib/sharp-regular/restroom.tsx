
import { Icon } from "../../index";

/**
 * A component that renders the `restroom` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/restroom?s=sharp-regular restroom}
 * @preview ![restroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/restroom.svg)
 */
const Restroom: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zM59.6 128l17.3 0 102.2 0 17.3 0 5.4 16.5 44.9 136 7.5 22.8-45.6 15.1-7.5-22.8L192 267.7 192 488l0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-220.4-9.2 27.9-7.5 22.8L1.7 303.3l7.5-22.8 44.9-136L59.6 128zM112 304l32 0 0-128-32 0 0 128zM464 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-20.4 80l17.3 0 19.1 0 64 0 19.1 0 17.3 0 5.4 16.5 44.9 136 7.5 22.8-35.8 11.8L609 336l15 48-48 0 0 104 0 24-48 0 0-24 0-104-32 0 0 104 0 24-48 0 0-24 0-104-48 0 15-48 6.5-20.9-35.8-11.8 7.5-22.8 44.9-136 5.4-16.5zM512 186.5L465.3 336l93.4 0L512 186.5zM344 24l0 464 0 24-48 0 0-24 0-464 0-24 48 0 0 24z" />
    </Icon>
);

export default Restroom;