
import { Icon } from "../../index";

/**
 * A component that renders the `radar` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radar?s=sharp-thin radar}
 * @preview ![radar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/radar.svg)
 */
const Radar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240s240-107.5 240-240l16 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0c67.8 0 129.5 26.4 175.3 69.4l43.1-43.1 5.7-5.7L491.3 32l-5.7 5.7-224 224-5.7 5.7L244.7 256l5.7-5.7 33.5-33.5c-7.8-5.6-17.4-8.9-27.8-8.9c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48l16 0c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c14.8 0 28.4 5 39.2 13.4L352 148.7c-25.5-22.8-59.1-36.7-96-36.7c-57.9 0-107.8 34.1-130.7 83.4l-14.5-6.7C136.3 133.9 191.7 96 256 96c41.3 0 79 15.7 107.3 41.3L420 80.7C377 40.6 319.4 16 256 16zM96 216a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm96 160a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM400 256l16 0c0 64.3-37.9 119.7-92.6 145.2l-6.7-14.5C365.9 363.8 400 313.9 400 256zM195.4 386.7l-6.7 14.5c-34.2-15.9-61.9-43.6-77.8-77.8l14.5-6.7c14.3 30.8 39.2 55.7 70 70z" />
    </Icon>
);

export default Radar;