
import { Icon } from "../../index";

/**
 * A component that renders the `person-praying` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-praying?s=regular person-praying}
 * @preview ![person-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-praying.svg)
 */
const PersonPraying: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 64A64 64 0 1 0 224 64a64 64 0 1 0 128 0zM202.1 192c5.3 0 10.2 2.7 12.9 7.2l4.3 7.1L152.2 367.5l-9.4-6c-9.8-6.3-13.7-18.7-9.2-29.4l54.5-130.7c2.4-5.7 7.9-9.3 14-9.3zm48.3 64.7l7.4 12.1c12.8 20.9 41.2 25.4 59.9 9.6l89.8-76c10.1-8.6 11.4-23.7 2.8-33.8s-23.7-11.4-33.8-2.8l-82.7 70-37.9-61.6C244.4 155.4 224 144 202.1 144c-25.5 0-48.5 15.3-58.3 38.9L89.3 313.6c-13.4 32.3-1.8 69.5 27.6 88.3L214 464 56 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c10.7 0 20-7 23-17.3s-1.1-21.2-10.1-27l-115.7-74 57.1-137.1z" />
    </Icon>
);

export default PersonPraying;