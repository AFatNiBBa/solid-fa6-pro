
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-shooting` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-shooting?s=duotone star-shooting}
 * @preview ![star-shooting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-shooting.svg)
 */
const StarShooting: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M231 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7L231 55zm96 96c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 41c9.4-9.4 9.4-24.6 0-33.9c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7L327 151zm96 96c-9.4 9.4-9.4 24.6 0 33.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l48-48c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-48 48z" />
        <path d="M213.4 157.4c-8.8-17.9-34.3-17.9-43.1 0l-46.3 94L20.5 266.5C.9 269.3-7 293.5 7.2 307.4l74.9 73.2L64.5 483.9c-3.4 19.6 17.2 34.6 34.8 25.3l92.6-48.8 92.6 48.8c17.6 9.3 38.2-5.7 34.8-25.3L301.6 380.6l74.9-73.2c14.2-13.9 6.4-38.1-13.3-40.9L259.7 251.4l-46.3-94z" />
    </Icon>
);

export default StarShooting;