
import { Icon, generic } from "../../index";

/**
 * A component that renders the `football` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/football?s=sharp-duotone-solid football}
 * @preview ![football](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/football.svg)
 */
const Football: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16.8 306.7c2.1-19.2 5.4-38.6 10.1-57.8L264.5 486.6c-18.3 4.4-37.7 7.6-58.4 9.5L16.8 306.7zM247.5 25.4c18.3-4.4 37.7-7.6 58.4-9.5C369 79.1 432.1 142.2 495.2 205.3c-2.1 19.2-5.4 38.6-10.1 57.8C405.9 183.8 326.7 104.6 247.5 25.4z" />
        <path d="M247.5 25.4c-13.5 3.3-26.4 7.2-38.6 11.7C142.9 61.6 96.7 103.6 66 153.6C47.8 183.4 35.1 215.9 26.9 249L264.5 486.6c13.5-3.3 26.4-7.2 38.6-11.7c66-24.5 112.2-66.5 142.9-116.5c18.3-29.8 30.9-62.3 39.1-95.3L247.5 25.4zM495.2 205.3c6.1-56.8 1.4-112.2-7.7-156.4l-4.4-21.5-21.6-3.6c-58.2-9.7-109.9-12-155.6-7.9L495.2 205.3zM206.1 496L16.8 306.7c-6.1 56.8-1.4 112.2 7.7 156.4l4.4 21.5 21.6 3.6c58.2 9.7 109.9 12 155.6 7.9zM272 153.4l11.3 11.3 64 64L358.6 240 336 262.6l-11.3-11.3-64-64L249.4 176 272 153.4zm-48 48l11.3 11.3 64 64L310.6 288 288 310.6l-11.3-11.3-64-64L201.4 224 224 201.4zm-48 48l11.3 11.3 64 64L262.6 336 240 358.6l-11.3-11.3-64-64L153.4 272 176 249.4z" />
    </Icon>
);

export default Football;