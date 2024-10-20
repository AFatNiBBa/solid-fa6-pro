
import { Icon } from "../../index";

/**
 * A component that renders the `leaf` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=regular leaf}
 * @preview ![leaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/leaf.svg)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M149.6 234.4c20.9-6.7 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.5 5.6-71 15.7C152.7 351 206.6 400 271.9 400c0 0 0 0 .1 0l.8 0c0 0 0 0 .1 0C370.2 399.5 464 299.7 464 156.6c0-12.8-.8-25.3-2.3-37.5C437 134.9 407.6 144 376 144l-104 0c-57.6 0-106.3 38.1-122.4 90.4zM96.4 260.1C102.5 168.5 178.8 96 272 96l104 0c28.7 0 54.8-10.8 74.6-28.5c.7-.6 1.4-1.3 2.1-1.9c6.6-6.2 12.5-13.2 17.4-20.9c1.6-2.5 3.2-5.1 4.6-7.8c3.5-6.5 13.6-6.8 16.2 .1c1.3 3.5 2.5 7 3.7 10.6c2.9 8.9 5.5 17.9 7.8 27.2c.5 1.9 .9 3.8 1.3 5.6c5.4 24.3 8.3 49.8 8.3 76.2C512 317.1 405.1 447.3 273 448l-1 0c-81.7 0-150.4-55.7-170.2-131.2C68.7 347.5 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16c0-75.1 38.3-141.2 96.4-179.9z" />
    </Icon>
);

export default Leaf;