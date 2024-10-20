
import { Icon } from "../../index";

/**
 * A component that renders the `rocket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=sharp-light rocket}
 * @preview ![rocket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rocket.svg)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 312.1c4-2.5 7.7-4.9 11.3-7.3C527.1 215.4 519.9 78.3 502.7 9.3c-68.9-17.2-206-24.5-295.4 107.4c-2.4 3.6-4.9 7.3-7.3 11.3L88 128l-9.9 0-4.4 8.8-64 128L-1.9 288 24 288l94.5 0c-10.9 24.4-17.9 40.9-17.9 40.9l80.8 80.8s17.2-7 42.6-17.9l0 96.2 0 25.9 23.2-11.6 128-64 8.8-4.4 0-9.9 0-111.9zm-32 18.5l0 83.5-96 48 0-84.5c30.3-13.7 65.4-30.3 96-47zM133.1 256l-83.2 0 48-96 83.3 0c-16.9 30.7-34 65.8-48.1 96zm5.5 65.6l1.5-3.5c6.3-14.4 15.2-34.4 25.6-56.4c20.9-44.6 46.7-95.6 68-127.1c70.9-104.6 175.7-110.1 242-98.4c11.7 66.3 6.2 171.1-98.4 242c-31.5 21.3-82.7 46.6-127.7 67.1c-22.2 10.1-42.3 18.8-56.8 25l-3.9 1.6-50.4-50.4zM368 168a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm-56-24a56 56 0 1 0 112 0 56 56 0 1 0 -112 0z" />
    </Icon>
);

export default Rocket;