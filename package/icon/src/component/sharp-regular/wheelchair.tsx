
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=sharp-regular wheelchair}
 * @preview ![wheelchair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wheelchair.svg)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM48 352c0 61.9 50.1 112 112 112c42.8 0 80-24 98.9-59.3l42.3 22.6C274.3 477.7 221.2 512 160 512C71.6 512 0 440.4 0 352c0-68.5 43.1-126.9 103.5-149.7l16.9 44.9C78.1 263.2 48 304.1 48 352zM211.3 124.1l4.3 23.6 5.1 28.3L344 176l24 0 0 48-24 0-114.5 0 13.4 73.4c.7 3.8 4 6.6 7.9 6.6L384 304l15.7 0 6.3 14.4 47.2 107.9 27.2-9.1 22.8-7.6 15.2 45.5-22.8 7.6-48 16-20.8 6.9L418 465.6 368.3 352l-117.6 0c-27.1 0-50.3-19.4-55.1-46L168.4 156.3l-4.3-23.6 47.2-8.6z" />
    </Icon>
);

export default Wheelchair;