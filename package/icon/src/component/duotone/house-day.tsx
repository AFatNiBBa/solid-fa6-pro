
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-day` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-day?s=duotone house-day}
 * @preview ![house-day](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxNiAxNzUuOTk2QzIxNiAxNTMuODcxIDE5OC4xMjUgMTM1Ljk5NiAxNzYgMTM1Ljk5NlYxMzUuOTk4SDE3NS45OThDMTUzLjg3MyAxMzUuOTk4IDEzNS45OTggMTUzLjg3MyAxMzUuOTk4IDE3NS45OThIMTM2VjE3NkMxMzYgMTk4LjEyNSAxNTMuODc1IDIxNiAxNzYgMjE2VjIxNS45OThIMTc2LjAwMkMxOTguMTI3IDIxNS45OTggMjE2LjAwMiAxOTguMTIzIDIxNi4wMDIgMTc1Ljk5OEgyMTZWMTc1Ljk5NlpNMzAzLjkwOCA1OS44OTZDMzAzLjkwOCA1Mi4zNiAyOTcuNDU3IDQ4LjA0OCAyOTEuOTYgNDguMDQ4QzI5MC43MjggNDguMDQ4IDI4OS40NzkgNDguMjM3IDI4OC4yNSA0OC42MjNMMjE5LjI1IDcxLjYyM0wxODYuNjI1IDYuNjIzQzE4NC42MjUgMi40OTggMTgwLjUgLTAuMDAyIDE3NiAtMC4wMDJIMTc1Ljk5OEMxNzEuNDk4IC0wLjAwMiAxNjcuMzczIDIuNDk4IDE2NS4zNzMgNi42MjNMMTMyLjg3MyA3MS43NDhMNjMuNzUgNDguNzQ4QzYyLjQ5MSA0OC4zMDQgNjEuMTg5IDQ4LjA5IDU5Ljg5OCA0OC4wOUM1Mi4zNjIgNDguMDkgNDguMDUgNTQuNTQxIDQ4LjA1IDYwLjAzOEM0OC4wNSA2MS4yNyA0OC4yMzkgNjIuNTE5IDQ4LjYyNSA2My43NDhMNzEuNjI1IDEzMi43NDhMNi42MjUgMTY1LjM3M0MyLjUgMTY3LjM3MyAwIDE3MS40OTggMCAxNzUuOTk4VjE3NkMwIDE4MC41IDIuNSAxODQuNjI1IDYuNjI1IDE4Ni42MjVMNzEuNzUgMjE5LjEyNUw0OC43NSAyODguMjQ4QzQ4LjMwNiAyODkuNTA3IDQ4LjA5MiAyOTAuODA5IDQ4LjA5MiAyOTIuMUM0OC4wOTIgMjk5LjYzNiA1NC41NDMgMzAzLjk0OCA2MC4wNCAzMDMuOTQ4QzYxLjI3MiAzMDMuOTQ4IDYyLjUyMSAzMDMuNzU5IDYzLjc1IDMwMy4zNzNMMTMyLjc1IDI4MC4zNzNMMTM2Ljc2NiAyODguMzczQzEzOS45NzkgMjgyLjc1NCAxNDMuNzU4IDI3Ny40NDMgMTQ4LjU5IDI3Mi45ODRMMTc1LjY4OSAyNDcuOTY5QzEzNi4wODQgMjQ3Ljc5NyAxMDQgMjE1LjY0NSAxMDQgMTc2VjE3NS45OThIMTAzLjk5OEMxMDMuOTk4IDEzNi4yNDggMTM2LjI0OCAxMDMuOTk4IDE3NS45OTggMTAzLjk5OEgxNzZWMTAzLjk5NkMyMTUuNzUgMTAzLjk5NiAyNDggMTM2LjI0NiAyNDggMTc1Ljk5NlYxNzUuOTk4SDI0OC4wMDJDMjQ4LjAwMiAxNzcuOTcxIDI0Ny41NzggMTc5LjgyNCAyNDcuNDIyIDE4MS43NTZMMjkzLjMxNiAxMzkuMzkxTDI4MC4yNSAxMzIuODcxTDMwMy4yNSA2My43NDhDMzAzLjY5NCA2Mi40ODkgMzAzLjkwOCA2MS4xODcgMzAzLjkwOCA1OS44OTZaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik02MjkuNjk5IDI5Ni41TDU3NS45OSAyNDYuOTIxVjE0NEM1NzUuOTkgMTM1LjE2MiA1NjguODI4IDEyOCA1NTkuOTkgMTI4SDUyNy45OUM1MTkuMTU2IDEyOCA1MTEuOTkyIDEzNS4xNjIgNTExLjk5MiAxNDMuOTk4VjE4Ny44NDdMNDIxLjY5OSAxMDQuNUM0MTUuNTcyIDk4Ljg0MyA0MDcuNzg3IDk2IDQwMCA5NkMzOTkuOTk3IDk2IDM5OS45OTUgOTYgMzk5Ljk5MiA5NkMzOTIuMjA2IDk2IDM4NC40MjIgOTguODQzIDM3OC4yOTMgMTA0LjVMMTcwLjI5MyAyOTYuNUMxNjMuNTk4IDMwMi42NzcgMTYwIDMxMS4yNDIgMTYwIDMyMEMxNjAgMzM3LjU0NCAxNzQuMjExIDM1MiAxOTEuOTk2IDM1MkgyMjMuOTk0VjQ2NEMyMjMuOTk0IDQ5MC40IDI0NS41OTYgNTEyIDI3MS45OTQgNTEySDUyNy45OUM1NTQuMzkxIDUxMiA1NzUuOTkgNDkwLjQgNTc1Ljk5IDQ2NFYzNTJINjA3Ljk5NkM2MjUuODE2IDM1MiA2NDAgMzM3LjUxNyA2NDAgMzIwQzY0MCAzMTEuMjQyIDYzNi4zOTYgMzAyLjY3NyA2MjkuNjk5IDI5Ni41Wk00NDcuOTkyIDM2OEM0NDcuOTkyIDM3Ni44NzUgNDQwLjg2NyAzODQgNDMxLjk5MiAzODRIMzY3Ljk5MkMzNTkuMTE3IDM4NCAzNTEuOTkyIDM3Ni44NzUgMzUxLjk5MiAzNjhWMzA0QzM1MS45OTIgMjk1LjEyNSAzNTkuMTE3IDI4OCAzNjcuOTkyIDI4OEg0MzEuOTkyQzQ0MC44NjcgMjg4IDQ0Ny45OTIgMjk1LjEyNSA0NDcuOTkyIDMwNFYzNjhaICIgY2xhc3M9ImZhLXByaW1hcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function HouseDay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M216 175.996C216 153.871 198.125 135.996 176 135.996V135.998H175.998C153.873 135.998 135.998 153.873 135.998 175.998H136V176C136 198.125 153.875 216 176 216V215.998H176.002C198.127 215.998 216.002 198.123 216.002 175.998H216V175.996ZM303.908 59.896C303.908 52.36 297.457 48.048 291.96 48.048C290.728 48.048 289.479 48.237 288.25 48.623L219.25 71.623L186.625 6.623C184.625 2.498 180.5 -0.002 176 -0.002H175.998C171.498 -0.002 167.373 2.498 165.373 6.623L132.873 71.748L63.75 48.748C62.491 48.304 61.189 48.09 59.898 48.09C52.362 48.09 48.05 54.541 48.05 60.038C48.05 61.27 48.239 62.519 48.625 63.748L71.625 132.748L6.625 165.373C2.5 167.373 0 171.498 0 175.998V176C0 180.5 2.5 184.625 6.625 186.625L71.75 219.125L48.75 288.248C48.306 289.507 48.092 290.809 48.092 292.1C48.092 299.636 54.543 303.948 60.04 303.948C61.272 303.948 62.521 303.759 63.75 303.373L132.75 280.373L136.766 288.373C139.979 282.754 143.758 277.443 148.59 272.984L175.689 247.969C136.084 247.797 104 215.645 104 176V175.998H103.998C103.998 136.248 136.248 103.998 175.998 103.998H176V103.996C215.75 103.996 248 136.246 248 175.996V175.998H248.002C248.002 177.971 247.578 179.824 247.422 181.756L293.316 139.391L280.25 132.871L303.25 63.748C303.694 62.489 303.908 61.187 303.908 59.896Z " />
            <path d="M629.699 296.5L575.99 246.921V144C575.99 135.162 568.828 128 559.99 128H527.99C519.156 128 511.992 135.162 511.992 143.998V187.847L421.699 104.5C415.572 98.843 407.787 96 400 96C399.997 96 399.995 96 399.992 96C392.206 96 384.422 98.843 378.293 104.5L170.293 296.5C163.598 302.677 160 311.242 160 320C160 337.544 174.211 352 191.996 352H223.994V464C223.994 490.4 245.596 512 271.994 512H527.99C554.391 512 575.99 490.4 575.99 464V352H607.996C625.816 352 640 337.517 640 320C640 311.242 636.396 302.677 629.699 296.5ZM447.992 368C447.992 376.875 440.867 384 431.992 384H367.992C359.117 384 351.992 376.875 351.992 368V304C351.992 295.125 359.117 288 367.992 288H431.992C440.867 288 447.992 295.125 447.992 304V368Z " />
        </Icon>
    </>
}