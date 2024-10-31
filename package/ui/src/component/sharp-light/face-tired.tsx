
import { Icon } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=sharp-light face-tired}
 * @preview ![face-tired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-tired.svg)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 94c26.3 0 52.4 4 77.5 11.9c-10.6-26.1-38.7-43.9-77.5-43.9c-38.1 0-65.4 17.3-76.6 43.6C204.2 353.9 230 350 256 350zm0-64c62.2 0 114 38.8 114 100l0 22.7L348.6 401l-16.5-5.9C307.7 386.4 282 382 256 382s-51.8 4.5-76.2 13.2L163.3 401 141 409l1-23.7c2.5-60.2 51.2-99.4 114-99.4zM121.8 182l15.9-27.8 13.9 7.9 56 32L231.9 208l-24.3 13.9-56 32-13.9 7.9L121.8 234l13.9-7.9L167.4 208l-31.7-18.1L121.8 182zm254.5 7.9L344.6 208l31.7 18.1 13.9 7.9-15.9 27.8-13.9-7.9-56-32L280.1 208l24.3-13.9 56-32 13.9-7.9L390.2 182l-13.9 7.9z" />
    </Icon>
);

export default FaceTired;