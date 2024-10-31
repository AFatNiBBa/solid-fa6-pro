
import { Icon } from "../../index";

/**
 * A component that renders the `face-tissue` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tissue?s=sharp-solid face-tissue}
 * @preview ![face-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-tissue.svg)
 */
const FaceTissue: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 15.9 1.5 31.5 4.2 46.7l205.9-38.1 45.8-8.5-8.5 45.8-9.4 51 18 12 39.1-26.1 8.9-5.9 8.9 5.9 40.3 26.8 23.7-11.8 14.3-7.2 14.3 28.6-14.3 7.2-32 16-8.3 4.2-7.7-5.2L304 371.2l-39.1 26.1-8.9 5.9-8.9-5.9L231.7 387 209.3 507.8c15.1 2.8 30.7 4.2 46.7 4.2zM230.9 192L112 256l45.7-64L112 128l118.9 64zM400 128l-45.7 64L400 256 281.1 192 400 128zM216 296L0 336l64 48L32 480l96-32 48 64 40-216z" />
    </Icon>
);

export default FaceTissue;