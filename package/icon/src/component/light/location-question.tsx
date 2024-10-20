
import { Icon } from "../../index";

/**
 * A component that renders the `location-question` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-question?s=light location-question}
 * @preview ![location-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-question.svg)
 */
const LocationQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM104.7 137.8c6.5-24.6 28.7-41.8 54.2-41.8L216 96c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L208 236.3l0 19.7c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-29.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3l-57.1 0c-10.9 0-20.5 7.4-23.2 17.9l-.2 .7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM168 320a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default LocationQuestion;