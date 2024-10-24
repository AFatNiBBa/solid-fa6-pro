
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=duotone reply}
 * @preview ![reply](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/reply.svg)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128l112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0-160z" />
        <path d="M224 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 190.3 0 198.9 0 208s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2l0-288z" />
    </Icon>
);

export default Reply;