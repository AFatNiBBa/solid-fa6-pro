
import { Icon } from "../../index";

/**
 * A component that renders the `face-icicles` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-icicles?s=sharp-light face-icicles}
 * @preview ![face-icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-icicles.svg)
 */
const FaceIcicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l16 256 16-256C512 114.6 397.4 0 256 0S0 114.6 0 256L16 448 32 256zm112 98.7l0-34.7 32 0 0 48-18.7 0L144 354.7zM208 368l0-48 32 0 0 48-32 0zm64 0l0-48 32 0 0 48-32 0zm82.7 0L336 368l0-48 32 0 0 34.7L354.7 368zM400 320l0-32-32 0-224 0-32 0 0 32 0 48 32 32 148 0 12 48 12-48 39.7 0L368 480l14.5-94.5L400 368l0-48zM176.4 232a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm184-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM331.1 467.1C307.6 475.4 282.4 480 256 480c-87.6 0-163.4-50.3-200.3-123.5l-4.4 53.3C98 471.8 172.3 512 256 512c27.6 0 54.3-4.4 79.2-12.5l-4.1-32.4zm74.1-3.1c19.8-14.2 37.5-31.3 52.5-50.5L454.4 360c-11.3 21.5-26 41-43.4 57.7L405.2 464z" />
    </Icon>
);

export default FaceIcicles;