
import { Icon } from "../../index";

/**
 * A component that renders the `leaf` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=light leaf}
 * @preview ![leaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/leaf.svg)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M132 238.3c23.6-9.3 49.2-14.3 76-14.3l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-28.8 0-56 6.9-80 19.2C129.7 353.2 193.5 416 272 416c0 0 0 0 0 0l.8 0c109-.5 207.2-110.5 207.2-259.4c0-23-2.4-45.2-6.9-66.3C447.5 113.7 413.4 128 376 128l-104 0c-67.9 0-124.9 47-140 110.3zM96.7 256.3C104.7 166.4 180.1 96 272 96l104 0c35.2 0 66.6-16.2 87.2-41.7l.6-.8c2.3-2.9 4.4-5.8 6.4-8.9c1.6-2.5 3.2-5.1 4.6-7.8c3.5-6.5 13.6-6.8 16.2 .1c1.3 3.5 2.5 7 3.7 10.6s2.3 7.1 3.4 10.8l.4 1.5c8.8 30.3 13.5 62.8 13.5 96.8C512 317.1 405.1 447.3 273 448l-1 0c-89.4 0-163.2-66.7-174.5-153C57.5 327.3 32 376.7 32 432l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-73.9 38.6-138.9 96.7-175.7z" />
    </Icon>
);

export default Leaf;