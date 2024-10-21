
import { Icon } from "../../index";

/**
 * A component that renders the `rocket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=sharp-thin rocket}
 * @preview ![rocket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rocket.svg)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M181.4 409.8s17.2-7 42.6-17.9L224 496l0 12.9 11.6-5.8 144-72 4.4-2.2 0-4.9 0-111.9c4-2.5 7.7-4.9 11.3-7.3C527.1 215.4 519.9 78.3 502.7 9.3c-68.9-17.2-206-24.5-295.4 107.4c-2.4 3.6-4.9 7.3-7.3 11.3L88 128l-4.9 0-2.2 4.4-72 144L3.1 288 16 288l102.5 0c-10.9 24.4-17.9 40.9-17.9 40.9l80.8 80.8zM240 483.1l0-98.3c38.5-17 88.9-40.6 128-63.1l0 97.4-128 64zM190.2 144c-22.9 39.2-47 89.7-64.5 128l-96.8 0 64-128 97.3 0zM119.6 325.3c1.6-3.7 3.6-8.2 5.9-13.5c6.4-14.5 15.3-34.6 25.7-56.7c20.9-44.6 47.1-96.6 69.3-129.3C300.5 7.7 421 8 489.3 22.7C504 91 504.3 211.5 386.3 291.5c-32.7 22.2-85 47.9-130 68.4c-22.3 10.2-42.6 18.9-57.2 25.1c-5.5 2.3-10.1 4.3-13.9 5.8l-65.6-65.6zM408 144a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM368 88a56 56 0 1 0 0 112 56 56 0 1 0 0-112z" />
    </Icon>
);

export default Rocket;