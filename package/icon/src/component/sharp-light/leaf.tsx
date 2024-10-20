
import { Icon } from "../../index";

/**
 * A component that renders the `leaf` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=sharp-light leaf}
 * @preview ![leaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/leaf.svg)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 128c-67.9 0-124.9 47-140 110.3c23.6-9.3 49.2-14.3 76-14.3l96 0 16 0 0 32-16 0-96 0c-28.8 0-56 6.9-80 19.2C129.7 353.2 193.5 416 272 416c0 0 0 0 0 0l.8 0c109-.5 207.2-110.5 207.2-259.4c0-23-2.4-45.2-6.9-66.3C447.5 113.7 413.4 128 376 128l-72 0s0 0 0 0l-32 0zM96.7 256.3C104.7 166.4 180.1 96 272 96l32 0 72 0c35.2 0 66.6-16.2 87.2-41.7c8.7-10.8 15.5-23.3 19.8-36.9c6.1 13.5 11.3 27.7 15.5 42.4c8.8 30.3 13.5 62.9 13.5 96.8C512 317.1 405.1 447.3 273 448l-1 0c-89.4 0-163.2-66.7-174.5-153C57.5 327.3 32 376.7 32 432l0 32 0 16L0 480l0-16 0-32c0-73.9 38.6-138.9 96.7-175.7z" />
    </Icon>
);

export default Leaf;