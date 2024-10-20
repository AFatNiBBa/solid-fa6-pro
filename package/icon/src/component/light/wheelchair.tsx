
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=light wheelchair}
 * @preview ![wheelchair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wheelchair.svg)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80A56 56 0 1 0 176 0a56 56 0 1 0 0 112zm-32.4 96c-2-8.6-10.5-14-19.1-12.1C53.2 212.1 0 275.8 0 352c0 88.4 71.6 160 160 160c69.7 0 128.9-44.5 150.9-106.7c2.9-8.3-1.4-17.5-9.8-20.4s-17.5 1.4-20.4 9.8C263.1 444.4 215.7 480 160 480C89.3 480 32 422.7 32 352c0-60.9 42.5-111.9 99.5-124.8c8.6-2 14-10.5 12.1-19.1zm56-51.6c-2-8.6-10.5-14-19.1-12.1s-14 10.5-12.1 19.1l34.3 151.1c5 21.9 24.4 37.4 46.8 37.4l108.6 0 59.6 119.2c1.9 3.8 5.2 6.7 9.3 8s8.4 1 12.2-.9l64-32c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-49.7 24.8L386.7 337.7c-5.4-10.8-16.5-17.7-28.6-17.7l-108.6 0c-7.5 0-13.9-5.2-15.6-12.5L215 224l137 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144.3 0-8.1-35.5z" />
    </Icon>
);

export default Wheelchair;