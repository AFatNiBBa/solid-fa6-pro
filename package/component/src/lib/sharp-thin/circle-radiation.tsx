
import { Icon } from "../../index";

/**
 * A component that renders the `circle-radiation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-radiation?s=sharp-thin circle-radiation}
 * @preview ![circle-radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-radiation.svg)
 */
const CircleRadiation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM182.9 113.4l-4-6.9-6.9 4c-50.2 29-84 83.3-84 145.5l0 8 8 0 96.5 0c-.3-2.6-.5-5.3-.5-8s.2-5.4 .5-8l-88.3 0c2.6-50.1 29.4-93.7 69-119.5L217.3 205c4.2-3.2 8.9-5.9 13.8-8l-48.3-83.6zM280.8 197c5 2.1 9.6 4.8 13.8 8l44.2-76.5c39.6 25.8 66.4 69.4 69 119.5l-88.3 0c.3 2.6 .5 5.3 .5 8s-.2 5.4-.5 8l96.5 0 8 0 0-8c0-62.2-33.8-116.5-84-145.5l-6.9-4-4 6.9L280.8 197zm13.8 110c-4.2 3.2-8.9 5.9-13.8 8L325 391.5C304.3 402 280.8 408 256 408s-48.3-6-69-16.5L231.2 315c-5-2.1-9.6-4.8-13.8-8l-48.3 83.6-4 6.9 6.9 4c24.7 14.3 53.4 22.5 84 22.5s59.3-8.2 84-22.5l6.9-4-4-6.9L294.7 307zM272 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default CircleRadiation;