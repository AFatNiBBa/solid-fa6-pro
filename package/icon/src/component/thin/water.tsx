
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `water` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/water?s=thin water}
 * @preview ![water](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04LjU4NyAxMjcuNzAzQzM5LjgwNyAxMjUuMzgzIDY5Ljg3IDExMC4yMTUgOTYuMDI3IDgzLjY2NEMxMjQuOTM0IDExMi43MTEgMTU4LjAyOCAxMjggMTkyLjIxNiAxMjhIMTkyLjU5MUMyMjYuNzE3IDEyNy44OTEgMjU5LjU2MiAxMTIuNjAyIDI4OC4wMzEgODMuNjhDMzE2LjkzOCAxMTIuNzExIDM1MC4wMzMgMTI4IDM4NC4yMjEgMTI4SDM4NC41OTZDNDE4LjcyMiAxMjcuODkxIDQ1MS41NjYgMTEyLjYwMiA0ODAuMDM2IDgzLjY4QzUwNi4zMTcgMTEwLjA3NCA1MzYuMzQ5IDEyNS4yMjcgNTY3LjM4MSAxMjcuNjQxQzU3Mi41MzggMTI4LjI4MSA1NzUuNjMyIDEyNC42NTYgNTc1Ljk3NSAxMjAuMjY2QzU3Ni4zMTkgMTE1Ljg0NCA1NzMuMDM4IDExMS45NzMgNTY4LjYzMSAxMTEuNjQxQzUzOS4zNDkgMTA5LjM1MiA1MTAuNzU1IDkzLjc4MSA0ODUuOTExIDY2LjYwMkM0ODQuMzc5IDY0Ljk0MSA0ODIuMjU0IDY0IDQ4MC4wMDQgNjRINDc5Ljk3M0M0NzcuNzIzIDY0IDQ3NS41OTggNjQuOTU3IDQ3NC4wNjcgNjYuNjMzQzQ0Ny40MSA5Ni4xNjQgNDE2LjQ0IDExMS44MjggMzg0LjU2NSAxMTEuOTQxSDM4NC4yMjFDMzUyLjI4MyAxMTEuOTQxIDMyMS4wMzIgOTYuMjU4IDI5My45MDYgNjYuNjAyQzI5Mi4zNzUgNjQuOTQxIDI5MC4yNSA2NCAyODggNjRIMjg3Ljk2OUMyODUuNzE5IDY0IDI4My41OTQgNjQuOTU3IDI4Mi4wNjIgNjYuNjMzQzI1NS40MDUgOTYuMTY0IDIyNC40MzYgMTExLjgyOCAxOTIuNTYgMTExLjk0MUgxOTIuMjE2QzE2MC4yNzggMTExLjk0MSAxMjkuMDI3IDk2LjI1OCAxMDEuOTAyIDY2LjYwMkMxMDAuMzcxIDY0Ljk0MSA5OC4yNDYgNjQgOTUuOTk1IDY0SDk1Ljk2NEM5My43MTQgNjQgOTEuNTg5IDY0Ljk1NyA5MC4wNTggNjYuNjMzQzY1LjQwMSA5My45MjIgMzYuODA3IDEwOS41MDggNy40IDExMS42NzJDMi45OTMgMTEyLjAwNCAtMC4zMTkgMTE1Ljg1OSAwLjAyNSAxMjAuMjgxQzAuMzY4IDEyNC42OTEgMy4zNjggMTI3LjgyOCA4LjU4NyAxMjcuNzAzWk01NjguNjMxIDI3MS42NDFDNTM5LjM0OSAyNjkuMzUyIDUxMC43NTUgMjUzLjc4MSA0ODUuOTExIDIyNi42MDJDNDg0LjM3OSAyMjQuOTQxIDQ4Mi4yNTQgMjI0IDQ4MC4wMDQgMjI0SDQ3OS45NzNDNDc3LjcyMyAyMjQgNDc1LjU5OCAyMjQuOTU3IDQ3NC4wNjcgMjI2LjYzM0M0NDcuNDEgMjU2LjE2NCA0MTYuNDQgMjcxLjgyOCAzODQuNTY1IDI3MS45NDFIMzg0LjIyMUMzNTIuMjgzIDI3MS45NDEgMzIxLjAzMiAyNTYuMjU4IDI5My45MDYgMjI2LjYwMkMyOTIuMzc1IDIyNC45NDEgMjkwLjI1IDIyNCAyODggMjI0SDI4Ny45NjlDMjg1LjcxOSAyMjQgMjgzLjU5NCAyMjQuOTU3IDI4Mi4wNjIgMjI2LjYzM0MyNTUuNDA1IDI1Ni4xNjQgMjI0LjQzNiAyNzEuODI4IDE5Mi41NiAyNzEuOTQxSDE5Mi4yMTZDMTYwLjI3OCAyNzEuOTQxIDEyOS4wMjcgMjU2LjI1OCAxMDEuOTAyIDIyNi42MDJDMTAwLjM3MSAyMjQuOTQxIDk4LjI0NiAyMjQgOTUuOTk1IDIyNEg5NS45NjRDOTMuNzE0IDIyNCA5MS41ODkgMjI0Ljk1NyA5MC4wNTggMjI2LjYzM0M2NS40MDEgMjUzLjkyMiAzNi44MDcgMjY5LjUwOCA3LjQgMjcxLjY3MkMyLjk5MyAyNzIuMDA0IC0wLjMxOSAyNzUuODU5IDAuMDI1IDI4MC4yODFDMC4zNjggMjg0LjY5MSAzLjM2OCAyODcuODI4IDguNTg3IDI4Ny43MDNDMzkuODA3IDI4NS4zODMgNjkuODcgMjcwLjIxNSA5Ni4wMjcgMjQzLjY2NEMxMjQuOTM0IDI3Mi43MTEgMTU4LjAyOCAyODggMTkyLjIxNiAyODhIMTkyLjU5MUMyMjYuNzE3IDI4Ny44OTEgMjU5LjU2MiAyNzIuNjAyIDI4OC4wMzEgMjQzLjY4QzMxNi45MzggMjcyLjcxMSAzNTAuMDMzIDI4OCAzODQuMjIxIDI4OEgzODQuNTk2QzQxOC43MjIgMjg3Ljg5MSA0NTEuNTY2IDI3Mi42MDIgNDgwLjAzNiAyNDMuNjhDNTA2LjMxNyAyNzAuMDc0IDUzNi4zNDkgMjg1LjIyNyA1NjcuMzgxIDI4Ny42NDFDNTcyLjUzOCAyODguMjgxIDU3NS42MzIgMjg0LjY1NiA1NzUuOTc1IDI4MC4yNjZDNTc2LjMxOSAyNzUuODQ0IDU3My4wMzggMjcxLjk3MyA1NjguNjMxIDI3MS42NDFaTTU2OC42MzEgNDMxLjY0MUM1MzkuMzQ5IDQyOS4zNTIgNTEwLjc1NSA0MTMuNzgxIDQ4NS45MTEgMzg2LjYwMkM0ODQuMzc5IDM4NC45NDEgNDgyLjI1NCAzODQgNDgwLjAwNCAzODRINDc5Ljk3M0M0NzcuNzIzIDM4NCA0NzUuNTk4IDM4NC45NTcgNDc0LjA2NyAzODYuNjMzQzQ0Ny40MSA0MTYuMTY0IDQxNi40NCA0MzEuODI4IDM4NC41NjUgNDMxLjk0MUgzODQuMjIxQzM1Mi4yODMgNDMxLjk0MSAzMjEuMDMyIDQxNi4yNTggMjkzLjkwNiAzODYuNjAyQzI5Mi4zNzUgMzg0Ljk0MSAyOTAuMjUgMzg0IDI4OCAzODRIMjg3Ljk2OUMyODUuNzE5IDM4NCAyODMuNTk0IDM4NC45NTcgMjgyLjA2MiAzODYuNjMzQzI1NS40MDUgNDE2LjE2NCAyMjQuNDM2IDQzMS44MjggMTkyLjU2IDQzMS45NDFIMTkyLjIxNkMxNjAuMjc4IDQzMS45NDEgMTI5LjAyNyA0MTYuMjU4IDEwMS45MDIgMzg2LjYwMkMxMDAuMzcxIDM4NC45NDEgOTguMjQ2IDM4NCA5NS45OTUgMzg0SDk1Ljk2NEM5My43MTQgMzg0IDkxLjU4OSAzODQuOTU3IDkwLjA1OCAzODYuNjMzQzY1LjQwMSA0MTMuOTIyIDM2LjgwNyA0MjkuNTA4IDcuNCA0MzEuNjcyQzIuOTkzIDQzMi4wMDQgLTAuMzE5IDQzNS44NTkgMC4wMjUgNDQwLjI4MUMwLjM2OCA0NDQuNjkxIDMuMzY4IDQ0Ny44MjggOC41ODcgNDQ3LjcwM0MzOS44MDcgNDQ1LjM4MyA2OS44NyA0MzAuMjE1IDk2LjAyNyA0MDMuNjY0QzEyNC45MzQgNDMyLjcxMSAxNTguMDI4IDQ0OCAxOTIuMjE2IDQ0OEgxOTIuNTkxQzIyNi43MTcgNDQ3Ljg5MSAyNTkuNTYyIDQzMi42MDIgMjg4LjAzMSA0MDMuNjhDMzE2LjkzOCA0MzIuNzExIDM1MC4wMzMgNDQ4IDM4NC4yMjEgNDQ4SDM4NC41OTZDNDE4LjcyMiA0NDcuODkxIDQ1MS41NjYgNDMyLjYwMiA0ODAuMDM2IDQwMy42OEM1MDYuMzE3IDQzMC4wNzQgNTM2LjM0OSA0NDUuMjI3IDU2Ny4zODEgNDQ3LjY0MUM1NzIuNTM4IDQ0OC4yODEgNTc1LjYzMiA0NDQuNjU2IDU3NS45NzUgNDQwLjI2NkM1NzYuMzE5IDQzNS44NDQgNTczLjAzOCA0MzEuOTczIDU2OC42MzEgNDMxLjY0MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Water(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M8.587 127.703C39.807 125.383 69.87 110.215 96.027 83.664C124.934 112.711 158.028 128 192.216 128H192.591C226.717 127.891 259.562 112.602 288.031 83.68C316.938 112.711 350.033 128 384.221 128H384.596C418.722 127.891 451.566 112.602 480.036 83.68C506.317 110.074 536.349 125.227 567.381 127.641C572.538 128.281 575.632 124.656 575.975 120.266C576.319 115.844 573.038 111.973 568.631 111.641C539.349 109.352 510.755 93.781 485.911 66.602C484.379 64.941 482.254 64 480.004 64H479.973C477.723 64 475.598 64.957 474.067 66.633C447.41 96.164 416.44 111.828 384.565 111.941H384.221C352.283 111.941 321.032 96.258 293.906 66.602C292.375 64.941 290.25 64 288 64H287.969C285.719 64 283.594 64.957 282.062 66.633C255.405 96.164 224.436 111.828 192.56 111.941H192.216C160.278 111.941 129.027 96.258 101.902 66.602C100.371 64.941 98.246 64 95.995 64H95.964C93.714 64 91.589 64.957 90.058 66.633C65.401 93.922 36.807 109.508 7.4 111.672C2.993 112.004 -0.319 115.859 0.025 120.281C0.368 124.691 3.368 127.828 8.587 127.703ZM568.631 271.641C539.349 269.352 510.755 253.781 485.911 226.602C484.379 224.941 482.254 224 480.004 224H479.973C477.723 224 475.598 224.957 474.067 226.633C447.41 256.164 416.44 271.828 384.565 271.941H384.221C352.283 271.941 321.032 256.258 293.906 226.602C292.375 224.941 290.25 224 288 224H287.969C285.719 224 283.594 224.957 282.062 226.633C255.405 256.164 224.436 271.828 192.56 271.941H192.216C160.278 271.941 129.027 256.258 101.902 226.602C100.371 224.941 98.246 224 95.995 224H95.964C93.714 224 91.589 224.957 90.058 226.633C65.401 253.922 36.807 269.508 7.4 271.672C2.993 272.004 -0.319 275.859 0.025 280.281C0.368 284.691 3.368 287.828 8.587 287.703C39.807 285.383 69.87 270.215 96.027 243.664C124.934 272.711 158.028 288 192.216 288H192.591C226.717 287.891 259.562 272.602 288.031 243.68C316.938 272.711 350.033 288 384.221 288H384.596C418.722 287.891 451.566 272.602 480.036 243.68C506.317 270.074 536.349 285.227 567.381 287.641C572.538 288.281 575.632 284.656 575.975 280.266C576.319 275.844 573.038 271.973 568.631 271.641ZM568.631 431.641C539.349 429.352 510.755 413.781 485.911 386.602C484.379 384.941 482.254 384 480.004 384H479.973C477.723 384 475.598 384.957 474.067 386.633C447.41 416.164 416.44 431.828 384.565 431.941H384.221C352.283 431.941 321.032 416.258 293.906 386.602C292.375 384.941 290.25 384 288 384H287.969C285.719 384 283.594 384.957 282.062 386.633C255.405 416.164 224.436 431.828 192.56 431.941H192.216C160.278 431.941 129.027 416.258 101.902 386.602C100.371 384.941 98.246 384 95.995 384H95.964C93.714 384 91.589 384.957 90.058 386.633C65.401 413.922 36.807 429.508 7.4 431.672C2.993 432.004 -0.319 435.859 0.025 440.281C0.368 444.691 3.368 447.828 8.587 447.703C39.807 445.383 69.87 430.215 96.027 403.664C124.934 432.711 158.028 448 192.216 448H192.591C226.717 447.891 259.562 432.602 288.031 403.68C316.938 432.711 350.033 448 384.221 448H384.596C418.722 447.891 451.566 432.602 480.036 403.68C506.317 430.074 536.349 445.227 567.381 447.641C572.538 448.281 575.632 444.656 575.975 440.266C576.319 435.844 573.038 431.973 568.631 431.641Z" />
        </Icon>
    </>
}