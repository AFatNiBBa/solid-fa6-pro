
import { Icon } from "../../index";

/**
 * A component that renders the `hand-dots` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-dots?s=sharp-thin hand-dots}
 * @preview ![hand-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand-dots.svg)
 */
const HandDots: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 0l8 0 80 0 8 0 0 8 0 24 72 0 8 0 0 8 0 56 72 0 8 0 0 8 0 240c0 92.8-75.2 168-168 168l-8.5 0c-63.7 0-124.7-25.3-169.7-70.3L36.5 352.3 8.2 324.1l-5.7-5.7 5.7-5.7 56.6-56.6 5.7-5.7 5.7 5.7 28.3 28.3L136 316.1 136 40l0-8 8 0 72 0 0-24 0-8zm96 184l0 64 0 8-16 0 0-8 0-208 0-8 0-16-64 0 0 16 0 8 0 8 0 200 0 8-16 0 0-8 0-200-64 0 0 287.4-13.7 5.7L93 295.8 70.4 273.1 25.1 318.4 47.8 341l89.4 89.4c42 42 99 65.6 158.4 65.6l8.5 0c83.9 0 152-68.1 152-152l0-232-64 0 0 136 0 8-16 0 0-8 0-144 0-8 0-48-64 0 0 136zM208 324a12 12 0 1 1 0 24 12 12 0 1 1 0-24zm64 32a12 12 0 1 1 0 24 12 12 0 1 1 0-24zm116 12a12 12 0 1 1 24 0 12 12 0 1 1 -24 0zm-20 52a12 12 0 1 1 0 24 12 12 0 1 1 0-24zM260 432a12 12 0 1 1 24 0 12 12 0 1 1 -24 0zm-84-44a12 12 0 1 1 0 24 12 12 0 1 1 0-24zm148-52a12 12 0 1 1 24 0 12 12 0 1 1 -24 0z" />
    </Icon>
);

export default HandDots;