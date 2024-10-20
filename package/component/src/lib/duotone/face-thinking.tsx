
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-thinking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-thinking?s=duotone face-thinking}
 * @preview ![face-thinking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-thinking.svg)
 */
const FaceThinking: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 45 11.6 87.3 32 124l0-28c0-30.9 25.1-56 56-56s56 25.1 56 56l0 3 92.2-33.5-82.4-34.7c-8.1-3.4-12-12.8-8.5-21s12.8-12 21-8.5l122.5 51.6c22.7 9.6 37.9 31.2 39.2 55.6c1.5 24.2-12.9 47.4-36.8 56.1l-35.8 13-21 57.7c-2.5 6.8-5.8 13.1-9.8 18.8c10.3 1.3 20.8 1.9 31.4 1.9c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM114.1 119.9c-4.4-7.7-1.7-17.4 6-21.8l7.1-4c35.2-20.1 79.3-15.9 110.1 10.5c4.4 3.8 8.8 7.5 13.2 11.3c6.7 5.8 7.5 15.9 1.7 22.6s-15.9 7.5-22.6 1.7l-13.2-11.3c-20.5-17.6-49.9-20.4-73.4-7l-7.1 4c-7.7 4.4-17.4 1.7-21.8-6zM208.4 176a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm160 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M143 121.9c23.5-13.4 52.9-10.6 73.4 7l13.2 11.3c6.7 5.8 16.8 5 22.6-1.7s5-16.8-1.7-22.6l-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l7.1-4zM176.4 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM112 352c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 26.5 21.5 48 48 48l47.2 0c20.2 0 38.2-12.6 45.1-31.6l26.1-71.7 49.8-18.1c12.5-4.5 18.9-18.3 14.4-30.8s-18.3-18.9-30.8-14.4L112 400.6l0-48.6zM368.4 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default FaceThinking;