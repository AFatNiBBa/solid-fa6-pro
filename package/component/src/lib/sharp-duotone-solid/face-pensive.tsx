
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-pensive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pensive?s=sharp-duotone-solid face-pensive}
 * @preview ![face-pensive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-pensive.svg)
 */
const FacePensive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm72.8-62.3c7.6-3.8 15.2-7.6 22.9-11.4c14.5-7.2 27.2-17.6 37.4-30.2l14.4-18 25 20c-4.8 6-9.6 12-14.4 18c-13 16.3-29.4 29.5-48 38.8L87.2 222.3 72.8 193.7zm18.4 91.9l25.6-19.2c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-17.2 22.9-43 34.4-68.8 34.4s-51.6-11.5-68.8-34.4zM192 384l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm91.2-98.4l25.6-19.2c21.6 28.8 64.8 28.8 86.4 0l25.6 19.2c-17.2 22.9-43 34.4-68.8 34.4s-51.6-11.5-68.8-34.4zM339.5 154c8.3-6.7 16.7-13.3 25-20l14.4 18c10.1 12.7 22.9 23 37.4 30.2c7.6 3.8 15.2 7.6 22.9 11.4l-14.3 28.6L402 210.9c-18.6-9.3-35-22.6-48.1-38.8c-4.8-6-9.6-12-14.4-18z" />
        <path d="M95.7 182.3L72.8 193.7l14.3 28.6L110 210.9c18.6-9.3 35-22.6 48-38.8l14.4-18-25-20-14.4 18c-10.1 12.7-22.9 23-37.4 30.2zm213.1 84.1l-25.6 19.2c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2c-21.6 28.8-64.8 28.8-86.4 0zm-105.6 0c-21.6 28.8-64.8 28.8-86.4 0L91.2 285.6c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2zm213.1-84.1c-14.5-7.2-27.2-17.6-37.4-30.2l-14.4-18-25 20 14.4 18c13 16.3 29.4 29.5 48.1 38.8l22.9 11.4 14.3-28.6-22.9-11.4z" />
    </Icon>
);

export default FacePensive;