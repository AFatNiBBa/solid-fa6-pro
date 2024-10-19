
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-snowmobiling` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowmobiling?s=thin person-snowmobiling}
 * @preview ![person-snowmobiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDQgMjU2QzEwNi45MzggMjU2IDEwOS43ODEgMjU0LjM3NSAxMTEuMTcyIDI1MS41MzFMMTUzLjg0NCAxNjUuMTI1QzE2MS40NTMgMTUwLjA2MyAxNzUuOTM4IDEzOS40MzggMTkyLjUzMSAxMzYuNjg4QzIwOS4yOTcgMTMzLjg3NSAyMjYuMzQ0IDEzOS41IDIzOC4xNDEgMTUxLjI4MUwyOTAuNTMxIDIwNS41NjNDMjkyLjAzMSAyMDcuMTI1IDI5NC4xMDkgMjA4IDI5Ni4yODEgMjA4SDMyMEMzMjQuNDIyIDIwOCAzMjggMjA0LjQwNiAzMjggMjAwUzMyNC40MjIgMTkyIDMyMCAxOTJIMjk5LjY3MkwyNDkuNTQ3IDE0MC4wNjJDMjM0LjAxNiAxMjQuNTMxIDIxMS43NjYgMTE3LjUzMSAxODkuOTUzIDEyMC44NzVDMTY4LjMxMiAxMjQuNDY5IDE0OS40NjkgMTM4LjMxMiAxMzkuNTMxIDE1Ny45NjlMOTYuODI4IDI0NC40NjlDOTQuODc1IDI0OC40MDYgOTYuNSAyNTMuMjE5IDEwMC40NTMgMjU1LjE4OEMxMDEuNTk0IDI1NS43NSAxMDIuNzk3IDI1NiAxMDQgMjU2Wk02MzcuNjU2IDQ0Mi4zNDRDNjM0LjUzMSA0MzkuMjE5IDYyOS40NjkgNDM5LjIxOSA2MjYuMzQ0IDQ0Mi4zNDRMNjE3LjIwMyA0NTEuNDY5QzYwMS4zNTQgNDY3LjMzNiA1ODIuNDQ3IDQ3OC44MDcgNTYxLjk5NCA0ODYuMzA1TDQ5MC4zNTcgNDA3LjUwNkw1NjUuNDA2IDM1OS4xNTZDNTcyLjAxNiAzNTQuODc1IDU3NS45NjkgMzQ3Ljc1IDU3NS45NjkgMzQwLjAzMVYyNjcuMzc1QzU3NS45NjkgMjU4LjUgNTcwLjk2OSAyNTAuNTk0IDU2Mi43MzQgMjQ2LjY4OEwzOTAuMjA1IDE2OS45ODhMMzU5LjQyMiA5My4wMzFDMzU3Ljc4MSA4OC45MzggMzUzLjE0MSA4Ni45MzggMzQ5LjAzMSA4OC41NjNDMzQ0LjkyMiA5MC4yMTkgMzQyLjkzOCA5NC44NzUgMzQ0LjU3OCA5OC45NjlMMzc0Ljc4MSAxNzQuNDc1TDI4NC43NjYgMjgwSDEwNS43OTdMMTA1Ljk4NCAyODAuMTI1SDEwMi4xMjVDODcuMTcyIDI4MC4xMjUgNzMuNzk3IDI4OC4xMjUgNjcuMjM0IDMwMC45MzdMNDIuNzE5IDM0OC4zMTJDNDAuNjg3IDM1Mi4yNSA0Mi4yMzQgMzU3LjA2MiA0Ni4xNTYgMzU5LjA5NEM1MC4wMTYgMzYxLjE1NiA1NC44OTEgMzU5LjYyNSA1Ni45MzggMzU1LjY4OEw4MS40NjkgMzA4LjI1Qzg1LjI5NyAzMDAuNzgxIDkzLjIwMyAyOTYuMTI1IDEwMi4xMjUgMjk2LjEyNUgxNTguNzVMMTU4LjU2MiAyOTZIMjkyLjE0MUwzODYuMjAzIDE4NS43NUw1NTYuMDYyIDI2MS4yMTlDNTU4LjQ2OSAyNjIuMzc1IDU1OS45NjkgMjY0LjcxOSA1NTkuOTY5IDI2Ny4zNzVWMzQwLjAzMUM1NTkuOTY5IDM0Mi4yODEgNTU4Ljc1IDM0NC40MDYgNTU2LjczNCAzNDUuNzE5TDQ3Mi40NTMgNDAwSDM1MkMzNDcuNTc4IDQwMCAzNDQgNDAzLjU5NCAzNDQgNDA4UzM0Ny41NzggNDE2IDM1MiA0MTZINDc2LjQ2NUw1NDUuMDQzIDQ5MS40MzhDNTMzLjU2MiA0OTQuMTY2IDUyMS44MiA0OTYgNTA5LjcxOSA0OTZINDI0QzQxOS41NzggNDk2IDQxNiA0OTkuNTk0IDQxNiA1MDRTNDE5LjU3OCA1MTIgNDI0IDUxMkg1MDkuNzE5QzU3Ny40ODcgNTEyIDYyMS43MDYgNDY5LjYwMSA2MjguNTE2IDQ2Mi43ODFMNjM3LjY1NiA0NTMuNjU2QzY0MC43ODEgNDUwLjUzMSA2NDAuNzgxIDQ0NS40NjkgNjM3LjY1NiA0NDIuMzQ0Wk0yNTYgMzg0SDY0QzI4LjY1NCAzODQgMCA0MTIuNjU0IDAgNDQ4UzI4LjY1NCA1MTIgNjQgNTEySDI1NkMyOTEuMzQ4IDUxMiAzMjAgNDgzLjM0NiAzMjAgNDQ4UzI5MS4zNDggMzg0IDI1NiAzODRaTTI1NiA0OTZINjRDMzcuNTMzIDQ5NiAxNiA0NzQuNDY3IDE2IDQ0OFMzNy41MzMgNDAwIDY0IDQwMEgyNTZDMjgyLjQ2NyA0MDAgMzA0IDQyMS41MzMgMzA0IDQ0OFMyODIuNDY3IDQ5NiAyNTYgNDk2Wk0yMzYgMTA0QzI2NC43MTkgMTA0IDI4OCA4MC43MTkgMjg4IDUyUzI2NC43MTkgMCAyMzYgMFMxODQgMjMuMjgxIDE4NCA1MlMyMDcuMjgxIDEwNCAyMzYgMTA0Wk0yMzYgMTZDMjU1Ljg1MiAxNiAyNzIgMzIuMTQ4IDI3MiA1MkMyNzIgNzEuODUgMjU1Ljg1MiA4OCAyMzYgODhDMjE2LjE1IDg4IDIwMCA3MS44NSAyMDAgNTJDMjAwIDMyLjE0OCAyMTYuMTUgMTYgMjM2IDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonSnowmobiling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M104 256C106.938 256 109.781 254.375 111.172 251.531L153.844 165.125C161.453 150.063 175.938 139.438 192.531 136.688C209.297 133.875 226.344 139.5 238.141 151.281L290.531 205.563C292.031 207.125 294.109 208 296.281 208H320C324.422 208 328 204.406 328 200S324.422 192 320 192H299.672L249.547 140.062C234.016 124.531 211.766 117.531 189.953 120.875C168.312 124.469 149.469 138.312 139.531 157.969L96.828 244.469C94.875 248.406 96.5 253.219 100.453 255.188C101.594 255.75 102.797 256 104 256ZM637.656 442.344C634.531 439.219 629.469 439.219 626.344 442.344L617.203 451.469C601.354 467.336 582.447 478.807 561.994 486.305L490.357 407.506L565.406 359.156C572.016 354.875 575.969 347.75 575.969 340.031V267.375C575.969 258.5 570.969 250.594 562.734 246.688L390.205 169.988L359.422 93.031C357.781 88.938 353.141 86.938 349.031 88.563C344.922 90.219 342.938 94.875 344.578 98.969L374.781 174.475L284.766 280H105.797L105.984 280.125H102.125C87.172 280.125 73.797 288.125 67.234 300.937L42.719 348.312C40.687 352.25 42.234 357.062 46.156 359.094C50.016 361.156 54.891 359.625 56.938 355.688L81.469 308.25C85.297 300.781 93.203 296.125 102.125 296.125H158.75L158.562 296H292.141L386.203 185.75L556.062 261.219C558.469 262.375 559.969 264.719 559.969 267.375V340.031C559.969 342.281 558.75 344.406 556.734 345.719L472.453 400H352C347.578 400 344 403.594 344 408S347.578 416 352 416H476.465L545.043 491.438C533.562 494.166 521.82 496 509.719 496H424C419.578 496 416 499.594 416 504S419.578 512 424 512H509.719C577.487 512 621.706 469.601 628.516 462.781L637.656 453.656C640.781 450.531 640.781 445.469 637.656 442.344ZM256 384H64C28.654 384 0 412.654 0 448S28.654 512 64 512H256C291.348 512 320 483.346 320 448S291.348 384 256 384ZM256 496H64C37.533 496 16 474.467 16 448S37.533 400 64 400H256C282.467 400 304 421.533 304 448S282.467 496 256 496ZM236 104C264.719 104 288 80.719 288 52S264.719 0 236 0S184 23.281 184 52S207.281 104 236 104ZM236 16C255.852 16 272 32.148 272 52C272 71.85 255.852 88 236 88C216.15 88 200 71.85 200 52C200 32.148 216.15 16 236 16Z" />
        </Icon>
    </>
}