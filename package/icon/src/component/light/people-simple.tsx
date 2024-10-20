
import { Icon } from "../../index";

/**
 * A component that renders the `people-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-simple?s=light people-simple}
 * @preview ![people-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/people-simple.svg)
 */
const PeopleSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 64A32 32 0 1 0 96 64a32 32 0 1 0 64 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM57.8 236l-4.1 49.3C52.1 304 66.8 320 85.6 320l84.9 0c18.7 0 33.4-16 31.9-34.7L198.2 236c-2.1-24.9-22.9-44-47.8-44l-44.8 0c-25 0-45.8 19.1-47.8 44zm-31.9-2.7C29.3 191.9 64 160 105.6 160l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L192 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-64 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-147.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM416 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 320 64zm17.5 151.2L298.4 352l171.2 0L430.5 215.2C426.6 201.5 414 192 399.7 192l-31.4 0c-14.3 0-26.8 9.5-30.8 23.2zm-30.8-8.8c7.8-27.5 33-46.4 61.5-46.4l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L448 384l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112-64 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112-21.6 0c-21.3 0-36.6-20.3-30.8-40.8l39.1-136.8z" />
    </Icon>
);

export default PeopleSimple;