
import { Icon } from "../../index";

/**
 * A component that renders the `face-thinking` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-thinking?s=solid face-thinking}
 * @preview ![face-thinking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-thinking.svg)
 */
const FaceThinking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256c0 141.4-114.6 256-256 256c-10.6 0-21.1-.6-31.4-1.9c4-5.7 7.3-12 9.8-18.8l21-57.7 35.8-13c23.9-8.7 38.3-32 36.8-56.1c-1.3-24.4-16.5-46.1-39.2-55.6L166.2 257.3c-8.1-3.4-17.5 .4-21 8.5s.4 17.5 8.5 21l82.4 34.7L144 355l0-3c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 28C11.6 343.3 0 301 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256zM208.4 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM143 121.9c23.5-13.4 52.9-10.6 73.4 7l13.2 11.3c6.7 5.8 16.8 5 22.6-1.7s5-16.8-1.7-22.6l-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l7.1-4zM112 352l0 48.6 151.8-55.2c12.5-4.5 26.2 1.9 30.8 14.4s-1.9 26.2-14.4 30.8l-49.8 18.1-26.1 71.7c-6.9 19-24.9 31.6-45.1 31.6L112 512c-26.5 0-48-21.5-48-48l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default FaceThinking;