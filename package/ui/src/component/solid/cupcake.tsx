
import { Icon } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=solid cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l6.1 6.1c3.4 3.4 5.3 7.9 5.3 12.7C240 56 232 64 222.1 64L160 64c-35.3 0-64 28.7-64 64l0 .8c-3.3 .5-6.6 1.4-9.9 2.4L50.9 143C20.5 153.2 0 181.6 0 213.6C0 254.7 33.3 288 74.4 288l299.2 0c41.1 0 74.4-33.3 74.4-74.4c0-32-20.5-60.4-50.9-70.6l-35.3-11.8c-4.1-1.4-8.2-2.3-12.5-2.8c1.7-6.7 2.6-13.8 2.6-21C352 48.1 303.9 0 244.6 0L240 0zm27.9 512l24-192-135.8 0 24 192 87.8 0zM64 320L89.3 471.9C93.2 495 113.2 512 136.7 512l11.2 0-24-192L64 320zM300.1 512l11.2 0c23.5 0 43.5-17 47.3-40.1L384 320l-59.9 0-24 192z" />
    </Icon>
);

export default Cupcake;