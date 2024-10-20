
import { Icon } from "../../index";

/**
 * A component that renders the `plane` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane?s=sharp-thin plane}
 * @preview ![plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/plane.svg)
 */
const Plane: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M542.7 209.7C559.8 220.2 576 236.2 576 256c0 20.2-16.2 36.3-33.3 46.7c-17.6 10.7-39.3 17.3-55.8 17.3L368 320l-1.3 0L263 507.9l-2.3 4.1-4.7 0-88 0-10.5 0 2.8-10.1L210.5 320 192 320l-68 0L78.4 380.8 76 384l-4 0-56 0L5.6 384l2.7-10.1L39.7 256 8.3 138.1 5.6 128 16 128l56 0 4 0 2.4 3.2L124 192l68 0 18.5 0L160.3 10.1 157.5 0 168 0l88 0 4.7 0L263 4.1 366.7 192l1.3 0 118.8 0c16.6 0 38.3 7 55.9 17.7zM368 208l-6.1 0-4.7 0-125.7 0L221 208l-29 0-72 0-4 0-2.4-3.2L68 144l-41.6 0L55.7 253.9l.5 2.1-.5 2.1L26.4 368 68 368l45.6-60.8L116 304l4 0 72 0 29 0 10.5 0 125.7 0 4.7 0 6.1 0 118.8 0c13 0 31.9-5.6 47.5-15c16-9.7 25.6-21.6 25.6-33c0-10.9-9.6-22.8-25.7-32.7c-15.7-9.6-34.5-15.3-47.5-15.3L368 208zm-19.6-16L251.3 16l-72.8 0 48.6 176 121.3 0zM227.1 320L178.5 496l72.8 0 97.1-176-121.3 0z" />
    </Icon>
);

export default Plane;