
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=duotone sort}
 * @preview ![sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI5Mi4zNDIgMjg4SDI3LjY1OEMzLjA1NSAyODggLTkuMjI5IDMxNy43NzMgOC4xMTkgMzM1LjEyMUwxNDAuNTgyIDQ3MS44OTFDMTQ1LjkzNCA0NzcuMjk3IDE1Mi45NzMgNDgwIDE2MC4wMjcgNDgwQzE2Ny4wOCA0ODAgMTc0LjE0NiA0NzcuMjk3IDE3OS41NTMgNDcxLjg5MUwzMTEuODgxIDMzNS4xMjFDMzI5LjIyOSAzMTcuNzczIDMxNi45NDUgMjg4IDI5Mi4zNDIgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNy42NTggMjI0SDI5Mi4zNDJDMzE2Ljk0NSAyMjQgMzI5LjIyOSAxOTQuMjI1IDMxMS44ODEgMTc2Ljg3N0wxNzkuNTUzIDQwLjEwN0MxNzQuMTQ2IDM0LjcwMSAxNjcuMDggMzIgMTYwLjAyNyAzMkMxNTIuOTczIDMyIDE0NS45MzQgMzQuNzAxIDE0MC41ODIgNDAuMTA3TDguMTE5IDE3Ni44NzdDLTkuMjI5IDE5NC4yMjUgMy4wNTUgMjI0IDI3LjY1OCAyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M292.342 288H27.658C3.055 288 -9.229 317.773 8.119 335.121L140.582 471.891C145.934 477.297 152.973 480 160.027 480C167.08 480 174.146 477.297 179.553 471.891L311.881 335.121C329.229 317.773 316.945 288 292.342 288Z" />
            <path d="M27.658 224H292.342C316.945 224 329.229 194.225 311.881 176.877L179.553 40.107C174.146 34.701 167.08 32 160.027 32C152.973 32 145.934 34.701 140.582 40.107L8.119 176.877C-9.229 194.225 3.055 224 27.658 224Z" />
        </Icon>
    </>
}