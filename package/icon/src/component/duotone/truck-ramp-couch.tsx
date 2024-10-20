
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ramp-couch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp-couch?s=duotone truck-ramp-couch}
 * @preview ![truck-ramp-couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-ramp-couch.svg)
 */
const TruckRampCouch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M8 252.8l1.7 6.4c8.4-6.7 18.2-11.8 29.2-14.7c37.4-10 75.7 8.2 92.3 41.5L227 260.4c-2.3-37.2 21.8-72.1 59.2-82.1c11-2.9 22.1-3.5 32.6-1.9l-1.7-6.4c-7.7-28.6-33.5-47.5-61.8-47.5c-5.5 0-11.1 .7-16.6 2.2L53.3 174.4C19.1 183.5-1.1 218.6 8 252.8zm5.3 81.4l12.4 46.4c4.6 17.1 22.1 27.2 39.2 22.6l61.8-16.6 154.5-41.4L320 334.8l0-125.5c-8.1-2.3-16.8-2.5-25.5-.2c-25.6 6.9-40.8 33.2-33.9 58.8l4.1 15.5L110.1 324.8 106 309.3c-6.9-25.6-33.2-40.8-58.8-33.9s-40.8 33.2-33.9 58.8zM448 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M416.7 402.5C423.4 338.2 477.9 288 544 288c38.2 0 72.5 16.8 96 43.3L640 0 416 0c-35.3 0-64 28.7-64 64l0 289.8L31.6 441.1c-17.1 4.6-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5L416.7 402.5z" />
    </Icon>
);

export default TruckRampCouch;