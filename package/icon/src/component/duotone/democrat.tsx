
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `democrat` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/democrat?s=duotone democrat}
 * @preview ![democrat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA0ODBDMTkyIDQ5Ny41OTkgMjA2LjM5OSA1MTIgMjI0IDUxMkgyNTYuMDAxQzI3My42MDIgNTEyIDI4OC4wMDEgNDk3LjU5OSAyODguMDAxIDQ4MFY0MTUuOTk5SDQ0OC4wMDNWNDgwQzQ0OC4wMDMgNDk3LjU5OSA0NjIuNDAxIDUxMiA0ODAuMDAzIDUxMkg1MTIuMDAzQzUyOS42MDUgNTEyIDU0NC4wMDQgNDk3LjU5OSA1NDQuMDA0IDQ4MFYzMzUuOTk4SDE5MlY0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzNy4yNDIgMjU2Ljg3Mkw2MTcuNzQyIDIyNy40OTdDNTg5LjQ5MiAxODUuMjQ3IDU0Mi4zNjYgMTU5Ljk5NiA0OTEuNjE2IDE1OS45OTZIMjU1Ljk4OEwxNzQuNzM3IDc4Ljc0NkMxOTQuODYzIDU4Ljc0NSAxOTcuMzYzIDI3Ljc0NSAxODIuMjM3IDQuODdDMTc4Ljg2MiAtMC4yNTUgMTcxLjQ4NyAtMS4wMDUgMTY3LjExMiAzLjM3TDEyNS4yMzcgNDUuMjQ1TDgyLjM2MSAyLjM3Qzc4LjczNiAtMS4yNTUgNzIuNzM2IC0wLjYzIDY5Ljk4NiAzLjYyQzU3LjczNiAyMi4yNDUgNTkuNzM2IDQ3LjYyIDc2LjExMSA2My45OTVDNzkuMzYxIDY3LjI0NiA4My4zNjEgNjkuMjQ2IDg3LjM2MSA3MS40OTZDODUuMjM2IDczLjI0NiA4Mi43MzYgNzQuNjIxIDgwLjk4NiA3Ni44NzFMNi4zNjEgMTc2LjI0N0MtMC44ODkgMTg1Ljg3MiAtMi4wMTQgMTk4Ljg3MiAzLjM2MSAyMDkuNzQ3TDE3LjczNiAyMzguMjQ3QzIzLjExMSAyNDkuMTIyIDM0LjIzNiAyNTUuOTk3IDQ2LjIzNiAyNTUuOTk3SDc3LjIzNkM4NS43MzYgMjU1Ljk5NyA5My44NjIgMjUyLjYyMiA5OS44NjIgMjQ2LjYyMkwxMzcuOTg3IDIxMS45OTdMMTkxLjk4OCAzMzUuOTk4SDU0My45OTFWMjQyLjI0N0M1NjAuMjQyIDI1NC4zNzIgNTYyLjI0MiAyNTkuNzQ3IDU4NC4xMTcgMjkyLjQ5OEM1ODguOTkyIDI5OS44NzMgNTk4Ljg2NyAzMDEuNzQ4IDYwNi4yNDIgMjk2Ljg3M0w2MzIuODY3IDI3OS4yNDhDNjQwLjI0MiAyNzQuMjQ4IDY0Mi4yNDIgMjY0LjI0NyA2MzcuMjQyIDI1Ni44NzJaTTI5Ni4yMzkgMjQzLjI0N0wyNzkuNzM5IDI1OS4zNzJMMjgzLjYxNCAyODIuMTIzQzI4NC4yMzkgMjg2LjI0OCAyNzkuOTg5IDI4OS4yNDggMjc2LjM2MyAyODcuMzczTDI1NS45ODggMjc2Ljc0OEwyMzUuNjEzIDI4Ny4zNzNDMjMxLjk4OCAyODkuMjQ4IDIyNy43MzggMjg2LjI0OCAyMjguMzYzIDI4Mi4xMjNMMjMyLjIzOCAyNTkuMzcyTDIxNS43MzggMjQzLjI0N0MyMTIuNzM4IDI0MC4zNzIgMjE0LjQ4OCAyMzUuMzcyIDIxOC42MTMgMjM0Ljc0N0wyNDEuMzYzIDIzMS40OTdMMjUxLjYxMyAyMTAuNzQ3QzI1My4zNjMgMjA3LjEyMiAyNTguNzM4IDIwNy4xMjIgMjYwLjYxMyAyMTAuNzQ3TDI3MC43MzggMjMxLjQ5N0wyOTMuNjE0IDIzNC43NDdDMjk3LjYxNCAyMzUuMzcyIDI5OS4yMzkgMjQwLjM3MiAyOTYuMjM5IDI0My4yNDdaTTQwOC4yNCAyNDMuMjQ3TDM5MS43NCAyNTkuMzcyTDM5NS42MTUgMjgyLjEyM0MzOTYuMjQgMjg2LjI0OCAzOTEuOTkgMjg5LjI0OCAzODguMzY1IDI4Ny4zNzNMMzY3Ljk4OSAyNzYuNzQ4TDM0Ny42MTQgMjg3LjM3M0MzNDMuOTg5IDI4OS4yNDggMzM5LjczOSAyODYuMjQ4IDM0MC4zNjQgMjgyLjEyM0wzNDQuMjM5IDI1OS4zNzJMMzI3LjczOSAyNDMuMjQ3QzMyNC43MzkgMjQwLjM3MiAzMjYuNDg5IDIzNS4zNzIgMzMwLjYxNCAyMzQuNzQ3TDM1My4zNjQgMjMxLjQ5N0wzNjMuNjE0IDIxMC43NDdDMzY1LjM2NCAyMDcuMTIyIDM3MC43NCAyMDcuMTIyIDM3Mi42MTUgMjEwLjc0N0wzODIuNzQgMjMxLjQ5N0w0MDUuNjE1IDIzNC43NDdDNDA5LjYxNSAyMzUuMzcyIDQxMS4yNCAyNDAuMzcyIDQwOC4yNCAyNDMuMjQ3Wk01MjAuMjQxIDI0My4yNDdMNTAzLjc0MSAyNTkuMzcyTDUwNy42MTYgMjgyLjEyM0M1MDguMjQxIDI4Ni4yNDggNTAzLjk5MSAyODkuMjQ4IDUwMC4zNjYgMjg3LjM3M0w0NzkuOTkxIDI3Ni43NDhMNDU5LjYxNSAyODcuMzczQzQ1NS45OSAyODkuMjQ4IDQ1MS43NCAyODYuMjQ4IDQ1Mi4zNjUgMjgyLjEyM0w0NTYuMjQgMjU5LjM3Mkw0MzkuNzQgMjQzLjI0N0M0MzYuNzQgMjQwLjM3MiA0MzguNDkgMjM1LjM3MiA0NDIuNjE1IDIzNC43NDdMNDY1LjM2NiAyMzEuNDk3TDQ3NS42MTYgMjEwLjc0N0M0NzcuMzY2IDIwNy4xMjIgNDgyLjc0MSAyMDcuMTIyIDQ4NC42MTYgMjEwLjc0N0w0OTQuNzQxIDIzMS40OTdMNTE3LjYxNiAyMzQuNzQ3QzUyMS42MTYgMjM1LjM3MiA1MjMuMjQxIDI0MC4zNzIgNTIwLjI0MSAyNDMuMjQ3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Democrat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M192 480C192 497.599 206.399 512 224 512H256.001C273.602 512 288.001 497.599 288.001 480V415.999H448.003V480C448.003 497.599 462.401 512 480.003 512H512.003C529.605 512 544.004 497.599 544.004 480V335.998H192V480Z" />
            <path d="M637.242 256.872L617.742 227.497C589.492 185.247 542.366 159.996 491.616 159.996H255.988L174.737 78.746C194.863 58.745 197.363 27.745 182.237 4.87C178.862 -0.255 171.487 -1.005 167.112 3.37L125.237 45.245L82.361 2.37C78.736 -1.255 72.736 -0.63 69.986 3.62C57.736 22.245 59.736 47.62 76.111 63.995C79.361 67.246 83.361 69.246 87.361 71.496C85.236 73.246 82.736 74.621 80.986 76.871L6.361 176.247C-0.889 185.872 -2.014 198.872 3.361 209.747L17.736 238.247C23.111 249.122 34.236 255.997 46.236 255.997H77.236C85.736 255.997 93.862 252.622 99.862 246.622L137.987 211.997L191.988 335.998H543.991V242.247C560.242 254.372 562.242 259.747 584.117 292.498C588.992 299.873 598.867 301.748 606.242 296.873L632.867 279.248C640.242 274.248 642.242 264.247 637.242 256.872ZM296.239 243.247L279.739 259.372L283.614 282.123C284.239 286.248 279.989 289.248 276.363 287.373L255.988 276.748L235.613 287.373C231.988 289.248 227.738 286.248 228.363 282.123L232.238 259.372L215.738 243.247C212.738 240.372 214.488 235.372 218.613 234.747L241.363 231.497L251.613 210.747C253.363 207.122 258.738 207.122 260.613 210.747L270.738 231.497L293.614 234.747C297.614 235.372 299.239 240.372 296.239 243.247ZM408.24 243.247L391.74 259.372L395.615 282.123C396.24 286.248 391.99 289.248 388.365 287.373L367.989 276.748L347.614 287.373C343.989 289.248 339.739 286.248 340.364 282.123L344.239 259.372L327.739 243.247C324.739 240.372 326.489 235.372 330.614 234.747L353.364 231.497L363.614 210.747C365.364 207.122 370.74 207.122 372.615 210.747L382.74 231.497L405.615 234.747C409.615 235.372 411.24 240.372 408.24 243.247ZM520.241 243.247L503.741 259.372L507.616 282.123C508.241 286.248 503.991 289.248 500.366 287.373L479.991 276.748L459.615 287.373C455.99 289.248 451.74 286.248 452.365 282.123L456.24 259.372L439.74 243.247C436.74 240.372 438.49 235.372 442.615 234.747L465.366 231.497L475.616 210.747C477.366 207.122 482.741 207.122 484.616 210.747L494.741 231.497L517.616 234.747C521.616 235.372 523.241 240.372 520.241 243.247Z" />
        </Icon>
    </>
}