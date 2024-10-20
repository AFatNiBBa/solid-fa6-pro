
import { Icon } from "../../index";

/**
 * A component that renders the `bacon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bacon?s=sharp-light bacon}
 * @preview ![bacon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bacon.svg)
 */
const Bacon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 352c10.5-4.7 20.5-9.4 29.9-13.9c131.3-63 155.3-104.1 181-148.2C239.1 141.4 269.6 89.2 448 0L555.6 134.5 576 160c-10.2 5.1-19.8 10-29.1 14.9C394.1 255.1 365.5 304.2 338.8 350c-27.5 47.2-53 91-210.8 162L20.6 377.8 0 352zm83 52.5c114.2-59.3 159.6-121.3 201.1-177.9l3-4c22-29.9 44-59.4 75.2-85.3c27.4-22.8 61.4-42.4 108.1-58L439.3 40.3C366.7 78.1 323.6 108 295.8 132.8c-29.8 26.7-42.8 48.3-56.2 71.3l-1.4 2.3c-13.8 23.6-29 49.8-61.6 78.5c-27.6 24.3-66.6 49.7-126.3 78.8L83 404.5zM103.4 430l34 42.5c64.5-30.5 101.5-54.8 125-75.5c24.8-21.8 35.7-40.5 49.1-63.6l.9-1.5c14.6-25 31.6-53.4 68.8-86.7c31.4-28.1 76.4-59.1 145.4-95.7l-34.8-43.5c-49.4 15.1-83 34.2-109 55.9c-27.8 23.1-47.8 49.6-69.8 79.7l-2.8 3.9C268.2 302.5 220.1 368.1 103.4 430z" />
    </Icon>
);

export default Bacon;