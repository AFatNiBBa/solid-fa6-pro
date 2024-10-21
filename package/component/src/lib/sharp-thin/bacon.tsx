
import { Icon } from "../../index";

/**
 * A component that renders the `bacon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bacon?s=sharp-thin bacon}
 * @preview ![bacon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bacon.svg)
 */
const Bacon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 352c5.1-2.3 10.1-4.6 15-6.9c144.5-67 169.2-109.5 195.8-155.2C239.1 141.4 269.6 89.2 448 0L565.8 147.2 576 160c-5 2.5-9.8 4.9-14.6 7.4C395.9 252.1 366.4 302.8 338.8 350c-27.5 47.2-53 91-210.8 162L10.3 364.9 0 352zm75.8 69.1c118-60.7 168.5-128 214.4-189.4l3.4-4.6c24-32 47.5-62.7 79.3-89.3c29.4-24.6 65.6-45.7 115.7-61.6L443.6 20.1C363.3 61 315.8 93.5 285.2 120.9c-31.6 28.3-45.7 51.7-59.4 75.1l-1.3 2.2c-13.7 23.4-27.8 47.8-58.5 74.8c-28.7 25.3-71.3 52.5-140.8 85l50.5 63.1zM86 433.9l46.7 58.4C205 459 246.5 432.3 272.9 409c26.7-23.6 38.7-44.1 52.2-67.3l1-1.8c14.3-24.5 30.3-51.2 65.6-82.9c32.6-29.2 81.2-62.2 159.4-102.5L499.3 89.7C448 105.2 411.9 126 383.1 150.1c-30.2 25.3-52.7 54.6-76.7 86.7l-3.4 4.6c-46 61.4-97.8 130.5-217 192.5z" />
    </Icon>
);

export default Bacon;