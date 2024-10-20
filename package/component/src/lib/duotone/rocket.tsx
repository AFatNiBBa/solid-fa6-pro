
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rocket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=duotone rocket}
 * @preview ![rocket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rocket.svg)
 */
const Rocket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M3.1 275.8C7.3 283.3 15.3 288 24 288l94.5 0c19.5-43.5 51.6-112.1 80.1-158l-80.8 0c-25.2 0-48.5 13.1-61.5 34.6L3.5 251.5c-4.5 7.4-4.7 16.7-.4 24.2zM224 391.8l0 96.2c0 8.7 4.7 16.7 12.2 20.9c3.7 2.1 7.7 3.1 11.8 3.1c4.3 0 8.6-1.2 12.5-3.5l86.9-52.8c21.5-13.1 34.6-36.4 34.6-61.5l0-80.8c-45.6 28.2-114 59.4-158 78.4z" />
        <path d="M166.5 394.8l-50.7-50.7c-9.2-9.2-11.9-23-6.7-34.9c18.3-41.9 62.7-140.2 98.1-192.5C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7C342.6 340.5 243 383.9 201 401.7c-11.8 5-25.4 2.2-34.5-6.9zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Rocket;