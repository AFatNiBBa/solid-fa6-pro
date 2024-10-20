
import { Icon } from "../../index";

/**
 * A component that renders the `face-thinking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-thinking?s=sharp-solid face-thinking}
 * @preview ![face-thinking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-thinking.svg)
 */
const FaceThinking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256c0 141.4-114.6 256-256 256c-10.6 0-21.1-.6-31.4-1.9c4-5.7 7.3-12 9.8-18.8l21-57.7 35.8-13 52.6-19.1-22.1-60.7-10.2-40.6-2.2-8.9-8.8-2.6-136-40-15.3-4.5-9 30.7 15.4 4.5 108.6 31.9-11.2 4.1L144 355l0-3 0-56L32 296l0 56 0 28C11.6 343.3 0 301 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256zM208.4 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM143 121.9c23.5-13.4 52.9-10.6 73.4 7l13.2 11.3 12.1 10.4 20.8-24.3-12.1-10.4-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4L106.2 106 122 133.8l13.9-7.9 7.1-4zM112 352l0 48.6 151.8-55.2 22.6-8.2 16.4 45.1-22.6 8.2-49.8 18.1-31.8 87.5L192.8 512 176 512l-88 0-24 0 0-24 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default FaceThinking;