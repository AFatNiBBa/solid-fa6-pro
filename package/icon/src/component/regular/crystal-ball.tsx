
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=regular crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 224c0 71-42 132.2-102.6 160l83.3 0c41.5-40.7 67.2-97.3 67.2-160C448 100.3 347.7 0 224 0S0 100.3 0 224c0 62.7 25.7 119.3 67.2 160l83.3 0C90 356.2 48 295 48 224c0-97.2 78.8-176 176-176s176 78.8 176 176zM167.5 100.3c-2.6-7-12.4-7-15 0l-9.8 26.4-26.4 9.8c-7 2.6-7 12.4 0 15l26.4 9.8 9.8 26.4c2.6 7 12.4 7 15 0l9.8-26.4 26.4-9.8c7-2.6 7-12.4 0-15l-26.4-9.8-9.8-26.4zm113 48l-18.4 49.8-49.8 18.4c-7 2.6-7 12.4 0 15l49.8 18.4 18.4 49.8c2.6 7 12.4 7 15 0l18.4-49.8 49.8-18.4c7-2.6 7-12.4 0-15l-49.8-18.4-18.4-49.8c-2.6-7-12.4-7-15 0zM20.3 474.2c-5.1 7.3-5.8 16.9-1.6 24.8S31.1 512 40 512l368 0c8.9 0 17.2-5 21.3-12.9s3.5-17.5-1.6-24.8L386.9 416 61.1 416 20.3 474.2z" />
    </Icon>
);

export default CrystalBall;