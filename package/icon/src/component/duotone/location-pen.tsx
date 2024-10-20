
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pen?s=duotone location-pen}
 * @preview ![location-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-pen.svg)
 */
const LocationPen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 87.4 117 243 168.3 307.2c6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192zm96.5 76l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9c24-24 47.9-48 71.9-71.9c17.8 17.8 35.6 35.6 53.3 53.3l-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2zM208.6 122c5-5 9.9-9.9 14.9-14.9c7.4-7.4 17-11.1 26.7-11.1s19.3 3.7 26.7 11.1s11 17 11 26.7s-3.7 19.3-11 26.7l-14.9 14.9c-17.8-17.8-35.6-35.6-53.3-53.3z" />
        <path d="M223.5 107L208.6 122l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3c-14.7-14.7-38.6-14.7-53.3 0zM186 144.6l-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9L96.5 268c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L186 144.6z" />
    </Icon>
);

export default LocationPen;