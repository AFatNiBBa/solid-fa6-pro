
import { Icon } from "../../index";

/**
 * A component that renders the `face-sunglasses` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sunglasses?s=sharp-regular face-sunglasses}
 * @preview ![face-sunglasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-sunglasses.svg)
 */
const FaceSunglasses: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464C141.1 464 48 370.9 48 256c0-21.8 3.4-42.8 9.6-62.5L80 272l128 0 22.9-80 50.3 0L304 272l128 0 22.4-78.5c6.2 19.7 9.6 40.7 9.6 62.5c0 114.9-93.1 208-208 208zM240 144l0-16L92 128c38.1-48.7 97.4-80 164-80s125.9 31.3 164 80l-148 0 0 16-32 0zm16 368A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-96c61.9 0 112-36.8 132-66.7L348 322.7C336 340.8 300.1 368 256 368s-80-27.2-92-45.3L124 349.3c19.9 29.9 70 66.7 132 66.7z" />
    </Icon>
);

export default FaceSunglasses;