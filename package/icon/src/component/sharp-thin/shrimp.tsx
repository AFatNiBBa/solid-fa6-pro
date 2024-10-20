
import { Icon } from "../../index";

/**
 * A component that renders the `shrimp` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shrimp?s=sharp-thin shrimp}
 * @preview ![shrimp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shrimp.svg)
 */
const Shrimp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l8 0 432 0 8 0 0 16-8 0L16 48l0 80 320 0c97.2 0 176 78.8 176 176s-78.8 176-176 176l-48 0-8 0-48 0-25 0 20.3-14.5L275 431.4l-48.2-41.4-20.5-17.6 26.8 3.6 110.6 14.7c5.4 .7 10.8 .5 16.2-.5c14.1-2.8 24.2-15.2 24.2-29.6l0-4.8c0-19.9-16.1-36-36-36l-108 0c-97.2 0-176-78.8-176-176L8 144l-8 0 0-8L0 40l0-8zM240 304l108 0c28.7 0 52 23.3 52 52l0 4.8c0 22-15.5 40.9-37.1 45.2c-7 1.4-14.3 1.6-21.4 .7l-83.8-11.2 35.5 30.4 7.8 6.6-8.3 5.9L257 464l23 0 8 0 48 0c2.7 0 5.4-.1 8-.2l0-31.8 0-8 16 0 0 8 0 30.2c46.8-7 87-34.3 111.3-72.7l-41.8-13.9-7.6-2.5 5.1-15.2 7.6 2.5 44.7 14.9C490 353.8 496 329.6 496 304c0-24.7-5.6-48.2-15.6-69.1l-42.7 42.7-5.7 5.7L420.7 272l5.7-5.7 46-46C444.2 174.5 393.7 144 336 144l0 104 0 8-16 0 0-8 0-104L80 144c0 88.4 71.6 160 160 160zM192 176a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Shrimp;