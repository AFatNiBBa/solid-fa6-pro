
import { Icon } from "../../index";

/**
 * A component that renders the `circle-radiation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-radiation?s=sharp-light circle-radiation}
 * @preview ![circle-radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-radiation.svg)
 */
const CircleRadiation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM189.8 109.4l-8-13.9-13.9 8C115.4 134 80 190.8 80 256l0 16 16 0 106.3 0c-1.5-5.1-2.3-10.4-2.3-16s.8-10.9 2.3-16l-89.4 0c4.5-40.9 26.2-76.7 57.7-99.9l44.7 77.5c7.4-7.8 16.9-13.5 27.7-16l-53.2-92.1zM269 201.5c10.8 2.6 20.3 8.2 27.7 16l44.7-77.5c31.5 23.3 53.2 59 57.7 99.9l-89.4 0c1.5 5.1 2.3 10.4 2.3 16s-.8 10.9-2.3 16L416 272l16 0 0-16c0-65.2-35.4-122-88-152.4l-13.9-8-8 13.9L269 201.5zm27.7 93c-7.4 7.8-16.9 13.5-27.7 16L313.7 388c-17.7 7.7-37.2 12-57.7 12s-40.1-4.3-57.7-12L243 310.5c-10.8-2.6-20.3-8.2-27.7-16l-53.2 92.1-8 13.8 13.8 8c25.9 15 56 23.6 88 23.6s62.1-8.6 88-23.6l13.8-8-8-13.8-53.2-92.1zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CircleRadiation;