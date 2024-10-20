
import { Icon } from "../../index";

/**
 * A component that renders the `life-ring` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/life-ring?s=sharp-regular life-ring}
 * @preview ![life-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/life-ring.svg)
 */
const LifeRing: typeof Icon = x => (
    <Icon {...x}>
        <path d="M385.1 419.1C349.7 447.2 304.8 464 256 464s-93.7-16.8-129.1-44.9l80.4-80.4c14.3 8.4 31 13.3 48.8 13.3s34.5-4.8 48.8-13.3l80.4 80.4zm68.1 .2C489.9 374.9 512 318.1 512 256s-22.1-118.9-58.8-163.3L465 81l17-17L448 30.1 431 47 419.3 58.8C374.9 22.1 318.1 0 256 0S137.1 22.1 92.7 58.8L81 47l-17-17L30.1 64 47 81 58.8 92.7C22.1 137.1 0 193.9 0 256s22.1 118.9 58.8 163.3L47 431l-17 17L64 481.9l17-17 11.8-11.8C137.1 489.9 193.9 512 256 512s118.9-22.1 163.3-58.8L431 465l17 17L481.9 448l-17-17-11.8-11.8zm-34.1-34.1l-80.4-80.4c8.4-14.3 13.3-31 13.3-48.8s-4.8-34.5-13.3-48.8l80.4-80.4C447.2 162.3 464 207.2 464 256s-16.8 93.7-44.9 129.1zM385.1 92.9l-80.4 80.4c-14.3-8.4-31-13.3-48.8-13.3s-34.5 4.8-48.8 13.3L126.9 92.9C162.3 64.8 207.2 48 256 48s93.7 16.8 129.1 44.9zM173.3 304.8L92.9 385.1C64.8 349.7 48 304.8 48 256s16.8-93.7 44.9-129.1l80.4 80.4c-8.4 14.3-13.3 31-13.3 48.8s4.8 34.5 13.3 48.8zM208 256a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default LifeRing;