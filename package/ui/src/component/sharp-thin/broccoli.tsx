
import { Icon } from "../../index";

/**
 * A component that renders the `broccoli` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broccoli?s=sharp-thin broccoli}
 * @preview ![broccoli](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/broccoli.svg)
 */
const Broccoli: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-37.8 0-70.4 21.8-86.1 53.5C160.6 49.9 150.5 48 140 48c-46.4 0-84 37.6-84 84c0 12 2.5 23.4 7.1 33.8C26.3 179.2 0 214.5 0 256c0 53 43 96 96 96l8 0s56 64 88 160l128 0c32-96 88-160 88-160l8 0c53 0 96-43 96-96c0-41.5-26.3-76.8-63.1-90.2c4.6-10.3 7.1-21.8 7.1-33.8c0-46.4-37.6-84-84-84c-10.5 0-20.6 1.9-29.9 5.5C326.4 21.8 293.8 0 256 0zM387.4 352l-1.4 1.8c-6 7.8-14.2 19.2-23.5 33.6C345.4 414 324.7 451.3 308.6 496l-105.2 0c-16.1-44.7-36.8-82-53.9-108.7c-9.3-14.4-17.5-25.8-23.5-33.6l-1.4-1.8 88.6 0 28 69.9 4 10.1 21.7 0 4-10.1 28-69.9 88.6 0zm-157 0l51.2 0-17 42.5L256 416l-8.6-21.5-17-42.5zm-49-285.1C193.1 37.1 222.1 16 256 16s62.9 21.1 74.6 50.9l3.2 8.2 7.8-3.9c9.1-4.6 19.5-7.2 30.4-7.2c37.6 0 68 30.4 68 68c0 12.6-3.4 24.4-9.4 34.6l-5.5 9.2 10.4 2.6c34.8 8.7 60.5 40.2 60.5 77.6c0 44.2-35.8 80-80 80L96 336c-44.2 0-80-35.8-80-80c0-37.4 25.7-68.9 60.5-77.6l10.4-2.6-5.5-9.2c-6-10.1-9.4-21.9-9.4-34.6c0-37.6 30.4-68 68-68c10.9 0 21.3 2.6 30.4 7.2l7.8 3.9 3.2-8.2z" />
    </Icon>
);

export default Broccoli;