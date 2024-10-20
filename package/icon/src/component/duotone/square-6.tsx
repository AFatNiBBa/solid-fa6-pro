
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-6` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-6?s=duotone square-6}
 * @preview ![square-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-6.svg)
 */
const Square_6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM128 288c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4c9.9-8.5 19.7-16.9 29.6-25.4c10.1-8.6 11.2-23.8 2.6-33.8c-4.7-5.5-11.5-8.4-18.2-8.4c-5.5 0-11.1 1.9-15.6 5.8c-27.2 23.3-54.4 46.6-81.6 70C142.2 224.8 128 255.6 128 288zm144 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M279.6 170.2c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70C142.2 224.8 128 255.6 128 288c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4zM272 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default Square_6;