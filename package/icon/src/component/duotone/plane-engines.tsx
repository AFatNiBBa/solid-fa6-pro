
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-engines` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-engines?s=duotone plane-engines}
 * @preview ![plane-engines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-engines.svg)
 */
const PlaneEngines: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M166 20.5L216 192l152 0c-12.7-21.8-25.5-43.7-38.2-65.5c-12.1-20.8-24.3-41.6-36.4-62.5L265.3 15.9C259.5 6 249 0 237.6 0L181.3 0C170.7 0 163 10.2 166 20.5zm0 471c-3 10.2 4.7 20.5 15.4 20.5l56.3 0c11.4 0 21.9-6 27.6-15.9c9.4-16 18.7-32.1 28.1-48.1l36.4-62.5c12.7-21.8 25.5-43.7 38.2-65.5l-152 0L166 491.5z" />
        <path d="M576 256c0-35-59.5-64-93.7-64L112 192 68.8 134.4c-3-4-7.8-6.4-12.8-6.4l-42 0c-7.8 0-14 6.3-14 14c0 1.3 .2 2.6 .5 3.9l22.7 79.3C9.8 229 0 241.4 0 256s9.8 27 23.2 30.8L.5 366.1c-.4 1.3-.5 2.6-.5 3.9c0 7.8 6.3 14 14 14l42 0c5 0 9.8-2.4 12.8-6.4L112 320l370.3 0c34.2 0 93.7-28 93.7-64zM329.8 126.5C342.7 122.3 352 110.3 352 96c0-17.7-14.3-32-32-32l-26.7 0 36.4 62.5zm0 259L293.3 448l26.7 0c17.7 0 32-14.3 32-32c0-14.3-9.3-26.3-22.2-30.5z" />
    </Icon>
);

export default PlaneEngines;