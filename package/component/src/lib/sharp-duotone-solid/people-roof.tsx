
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-roof` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-roof?s=sharp-duotone-solid people-roof}
 * @preview ![people-roof](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-roof.svg)
 */
const PeopleRoof: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M7.4 486.1l42 23.3 11.7-21 27-48.6L88 512l112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21-35.2-63.4 3.4-6.3L264 345.5l0 86.5 112 0 0-86.5 26.9 49.9 3.4 6.3L371 465.1l-11.7 21 42 23.3 11.7-21 27-48.6 0 72.2 112 0 0-72.2 27 48.6 11.7 21 42-23.3-11.7-21L565 364.3 558.1 352 544 352l-96 0-14 0-44.9-83.4L382.3 256 368 256l-96 0-14.3 0-6.8 12.6L206 352l-14 0-96 0-14.1 0L75 364.3 19 465.1l-11.7 21zM104 296a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm176-96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm176 96a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M320 3.3l15.6 8.7 272 152 27.9 15.6-31.2 55.9-27.9-15.6L320 76.7 63.6 219.9 35.7 235.5 4.5 179.7l27.9-15.6 272-152L320 3.3z" />
    </Icon>
);

export default PeopleRoof;