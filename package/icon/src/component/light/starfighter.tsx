
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `starfighter` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter?s=light starfighter}
 * @preview ![starfighter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMzA0SDIwOEMyMTYuODY3IDMwNCAyMjQgMjk2LjgwNSAyMjQgMjg4QzIyNCAyNzkuMTMzIDIxNi44MDUgMjcyIDIwOCAyNzJIMTc2QzE2My4yMDMgMjcyIDE1MS4xNTYgMjc2Ljk4NCAxNDIuMDYyIDI4Ni4wNjJDMTMyLjk4NCAyOTUuMTU2IDEyOCAzMDcuMjAzIDEyOCAzMjBINjRWMTYwSDgwQzg4Ljg2NyAxNjAgOTYgMTUyLjgwNSA5NiAxNDRDOTYgMTM1LjEzMyA4OC44MDUgMTI4IDgwIDEyOEg2NFYxMTJDNjQgMTAzLjEzMyA1Ni44MDcgOTYgNDggOTZDMzkuMTMzIDk2IDMyIDEwMy4xOTMgMzIgMTEyVjEyOEgxNkM3LjEzMyAxMjggMCAxMzUuMTkzIDAgMTQ0QzAgMTUyLjg2NyA3LjE5NSAxNjAgMTYgMTYwSDMyVjQzMkMzMiA0NDAuODY3IDM5LjE5NSA0NDggNDggNDQ4QzU2Ljg2NyA0NDggNjQgNDQwLjgwNSA2NCA0MzJWNDMxLjcxOUwxMzAuNzgxIDQ1OS45MzdDMTM1LjUwOCA0NzEuNTU5IDE0Ni41IDQ4MCAxNjAgNDgwSDE5MlY0OTZDMTkyIDUwNC44NjcgMTk5LjE5NSA1MTIgMjA4IDUxMkMyMTYuODY3IDUxMiAyMjQgNTA0LjgwNSAyMjQgNDk2VjQ2NEMyMjQgNDU1LjEzMyAyMTYuODA1IDQ0OCAyMDggNDQ4SDE2MFYzMjBDMTYwIDMxMS4yODkgMTY3LjA4IDMwNCAxNzYgMzA0Wk0xMjggNDI0LjI2Nkw2NCAzOTcuMjAzVjM1MkgxMjhWNDI0LjI2NlpNMzY5LjU2MiAzNS4wMTZDMzY4LjM1OSAyNS4zNzUgMzYzLjY1NiAxNi40ODQgMzU2LjM0NCAxMC4wMTZDMzQ4Ljk4NCAzLjU0NyAzMzkuNTk0IDAgMzI5Ljg3NSAwSDMxMC4xMjVDMzAwLjQwNiAwIDI5MS4wMTYgMy41NDcgMjgzLjY1NiAxMC4wMTZDMjc2LjM0NCAxNi40ODQgMjcxLjY0MSAyNS4zNzUgMjcwLjQzOCAzNS4wMTZMMjQwLjk4NCAyNzEuMTA3QzI0MC4zMjggMjc2LjM2MyAyNDAgMjgxLjY1NiAyNDAgMjg2Ljk1M1Y0NDBDMjQwIDQ1MC42NTYgMjQ0LjE1NiA0NjAuNzAzIDI1MS43MTkgNDY4LjI5N0MyNTkuMjk3IDQ3NS44NDQgMjY5LjM0NCA0ODAgMjgwIDQ4MEgzNjBDMzcwLjY1NiA0ODAgMzgwLjcwMyA0NzUuODQ0IDM4OC4yODEgNDY4LjI5N0MzOTUuODQ0IDQ2MC43MDMgNDAwIDQ1MC42NTYgNDAwIDQ0MFYyODYuOTUzQzQwMCAyODEuNjU2IDM5OS42NzIgMjc2LjM2MyAzOTkuMDE2IDI3MS4xMDdMMzY5LjU2MiAzNS4wMTZaTTM2OCA0NDBDMzY4IDQ0Mi4xNTYgMzY3LjE3MiA0NDQuMTcyIDM2NS42NzIgNDQ1LjY3MlMzNjIuMTU2IDQ0OCAzNjAgNDQ4SDI4MEMyNzcuODQ0IDQ0OCAyNzUuODI4IDQ0Ny4xNzIgMjc0LjMyOCA0NDUuNjcyUzI3MiA0NDIuMTU2IDI3MiA0NDBMMjcxLjkzOCAyODFMMzAyLjE4OCAzOUMzMDIuNzA5IDM0LjkzNCAzMDYuMDg4IDMyIDMxMC4xMjUgMzJIMzI5Ljg3NUMzMzMuOTEyIDMyIDMzNy4yOTEgMzQuOTM0IDMzNy44MTIgMzlMMzY4LjA2MiAyODFMMzY4IDQ0MFpNNjI0IDEyOEg2MDhWMTEyQzYwOCAxMDMuMTkzIDYwMC44NjcgOTYgNTkyIDk2QzU4My4xOTMgOTYgNTc2IDEwMy4xMzMgNTc2IDExMlYxMjhINTYwQzU1MS4xOTUgMTI4IDU0NCAxMzUuMTMzIDU0NCAxNDRDNTQ0IDE1Mi44MDUgNTUxLjEzMyAxNjAgNTYwIDE2MEg1NzZWMzIwSDUxMkM1MTIgMzA3LjIwMyA1MDcuMDE2IDI5NS4xNTYgNDk3LjkzOCAyODYuMDYyQzQ4OC44NDQgMjc2Ljk4NCA0NzYuNzk3IDI3MiA0NjQgMjcySDQzMkM0MjMuMTk1IDI3MiA0MTYgMjc5LjEzMyA0MTYgMjg4QzQxNiAyOTYuODA1IDQyMy4xMzMgMzA0IDQzMiAzMDRINDY0QzQ3Mi45MiAzMDQgNDgwIDMxMS4yODkgNDgwIDMyMFY0NDhINDMyQzQyMy4xOTUgNDQ4IDQxNiA0NTUuMTMzIDQxNiA0NjRWNDk2QzQxNiA1MDQuODA1IDQyMy4xMzMgNTEyIDQzMiA1MTJDNDQwLjgwNSA1MTIgNDQ4IDUwNC44NjcgNDQ4IDQ5NlY0ODBINDgwQzQ5My41IDQ4MCA1MDQuNDkyIDQ3MS41NTkgNTA5LjIxOSA0NTkuOTM4TDU3NiA0MzEuNzE5VjQzMkM1NzYgNDQwLjgwNSA1ODMuMTMzIDQ0OCA1OTIgNDQ4QzYwMC44MDUgNDQ4IDYwOCA0NDAuODY3IDYwOCA0MzJWMTYwSDYyNEM2MzIuODA1IDE2MCA2NDAgMTUyLjg2NyA2NDAgMTQ0QzY0MCAxMzUuMTkzIDYzMi44NjcgMTI4IDYyNCAxMjhaTTU3NiAzOTcuMjAzTDUxMiA0MjQuMjY2VjM1Mkg1NzZWMzk3LjIwM1pNMzIwIDIyNEMzMTEuMTY0IDIyNCAzMDQgMjMxLjE2MiAzMDQgMjQwVjMwNEMzMDQgMzEyLjgzNiAzMTEuMTY0IDMyMCAzMjAgMzIwUzMzNiAzMTIuODM2IDMzNiAzMDRWMjQwQzMzNiAyMzEuMTYyIDMyOC44MzYgMjI0IDMyMCAyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Starfighter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M176 304H208C216.867 304 224 296.805 224 288C224 279.133 216.805 272 208 272H176C163.203 272 151.156 276.984 142.062 286.062C132.984 295.156 128 307.203 128 320H64V160H80C88.867 160 96 152.805 96 144C96 135.133 88.805 128 80 128H64V112C64 103.133 56.807 96 48 96C39.133 96 32 103.193 32 112V128H16C7.133 128 0 135.193 0 144C0 152.867 7.195 160 16 160H32V432C32 440.867 39.195 448 48 448C56.867 448 64 440.805 64 432V431.719L130.781 459.937C135.508 471.559 146.5 480 160 480H192V496C192 504.867 199.195 512 208 512C216.867 512 224 504.805 224 496V464C224 455.133 216.805 448 208 448H160V320C160 311.289 167.08 304 176 304ZM128 424.266L64 397.203V352H128V424.266ZM369.562 35.016C368.359 25.375 363.656 16.484 356.344 10.016C348.984 3.547 339.594 0 329.875 0H310.125C300.406 0 291.016 3.547 283.656 10.016C276.344 16.484 271.641 25.375 270.438 35.016L240.984 271.107C240.328 276.363 240 281.656 240 286.953V440C240 450.656 244.156 460.703 251.719 468.297C259.297 475.844 269.344 480 280 480H360C370.656 480 380.703 475.844 388.281 468.297C395.844 460.703 400 450.656 400 440V286.953C400 281.656 399.672 276.363 399.016 271.107L369.562 35.016ZM368 440C368 442.156 367.172 444.172 365.672 445.672S362.156 448 360 448H280C277.844 448 275.828 447.172 274.328 445.672S272 442.156 272 440L271.938 281L302.188 39C302.709 34.934 306.088 32 310.125 32H329.875C333.912 32 337.291 34.934 337.812 39L368.062 281L368 440ZM624 128H608V112C608 103.193 600.867 96 592 96C583.193 96 576 103.133 576 112V128H560C551.195 128 544 135.133 544 144C544 152.805 551.133 160 560 160H576V320H512C512 307.203 507.016 295.156 497.938 286.062C488.844 276.984 476.797 272 464 272H432C423.195 272 416 279.133 416 288C416 296.805 423.133 304 432 304H464C472.92 304 480 311.289 480 320V448H432C423.195 448 416 455.133 416 464V496C416 504.805 423.133 512 432 512C440.805 512 448 504.867 448 496V480H480C493.5 480 504.492 471.559 509.219 459.938L576 431.719V432C576 440.805 583.133 448 592 448C600.805 448 608 440.867 608 432V160H624C632.805 160 640 152.867 640 144C640 135.193 632.867 128 624 128ZM576 397.203L512 424.266V352H576V397.203ZM320 224C311.164 224 304 231.162 304 240V304C304 312.836 311.164 320 320 320S336 312.836 336 304V240C336 231.162 328.836 224 320 224Z" />
        </Icon>
    </>
}