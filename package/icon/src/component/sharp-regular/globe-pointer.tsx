
import { Icon } from "../../index";

/**
 * A component that renders the `globe-pointer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-pointer?s=sharp-regular globe-pointer}
 * @preview ![globe-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/globe-pointer.svg)
 */
const GlobePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M246.6 439.7l-20.7 70.5c9.9 1.2 19.9 1.8 30.1 1.8c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 10.2 .6 20.2 1.8 30.1l46.9-13.8c-.4-5.4-.6-10.8-.6-16.3c0-16.5 1.9-32.6 5.6-48l77.8 0c-1.9 13-3 26.7-3.3 41l48.7-14.3c.7-9.2 1.8-18.1 3.2-26.7l152 0c2.5 15 4 30.9 4 48s-1.4 33-4 48l-45.5 0-14.1 48 46.8 0c-10.2 27.4-23.8 50-37.5 68.1c-8.9 11.8-17.8 21.6-25.7 29.4c-3-3-6.1-6.2-9.4-9.8zM281.7 91.9c13.6 18 27.3 40.6 37.5 68.1l-126.3 0c10.2-27.4 23.8-50 37.5-68.1c8.9-11.8 17.8-21.6 25.7-29.4c7.9 7.8 16.8 17.6 25.7 29.4zM384 256c0-16.9-1.2-32.9-3.4-48l77.8 0c3.6 15.4 5.6 31.5 5.6 48s-1.9 32.6-5.6 48l-77.8 0c2.2-15.1 3.4-31.1 3.4-48zm-14.2-96c-13.4-43.5-34.5-77.9-54.9-103.5c54.6 16.1 99.8 54 125.6 103.5l-70.7 0zM71.4 160c25.8-49.6 71.1-87.4 125.6-103.5c-20.4 25.6-41.5 60-54.9 103.5l-70.7 0zM369.8 352l70.7 0c-25.8 49.6-71.1 87.4-125.6 103.5c20.4-25.6 41.5-60 54.9-103.5zM0 320l96 48 1.4 1.4-96 96 45.3 45.3 96-96L144 416l48 96 80-272L0 320z" />
    </Icon>
);

export default GlobePointer;