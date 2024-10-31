
import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=regular people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0a64 64 0 1 1 0 128A64 64 0 1 1 128 0zM73.7 237.3l-4.1 49.3C68.8 296 76.2 304 85.6 304l2.4 0 80 0 2.4 0c9.4 0 16.7-8 15.9-17.3l-4.1-49.3C180.9 220.8 167 208 150.4 208l-44.8 0c-16.6 0-30.5 12.8-31.9 29.3zm160.5 45.3c2.5 29.8-15.7 56.1-42.2 65.6L192 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-32 0 0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-139.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3C29.3 191.9 64 160 105.6 160l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3zM384 0a64 64 0 1 1 0 128A64 64 0 1 1 384 0zM352.9 219.6L319.6 336l128.7 0L415.1 219.6c-2-6.9-8.2-11.6-15.4-11.6l-31.4 0c-7.1 0-13.4 4.7-15.4 11.6zm-46.2-13.2c7.8-27.5 33-46.4 61.5-46.4l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L448 384l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104-32 0 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104-21.6 0c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8z" />
    </Icon>
);

export default PeopleSimple;