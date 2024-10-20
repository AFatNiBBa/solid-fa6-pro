
import { Icon } from "../../index";

/**
 * A component that renders the `location-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pen?s=light location-pen}
 * @preview ![location-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-pen.svg)
 */
const LocationPen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM252.3 131.7c-4.9-4.9-12.9-4.9-17.8 0l-8.1 8.1 17.8 17.8 8.1-8.1c4.9-4.9 4.9-12.9 0-17.8zM143.1 223.1c-2 2.1-3.5 4.6-4.2 7.4L134 250l19.4-4.9c2.8-.7 5.4-2.2 7.4-4.2l60.7-60.7-17.8-17.8-60.7 60.7zM211.8 109c17.4-17.4 45.7-17.4 63.1 0c17.4 17.4 17.4 45.6 0 63l-91.4 91.5c-6.2 6.2-13.9 10.5-22.3 12.6l-45.3 11.3c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l11.3-45.3c2.1-8.4 6.5-16.1 12.6-22.3L211.8 109z" />
    </Icon>
);

export default LocationPen;