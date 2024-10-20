
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-thinking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-thinking?s=sharp-duotone-solid face-thinking}
 * @preview ![face-thinking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-thinking.svg)
 */
const FaceThinking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 45 11.6 87.3 32 124l0-28 0-56 112 0 0 56 0 3 108.9-39.6 11.2-4.1L155.5 279.3l-15.4-4.5 9-30.7 15.3 4.5 136 40 8.8 2.6 2.2 8.9 10.2 40.6 22.1 60.7-52.6 19.1-35.8 13-21 57.7c-2.5 6.8-5.8 13.1-9.8 18.8c10.3 1.3 20.8 1.9 31.4 1.9c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM106.2 106l13.9-7.9 7.1-4c35.2-20.1 79.3-15.9 110.1 10.5c4.4 3.8 8.8 7.5 13.2 11.3l12.1 10.4c-6.9 8.1-13.9 16.2-20.8 24.3c-4-3.5-8.1-6.9-12.1-10.4l-13.2-11.3c-20.5-17.6-49.9-20.4-73.4-7l-7.1 4L122 133.8 106.2 106zm102.2 70a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm160 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M216.4 128.8l13.2 11.3 12.1 10.4 20.8-24.3-12.1-10.4-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4L106.2 106 122 133.8l13.9-7.9 7.1-4c23.5-13.4 52.9-10.6 73.4 7zm-40 79.2a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160 16a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM112 352l0-24-48 0 0 24 0 136 0 24 24 0 88 0 16.8 0 5.7-15.8 31.8-87.5 49.8-18.1 22.6-8.2-16.4-45.1-22.6 8.2L112 400.6l0-48.6z" />
    </Icon>
);

export default FaceThinking;