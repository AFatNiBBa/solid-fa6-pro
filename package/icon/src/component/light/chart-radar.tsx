
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-radar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-radar?s=light chart-radar}
 * @preview ![chart-radar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjcyQzMxOS4zNDggMjcyIDMxOC43NDIgMjcyLjE2OCAzMTguMDk2IDI3Mi4xOTNMMjg3LjU2MSAxOTUuODU1QzI5Ny41NTEgMTg3LjA0OSAzMDQgMTc0LjMxMiAzMDQgMTYwQzMwNCAxMzMuNTYyIDI4Mi40MzggMTEyIDI1NiAxMTJTMjA4IDEzMy41NjIgMjA4IDE2MEMyMDggMTY5LjgxMSAyMTAuOTkyIDE3OC45MzYgMjE2LjA3OCAxODYuNTUxTDE3NC4xOTcgMjQyLjM5M0MxNjkuNjggMjQwLjk3OSAxNjQuOTczIDI0MCAxNjAgMjQwQzEzMy41NjMgMjQwIDExMiAyNjEuNTYyIDExMiAyODhTMTMzLjU2MyAzMzYgMTYwIDMzNkMxNzcuNDUxIDMzNiAxOTIuNjI1IDMyNi41MDggMjAxLjAyNyAzMTIuNTE4TDI3Mi42OTUgMzI2Ljg1MkMyNzYuMDYzIDM1MC4wMzcgMjk1LjkwOCAzNjggMzIwIDM2OEMzNDYuNDM4IDM2OCAzNjggMzQ2LjQzOCAzNjggMzIwUzM0Ni40MzggMjcyIDMyMCAyNzJaTTE2MCAzMDRDMTUxLjE3OCAzMDQgMTQ0IDI5Ni44MjIgMTQ0IDI4OFMxNTEuMTc4IDI3MiAxNjAgMjcyUzE3NiAyNzkuMTc4IDE3NiAyODhTMTY4LjgyMiAzMDQgMTYwIDMwNFpNMjU2IDE0NEMyNjQuODIyIDE0NCAyNzIgMTUxLjE3OCAyNzIgMTYwUzI2NC44MjIgMTc2IDI1NiAxNzZTMjQwIDE2OC44MjIgMjQwIDE2MFMyNDcuMTc4IDE0NCAyNTYgMTQ0Wk0yNzguOTc3IDI5NS40NzVMMjA3LjMwNSAyODEuMTVDMjA2LjI2MiAyNzMuOTY1IDIwMy43OTEgMjY3LjI0MiAxOTkuOTIgMjYxLjQ0NUwyNDEuNzk5IDIwNS42MDRDMjQ2LjMxOCAyMDcuMDIgMjUxLjAyNSAyMDggMjU2IDIwOEMyNTYuNjQ4IDIwOCAyNTcuMjUyIDIwNy44MzQgMjU3Ljg5NSAyMDcuODA5TDI4OC40MzggMjg0LjE0NUMyODQuNzIzIDI4Ny40MiAyODEuNTQxIDI5MS4yMDcgMjc4Ljk3NyAyOTUuNDc1Wk0zMjAgMzM2QzMxMS4xNzggMzM2IDMwNCAzMjguODIyIDMwNCAzMjBTMzExLjE3OCAzMDQgMzIwIDMwNFMzMzYgMzExLjE3OCAzMzYgMzIwUzMyOC44MjIgMzM2IDMyMCAzMzZaTTUwNS44MjQgMjMzLjM2NUw0MDAuNDM3IDU0LjE2NkMzOTIuMzIyIDQwLjUxNiAzNzcuNTAyIDMyIDM2MS4zODcgMzJIMTUwLjYxM0MxMzQuNDk4IDMyIDExOS42NzggNDAuNTE2IDExMS41NjMgNTQuMTY2TDYuMTc2IDIzMy4zNjVDLTIuMDU5IDI0Ny4zNjUgLTIuMDU5IDI2NC42MzMgNi4xNzYgMjc4LjYzM0wxMTEuNTYzIDQ1Ny44MzJDMTE5LjY3OCA0NzEuNDgyIDEzNC40OTggNDgwIDE1MC42MTMgNDgwSDM2MS4zODdDMzc3LjUwMiA0ODAgMzkyLjMyMiA0NzEuNDgyIDQwMC40MzcgNDU3LjgzMkw1MDUuODI0IDI3OC42MzNDNTE0LjA1OSAyNjQuNjMzIDUxNC4wNTkgMjQ3LjM2NSA1MDUuODI0IDIzMy4zNjVaTTQ3OC4yNCAyNjIuNDFMMzcyLjkzMiA0NDEuNDc5QzM3MC41NDEgNDQ1LjUwMiAzNjYuMTE3IDQ0OCAzNjEuMzg3IDQ0OEgxNTAuNjEzQzE0NS44ODUgNDQ4IDE0MS40NjEgNDQ1LjUwMiAxMzkuMTQ2IDQ0MS42MDlMMzMuNzYgMjYyLjQxQzMxLjM5OCAyNTguMzk1IDMxLjM5OCAyNTMuNjAyIDMzLjc2IDI0OS41ODZMMTM5LjA2OCA3MC41MThDMTQxLjQ1OSA2Ni40OTggMTQ1Ljg4MyA2NCAxNTAuNjEzIDY0SDM2MS4zODdDMzY2LjExNyA2NCAzNzAuNTQxIDY2LjQ5OCAzNzIuODU0IDcwLjM4N0w0NzguMjQyIDI0OS41ODhDNDgwLjYwNCAyNTMuNjAyIDQ4MC42MDQgMjU4LjM5NSA0NzguMjQgMjYyLjQxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartRadar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320 272C319.348 272 318.742 272.168 318.096 272.193L287.561 195.855C297.551 187.049 304 174.312 304 160C304 133.562 282.438 112 256 112S208 133.562 208 160C208 169.811 210.992 178.936 216.078 186.551L174.197 242.393C169.68 240.979 164.973 240 160 240C133.563 240 112 261.562 112 288S133.563 336 160 336C177.451 336 192.625 326.508 201.027 312.518L272.695 326.852C276.063 350.037 295.908 368 320 368C346.438 368 368 346.438 368 320S346.438 272 320 272ZM160 304C151.178 304 144 296.822 144 288S151.178 272 160 272S176 279.178 176 288S168.822 304 160 304ZM256 144C264.822 144 272 151.178 272 160S264.822 176 256 176S240 168.822 240 160S247.178 144 256 144ZM278.977 295.475L207.305 281.15C206.262 273.965 203.791 267.242 199.92 261.445L241.799 205.604C246.318 207.02 251.025 208 256 208C256.648 208 257.252 207.834 257.895 207.809L288.438 284.145C284.723 287.42 281.541 291.207 278.977 295.475ZM320 336C311.178 336 304 328.822 304 320S311.178 304 320 304S336 311.178 336 320S328.822 336 320 336ZM505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM478.24 262.41L372.932 441.479C370.541 445.502 366.117 448 361.387 448H150.613C145.885 448 141.461 445.502 139.146 441.609L33.76 262.41C31.398 258.395 31.398 253.602 33.76 249.586L139.068 70.518C141.459 66.498 145.883 64 150.613 64H361.387C366.117 64 370.541 66.498 372.854 70.387L478.242 249.588C480.604 253.602 480.604 258.395 478.24 262.41Z" />
        </Icon>
    </>
}