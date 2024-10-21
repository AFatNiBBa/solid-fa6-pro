
import { Icon } from "../../index";

/**
 * A component that renders the `plane-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-lock?s=sharp-thin plane-lock}
 * @preview ![plane-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/plane-lock.svg)
 */
const PlaneLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M258.8 2.8C239 2.8 223 19 212.5 36.1C201.7 53.6 194.8 75.4 194.8 92l0 78.8 0 9.3L6.9 283.8l-4.1 2.3 0 4.7 0 88 0 10.5 10.1-2.8 181.9-50.2 0 10.5 0 44L134 436.4l-3.2 2.4 0 4 0 56 0 10.4 10.1-2.7 117.9-31.5L368 504.2l0-16.6L260.9 459.1l-2.1-.6-2.1 .6L146.8 488.4l0-41.6 60.8-45.6 3.2-2.4 0-4 0-48 0-21 0-10.5 0-130.5 0-14.1 0-78.8c0-13 5.7-31.9 15.3-47.5c9.9-16.1 21.8-25.7 32.7-25.7c11.3 0 23.2 9.6 33 25.6c9.5 15.6 15 34.5 15 47.5l0 78.8 0 14.1 0 4.7 0 125.7 0 10.5 0 21 0 48 0 4 3.2 2.4 58 43.5 0-20-45.2-33.9 0-44 0-10.5L384 353.2l0-16.6-61.2-16.9 0-121.3L418 250.9c1-5.5 2.5-10.8 4.3-15.9l-99.5-54.9 0-9.3 0-78.8c0-16.6-6.7-38.3-17.3-55.8C295 19 279 2.8 258.8 2.8zM18.8 295.5l176-97.1 0 121.3-176 48.6 0-72.8zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default PlaneLock;