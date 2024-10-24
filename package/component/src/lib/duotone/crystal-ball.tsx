
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=duotone crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 71.4 33.4 135 85.4 176l277.2 0c52-41 85.4-104.6 85.4-176C448 100.3 347.7 0 224 0S0 100.3 0 224zM116.3 120.5l26.4-9.8 9.8-26.4c2.6-7 12.4-7 15 0l9.8 26.4 26.4 9.8c7 2.6 7 12.4 0 15l-26.4 9.8-9.8 26.4c-2.6 7-12.4 7-15 0l-9.8-26.4-26.4-9.8c-7-2.6-7-12.4 0-15zm112 80l49.8-18.4 18.4-49.8c2.6-7 12.4-7 15 0l18.4 49.8 49.8 18.4c7 2.6 7 12.4 0 15l-49.8 18.4-18.4 49.8c-2.6 7-12.4 7-15 0l-18.4-49.8-49.8-18.4c-7-2.6-7-12.4 0-15z" />
        <path d="M362.6 400H85.4L21.7 473.4c-3.7 4.2-5.7 9.7-5.7 15.3C16 501.6 26.4 512 39.3 512H408.7c12.9 0 23.3-10.4 23.3-23.3c0-5.6-2-11-5.7-15.3L362.6 400z" />
    </Icon>
);

export default CrystalBall;