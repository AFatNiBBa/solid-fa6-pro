
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=sharp-regular crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 224c0 71-42 132.2-102.6 160l83.3 0c41.5-40.7 67.2-97.3 67.2-160C448 100.3 347.7 0 224 0S0 100.3 0 224c0 62.7 25.7 119.3 67.2 160l83.3 0C90 356.2 48 295 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176zM177.3 126.7L160 80l-17.3 46.7L96 144l46.7 17.3L160 208l17.3-46.7L224 144l-46.7-17.3zM288 128l-25.9 70.1L192 224l70.1 25.9L288 320l25.9-70.1L384 224l-70.1-25.9L288 128zM0 512l448 0-64-96L64 416 0 512z" />
    </Icon>
);

export default CrystalBall;