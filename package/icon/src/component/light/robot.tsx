
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=light robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c8.8 0 16 7.2 16 16l0 80 112 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-256 0c-53 0-96-43-96-96l0-224c0-53 43-96 96-96l112 0 0-80c0-8.8 7.2-16 16-16zM192 128c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-128 0-128 0zm16 256l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM48 224l16 0 0 32-16 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l16 0 0 32-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM592 384c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-16 0 0-32 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-32 16 0z" />
    </Icon>
);

export default Robot;