
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-scream` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-scream?s=sharp-duotone-solid face-scream}
 * @preview ![face-scream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-scream.svg)
 */
const FaceScream: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 20.6 2.4 40.7 7 59.9L82.3 306l20.6-18 21 17.5c57.5 48 87.8 118 98 187C252.1 505.1 285.2 512 320 512c34.8 0 68-6.9 98.2-19.5c10.2-69 40.4-139 98-187l21-17.5 20.6 18 11.3 9.8c4.6-19.2 7-39.2 7-59.8C576 114.6 461.4 0 320 0S64 114.6 64 256zm110.6-67c22.5-36.9 62.8-54.7 90.1-39.8s31.1 56.9 8.7 93.7s-62.8 54.7-90.1 39.8s-31.1-56.9-8.7-93.7zM272 368c0-26.5 21.5-48 48-48s48 21.5 48 48l0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32zm94.6-125c-22.5-36.9-18.6-78.8 8.7-93.7c6.5-3.6 13.8-5.3 21.4-5.3c24.1 0 51.6 17 68.7 45c22.5 36.9 18.6 78.8-8.7 93.7s-67.6-2.9-90.1-39.8z" />
        <path d="M273.4 243c22.5-36.9 18.6-78.8-8.7-93.7s-67.6 2.9-90.1 39.8s-18.6 78.8 8.7 93.7s67.6-2.9 90.1-39.8zM82.3 512L192 512c-7-68.5-34.8-137-88.7-181.9L39.1 386.3c26.4 40 43.6 75.3 43.2 125.7zm475.5 0c-.4-50.5 16.7-85.7 43.2-125.7l-64.3-56.2C482.8 375 455 443.6 448 512l109.8 0zm-101-229.3c27.3-14.9 31.1-56.9 8.7-93.7s-62.8-54.7-90.1-39.8s-31.1 56.9-8.7 93.7s62.8 54.7 90.1 39.8z" />
    </Icon>
);

export default FaceScream;