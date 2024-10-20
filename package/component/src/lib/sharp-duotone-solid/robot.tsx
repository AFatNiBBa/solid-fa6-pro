
import { Icon, generic } from "../../index";

/**
 * A component that renders the `robot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=sharp-duotone-solid robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 224l0 192 64 0 0-192-64 0zM192 384l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zM288 0l0 32 0 64 64 0 0-64 0-32L288 0zm0 384l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zm96 0l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zM544 224l0 192 64 0 0-192-64 0z" />
        <path d="M544 96L96 96l0 416 448 0 0-416zM208 384l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm96 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm96 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zM184 256a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm232-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default Robot;