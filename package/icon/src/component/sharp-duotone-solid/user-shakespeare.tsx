
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-shakespeare` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=sharp-duotone-solid user-shakespeare}
 * @preview ![user-shakespeare](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-shakespeare.svg)
 */
const UserShakespeare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 288l0 32 0 88 72-40 40 0 0-80L96 288zM128 96l0 64c0 33.4 17 62.8 42.9 80c12.1 8 26 13.4 41.1 15.3l0-31.3 0-12c8 0 16 0 24 0l0 12 0 31.3c15.1-1.9 29-7.2 41.1-15.3C303 222.8 320 193.4 320 160l0-64c0-11.2-1.9-22-5.5-32C301.4 26.7 265.8 0 224 0s-77.4 26.7-90.5 64c-3.5 10-5.5 20.8-5.5 32zm80 32a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-28 52c4 0 8 0 12 0c2.1 0 12.9-1.9 23.5-12.5L224 159c2.8 2.8 5.7 5.7 8.5 8.5c2 2 6 5.3 10.7 8.1c4.9 2.9 9.4 4.4 12.8 4.4c4 0 8 0 12 0l0 24c-4 0-8 0-12 0c-9.5 0-18.3-3.8-24.8-7.6c-2.5-1.5-4.9-3.1-7.1-4.6C211.6 201 199 204 192 204c-4 0-8 0-12 0l0-24zm92-52a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM240 288l0 80 40 0 72 40 0-88 0-32-112 0z" />
        <path d="M128 96c0-11.2 1.9-22 5.5-32L104 64l0 72L64 184l0 56 106.9 0C145 222.8 128 193.4 128 160l0-64zm192 0l0 64c0 33.4-17 62.8-42.9 80L384 240l0-56-40-48 0-72-29.5 0c3.5 10 5.5 20.8 5.5 32zM192 144a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-36 96l0-12-24 0 0 12 0 32 0 12 24 0 0-12 0-32zm-12-65l-8.5 8.5C204.9 178.1 194.1 180 192 180l-12 0 0 24 12 0c7 0 19.6-3 32.1-12.3c2.2 1.6 4.5 3.2 7.1 4.6c6.5 3.8 15.4 7.6 24.8 7.6l12 0 0-24-12 0c-3.3 0-7.8-1.5-12.8-4.4c-4.8-2.8-8.8-6.1-10.7-8.1L224 159zM96 408l0-88-32 0L0 512l448 0L384 320l-32 0 0 88-72-40-112 0L96 408zm112 8a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default UserShakespeare;