
import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=solid people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zm-22.4 32c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6L64 464c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-115.7c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3C226.7 191.9 192 160 150.4 160l-44.8 0zM384 128A64 64 0 1 0 384 0a64 64 0 1 0 0 128zm-15.7 32c-28.6 0-53.7 18.9-61.5 46.4L267.7 343.2c-5.8 20.4 9.5 40.8 30.8 40.8l21.6 0 0 80c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-80 21.6 0c21.3 0 36.6-20.3 30.8-40.8L461.3 206.4c-7.9-27.5-33-46.4-61.5-46.4l-31.4 0z" />
    </Icon>
);

export default PeopleSimple;