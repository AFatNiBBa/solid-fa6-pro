
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=thin robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c4.4 0 8 3.6 8 8l0 88 120 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-256 0c-53 0-96-43-96-96l0-224c0-53 43-96 96-96l120 0 0-88c0-4.4 3.6-8 8-8zM192 112c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-224c0-44.2-35.8-80-80-80l-128 0-128 0zm8 288l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm96 0l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm96 0l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zM224 216a40 40 0 1 0 0 80 40 40 0 1 0 0-80zm56 40a56 56 0 1 1 -112 0 56 56 0 1 1 112 0zm96 0a40 40 0 1 0 80 0 40 40 0 1 0 -80 0zm40 56a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM48 224l16 0 0 16-16 0c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l16 0 0 16-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM592 400c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-16 0 0-16 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-16 16 0z" />
    </Icon>
);

export default Robot;